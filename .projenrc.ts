import { ConstructLibraryCdktf } from "projen/lib/cdktf";
const cdktfVersion = ">=0.15.0";
const constructVersion = "^10.0.107";
const name = "cdktf-multi-stack-tfe";

const project = new ConstructLibraryCdktf({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name,
  cdktfVersion,
  repositoryUrl: "https://github.com/cdktf/cdktf-multi-stack-tfe.git",
  deps: [],
  devDeps: ["ts-node", "cdktf-cli"],
  peerDeps: ["@cdktf/provider-tfe@>=5.0.0"],
  description: `Sets up TFE / TFC workspaces for all stacks based on a seed stack.`,
  license: "MIT",
  prettier: true,
  projenrcTs: true,
  autoApproveOptions: {
    allowedUsernames: ["DanielMSchmidt"],
    label: "auto-approve",
  },
  autoApproveUpgrades: true,
  publishToPypi: {
    distName: name,
    module: name.replace(/-/g, "_"),
  },
});

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
    uses: "hashicorp/setup-copywrite@3ace06ad72e6ec679ea8572457b17dbc3960b8ce", // v1.0.0
    with: { token: "${{ secrets.GITHUB_TOKEN }}" },
  },
  { name: "Add headers using Copywrite tool", run: "copywrite headers" }
);

project.synth();
