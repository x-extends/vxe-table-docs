<template>
  <div>
    <CodeLight path="table/edit/rowDisable/Demo1">
      <template #tip>
        <vxe-tip status="primary">设置 <ApiLink name="table" prop="edit-config"/> 的 <ApiLink name="table" prop="beforeEditMethod"/> 方法判断单元格是否禁用，例如：限制第二行不允许编辑</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/rowDisable/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 disabled 方式禁用，配合 <ApiLink name="table" prop="edit-method"/> 事件，实现行编辑中对列的权限控制</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
