<template>
  <div>
    <CodeLight path="grid/scroll/horizontal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="横向虚拟滚动">
          通过 virtual-x-config.enabled 与 virtual-x-config.gt 组合开启，其中 enabled 为总开关，gt 是指当总列数大于指定列数时自动开启。
        </vxe-tip>
        <vxe-tip status="success">
          <div>理论上限：横向平均上限支持 8w 列（最大上限 20w 列）。当 gt 为 0 时为总是启用。</div>
          <div>性能优化：横向虚拟滚动列宽越宽越流畅，列宽设置 column.width | column.min-width</div>
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>启用横向虚拟滚动，建议开启 show-header-overflow 和 show-footer-overflow 获得最高渲染性能</div>
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
