# The Future of Terraform CDK

## Sunset Notice

Terraform CDK (CDKTF) will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date. Unfortunately, Terraform CDK did not find product-market fit at scale. HashiCorp, an IBM Company, has chosen to focus its investments on Terraform core and its broader ecosystem.

As of December 10, 2025, Terraform CDK will be archived on GitHub, and the documentation will reflect its deprecated status. The archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements (including compatibility updates) will be made.

You will be able to continue to use Terraform CDK at your own risk. Terraform CDK is licensed under the Mozilla Public License (MPL). HashiCorp, an IBM Company, does not apply any additional restrictions. We encourage community forks if there’s interest in continuing development independently.

## Migration to HCL

You can use the following command to generate Terraform-compatible .tf files directly from your Terraform CDK project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from Terraform CDK. After running the command, you can use standard Terraform CLI commands (`terraform init`, `terraform plan`, `terraform apply`) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

### Note on AWS CDK

If your infrastructure is defined in Terraform CDK but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem. If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

## FAQ

Q: Is CDKTF still being developed?

A: No. CDKTF will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date.

Q: Why is CDKTF being sunset?

A: CDKTF did not find product-market fit at scale. We’ve chosen to focus our investments on Terraform core and its broader ecosystem.

Q: Will CDKTF be removed from GitHub?

A: CDKTF will be archived on GitHub, and documentation will reflect its deprecated status.

Q: Can I still use CDKTF after it's sunset?

A: Yes, the archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements will be made.

Q: Will CDKTF continue to support new versions of Terraform or providers?

A: No. Compatibility updates will not be made after the EOL date.

Q: Can I fork CDKTF and maintain it myself?

A: Yes. CDKTF is open source, and we encourage community forks if there’s interest in continuing development independently.

Q: Can I keep using CDKTF?

A: You may continue to use it at your own risk. HashiCorp, an IBM Company, will no longer be maintaining it.

Q: Is there a migration tool?

A: You can use the following command to generate Terraform-compatible .tf files directly from your CDKTF project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from CDKTF. After running the command, you can use standard Terraform CLI commands (terraform init, terraform plan, terraform apply) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

Q: What migration guidance can we provide to customers?

A: For users looking to migrate away from CDKTF:

If your infrastructure is defined in CDKTF but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem.

If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

---

# cdktf-multi-stack-tfe

![Status: Tech Preview](https://img.shields.io/badge/status-experimental-EAAA32) [![Releases](https://img.shields.io/github/release/cdktf/cdktf-multi-stack-tfe.svg)](https://github.com/cdktf/cdktf-multi-stack-tfe/releases)
[![LICENSE](https://img.shields.io/github/license/cdktf/cdktf-multi-stack-tfe.svg)](https://github.com/cdktf/cdktf-multi-stack-tfe/blob/main/LICENSE)
[![build](https://github.com/cdktf/cdktf-multi-stack-tfe/actions/workflows/build.yml/badge.svg)](https://github.com/cdktf/cdktf-multi-stack-tfe/actions/workflows/build.yml)

Setting up Terraform Cloud / Terraform Enterprise workspaces can be tiring when dealing with CDK for Terraform applications spanning multiple stacks and therefore workspaces. This library aims to automate this.

_cdktf-multi-stack-tfe_ is in technical preview, which means it's a community supported project. It still requires extensive testing and polishing to mature into a HashiCorp officially supported project. Please [file issues](https://github.com/cdktf/cdktf-multi-stack-tfe/issues/new/choose) generously and detail your experience while using the library. We welcome your feedback.

By using the software in this repository, you acknowledge that:

- _cdktf-multi-stack-tfe_ is still in development, may change, and has not been released as a commercial product by HashiCorp and is not currently supported in any way by HashiCorp.
- _cdktf-multi-stack-tfe_ is provided on an "as-is" basis, and may include bugs, errors, or other issues.
- _cdktf-multi-stack-tfe_ is NOT INTENDED FOR PRODUCTION USE, use of the Software may result in unexpected results, loss of data, or other unexpected results, and HashiCorp disclaims any and all liability resulting from use of _cdktf-multi-stack-tfe_.
- HashiCorp reserves all rights to make all decisions about the features, functionality and commercial release (or non-release) of _cdktf-multi-stack-tfe_, at any time and without any obligation or liability whatsoever.

## Compatibility

- `cdktf` >= 0.21.0
- `constructs` >= 10.4.2

## Usage

You need to create the initial workspace yourself, in this case `my-app-base`.

```ts
import * as cdktf from "cdktf";
import Construct from "constructs";
import { BaseStack, WorkspaceStack, Variable } from "cdktf-multi-stack-tfe";

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

class VpcStack extends WorkspaceStack {
  public vpcId: string

  // This stack will depend on the base stack and it
  // will use the my-company/my-app-$stackName workspace as a backend
  constructor(scope: Construct, stackName: string) {
    super(scope, stackName);

    // Setup an VPC, etc.

    this.vpcId = ....
  }
}

class WebStack extends WorkspaceStack {
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
