<template>
  <div>
    <CodeLight path="grid/rowResizable/recalcManual/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动刷新行高">
          当设置行高后，由于重新增加或减少内容，导致高度不够或者过高，可以通过调用 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="recalcRowHeight"/> 方法来重新计算行高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
