<template>
  <div>
    <CodeLight path="grid/scroll/horizontal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="横向虚拟滚动">
          通过 <ApiLink name="grid" prop="virtual-x-config"/>.<ApiLink name="grid" prop="enabled"/> 与 <ApiLink name="grid" prop="virtual-x-config"/>.<ApiLink name="grid" prop="gt"/> 组合开启，其中 <ApiLink name="grid" prop="enabled"/> 为总开关，<ApiLink name="grid" prop="gt"/> 是指当总列数大于指定列数时自动开启。
        </vxe-tip>
        <vxe-tip status="warning">
          <div>理论上限：横向平均上限支持 8w 列（最大上限 20w 列）。当 gt 为 0 时为总是启用。</div>
          <div>渲染量限制：支持纵向可视区最大60行（总最大30万行），横向可视区最大40列（总最大3万列），可视区数量是指实际渲染的单元格数量（行*列=单元格数量）。流畅度说明：小于160（极致流畅）、小于400（流畅）、大于400（影响流畅度）、大于600（影响卡顿）、大于1400（严重卡顿）</div>
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>启用横向虚拟滚动，建议开启 <ApiLink name="grid" prop="show-header-overflow"/> 和 <ApiLink name="grid" prop="show-footer-overflow "/>获得最高渲染性能</div>
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
