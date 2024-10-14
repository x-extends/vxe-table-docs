<template>
  <div>
    <CodeLight path="grid/scroll/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="滚动模式">
          支持原生和滚轮两种模式，可以通过 <ApiLink name="grid" prop="scroll-y"/>.mode='wheel' 设置为滚轮模式
        </vxe-tip>
        <vxe-tip status="error">
          滚轮模式可以解决虚拟滚动的渲染空白期，缺点是会失效原生快捷键操作
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
