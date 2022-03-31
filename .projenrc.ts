import { CDKTFConstruct } from "@dschmidt/cdktf-construct-base";
const project = new CDKTFConstruct({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name: "cdktf-multi-stack-tfe",
  repositoryUrl: "https://github.com/DanielMSchmidt/cdktf-multi-stack-tfe.git",
  deps: [],
  devDeps: ["@dschmidt/cdktf-construct-base", "ts-node", "cdktf-cli"],
  peerDeps: ["@cdktf/provider-tfe@>=0.1.14"],
  description: `Sets up TFE / TFC workspaces for all stacks based on a seed stack.`,
  license: "MIT",
});

project.testTask.exec(`npx cdktf synth`, {
  name: "synth TS example",
  cwd: "./examples/typescript",
});

project.synth();
