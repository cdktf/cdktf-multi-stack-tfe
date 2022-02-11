import * as tfe from "@cdktf/provider-tfe";
import { DataTfeOrganization, TfeProvider } from "@cdktf/provider-tfe";
import { App, RemoteBackend, TerraformStack, insideTfExpression } from "cdktf";
import { Construct, IConstruct } from "constructs";

const MULTI_STACK_BASE_SYMBOL = Symbol(`multi-stack-tfe-base`);
const MULTI_STACK_STACK_SYMBOL = Symbol(`multi-stack-tfe-stack`);

export interface BaseStackOptions {
  readonly hostname?: string;
  readonly token?: string;
  readonly sslSkipVerify?: boolean;
}

// Omit<RemoteBackendProps, "workspaces">
export interface RemoteBackendOptions {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  readonly workspaces: { name: string };
}

export class BaseStack extends TerraformStack {
  public static isBaseStack(x: any): x is BaseStack {
    return x !== null && typeof x === "object" && MULTI_STACK_BASE_SYMBOL in x;
  }

  public static baseStackOf(construct: IConstruct): BaseStack {
    const app = App.of(construct);

    const base = app.node.children.find(BaseStack.isBaseStack);
    if (!base) {
      throw new Error(
        `No BaseStack for multi-stack app could be identified for the construct at path '${construct.node.path}'. The base stack needs to have the same app as the scope as this construct.`
      );
    }

    return base;
  }

  public tfeProvider: TfeProvider;
  public organization: DataTfeOrganization;

  constructor(
    scope: Construct,
    private organizationName: string,
    private prefix: string,
    private options: BaseStackOptions = {}
  ) {
    super(scope, "base");
    Object.defineProperty(this, MULTI_STACK_BASE_SYMBOL, { value: true });
    this.tfeProvider = new TfeProvider(this, "tfe", {
      hostname: options.hostname,
      token: options.token,
      sslSkipVerify: options.sslSkipVerify,
    });

    new RemoteBackend(this, this.getRemoteBackendOptions("base"));

    this.organization = new DataTfeOrganization(this, "organization", {
      name: organizationName,
    });
  }

  public getRemoteBackendOptions(stackName: string): RemoteBackendOptions {
    return {
      workspaces: {
        name: this.getWorkspaceName(stackName),
      },
      organization: this.organizationName,
      // optional
      hostname: this.options.hostname,
      token: this.options.token,
    };
  }

  /**
   * If you want to have more control over the workspace name, you can override this method.
   */
  public getWorkspaceName(stackName: string): string {
    return `${this.prefix}-${stackName}`;
  }

  public bootstrapWorkspace(stackName: string) {
    return new tfe.Workspace(this, `tfe-multi-stack-workspace-${stackName}`, {
      name: this.getWorkspaceName(stackName),
      organization: this.organization.name,
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

    const baseStack = BaseStack.baseStackOf(this);
    this.workspace = baseStack.bootstrapWorkspace(stackName);

    new RemoteBackend(this, baseStack.getRemoteBackendOptions(stackName));
  }

  addDependency(dependency: TerraformStack): void {
    if (
      !this.dependencies.includes(dependency) &&
      Stack.isMultiStackStack(dependency)
    ) {
      dependency.workspace.remoteStateConsumerIdsInput?.push(this.workspace.id);

      const currentDependencies: string[] =
        dependency.workspace.dependsOn ?? [];
      currentDependencies.push(insideTfExpression(this.workspace.fqn));

      // This is not working as the result is wrapped in a terraform expression where it's not allowed to
      dependency.workspace.dependsOn = currentDependencies;
    }

    super.addDependency(dependency);
  }
}
