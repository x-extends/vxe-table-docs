<template>
  <div>
    <CodeLight path="global/renderer/table/default/myCellLink/Demo1" :extraImports="['./DemoCellLink.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现单元格超链接">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myCellLink/Demo2" :extraImports="['./DemoCellLink.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
