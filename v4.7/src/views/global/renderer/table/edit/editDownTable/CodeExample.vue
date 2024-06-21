<template>
  <div>
    <CodeLight path="global/renderer/table/edit/editDownTable/Demo1" :extraImports="['./DemoDownTable.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个下拉表格">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/edit/editDownTable/Demo2" :extraImports="['./DemoDownTable.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
