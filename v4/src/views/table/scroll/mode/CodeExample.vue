<template>
  <div>
    <CodeLight path="table/scroll/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="优化模式">
          支持原生和优化两种模式，可以通过 <ApiLink name="table" prop="scroll-y"/>.mode='wheel' 设置为优化模式
        </vxe-tip>
        <vxe-tip status="success">
          优化模式可以解决虚拟滚动的渲染空白期
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
