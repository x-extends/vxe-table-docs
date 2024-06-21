<template>
  <div>
    <CodeLight path="global/renderer/table/expand/myExpandTable/Demo1" :extraImports="['./DemoExpandTable.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个展开表格">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/expand/myExpandTable/Demo2" :extraImports="['./DemoExpandTable.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
