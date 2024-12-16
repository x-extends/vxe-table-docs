<template>
  <div>
    <CodeLight path="table/rowDrag/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          通过 <ApiLink name="table" prop="row-drag-config"/>.<ApiLink name="table" prop="trigger"/> 设置触发方式为单元格
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/rowDrag/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          拖拽整行
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
