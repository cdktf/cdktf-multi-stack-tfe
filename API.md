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
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions">getRemoteBackendOptions</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStack.getWorkspaceName">getWorkspaceName</a></code> | If you want to have more control over the workspace name, you can override this method. |

---

##### `toString` <a name="toString" id="cdktf-multi-stack-tfe.BaseStack.toString"></a>

```typescript
public toString()
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-multi-stack-tfe.BaseStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack)
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-multi-stack-tfe.BaseStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.BaseStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any)
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.BaseStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.BaseStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-multi-stack-tfe.BaseStack.allProviders"></a>

```typescript
public allProviders()
```

##### `dependsOn` <a name="dependsOn" id="cdktf-multi-stack-tfe.BaseStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack)
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-multi-stack-tfe.BaseStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-multi-stack-tfe.BaseStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists()
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-multi-stack-tfe.BaseStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node)
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.BaseStack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="cdktf-multi-stack-tfe.BaseStack.prepareStack"></a>

```typescript
public prepareStack()
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack)
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-multi-stack-tfe.BaseStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string)
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-multi-stack-tfe.BaseStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.BaseStack.toTerraform"></a>

```typescript
public toTerraform()
```

##### `bootstrapWorkspace` <a name="bootstrapWorkspace" id="cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace"></a>

```typescript
public bootstrapWorkspace(stackName: string)
```

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.bootstrapWorkspace.parameter.stackName"></a>

- *Type:* string

---

##### `getRemoteBackendOptions` <a name="getRemoteBackendOptions" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions"></a>

```typescript
public getRemoteBackendOptions(stackName: string)
```

###### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.BaseStack.getRemoteBackendOptions.parameter.stackName"></a>

- *Type:* string

---

##### `getWorkspaceName` <a name="getWorkspaceName" id="cdktf-multi-stack-tfe.BaseStack.getWorkspaceName"></a>

```typescript
public getWorkspaceName(stackName: string)
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

new Stack(scope: Construct, stackName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.Initializer.parameter.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-multi-stack-tfe.Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdktf-multi-stack-tfe.Stack.Initializer.parameter.stackName"></a>

- *Type:* string

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
public toString()
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-multi-stack-tfe.Stack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack)
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-multi-stack-tfe.Stack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-multi-stack-tfe.Stack.addOverride"></a>

```typescript
public addOverride(path: string, value: any)
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-multi-stack-tfe.Stack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-multi-stack-tfe.Stack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-multi-stack-tfe.Stack.allProviders"></a>

```typescript
public allProviders()
```

##### `dependsOn` <a name="dependsOn" id="cdktf-multi-stack-tfe.Stack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack)
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-multi-stack-tfe.Stack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-multi-stack-tfe.Stack.ensureBackendExists"></a>

```typescript
public ensureBackendExists()
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-multi-stack-tfe.Stack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: TerraformElement | Node)
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-multi-stack-tfe.Stack.getLogicalId.parameter.tfElement"></a>

- *Type:* cdktf.TerraformElement | constructs.Node

---

##### `prepareStack` <a name="prepareStack" id="cdktf-multi-stack-tfe.Stack.prepareStack"></a>

```typescript
public prepareStack()
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-multi-stack-tfe.Stack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack)
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-multi-stack-tfe.Stack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-multi-stack-tfe.Stack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string)
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-multi-stack-tfe.Stack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `toTerraform` <a name="toTerraform" id="cdktf-multi-stack-tfe.Stack.toTerraform"></a>

```typescript
public toTerraform()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.of">of</a></code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.Stack.isMultiStackStack">isMultiStackStack</a></code> | *No description.* |

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
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.sslSkipVerify">sslSkipVerify</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktf-multi-stack-tfe.BaseStackOptions.property.token">token</a></code> | <code>string</code> | *No description.* |

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



