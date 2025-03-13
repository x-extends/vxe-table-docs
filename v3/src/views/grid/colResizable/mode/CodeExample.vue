<template>
  <div>
    <CodeLight path="grid/colResizable/mode/Demo1" previewPath="/resource/docsImg/table_col_resizable_mode_auto.gif">
      <template #tip>
        <vxe-tip status="primary" title="调整列宽">
          调整列宽之后，对于未设置列宽的列会重新动态分配剩余宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/colResizable/mode/Demo2" previewPath="/resource/docsImg/table_col_resizable_mode_fixed.gif">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="dragMode"/>='fixed' 属性启用固定宽度模式
        </vxe-tip>
        <vxe-tip status="error">
          在该模式下拖拽列宽之后将会始终保持和界面看到的列宽完全一致，不会再重新动态分配剩余列宽
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
