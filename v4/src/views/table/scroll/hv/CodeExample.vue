<template>
  <div>
    <CodeLight path="table/scroll/hv/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="同时纵向与横向虚拟滚动">
          通过 virtual-x-config.enabled 与 virtual-x-config.enabled 同时开启。
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
