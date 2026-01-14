<template>
  <div>
    <CodeLight path="grid/other/compactCell/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="紧凑模式">
          通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="height"/> 和 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="pading"/> 来修改默认单元格高度和边距
        </vxe-tip>
        <vxe-tip status="warning" title="小提示">
          当行高越小，渲染的单元格数量越多，将会影响流畅度
        </vxe-tip>
        <vxe-tip status="error">
          建议单元格高度最低不应该低于30px，否则将会导致无法适配标准控件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
