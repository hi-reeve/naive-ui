# 下拉菜单 Dropdown

当你想触发一些操作的时候。

## 演示

```demo
basic
trigger
cascade
placement
size
manual-position
group-debug
```

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| animated | `boolean` | `true` |  |
| keyboard | `boolean` | `true` | 是否支持键盘操作（注意和其他内容键盘操作可能的冲突） |
| options | `Array<DropdownOption \| DropdownDivider \| DropdownSubmenu>` | `[]` |  |
| size | `'small'\|'medium'\|'large'\|'huge'` | `'medium'` |  |
| on-select | `(key: string \| number) => any` | `undefined` |  |

对于其他 Props，参考 [Popover Props](n-popover#Props)。注意 `arrow`, `raw` 属性不可用。

### DropdownOption Type

| 属性  | 类型               | 说明     |
| ----- | ------------------ | -------- |
| icon  | `() => VNode`      |          |
| key   | `string \| number` | 需要唯一 |
| label | `string`           |          |

### DropdownDivider Type

| 属性 | 类型               | 说明     |
| ---- | ------------------ | -------- |
| type | `'divider'`        |          |
| key  | `string \| number` | 需要唯一 |

### DropdownSubmenu Type

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | `'submenu'` |  |
| label | `string` |  |
| icon | `() => VNode` |  |
| key | `string \| number` | 需要唯一 |
| children | `Array<DropdownOption \| DropdownDivider \| DropdownGroup \| DropdownSubmenu>` |  |

### DropdownGroup Type

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | `'group'` |  |
| label | `string` |  |
| icon | `() => VNode` |  |
| key | `string \| number` | 需要唯一 |
| children | `Array<DropdownOption \| DropdownDivider \| DropdownSubmenu>` |  |