<template>
  <div>
    <CodeLight path="global/renderer/table/default/myHeaderLink/Demo1" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现表头超链接">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myHeaderLink/Demo2" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
