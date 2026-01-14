<template>
  <div>
    <CodeLight path="grid/scroll/compactV/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="紧凑模式">
          通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="height"/> 和 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="pading"/> 来修改默认单元格高度和边距
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          当行高越小，渲染的单元格数量越多，将会影响流畅度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
