<template>
  <div>
    <CodeLight path="grid/checkbox/checkMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="checkMethod"/> 方法控制 checkbox 是否允许用户手动勾选，如果被禁用，可以调用 <ApiLink name="table" prop="setCheckboxRow"/> 方法手动设置</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/checkbox/checkMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">树结构复选框的禁用</vxe-tip>
        <vxe-tip status="error">
          需要注意当树形结构禁用复选框时，如果被禁用了父节点，那么就会失去联动能力
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
