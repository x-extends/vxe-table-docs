<template>
  <div>
    <CodeLight path="global/renderer/table/default/myCellImg/Demo1" :extraImports="['./DemoCellImg.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现单元格图片预览">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myCellImg/Demo2" :extraImports="['./DemoCellImg.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
