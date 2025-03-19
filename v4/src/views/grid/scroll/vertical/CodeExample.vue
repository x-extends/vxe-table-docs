<template>
  <div>
    <CodeLight path="grid/scroll/vertical/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="纵向虚拟滚动">
          通过 scroll-y.enabled 与 scroll-y.gt 组合开启，其中 enabled 为总开关，gt 是指当总行数大于指定行数时自动开启。
        </vxe-tip>
        <vxe-tip status="success">
          <div>理论上限：纵向最大可以支持 30w 行，当 gt 为 0 时为总是启用。</div>
          <div>性能优化：纵向虚拟滚动行高越高越流畅，行高设置 row-config.height</div>
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>启用纵向虚拟滚动，建议开启 show-overflow 获得最高渲染性能</div>
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 匀速向上滚动数据 |
            | Arrow Down ↓ | 匀速向下滚动数据 |
            | Arrow Left ← | 匀速向左滚动数据 |
            | Arrow Right → | 匀速向右滚动数据 |
            | Page Up | 向上翻页滚动 |
            | Page Down | 向下翻页滚动 |
            | Spacebar | 翻页滚动 |
            | Home | 滚动到顶部 |
            | End | 滚动到底部 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
