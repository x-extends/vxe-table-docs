<template>
  <div>
    <CodeLight path="grid/colResizable/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="调整列宽">
          调整列宽之后，对于未设置列宽的列会重新动态分配剩余宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/colResizable/mode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="table" prop="resizable-config"/>.<ApiLink name="table" prop="dragMode"/>='fixed' 属性启用固定宽度模式
        </vxe-tip>
        <vxe-tip status="error">
          在该模式下拖拽列宽之后将会始终保持和界面看到的列宽完全一致，不会再重新动态分配剩余列宽
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
