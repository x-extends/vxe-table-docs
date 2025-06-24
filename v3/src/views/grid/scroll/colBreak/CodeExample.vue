<template>
  <div>
    <CodeLight path="grid/scroll/colBreak/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列标题自动换行">
          设置 <ApiLink name="grid" prop="show-header-overflow"/>=false 启用自适应换行
        </vxe-tip>
        <vxe-tip status="error">
          如果不需要自适应列头高度，建议设置 <ApiLink name="grid" prop="show-header-overflow"/>=true 设置标题溢出隐藏可以获得最高渲染性能
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
