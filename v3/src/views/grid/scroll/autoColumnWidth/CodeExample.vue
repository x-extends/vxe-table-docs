<template>
  <div>
    <CodeLight path="grid/scroll/autoColumnWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应列宽">
          可以通过 <ApiLink name="grid" prop="width"/>='auto' | <ApiLink name="grid" prop="min-width"/>='auto' 来启用自适应列宽功能。
        </vxe-tip>
        <vxe-tip status="success">
          <div>由于未加载行的单元格是无法知道列宽的。虚拟算法原理是以当前渲染的单元格为基准，通过滚动到被渲染的单元格来纠正单元格宽度值。只有当所有数据被查看过一次之后才能达到和固定宽度一样的效果。效果上动态渲染列宽会比固定宽度体验略差。</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
