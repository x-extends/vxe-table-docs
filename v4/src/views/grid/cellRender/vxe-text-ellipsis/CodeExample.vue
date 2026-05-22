<template>
  <div>
    <CodeLight path="grid/cellRender/vxe-text-ellipsis/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多行文本溢出省略">
          查看 <ApiLink name="text-ellipsis" redirect/> 文档 API
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          但需要给单元格显示 tooltip 工具提示时，可以通过设置 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="showAll"/> 来开启
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
