/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { IResolver, License } from "projen";
import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { TypeScriptProject } from "projen/lib/typescript";

const SPDX = "MPL-2.0";
const cdktfVersion = ">=0.15.0";
const constructVersion = "^10.0.107";
const name = "cdktf-multi-stack-tfe";

class CustomizedLicense extends License {
  constructor(project: TypeScriptProject) {
    super(project, { spdx: SPDX });

    project.addFields({ license: SPDX });
  }

  synthesizeContent(resolver: IResolver) {
    return (
      "Copyright (c) 2022 HashiCorp, Inc.\n\n" +
      super.synthesizeContent(resolver)
    );
  }
}

const project = new ConstructLibraryCdktf({
  author: "HashiCorp",
  authorAddress: "https://hashicorp.com",
  authorOrganization: true,
  defaultReleaseBranch: "main",
  name,
  cdktfVersion,
  repositoryUrl: "https://github.com/cdktf/cdktf-multi-stack-tfe.git",
  deps: [],
  devDeps: ["ts-node", "cdktf-cli"],
  peerDeps: ["@cdktf/provider-tfe@>=5.0.0"],
  description: `Sets up TFE / TFC workspaces for all stacks based on a seed stack.`,
  licensed: false,
  prettier: true,
  projenrcTs: true,
  autoApproveOptions: {
    allowedUsernames: ["team-tf-cdk"],
    label: "auto-approve",
  },
  autoApproveUpgrades: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "dependencies"],
    },
  },
  publishToPypi: {
    distName: name,
    module: name.replace(/-/g, "_"),
  },
  workflowGitIdentity: {
    name: "team-tf-cdk",
    email: "github-team-tf-cdk@hashicorp.com",
  },
});

new CustomizedLicense(project);

project.addPeerDeps(`constructs@${constructVersion}`, `cdktf@${cdktfVersion}`);
project.addKeywords("cdktf");
project.addDevDeps("ts-node@10.9.1", `cdktf-cli@${cdktfVersion}`);

project.testTask.exec(`npx cdktf synth`, {
  name: "synth TS example",
  cwd: "./examples/typescript",
});
project.gitignore.include("examples/typescript/tsconfig.json");
project.jest?.addIgnorePattern("dist");

// Run copywrite tool to add copyright headers to all files
project.buildWorkflow?.addPostBuildSteps(
  {
    name: "Setup Copywrite tool",
    uses: "hashicorp/setup-copywrite@867a1a2a064a0626db322392806428f7dc59cb3e", // v1.1.2
  },
  { name: "Add headers using Copywrite tool", run: "copywrite headers" }
);

project.synth();
