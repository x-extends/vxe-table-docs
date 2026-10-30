<template>
  <div>
    <CodeLight path="global/renderer/table/default/myHeaderLink/Demo1" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现表头超链接">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myHeaderLink/Demo2" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
