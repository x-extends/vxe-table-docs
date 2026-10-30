<template>
  <div>
    <CodeLight path="global/renderer/table/toolbar/tool/Demo1" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个右侧工具按钮">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/toolbar/tool/Demo2" :extra-imports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
