/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TerraformLocal, Testing } from "cdktf";
import { Construct } from "constructs";
import { BaseStack, Stack, WorkspaceConfig, TFVariable } from "../src";

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
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
            "hostname": "app.terraform.io",
            "token": "my-token"
          }
        ]
      },
      "resource": {
        "tfe_workspace": {
          "tfe-multi-stack-workspace-production-vpc": {
            "name": "my-prefix-production-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "name": "my-prefix-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      }
    }"
  `);
  expect(Testing.synth(vpc)).toMatchInlineSnapshot(`
    "{
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-staging-vpc"
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
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
          }
        ]
      },
      "resource": {
        "tfe_workspace": {
          "tfe-multi-stack-workspace-staging-cluster": {
            "name": "my-prefix-staging-cluster",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "depends_on": [
              "\${tfe_workspace.tfe-multi-stack-workspace-staging-cluster}"
            ],
            "name": "my-prefix-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
              "\${tfe_workspace.tfe-multi-stack-workspace-staging-cluster.id}"
            ],
            "tag_names": [
              "my-prefix"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "organization": "my-company",
            "workspaces": {
              "name": "my-prefix-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      }
    }"
  `);
});

test("only one stack is created when using two cross stack references", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix");
    }
  }

  class VpcStack extends Stack {
    public vpcId: string;
    public subnetId: string;

    constructor(scope: Construct, stackName: string) {
      super(scope, stackName);

      this.vpcId = new TerraformLocal(
        this,
        "local_value",
        "a value sent across stacks"
      ).asString;

      this.subnetId = new TerraformLocal(
        this,
        "second_local_value",
        "another value sent across stacks"
      ).asString;
    }
  }

  class ClusterStack extends Stack {
    constructor(
      scope: Construct,
      stackName: string,
      vpcId: string,
      subnetId: string
    ) {
      super(scope, stackName);

      new TerraformLocal(this, "other_stacks_value", vpcId);
      new TerraformLocal(this, "another_stacks_value", subnetId);
    }
  }

  new MyAppBaseStack(app);
  const vpc = new VpcStack(app, "staging-vpc");
  new ClusterStack(app, "staging-cluster", vpc.vpcId, vpc.subnetId);

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
        ├── local_value (TerraformLocal)
        └── second_local_value (TerraformLocal)
    └── staging-cluster (ClusterStack)
        ├── backend (RemoteBackend)
        ├── other_stacks_value (TerraformLocal)
        └── another_stacks_value (TerraformLocal)
    "
  `);
});

