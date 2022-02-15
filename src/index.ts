import * as tfe from "@cdktf/provider-tfe";
import {
  App,
  RemoteBackend,
  TerraformStack,
  insideTfExpression,
  IResolvable,
} from "cdktf";
import { Construct, IConstruct } from "constructs";

export interface WorkspaceConfig {
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#agent_pool_id Workspace#agent_pool_id}.
   *
   * @stability stable
   */
  readonly agentPoolId?: string;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.
   *
   * @stability stable
   */
  readonly allowDestroyPlan?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#auto_apply Workspace#auto_apply}.
   *
   * @stability stable
   */
  readonly autoApply?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#description Workspace#description}.
   *
   * @stability stable
   */
  readonly description?: string;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#execution_mode Workspace#execution_mode}.
   *
   * @stability stable
   */
  readonly executionMode?: string;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.
   *
   * @stability stable
   */
  readonly fileTriggersEnabled?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#global_remote_state Workspace#global_remote_state}.
   *
   * @stability stable
   */
  readonly globalRemoteState?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#queue_all_runs Workspace#queue_all_runs}.
   *
   * @stability stable
   */
  readonly queueAllRuns?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.
   *
   * @stability stable
   */
  readonly remoteStateConsumerIds?: string[];
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#speculative_enabled Workspace#speculative_enabled}.
   *
   * @stability stable
   */
  readonly speculativeEnabled?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ssh_key_id Workspace#ssh_key_id}.
   *
   * @stability stable
   */
  readonly sshKeyId?: string;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.
   *
   * @stability stable
   */
  readonly structuredRunOutputEnabled?: boolean | IResolvable;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#tag_names Workspace#tag_names}.
   *
   * @stability stable
   */
  readonly tagNames?: string[];
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#terraform_version Workspace#terraform_version}.
   *
   * @stability stable
   */
  readonly terraformVersion?: string;
  /**
   * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_prefixes Workspace#trigger_prefixes}.
   *
   * @stability stable
   */
  readonly triggerPrefixes?: string[];
}

export interface RemoteBackendOptionsWorkspace {
  readonly name: string;
}

export interface RemoteBackendOptions {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  readonly workspaces: RemoteBackendOptionsWorkspace;
}

const MULTI_STACK_BASE_SYMBOL = Symbol(`multi-stack-tfe-base`);
const MULTI_STACK_STACK_SYMBOL = Symbol(`multi-stack-tfe-stack`);

export interface BaseStackOptions {
  readonly hostname?: string;
  readonly token?: string;
  readonly sslSkipVerify?: boolean;
  readonly defaultWorkspaceConfig?: WorkspaceConfig;
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

  public tfeProvider: tfe.TfeProvider;
  public organization: tfe.DataTfeOrganization;

  constructor(
    scope: Construct,
    private organizationName: string,
    private prefix: string,
    private options: BaseStackOptions = {}
  ) {
    super(scope, "base");
    Object.defineProperty(this, MULTI_STACK_BASE_SYMBOL, { value: true });
    this.tfeProvider = new tfe.TfeProvider(this, "tfe", {
      hostname: options.hostname,
      token: options.token,
      sslSkipVerify: options.sslSkipVerify,
    });

    new RemoteBackend(this, this.getRemoteBackendOptions("base"));

    this.organization = new tfe.DataTfeOrganization(this, "organization", {
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

  public bootstrapWorkspace(
    stackName: string,
    stackConfig: WorkspaceConfig = {}
  ) {
    const config = {
      ...(this.options.defaultWorkspaceConfig || {}),
      ...stackConfig,
    };
    return new tfe.Workspace(this, `tfe-multi-stack-workspace-${stackName}`, {
      ...config,
      name: this.getWorkspaceName(stackName),
      organization: this.organization.name,
      tagNames: [this.prefix, ...(config.tagNames || [])],
      remoteStateConsumerIds: [...(config.remoteStateConsumerIds || [])], // this is filled on the fly through addDependency calls
    });
  }
}

export class Stack extends TerraformStack {
  public static isMultiStackStack(x: any): x is Stack {
    return x !== null && typeof x === "object" && MULTI_STACK_STACK_SYMBOL in x;
  }

  public workspace: tfe.Workspace;
  constructor(scope: Construct, stackName: string, config?: WorkspaceConfig) {
    super(scope, stackName);
    Object.defineProperty(this, MULTI_STACK_STACK_SYMBOL, { value: true });

    const baseStack = BaseStack.baseStackOf(this);
    this.workspace = baseStack.bootstrapWorkspace(stackName, config);

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
