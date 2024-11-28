<template>
  <div>
    <CodeLight path="table/scroll/autoRowFixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应行高 + 复杂渲染">
          同时开启纵向与横向虚拟滚动与自定义行高冻结列
        </vxe-tip>
        <vxe-tip status="error">
          需要注意动态行高与横向虚拟滚动同时使用时，由于其他被卷去的单元格是不渲染，当滑动到可视区就会被渲染，这时可能由于后面的单元格比前面的单元格高一些，就会有一种单元格突然变高的特性
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
