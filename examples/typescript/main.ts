import { Construct } from "constructs";
import { App, TerraformLocal } from "cdktf";
import { BaseStack, Stack } from "../../src/index";

class Base extends BaseStack {
  constructor(scope: Construct) {
    super(scope, "danielmschmidt", "multi-stack-tfe-demo", {
      token: process.env.TFE_TOKEN,
    });
  }
}

class DemoStack extends Stack {
  public value: string;
  constructor(scope: Construct, stackName: string, foreignValue?: string) {
    super(scope, stackName);

    this.value = new TerraformLocal(
      this,
      "local",
      `hello from ${stackName}`
    ).asString;

    if (foreignValue) {
      new TerraformLocal(
        this,
        "foreign local",
        `${stackName} received a message: ${foreignValue}`
      ).asString;
    }
  }
}

const app = new App();
new Base(app);
const stack1 = new DemoStack(app, "stack-1");
const stack2 = new DemoStack(app, "stack-2", stack1.value);
new DemoStack(app, "stack-3", stack2.value);
app.synth();
