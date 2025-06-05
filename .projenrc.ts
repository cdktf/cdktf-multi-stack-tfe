/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ConstructLibraryCdktf } from "projen/lib/cdktf";
import { UpgradeDependenciesSchedule } from "projen/lib/javascript";
import { AutoApprove } from "./projenrc/auto-approve";
import { Automerge } from "./projenrc/automerge";
import { CustomizedLicense } from "./projenrc/customized-license";
import { UpgradeCDKTF } from "./projenrc/upgrade-cdktf";
import { UpgradeJSIIAndTypeScript } from "./projenrc/upgrade-jsii-typescript";

const cdktfVersion = ">=0.21.0";
const constructVersion = "^10.3.0";
/** JSII and TS should always use the same major/minor version range */
const typescriptVersion = "~5.7.0";
const name = "cdktf-multi-stack-tfe";

const githubActionPinnedVersions = {
  "actions/checkout": "11bd71901bbe5b1630ceea73d27597364c9af683", // v4.2.2
  "actions/download-artifact": "95815c38cf2ff2164869cbab79da8d1f422bc89e", // v4.2.1
  "actions/github-script": "60a0d83039c74a4aee543508d2ffcb1c3799cdea", // v7.0.1
  "actions/setup-node": "cdca7365b2dadb8aad0a33bc7601856ffabcc48e", // v4.3.0
  "actions/setup-python": "42375524e23c412d93fb67b49958b491fce71c38", // v5.4.0
  "actions/upload-artifact": "ea165f8d65b6e75b540449e92b4886f43607fa02", // v4.6.2
  "amannn/action-semantic-pull-request":
    "0723387faaf9b38adef4775cd42cfd5155ed6017", // v5.5.3
  "hashicorp/setup-copywrite": "32638da2d4e81d56a0764aa1547882fc4d209636", // v1.1.3
  "peter-evans/create-pull-request": "271a8d0340265f705b14b6d32b9829c1cb33d45e", // v7.0.8
};

const project = new ConstructLibraryCdktf({
  author: "HashiCorp",
  authorAddress: "https://hashicorp.com",
  authorOrganization: true,
  defaultReleaseBranch: "main",
  name,
  cdktfVersion,
  repositoryUrl: "https://github.com/cdktf/cdktf-multi-stack-tfe.git",
  description: `Sets up TFE / TFC workspaces for all stacks based on a seed stack.`,
  typescriptVersion,
  jsiiVersion: typescriptVersion,
  licensed: false,
  prettier: true,
  projenrcTs: true,
  mergify: false,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "automerge", "dependencies"],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
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
  pullRequestTemplate: false,
});

new CustomizedLicense(project);
new AutoApprove(project);
new Automerge(project);
new UpgradeCDKTF(project);
new UpgradeJSIIAndTypeScript(project, typescriptVersion);

project.addPeerDeps(
  `cdktf@${cdktfVersion}`,
  "@cdktf/provider-tfe@>=11.0.0",
  `constructs@${constructVersion}`
);
project.addDevDeps("ts-node@^10.9.1", `cdktf-cli@${cdktfVersion}`);

project.testTask.exec(`npx cdktf synth`, {
  name: "synth TS example",
  cwd: "./examples/typescript",
});
project.gitignore.include("examples/typescript/tsconfig.json");
project.jest?.addIgnorePattern("dist");

project.addPackageIgnore("scripts");
project.addPackageIgnore("examples");
project.addPackageIgnore("projenrc");
project.addPackageIgnore("/.projenrc.ts");

project.addPackageIgnore(".copywrite.hcl");
// Run copywrite tool to add copyright headers to all files
project.buildWorkflow?.addPostBuildSteps(
  {
    name: "Setup Copywrite tool",
    uses: "hashicorp/setup-copywrite",
  },
  { name: "Add headers using Copywrite tool", run: "copywrite headers" }
);

// Use pinned versions of github actions
Object.entries(githubActionPinnedVersions).forEach(([action, sha]) => {
  project.github?.actions.set(action, `${action}@${sha}`);
});

const releaseWorkflow = project.tryFindObjectFile(
  ".github/workflows/release.yml"
);
releaseWorkflow?.addOverride("on.push", {
  branches: ["main"],
  "paths-ignore": [
    // don't do a release if the change was only to these files/directories
    "examples/**",
    ".github/ISSUE_TEMPLATE/**",
    ".github/CODEOWNERS",
    ".github/dependabot.yml",
    ".github/**/*.md",
  ],
});
// always publish a new GitHub release, even when publishing to a particular package manager fails
releaseWorkflow?.addOverride("jobs.release_github.needs", "release");

project.synth();
