<template>
  <div>
    <CodeLight path="global/renderer/table/default/myCellAmount/Demo1" :extraImports="['./DemoCellAmount.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现单元格金额格式化">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myCellAmount/Demo2" :extraImports="['./DemoCellAmount.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
