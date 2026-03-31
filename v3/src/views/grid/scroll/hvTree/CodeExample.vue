<template>
  <div>
    <CodeLight path="grid/scroll/hvTree/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树结构">
          同时纵向与横向虚拟滚动。
        </vxe-tip>
        <vxe-tip status="error">
          虚拟滚动仅支持 <ApiLink name="grid" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
