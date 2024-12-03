<template>
  <div>
    <CodeLight path="global/renderer/table/edit/myEditAmount/Demo1" :extraImports="['./DemoEditAmount.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个金额输入">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/edit/myEditAmount/Demo2" :extraImports="['./DemoEditAmount.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
