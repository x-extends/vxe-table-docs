<template>
  <div>
    <CodeLight path="global/renderer/table/filter/myFilterInput/Demo1" :extraImports="['./DemoFilterInput.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个输入筛选">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/filter/myFilterInput/Demo2" :extraImports="['./DemoFilterInput.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
