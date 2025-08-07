<template>
  <div>
    <CodeLight path="grid/rowResizable/textarea/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应文本域">
          当拖拽行高时，自动更新文本域高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowResizable/textarea/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现编辑后自动更新行高，手动调用 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="recalcRowHeight"/> 方法来重新计算行高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
