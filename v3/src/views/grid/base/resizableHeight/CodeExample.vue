<template>
  <div>
    <CodeLight path="grid/base/resizableHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="行高拖拽调整">
          通过设置 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="resizable"/> 和 <ApiLink name="column" prop="row-resize"/> 属性启用行高拖动功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/resizableHeight/Demo2">
      <template #tip>
        <vxe-tip status="primary">纵向滚动条</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
