<template>
  <div>
    <CodeLight path="table/scroll/merge/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格合并">
          虚拟渲染与单元格合并，可以通过设置参数 <ApiLink name="table" prop="merge-cells"/> 或调用函数 <ApiLink name="table" prop="setMergeCells"/>、<ApiLink name="table" prop="setMergeCells"/> 来控制单元格的临时合并状态<br>
        </vxe-tip>
        <vxe-tip status="error">合并是以牺牲渲染性能为代价，合并数量越多就越慢，如果需要用合并建议关闭虚拟滚动或者减少合并数量</vxe-tip>
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
