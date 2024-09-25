<template>
  <div>
    <CodeLight path="grid/edit/rowDisable/Demo1">
      <template #tip>
        <vxe-tip status="primary">设置 <ApiLink name="grid" prop="edit-config"/> 的 <ApiLink name="grid" prop="beforeEditMethod"/> 方法判断单元格是否禁用，例如：限制第二行不允许编辑</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/rowDisable/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 disabled 方式禁用，配合 <ApiLink name="grid" prop="edit-method"/> 事件，实现行编辑中对列的权限控制</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
