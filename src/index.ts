import * as tfe from "@cdktf/provider-tfe";
import { TfeProvider } from "@cdktf/provider-tfe";
import { App, RemoteBackend, TerraformStack, RemoteBackendProps } from "cdktf";
import { Construct, IConstruct } from "constructs";

const MULTI_STACK_BASE_SYMBOL = Symbol(`multi-stack-tfe-base`);
const MULTI_STACK_STACK_SYMBOL = Symbol(`multi-stack-tfe-stack`);

export class BaseStack extends TerraformStack {
  public static isBaseStack(x: any): x is BaseStack {
    return x !== null && typeof x === "object" && MULTI_STACK_BASE_SYMBOL in x;
  }

  public static of(construct: IConstruct): BaseStack {
    const app = App.of(construct);

    const base = app.node.children.find(BaseStack.isBaseStack);
    if (!base) {
      throw new Error(
        `No BaseStack for multi-stack app could be identified for the construct at path '${construct.node.path}'. The base stack needs to have the same app as the scope as this construct.`
      );
    }

    return base;
  }

  public readonly remoteBackendOptions: Omit<RemoteBackendProps, "workspaces">;
  public tfeProvider: TfeProvider;

  constructor(
    scope: Construct,
    private organization: string,
    private prefix: string,
    options: {
      hostname?: string;
      token?: string;
      sslSkipVerify?: boolean;
    } = {}
  ) {
    super(scope, "base");
    Object.defineProperty(this, MULTI_STACK_BASE_SYMBOL, { value: true });
    this.tfeProvider = new TfeProvider(this, "tfe", {
      hostname: options.hostname,
      token: options.token,
      sslSkipVerify: options.sslSkipVerify,
    });

    this.remoteBackendOptions = {
      organization,
      // optional
      hostname: options.hostname,
      token: options.token,
    };

    new RemoteBackend(this, {
      ...this.remoteBackendOptions,
      workspaces: {
        name: `${this.prefix}-base`,
      },
    });

    // this.workspace = new DataTfeWorkspace(this, "this", {
    //   provider: this.tfeProvider,

    //   name: `${prefix}-base`,
    //   organization,
    // });
  }

  public bootstrapWorkspace(name: string) {
    const workspaceName = `${this.prefix}-${name}`;
    return new tfe.Workspace(this, `tfe-multi-stack-workspace-${name}`, {
      name: workspaceName,
      organization: this.organization,
      tagNames: [this.prefix],
      remoteStateConsumerIds: [], // this is filled on the fly through addDependency calls
    });
  }
}

export class Stack extends TerraformStack {
  public static isMultiStackStack(x: any): x is Stack {
    return x !== null && typeof x === "object" && MULTI_STACK_STACK_SYMBOL in x;
  }

  public workspace: tfe.Workspace;
  constructor(scope: Construct, stackName: string) {
    super(scope, stackName);
    Object.defineProperty(this, MULTI_STACK_STACK_SYMBOL, { value: true });

    const baseStack = BaseStack.of(this);
    this.workspace = baseStack.bootstrapWorkspace(stackName);

    new RemoteBackend(this, {
      ...baseStack.remoteBackendOptions,
      workspaces: {
        name: this.workspace.nameInput, // We don't want a cross stack reference to be created, we just need the value
      },
    });
  }

  addDependency(dependency: TerraformStack): void {
    super.addDependency(dependency);

    if (Stack.isMultiStackStack(dependency)) {
      dependency.workspace.remoteStateConsumerIdsInput?.push(this.workspace.id);
      // dependency.workspace.dependsOn = [
      //   ...(dependency.workspace.dependsOn ?? []),
      //   this.workspace,
      // ];
    }
  }
}
