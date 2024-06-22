<template>
  <div>
    <CodeLight path="table/expand/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="冻结列">
          当与冻结列同时使用时，需要设置 show-overflow，不支持自动换行
        </vxe-tip>
        <vxe-tip status="error">
          如果不启用 show-overflow 情况下，会造成单元格里的组件会多次渲染
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
