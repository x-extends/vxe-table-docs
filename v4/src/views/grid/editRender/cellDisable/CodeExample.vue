<template>
  <div>
    <CodeLight path="grid/editRender/cellDisable/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="edit-config"/>.<ApiLink name="grid" prop="beforeEditMethod"/> 方法来判断单元格是否禁用，禁用后不可编辑</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/editRender/cellDisable/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 disabled 方式禁用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
