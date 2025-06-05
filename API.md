# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseStack <a name="BaseStack" id="cdktf-multi-stack-tfe.BaseStack"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.BaseStack.Initializer"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

new BaseStack(scope: Construct, organizationName: string, prefix: string, options?: BaseStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.options">options</a></code> | <code><a href="#cdktf-multi-stack-tfe.BaseStackConfig">BaseStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.organizationName"></a>

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.prefix"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.options"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.BaseStackConfig">BaseStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace">bootstrapWorkspace</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.createSecret">createSecret</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getRemoteBackendConfig">getRemoteBackendConfig</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getWorkspaceName">getWorkspaceName</a></code> | If you want to have more control over the workspace name, you can override this method. |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.BaseStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-multi-stack-tfe.BaseStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-multi-stack-tfe.BaseStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.BaseStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.BaseStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.BaseStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-multi-stack-tfe.BaseStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-multi-stack-tfe.BaseStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-multi-stack-tfe.BaseStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-multi-stack-tfe.BaseStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-multi-stack-tfe.BaseStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: Node | TerraformElement): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.BaseStack.getLogicalId.parameter.tfElement"></a>

- *Type:* constructs.Node | cdktf.TerraformElement

---

##### `hasResourceMove` <a name="hasResourceMove" id="cdktf-multi-stack-tfe.BaseStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): boolean
```

##### `prepareStack` <a name="prepareStack" id="cdktf-multi-stack-tfe.BaseStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="cdktf-multi-stack-tfe.BaseStack.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toHclTerraform` <a name="toHclTerraform" id="cdktf-multi-stack-tfe.BaseStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): {[ key: string ]: any}
```

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.BaseStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `bootstrapWorkspace` <a name="bootstrapWorkspace" id="cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace"></a>

```typescript
public bootstrapWorkspace(stackName: string, stackConfig?: WorkspaceConfig): Workspace
```

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace.parameter.stackName"></a>

- *Type:* string

---

###### `stackConfig`<sup>Optional</sup> <a name="stackConfig" id="cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace.parameter.stackConfig"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a>

---

##### `createSecret` <a name="createSecret" id="cdktf-multi-stack-tfe.BaseStack.createSecret"></a>

```typescript
public createSecret(targetStack: WorkspaceStack, secretName: string, config: TerraformVariableConfig): void
```

###### `targetStack`<sup>Required</sup> <a name="targetStack" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.targetStack"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceStack">WorkspaceStack</a>

---

###### `secretName`<sup>Required</sup> <a name="secretName" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.secretName"></a>

- *Type:* string

---

###### `config`<sup>Required</sup> <a name="config" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.config"></a>

- *Type:* cdktf.TerraformVariableConfig

---

##### `getRemoteBackendConfig` <a name="getRemoteBackendConfig" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendConfig"></a>

```typescript
public getRemoteBackendConfig(stackName: string): RemoteBackendConfig
```

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendConfig.parameter.stackName"></a>

- *Type:* string

---

##### `getWorkspaceName` <a name="getWorkspaceName" id="cdktf-multi-stack-tfe.BaseStack.getWorkspaceName"></a>

```typescript
public getWorkspaceName(stackName: string): string
```

If you want to have more control over the workspace name, you can override this method.

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.getWorkspaceName.parameter.stackName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.of">of</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.baseStackOf">baseStackOf</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.isBaseStack">isBaseStack</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-multi-stack-tfe.BaseStack.isConstruct"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.BaseStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-multi-stack-tfe.BaseStack.isStack"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.BaseStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-multi-stack-tfe.BaseStack.of"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.BaseStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `baseStackOf` <a name="baseStackOf" id="cdktf-multi-stack-tfe.BaseStack.baseStackOf"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.baseStackOf(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.BaseStack.baseStackOf.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isBaseStack` <a name="isBaseStack" id="cdktf-multi-stack-tfe.BaseStack.isBaseStack"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.isBaseStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.BaseStack.isBaseStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.moveTargets">moveTargets</a></code> | <code>cdktf.TerraformResourceTargets</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.organization">organization</a></code> | <code>@cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.tfeProvider">tfeProvider</a></code> | <code>@cdktf/provider-tfe.provider.TfeProvider</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-multi-stack-tfe.BaseStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-multi-stack-tfe.BaseStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `moveTargets`<sup>Required</sup> <a name="moveTargets" id="cdktf-multi-stack-tfe.BaseStack.property.moveTargets"></a>

```typescript
public readonly moveTargets: TerraformResourceTargets;
```

- *Type:* cdktf.TerraformResourceTargets

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-multi-stack-tfe.BaseStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="cdktf-multi-stack-tfe.BaseStack.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-multi-stack-tfe.BaseStack.property.organization"></a>

```typescript
public readonly organization: DataTfeOrganization;
```

- *Type:* @cdktf/provider-tfe.dataTfeOrganization.DataTfeOrganization

---

##### `tfeProvider`<sup>Required</sup> <a name="tfeProvider" id="cdktf-multi-stack-tfe.BaseStack.property.tfeProvider"></a>

```typescript
public readonly tfeProvider: TfeProvider;
```

- *Type:* @cdktf/provider-tfe.provider.TfeProvider

---


### TFVariable <a name="TFVariable" id="cdktf-multi-stack-tfe.TFVariable"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.TFVariable.Initializer"></a>

```typescript
import { TFVariable } from 'cdktf-multi-stack-tfe'

new TFVariable(scope: Construct, id: string, config: TerraformVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.config">config</a></code> | <code>cdktf.TerraformVariableConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-multi-stack-tfe.TFVariable.Initializer.parameter.config"></a>

- *Type:* cdktf.TerraformVariableConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.addValidation">addValidation</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.synthesizeAttributes">synthesizeAttributes</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.synthesizeHclAttributes">synthesizeHclAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.TFVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.TFVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.TFVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.TFVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-multi-stack-tfe.TFVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-multi-stack-tfe.TFVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-multi-stack-tfe.TFVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="cdktf-multi-stack-tfe.TFVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="cdktf-multi-stack-tfe.TFVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.TFVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addValidation` <a name="addValidation" id="cdktf-multi-stack-tfe.TFVariable.addValidation"></a>

```typescript
public addValidation(validation: TerraformVariableValidationConfig): void
```

###### `validation`<sup>Required</sup> <a name="validation" id="cdktf-multi-stack-tfe.TFVariable.addValidation.parameter.validation"></a>

- *Type:* cdktf.TerraformVariableValidationConfig

---

##### `synthesizeAttributes` <a name="synthesizeAttributes" id="cdktf-multi-stack-tfe.TFVariable.synthesizeAttributes"></a>

```typescript
public synthesizeAttributes(): {[ key: string ]: any}
```

##### `synthesizeHclAttributes` <a name="synthesizeHclAttributes" id="cdktf-multi-stack-tfe.TFVariable.synthesizeHclAttributes"></a>

```typescript
public synthesizeHclAttributes(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-multi-stack-tfe.TFVariable.isConstruct"></a>

```typescript
import { TFVariable } from 'cdktf-multi-stack-tfe'

TFVariable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.TFVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-multi-stack-tfe.TFVariable.isTerraformElement"></a>

```typescript
import { TFVariable } from 'cdktf-multi-stack-tfe'

TFVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.TFVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.booleanValue">booleanValue</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.listValue">listValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.default">default</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.nullable">nullable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.sensitive">sensitive</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.TFVariable.property.validation">validation</a></code> | <code>cdktf.TerraformVariableValidationConfig[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-multi-stack-tfe.TFVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-multi-stack-tfe.TFVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-multi-stack-tfe.TFVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-multi-stack-tfe.TFVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="cdktf-multi-stack-tfe.TFVariable.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `listValue`<sup>Required</sup> <a name="listValue" id="cdktf-multi-stack-tfe.TFVariable.property.listValue"></a>

```typescript
public readonly listValue: string[];
```

- *Type:* string[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="cdktf-multi-stack-tfe.TFVariable.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="cdktf-multi-stack-tfe.TFVariable.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.TFVariable.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

---

##### `default`<sup>Optional</sup> <a name="default" id="cdktf-multi-stack-tfe.TFVariable.property.default"></a>

```typescript
public readonly default: any;
```

- *Type:* any

---

##### `description`<sup>Optional</sup> <a name="description" id="cdktf-multi-stack-tfe.TFVariable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="cdktf-multi-stack-tfe.TFVariable.property.nullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* boolean

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="cdktf-multi-stack-tfe.TFVariable.property.sensitive"></a>

```typescript
public readonly sensitive: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="cdktf-multi-stack-tfe.TFVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validation`<sup>Optional</sup> <a name="validation" id="cdktf-multi-stack-tfe.TFVariable.property.validation"></a>

```typescript
public readonly validation: TerraformVariableValidationConfig[];
```

- *Type:* cdktf.TerraformVariableValidationConfig[]

---


### WorkspaceStack <a name="WorkspaceStack" id="cdktf-multi-stack-tfe.WorkspaceStack"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.WorkspaceStack.Initializer"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

new WorkspaceStack(scope: Construct, stackName: string, config?: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.stackName">stackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.stackName"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="cdktf-multi-stack-tfe.WorkspaceStack.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.WorkspaceStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-multi-stack-tfe.WorkspaceStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-multi-stack-tfe.WorkspaceStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.WorkspaceStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.WorkspaceStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.WorkspaceStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-multi-stack-tfe.WorkspaceStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-multi-stack-tfe.WorkspaceStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-multi-stack-tfe.WorkspaceStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-multi-stack-tfe.WorkspaceStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-multi-stack-tfe.WorkspaceStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: Node | TerraformElement): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.WorkspaceStack.getLogicalId.parameter.tfElement"></a>

- *Type:* constructs.Node | cdktf.TerraformElement

---

##### `hasResourceMove` <a name="hasResourceMove" id="cdktf-multi-stack-tfe.WorkspaceStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): boolean
```

##### `prepareStack` <a name="prepareStack" id="cdktf-multi-stack-tfe.WorkspaceStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-multi-stack-tfe.WorkspaceStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-multi-stack-tfe.WorkspaceStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-multi-stack-tfe.WorkspaceStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-multi-stack-tfe.WorkspaceStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="cdktf-multi-stack-tfe.WorkspaceStack.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toHclTerraform` <a name="toHclTerraform" id="cdktf-multi-stack-tfe.WorkspaceStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): {[ key: string ]: any}
```

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.WorkspaceStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.of">of</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.isMultiStackStack">isMultiStackStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.multiStackOf">multiStackOf</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-multi-stack-tfe.WorkspaceStack.isConstruct"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

WorkspaceStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.WorkspaceStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-multi-stack-tfe.WorkspaceStack.isStack"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

WorkspaceStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.WorkspaceStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-multi-stack-tfe.WorkspaceStack.of"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

WorkspaceStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.WorkspaceStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isMultiStackStack` <a name="isMultiStackStack" id="cdktf-multi-stack-tfe.WorkspaceStack.isMultiStackStack"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

WorkspaceStack.isMultiStackStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.WorkspaceStack.isMultiStackStack.parameter.x"></a>

- *Type:* any

---

##### `multiStackOf` <a name="multiStackOf" id="cdktf-multi-stack-tfe.WorkspaceStack.multiStackOf"></a>

```typescript
import { WorkspaceStack } from 'cdktf-multi-stack-tfe'

WorkspaceStack.multiStackOf(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.WorkspaceStack.multiStackOf.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.property.moveTargets">moveTargets</a></code> | <code>cdktf.TerraformResourceTargets</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceStack.property.workspace">workspace</a></code> | <code>@cdktf/provider-tfe.workspace.Workspace</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-multi-stack-tfe.WorkspaceStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-multi-stack-tfe.WorkspaceStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `moveTargets`<sup>Required</sup> <a name="moveTargets" id="cdktf-multi-stack-tfe.WorkspaceStack.property.moveTargets"></a>

```typescript
public readonly moveTargets: TerraformResourceTargets;
```

- *Type:* cdktf.TerraformResourceTargets

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-multi-stack-tfe.WorkspaceStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="cdktf-multi-stack-tfe.WorkspaceStack.property.workspace"></a>

```typescript
public readonly workspace: Workspace;
```

- *Type:* @cdktf/provider-tfe.workspace.Workspace

---


## Structs <a name="Structs" id="Structs"></a>

### BaseStackConfig <a name="BaseStackConfig" id="cdktf-multi-stack-tfe.BaseStackConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.BaseStackConfig.Initializer"></a>

```typescript
import { BaseStackConfig } from 'cdktf-multi-stack-tfe'

const baseStackConfig: BaseStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackConfig.property.defaultWorkspaceConfig">defaultWorkspaceConfig</a></code> | <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackConfig.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackConfig.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackConfig.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `defaultWorkspaceConfig`<sup>Optional</sup> <a name="defaultWorkspaceConfig" id="cdktf-multi-stack-tfe.BaseStackConfig.property.defaultWorkspaceConfig"></a>

```typescript
public readonly defaultWorkspaceConfig: WorkspaceConfig;
```

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a>

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="cdktf-multi-stack-tfe.BaseStackConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="cdktf-multi-stack-tfe.BaseStackConfig.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean;
```

- *Type:* boolean

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-multi-stack-tfe.BaseStackConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### RemoteBackendConfig <a name="RemoteBackendConfig" id="cdktf-multi-stack-tfe.RemoteBackendConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.RemoteBackendConfig.Initializer"></a>

```typescript
import { RemoteBackendConfig } from 'cdktf-multi-stack-tfe'

const remoteBackendConfig: RemoteBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfig.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfig.property.workspaces">workspaces</a></code> | <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace">RemoteBackendConfigWorkspace</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfig.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfig.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-multi-stack-tfe.RemoteBackendConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspaces`<sup>Required</sup> <a name="workspaces" id="cdktf-multi-stack-tfe.RemoteBackendConfig.property.workspaces"></a>

```typescript
public readonly workspaces: RemoteBackendConfigWorkspace;
```

- *Type:* <a href="#cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace">RemoteBackendConfigWorkspace</a>

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="cdktf-multi-stack-tfe.RemoteBackendConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-multi-stack-tfe.RemoteBackendConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### RemoteBackendConfigWorkspace <a name="RemoteBackendConfigWorkspace" id="cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace.Initializer"></a>

```typescript
import { RemoteBackendConfigWorkspace } from 'cdktf-multi-stack-tfe'

const remoteBackendConfigWorkspace: RemoteBackendConfigWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-multi-stack-tfe.RemoteBackendConfigWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### WorkspaceConfig <a name="WorkspaceConfig" id="cdktf-multi-stack-tfe.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.WorkspaceConfig.Initializer"></a>

```typescript
import { WorkspaceConfig } from 'cdktf-multi-stack-tfe'

const workspaceConfig: WorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.agentPoolId">agentPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.allowDestroyPlan">allowDestroyPlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.autoApply">autoApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#description Workspace#description}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.executionMode">executionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.fileTriggersEnabled">fileTriggersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.globalRemoteState">globalRemoteState</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.queueAllRuns">queueAllRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.remoteStateConsumerIds">remoteStateConsumerIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.speculativeEnabled">speculativeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.sshKeyId">sshKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.structuredRunOutputEnabled">structuredRunOutputEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.tagNames">tagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.terraformVersion">terraformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig.property.triggerPrefixes">triggerPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_prefixes Workspace#trigger_prefixes}. |

---

##### `agentPoolId`<sup>Optional</sup> <a name="agentPoolId" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.agentPoolId"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `allowDestroyPlan`<sup>Optional</sup> <a name="allowDestroyPlan" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.allowDestroyPlan"></a>

```typescript
public readonly allowDestroyPlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `autoApply`<sup>Optional</sup> <a name="autoApply" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.autoApply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#auto_apply Workspace#auto_apply}.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#description Workspace#description}.

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.executionMode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#execution_mode Workspace#execution_mode}.

---

##### `fileTriggersEnabled`<sup>Optional</sup> <a name="fileTriggersEnabled" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.fileTriggersEnabled"></a>

```typescript
public readonly fileTriggersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `globalRemoteState`<sup>Optional</sup> <a name="globalRemoteState" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.globalRemoteState"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `queueAllRuns`<sup>Optional</sup> <a name="queueAllRuns" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.queueAllRuns"></a>

```typescript
public readonly queueAllRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `remoteStateConsumerIds`<sup>Optional</sup> <a name="remoteStateConsumerIds" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.remoteStateConsumerIds"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `speculativeEnabled`<sup>Optional</sup> <a name="speculativeEnabled" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.speculativeEnabled"></a>

```typescript
public readonly speculativeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `sshKeyId`<sup>Optional</sup> <a name="sshKeyId" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.sshKeyId"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `structuredRunOutputEnabled`<sup>Optional</sup> <a name="structuredRunOutputEnabled" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.structuredRunOutputEnabled"></a>

```typescript
public readonly structuredRunOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `tagNames`<sup>Optional</sup> <a name="tagNames" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.tagNames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#tag_names Workspace#tag_names}.

---

##### `terraformVersion`<sup>Optional</sup> <a name="terraformVersion" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.terraformVersion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#terraform_version Workspace#terraform_version}.

---

##### `triggerPrefixes`<sup>Optional</sup> <a name="triggerPrefixes" id="cdktf-multi-stack-tfe.WorkspaceConfig.property.triggerPrefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---



