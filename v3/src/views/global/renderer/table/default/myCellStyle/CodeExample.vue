<template>
  <div>
    <CodeLight path="global/renderer/table/default/myCellStyle/Demo1" :extraImports="['./DemoCellStyle.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="同时使用 formatter">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myCellStyle/Demo2" :extraImports="['./DemoCellStyle.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
