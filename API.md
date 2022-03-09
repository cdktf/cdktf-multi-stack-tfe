# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseStack <a name="BaseStack" id="cdktf-multi-stack-tfe.BaseStack"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.BaseStack.Initializer"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

new BaseStack(scope: Construct, organizationName: string, prefix: string, options?: BaseStackOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.Initializer.parameter.options">options</a></code> | <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions">BaseStackOptions</a></code> | *No description.* |

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

- *Type:* <a href="#cdktf-multi-stack-tfe.BaseStackOptions">BaseStackOptions</a>

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
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace">bootstrapWorkspace</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.createSecret">createSecret</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions">getRemoteBackendOptions</a></code> | *No description.* |
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
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.BaseStack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

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
public createSecret(targetStack: Stack, secretName: string, config: TerraformVariableConfig): void
```

###### `targetStack`<sup>Required</sup> <a name="targetStack" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.targetStack"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.Stack">Stack</a>

---

###### `secretName`<sup>Required</sup> <a name="secretName" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.secretName"></a>

- *Type:* string

---

###### `config`<sup>Required</sup> <a name="config" id="cdktf-multi-stack-tfe.BaseStack.createSecret.parameter.config"></a>

- *Type:* cdktf.TerraformVariableConfig

---

##### `getRemoteBackendOptions` <a name="getRemoteBackendOptions" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions"></a>

```typescript
public getRemoteBackendOptions(stackName: string): RemoteBackendOptions
```

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions.parameter.stackName"></a>

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

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-multi-stack-tfe.BaseStack.isConstruct"></a>

```typescript
import { BaseStack } from 'cdktf-multi-stack-tfe'

BaseStack.isConstruct(x: any)
```

Checks if `x` is a construct.

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
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.organization">organization</a></code> | <code>@cdktf/provider-tfe.DataTfeOrganization</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.property.tfeProvider">tfeProvider</a></code> | <code>@cdktf/provider-tfe.TfeProvider</code> | *No description.* |

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-multi-stack-tfe.BaseStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-multi-stack-tfe.BaseStack.property.organization"></a>

```typescript
public readonly organization: DataTfeOrganization;
```

- *Type:* @cdktf/provider-tfe.DataTfeOrganization

---

##### `tfeProvider`<sup>Required</sup> <a name="tfeProvider" id="cdktf-multi-stack-tfe.BaseStack.property.tfeProvider"></a>

```typescript
public readonly tfeProvider: TfeProvider;
```

- *Type:* @cdktf/provider-tfe.TfeProvider

---


### Stack <a name="Stack" id="cdktf-multi-stack-tfe.Stack"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.Stack.Initializer"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

new Stack(scope: Construct, stackName: string, config?: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.Initializer.parameter.stackName">stackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.Stack.Initializer.parameter.stackName"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="cdktf-multi-stack-tfe.Stack.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-multi-stack-tfe.Stack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.Stack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-multi-stack-tfe.Stack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-multi-stack-tfe.Stack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.Stack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.Stack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.Stack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-multi-stack-tfe.Stack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-multi-stack-tfe.Stack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-multi-stack-tfe.Stack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-multi-stack-tfe.Stack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-multi-stack-tfe.Stack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.Stack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="cdktf-multi-stack-tfe.Stack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-multi-stack-tfe.Stack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-multi-stack-tfe.Stack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-multi-stack-tfe.Stack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-multi-stack-tfe.Stack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.Stack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.of">of</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isMultiStackStack">isMultiStackStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.multiStackOf">multiStackOf</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-multi-stack-tfe.Stack.isConstruct"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

Stack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.Stack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-multi-stack-tfe.Stack.isStack"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

Stack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.Stack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-multi-stack-tfe.Stack.of"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

Stack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.Stack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isMultiStackStack` <a name="isMultiStackStack" id="cdktf-multi-stack-tfe.Stack.isMultiStackStack"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

Stack.isMultiStackStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.Stack.isMultiStackStack.parameter.x"></a>

- *Type:* any

---

##### `multiStackOf` <a name="multiStackOf" id="cdktf-multi-stack-tfe.Stack.multiStackOf"></a>

```typescript
import { Stack } from 'cdktf-multi-stack-tfe'

Stack.multiStackOf(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-multi-stack-tfe.Stack.multiStackOf.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-multi-stack-tfe.Stack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.property.workspace">workspace</a></code> | <code>@cdktf/provider-tfe.Workspace</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-multi-stack-tfe.Stack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-multi-stack-tfe.Stack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-multi-stack-tfe.Stack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="cdktf-multi-stack-tfe.Stack.property.workspace"></a>

```typescript
public readonly workspace: Workspace;
```

- *Type:* @cdktf/provider-tfe.Workspace

---


### Variable <a name="Variable" id="cdktf-multi-stack-tfe.Variable"></a>

#### Initializers <a name="Initializers" id="cdktf-multi-stack-tfe.Variable.Initializer"></a>

```typescript
import { Variable } from 'cdktf-multi-stack-tfe'

new Variable(scope: Construct, id: string, config: TerraformVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Variable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.Initializer.parameter.config">config</a></code> | <code>cdktf.TerraformVariableConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.Variable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-multi-stack-tfe.Variable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-multi-stack-tfe.Variable.Initializer.parameter.config"></a>

- *Type:* cdktf.TerraformVariableConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Variable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-multi-stack-tfe.Variable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-multi-stack-tfe.Variable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-multi-stack-tfe.Variable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.synthesizeAttributes">synthesizeAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.Variable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.Variable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.Variable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.Variable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-multi-stack-tfe.Variable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-multi-stack-tfe.Variable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-multi-stack-tfe.Variable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-multi-stack-tfe.Variable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.Variable.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `synthesizeAttributes` <a name="synthesizeAttributes" id="cdktf-multi-stack-tfe.Variable.synthesizeAttributes"></a>

```typescript
public synthesizeAttributes(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Variable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-multi-stack-tfe.Variable.isConstruct"></a>

```typescript
import { Variable } from 'cdktf-multi-stack-tfe'

Variable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-multi-stack-tfe.Variable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.booleanValue">booleanValue</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.listValue">listValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.default">default</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.nullable">nullable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.sensitive">sensitive</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Variable.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-multi-stack-tfe.Variable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-multi-stack-tfe.Variable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-multi-stack-tfe.Variable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="cdktf-multi-stack-tfe.Variable.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-multi-stack-tfe.Variable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listValue`<sup>Required</sup> <a name="listValue" id="cdktf-multi-stack-tfe.Variable.property.listValue"></a>

```typescript
public readonly listValue: string[];
```

- *Type:* string[]

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="cdktf-multi-stack-tfe.Variable.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="cdktf-multi-stack-tfe.Variable.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.Variable.property.value"></a>

```typescript
public readonly value: any;
```

- *Type:* any

---

##### `default`<sup>Optional</sup> <a name="default" id="cdktf-multi-stack-tfe.Variable.property.default"></a>

```typescript
public readonly default: any;
```

- *Type:* any

---

##### `description`<sup>Optional</sup> <a name="description" id="cdktf-multi-stack-tfe.Variable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="cdktf-multi-stack-tfe.Variable.property.nullable"></a>

```typescript
public readonly nullable: boolean;
```

- *Type:* boolean

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="cdktf-multi-stack-tfe.Variable.property.sensitive"></a>

```typescript
public readonly sensitive: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="cdktf-multi-stack-tfe.Variable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### BaseStackOptions <a name="BaseStackOptions" id="cdktf-multi-stack-tfe.BaseStackOptions"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.BaseStackOptions.Initializer"></a>

```typescript
import { BaseStackOptions } from 'cdktf-multi-stack-tfe'

const baseStackOptions: BaseStackOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.defaultWorkspaceConfig">defaultWorkspaceConfig</a></code> | <code><a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `defaultWorkspaceConfig`<sup>Optional</sup> <a name="defaultWorkspaceConfig" id="cdktf-multi-stack-tfe.BaseStackOptions.property.defaultWorkspaceConfig"></a>

```typescript
public readonly defaultWorkspaceConfig: WorkspaceConfig;
```

- *Type:* <a href="#cdktf-multi-stack-tfe.WorkspaceConfig">WorkspaceConfig</a>

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="cdktf-multi-stack-tfe.BaseStackOptions.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="sslSkipVerify" id="cdktf-multi-stack-tfe.BaseStackOptions.property.sslSkipVerify"></a>

```typescript
public readonly sslSkipVerify: boolean;
```

- *Type:* boolean

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-multi-stack-tfe.BaseStackOptions.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### RemoteBackendOptions <a name="RemoteBackendOptions" id="cdktf-multi-stack-tfe.RemoteBackendOptions"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.RemoteBackendOptions.Initializer"></a>

```typescript
import { RemoteBackendOptions } from 'cdktf-multi-stack-tfe'

const remoteBackendOptions: RemoteBackendOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptions.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptions.property.workspaces">workspaces</a></code> | <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace">RemoteBackendOptionsWorkspace</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptions.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptions.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `organization`<sup>Required</sup> <a name="organization" id="cdktf-multi-stack-tfe.RemoteBackendOptions.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `workspaces`<sup>Required</sup> <a name="workspaces" id="cdktf-multi-stack-tfe.RemoteBackendOptions.property.workspaces"></a>

```typescript
public readonly workspaces: RemoteBackendOptionsWorkspace;
```

- *Type:* <a href="#cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace">RemoteBackendOptionsWorkspace</a>

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="cdktf-multi-stack-tfe.RemoteBackendOptions.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-multi-stack-tfe.RemoteBackendOptions.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

### RemoteBackendOptionsWorkspace <a name="RemoteBackendOptionsWorkspace" id="cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace"></a>

#### Initializer <a name="Initializer" id="cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace.Initializer"></a>

```typescript
import { RemoteBackendOptionsWorkspace } from 'cdktf-multi-stack-tfe'

const remoteBackendOptionsWorkspace: RemoteBackendOptionsWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-multi-stack-tfe.RemoteBackendOptionsWorkspace.property.name"></a>

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



