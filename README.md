# cdktf-multi-stack-tfe

Setting up Terraform Cloud / Terraform Enterprise workspaces can be tiring when dealing with CDK for Terraform applications spanning multiple stacks and therefore workspaces. This library aims to automate this.

## Usage

You need to create the initial workspace yourself, in this case `my-app-base`.

```ts
import * as cdktf from "cdktf";
import Construct from "constructs";
import { BaseStack, Stack, Variable } from "cdktf-multi-stack-tfe";

// We need to have an already created "base" TFE workspace as a basis.
// It will store the TFE workspace configuration and state for all stacks.
// As it creates all TFE workspaces, it's required to be created first (and as a result will scaffold out all the required workspaces).
class MyAppBaseStack extends BaseStack {
  // The name is set to my-app-base
  constructor(scope: Construct) {
    // This will configure the remote backend to use my-company/my-app-base as a workspace
    // my-company is the Terraform organization
    // my-app is the prefix to use for all workspaces
    super(scope, "my-company", "my-app", {
      hostname: "app.terraform.io", // can be set to configure a different Terraform Cloud hostname, e.g. for privately hosted Terraform Enterprise
      token: "my-token", // can be set to configure a token to use
    });

    // You can do additional things in this stack as well
  }
}

class VpcStack extends Stack {
  public vpcId: string

  // This stack will depend on the base stack and it
  // will use the my-company/my-app-$stackName workspace as a backend
  constructor(scope: Construct, stackName: string) {
    super(scope, stackName);

    // Setup an VPC, etc.

    this.vpcId = ....
  }
}

class WebStack extends Stack {
  constructor(scope: Construct, stackName: string, vpcId: string) {
    super(scope, stackName);

    // This expects a TFC variable called "password" in your base stack and
    // will create a variable called "password" in this stack. You can use
    // password.value to get the value as you would do with TerraformVariable.
    const password = new Variable(this, "password", {
      type: "string",
      sensitive: true
    });


    // Setup your webapp using the vpcId
  }
}

const app = new cdktf.App();
new MyAppBaseStack(app); // the stack name is "base"

// This cross-stack reference will lead to permissions being set up so that
// the staging-web workspace can access the staging-vpc workspace.
const vpc = new VpcStack(app, "staging-vpc"); // the stack name is "staging-vpc"
new Web(app, "staging-web", vpc.vpcId); // the stack name is "staging-web"

const prodVpc = new VpcStack(app, "production-vpc");
new Web(app, "production-web", prodVpc.vpcId);

app.synth();
```

### Configuration

#### Workspace naming

To control the workspace naming please implement the following method on the BaseStack to your liking:

```ts
public getWorkspaceName(stackName: string): string {
  return `${this.prefix}-${stackName}`;
}
```

### Workspace configuration

You configure the created workspaces by settting the `defaultWorkspaceConfig` property on the BaseStack.
This config is overwritten by the one specified as the thrid argument of a `Stack` (in the super call).

## Warning

There are some potentially harmful side effects you could run into, so please always carefully read the diff before applying it.

### Renaming stacks

This is not supported by the library, if you rename an already existing stack the workspace hosting it will be destroyed and a new one with the new name will be created. This means all references to the infrastructure provisioned in the old stack will be lost, making it impossible to destroy the infrastructure through terraform. In this case we recommend destroying the stack, renaming it and then re-creating it.
There are some ways around this issue, but the library currently does not support them.
