<template>
  <div>
    <CodeLight path="global/renderer/table/default/myFullAmount/Demo1" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现完整金额格式化">
          一个渲染器包含表头、单元格、表尾的渲染，对于封装通用业务组件时非常有用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myFullAmount/Demo2" :extraImports="['./demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
