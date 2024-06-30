<template>
  <div>
    <CodeLight path="global/renderer/table/filter/myFilterComplex/Demo1" :extraImports="['./DemoFilterComplex.vue','./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个多条件筛选">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/filter/myFilterComplex/Demo2" :extraImports="['./DemoFilterComplex.vue','./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