test("uses workspace name override", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix", {
        hostname: "app.terraform.io",
        token: "my-token",
      });
    }

    public getWorkspaceName(stackName: string): string {
      return `our-${stackName}`;
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
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
            "hostname": "app.terraform.io",
            "token": "my-token"
          }
        ]
      },
      "resource": {
        "tfe_workspace": {
          "tfe-multi-stack-workspace-production-vpc": {
            "name": "our-production-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "name": "our-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "our-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      }
    }"
  `);
  expect(Testing.synth(vpc)).toMatchInlineSnapshot(`
    "{
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "our-staging-vpc"
            }
          }
        }
      }
    }"
  `);
});

test("uses workspace config options", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix", {
        hostname: "app.terraform.io",
        token: "my-token",
        defaultWorkspaceConfig: {
          tagNames: ["another-tag"],
          agentPoolId: "42",
          queueAllRuns: true,
        },
      });
    }
  }

  class VpcStack extends Stack {
    constructor(scope: Construct, stackName: string) {
      super(scope, stackName);
    }
  }

  const base = new MyAppBaseStack(app);
  new VpcStack(app, "staging-vpc");
  new VpcStack(app, "production-vpc");

  expect(Testing.synth(base)).toMatchInlineSnapshot(`
    "{
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
            "hostname": "app.terraform.io",
            "token": "my-token"
          }
        ]
      },
      "resource": {
        "tfe_workspace": {
          "tfe-multi-stack-workspace-production-vpc": {
            "agent_pool_id": "42",
            "name": "my-prefix-production-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "queue_all_runs": true,
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix",
              "another-tag"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "agent_pool_id": "42",
            "name": "my-prefix-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "queue_all_runs": true,
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix",
              "another-tag"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      }
    }"
  `);
});

test("uses workspace config options with per stack override", () => {
  const app = Testing.app();

  class MyAppBaseStack extends BaseStack {
    constructor(scope: Construct) {
      super(scope, "my-company", "my-prefix", {
        hostname: "app.terraform.io",
        token: "my-token",
        defaultWorkspaceConfig: {
          tagNames: ["another-tag"],
          agentPoolId: "42",
          queueAllRuns: true,
        },
      });
    }
  }

  class VpcStack extends Stack {
    constructor(
      scope: Construct,
      stackName: string,
      workspaceConfig: WorkspaceConfig
    ) {
      super(scope, stackName, workspaceConfig);
    }
  }

  const base = new MyAppBaseStack(app);
  new VpcStack(app, "staging-vpc", {
    executionMode: "remote",
    tagNames: ["staging-tag"],
  });
  new VpcStack(app, "production-vpc", {
    tagNames: ["production-tag"],
  });

  expect(Testing.synth(base)).toMatchInlineSnapshot(`
    "{
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
            "hostname": "app.terraform.io",
            "token": "my-token"
          }
        ]
      },
      "resource": {
        "tfe_workspace": {
          "tfe-multi-stack-workspace-production-vpc": {
            "agent_pool_id": "42",
            "name": "my-prefix-production-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "queue_all_runs": true,
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix",
              "production-tag"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "agent_pool_id": "42",
            "execution_mode": "remote",
            "name": "my-prefix-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "queue_all_runs": true,
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix",
              "staging-tag"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      }
    }"
  `);
});

test("can propagate TFVariables from the base stack", () => {
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

      new TFVariable(this, "vpc-name", {
        default: `${stackName}-vpc`,
        type: "string",
      });

      new TFVariable(this, "vpc-secret", {
        sensitive: true,
      });
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
        ├── var-staging-vpc-vpc-name (TerraformVariable)
        ├── tfe-var-staging-vpc-vpc-name (Variable)
        ├── var-staging-vpc-vpc-secret (TerraformVariable)
        ├── tfe-var-staging-vpc-vpc-secret (Variable)
        ├── tfe-multi-stack-workspace-production-vpc (Workspace)
        ├── var-production-vpc-vpc-name (TerraformVariable)
        ├── tfe-var-production-vpc-vpc-name (Variable)
        ├── var-production-vpc-vpc-secret (TerraformVariable)
        └── tfe-var-production-vpc-vpc-secret (Variable)
    ├── staging-vpc (VpcStack)
        ├── backend (RemoteBackend)
        ├── vpc-name (TFVariable)
        └── vpc-secret (TFVariable)
    └── production-vpc (VpcStack)
        ├── backend (RemoteBackend)
        ├── vpc-name (TFVariable)
        └── vpc-secret (TFVariable)
    "
  `);

  expect(Testing.synth(base)).toMatchInlineSnapshot(`
    "{
      "data": {
        "tfe_organization": {
          "organization": {
            "name": "my-company"
          }
        }
      },
      "provider": {
        "tfe": [
          {
            "hostname": "app.terraform.io",
            "token": "my-token"
          }
        ]
      },
      "resource": {
        "tfe_variable": {
          "tfe-var-production-vpc-vpc-name": {
            "category": "terraform",
            "hcl": false,
            "key": "vpc-name",
            "value": "\${var.vpc-name}",
            "workspace_id": "\${tfe_workspace.tfe-multi-stack-workspace-production-vpc.id}"
          },
          "tfe-var-production-vpc-vpc-secret": {
            "category": "terraform",
            "hcl": false,
            "key": "vpc-secret",
            "sensitive": true,
            "value": "\${var.vpc-secret}",
            "workspace_id": "\${tfe_workspace.tfe-multi-stack-workspace-production-vpc.id}"
          },
          "tfe-var-staging-vpc-vpc-name": {
            "category": "terraform",
            "hcl": false,
            "key": "vpc-name",
            "value": "\${var.vpc-name}",
            "workspace_id": "\${tfe_workspace.tfe-multi-stack-workspace-staging-vpc.id}"
          },
          "tfe-var-staging-vpc-vpc-secret": {
            "category": "terraform",
            "hcl": false,
            "key": "vpc-secret",
            "sensitive": true,
            "value": "\${var.vpc-secret}",
            "workspace_id": "\${tfe_workspace.tfe-multi-stack-workspace-staging-vpc.id}"
          }
        },
        "tfe_workspace": {
          "tfe-multi-stack-workspace-production-vpc": {
            "name": "my-prefix-production-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          },
          "tfe-multi-stack-workspace-staging-vpc": {
            "name": "my-prefix-staging-vpc",
            "organization": "\${data.tfe_organization.organization.name}",
            "remote_state_consumer_ids": [
            ],
            "tag_names": [
              "my-prefix"
            ]
          }
        }
      },
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-base"
            }
          }
        },
        "required_providers": {
          "tfe": {
            "source": "hashicorp/tfe",
            "version": "0.51.1"
          }
        }
      },
      "variable": {
        "vpc-name": {
          "default": "production-vpc-vpc",
          "type": "string"
        },
        "vpc-secret": {
          "sensitive": true
        }
      }
    }"
  `);
  expect(Testing.synth(vpc)).toMatchInlineSnapshot(`
    "{
      "terraform": {
        "backend": {
          "remote": {
            "hostname": "app.terraform.io",
            "organization": "my-company",
            "token": "my-token",
            "workspaces": {
              "name": "my-prefix-staging-vpc"
            }
          }
        }
      },
      "variable": {
        "vpc-name": {
          "default": "staging-vpc-vpc",
          "type": "string"
        },
        "vpc-secret": {
          "sensitive": true
        }
      }
    }"
  `);
});
