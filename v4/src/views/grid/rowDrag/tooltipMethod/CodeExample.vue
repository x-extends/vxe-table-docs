<template>
  <div>
    <CodeLight path="grid/rowDrag/tooltipMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义提示">
          通过 <ApiLink name="grid" prop="row-drag-config"/>.<ApiLink name="grid" prop="tooltipMethod"/> 自定义拖拽提示内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
