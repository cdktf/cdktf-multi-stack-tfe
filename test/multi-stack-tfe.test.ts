import { TerraformLocal, Testing } from "cdktf";
import { Construct } from "constructs";
import { BaseStack, Stack } from "../src";

test("sets up all stacks created", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix", {
        hostname: "app.terraform.io",
        token: "my-token",
      });
    }
  }

  class VpcStack extends Stack {
    constructor(scope: Construct, stackName: string) {
      super(scope, stackName);
    }
  }

  const base = new MyAppBaseStack(app);
  const vpc = new VpcStack(app, "staging-vpc");
  new VpcStack(app, "production-vpc");

  expect(Testing.renderConstructTree(app)).toMatchInlineSnapshot(`
    "App
    ├── base (MyAppBaseStack)
        ├── tfe (TfeProvider)
        ├── backend (RemoteBackend)
        ├── organization (DataTfeOrganization)
        ├── tfe-multi-stack-workspace-staging-vpc (Workspace)
        └── tfe-multi-stack-workspace-production-vpc (Workspace)
    ├── staging-vpc (VpcStack)
        └── backend (RemoteBackend)
    └── production-vpc (VpcStack)
        └── backend (RemoteBackend)
    "
  `);

  expect(Testing.synth(base)).toMatchInlineSnapshot(`
    "{
      \\"data\\": {
        \\"tfe_organization\\": {
          \\"organization\\": {
            \\"name\\": \\"my-company\\"
          }
        }
      },
      \\"provider\\": {
        \\"tfe\\": [
          {
            \\"hostname\\": \\"app.terraform.io\\",
            \\"token\\": \\"my-token\\"
          }
        ]
      },
      \\"resource\\": {
        \\"tfe_workspace\\": {
          \\"tfe-multi-stack-workspace-production-vpc\\": {
            \\"name\\": \\"my-prefix-production-vpc\\",
            \\"organization\\": \\"\${data.tfe_organization.organization.name}\\",
            \\"remote_state_consumer_ids\\": [
            ],
            \\"tag_names\\": [
              \\"my-prefix\\"
            ]
          },
          \\"tfe-multi-stack-workspace-staging-vpc\\": {
            \\"name\\": \\"my-prefix-staging-vpc\\",
            \\"organization\\": \\"\${data.tfe_organization.organization.name}\\",
            \\"remote_state_consumer_ids\\": [
            ],
            \\"tag_names\\": [
              \\"my-prefix\\"
            ]
          }
        }
      },
      \\"terraform\\": {
        \\"backend\\": {
          \\"remote\\": {
            \\"hostname\\": \\"app.terraform.io\\",
            \\"organization\\": \\"my-company\\",
            \\"token\\": \\"my-token\\",
            \\"workspaces\\": {
              \\"name\\": \\"my-prefix-base\\"
            }
          }
        },
        \\"required_providers\\": {
          \\"tfe\\": {
            \\"source\\": \\"hashicorp/tfe\\",
            \\"version\\": \\"~> 0.26.1\\"
          }
        }
      }
    }"
  `);
  expect(Testing.synth(vpc)).toMatchInlineSnapshot(`
    "{
      \\"terraform\\": {
        \\"backend\\": {
          \\"remote\\": {
            \\"hostname\\": \\"app.terraform.io\\",
            \\"organization\\": \\"my-company\\",
            \\"token\\": \\"my-token\\",
            \\"workspaces\\": {
              \\"name\\": \\"my-prefix-staging-vpc\\"
            }
          }
        }
      }
    }"
  `);
});

test("sets the remoteStateConsumerIds when dependenies are set", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix");
    }
  }

  class VpcStack extends Stack {
    public vpcId: string;

    constructor(scope: Construct, stackName: string) {
      super(scope, stackName);

      this.vpcId = new TerraformLocal(
        this,
        "local_value",
        "a value sent across stacks"
      ).asString;
    }
  }

  class ClusterStack extends Stack {
    constructor(scope: Construct, stackName: string, vpcId: string) {
      super(scope, stackName);

      new TerraformLocal(this, "other_stacks_value", vpcId);
    }
  }

  const base = new MyAppBaseStack(app);
  const vpc = new VpcStack(app, "staging-vpc");
  const cluster = new ClusterStack(app, "staging-cluster", vpc.vpcId);
  cluster.addDependency(vpc); // we have to do this manually since Testing.synth does not create cross stack dependencies

  expect(Testing.renderConstructTree(app)).toMatchInlineSnapshot(`
    "App
    ├── base (MyAppBaseStack)
        ├── tfe (TfeProvider)
        ├── backend (RemoteBackend)
        ├── organization (DataTfeOrganization)
        ├── tfe-multi-stack-workspace-staging-vpc (Workspace)
        └── tfe-multi-stack-workspace-staging-cluster (Workspace)
    ├── staging-vpc (VpcStack)
        ├── backend (RemoteBackend)
        └── local_value (TerraformLocal)
    └── staging-cluster (ClusterStack)
        ├── backend (RemoteBackend)
        └── other_stacks_value (TerraformLocal)
    "
  `);

  expect(Testing.synth(base)).toMatchInlineSnapshot(`
    "{
      \\"data\\": {
        \\"tfe_organization\\": {
          \\"organization\\": {
            \\"name\\": \\"my-company\\"
          }
        }
      },
      \\"provider\\": {
        \\"tfe\\": [
          {
          }
        ]
      },
      \\"resource\\": {
        \\"tfe_workspace\\": {
          \\"tfe-multi-stack-workspace-staging-cluster\\": {
            \\"name\\": \\"my-prefix-staging-cluster\\",
            \\"organization\\": \\"\${data.tfe_organization.organization.name}\\",
            \\"remote_state_consumer_ids\\": [
            ],
            \\"tag_names\\": [
              \\"my-prefix\\"
            ]
          },
          \\"tfe-multi-stack-workspace-staging-vpc\\": {
            \\"depends_on\\": [
              \\"tfe_workspace.tfe-multi-stack-workspace-staging-cluster\\"
            ],
            \\"name\\": \\"my-prefix-staging-vpc\\",
            \\"organization\\": \\"\${data.tfe_organization.organization.name}\\",
            \\"remote_state_consumer_ids\\": [
              \\"\${tfe_workspace.tfe-multi-stack-workspace-staging-cluster.id}\\"
            ],
            \\"tag_names\\": [
              \\"my-prefix\\"
            ]
          }
        }
      },
      \\"terraform\\": {
        \\"backend\\": {
          \\"remote\\": {
            \\"organization\\": \\"my-company\\",
            \\"workspaces\\": {
              \\"name\\": \\"my-prefix-base\\"
            }
          }
        },
        \\"required_providers\\": {
          \\"tfe\\": {
            \\"source\\": \\"hashicorp/tfe\\",
            \\"version\\": \\"~> 0.26.1\\"
          }
        }
      }
    }"
  `);
});
