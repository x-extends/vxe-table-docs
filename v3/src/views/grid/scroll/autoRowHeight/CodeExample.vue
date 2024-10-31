<template>
  <div>
    <CodeLight path="grid/scroll/autoRowHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应行高">
          启用虚拟滚动后默认支持自适应行高，可以通过 show-overflow=false 关闭自适应行高。
        </vxe-tip>
        <vxe-tip status="error">
          <div>理论上限：开启自适应行高后最大可以支持 8w 行，具体由渲染量决定。</div>
        </vxe-tip>
        <vxe-tip status="success">
          <div>由于未加载的行是无法知道行高的。虚拟算法原理是估算虚拟行的行高，通过已渲染的行来纠正行高值。只有当所有数据被查看过一次之后才能达到和同等行高一样的效果。否则快速拉动滚动时会出现鼠标偏移，效果上会比同等行高略差。</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
