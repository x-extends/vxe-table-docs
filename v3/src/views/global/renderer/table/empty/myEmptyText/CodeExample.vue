<template>
  <div>
    <CodeLight path="global/renderer/table/empty/myEmptyText/Demo1" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Table 使用"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/empty/myEmptyText/Demo2" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
