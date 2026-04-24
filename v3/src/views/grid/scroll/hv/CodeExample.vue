<template>
  <div>
    <CodeLight path="grid/scroll/hv/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="同时纵向与横向虚拟滚动">
          通过 virtual-y-config.enabled 与 virtual-x-config.enabled 同时开启。
        </vxe-tip>
        <vxe-tip status="warning">
          <div>理论上限：纵向最大可以支持 30w 行，横向平均上限支持 8w 列（最大上限 20w 列）。当 gt 为 0 时为总是启用。</div>
          <div>渲染量限制：支持纵向可视区最大60行（总最大30万行），横向可视区最大40列（总最大3万列），可视区数量是指实际渲染的单元格数量（行*列=单元格数量）。流畅度说明：小于160（极致流畅）、小于400（流畅）、大于400（影响流畅度）、大于600（影响卡顿）、大于1400（严重卡顿）</div>
        </vxe-tip>
        <vxe-tip status="error" title="同时纵向与横向虚拟滚动">
          如果同时加载超大量行与列，需要大内存与更长的预加载时间
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
