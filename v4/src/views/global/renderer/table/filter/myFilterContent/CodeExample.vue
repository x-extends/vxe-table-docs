<template>
  <div>
    <CodeLight path="global/renderer/table/filter/myFilterContent/Demo1" :extra-imports="['./DemoFilterContent.vue','./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个显示列表的筛选">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/filter/myFilterContent/Demo2" :extra-imports="['./DemoFilterContent.vue','./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
