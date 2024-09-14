<template>
  <div>
    <CodeLight path="global/renderer/table/expand/myExpandList/Demo1" :extraImports="['./DemoExpandList.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个展开列表">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/expand/myExpandList/Demo2" :extraImports="['./DemoExpandList.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
