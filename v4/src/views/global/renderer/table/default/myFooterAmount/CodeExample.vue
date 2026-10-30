<template>
  <div>
    <CodeLight path="global/renderer/table/default/myFooterAmount/Demo1" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现实现表尾金额格式化">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myFooterAmount/Demo2" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
