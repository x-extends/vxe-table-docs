<template>
  <div>
    <CodeLight path="grid/colResizable/group/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分组表头列宽拖动">分组表头拖动</vxe-tip>
        <vxe-tip status="error">
          当使用分组列头时，只允许拖动列，不允许拖动分组标题
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/colResizable/group/Demo2">
      <template #tip>
        <vxe-tip status="primary">左右冻结列的分组表头拖动</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
