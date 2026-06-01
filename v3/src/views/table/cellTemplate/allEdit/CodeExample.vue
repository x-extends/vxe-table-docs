<template>
  <div>
    <CodeLight path="table/cellTemplate/allEdit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现全部单元格可编辑"></vxe-tip>
        <vxe-tip status="error">
          适用数据量不大的特殊场景，渲染量越大就越卡顿
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/cellTemplate/allEdit/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          虚拟滚动，大数据量使用
        </vxe-tip>
        <vxe-tip status="error">
          适用数据量不大的特殊场景，渲染量越大就越卡顿
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
