<template>
  <div>
    <CodeLight path="table/colResizable/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="冻结列列宽调整">冻结左列宽拖动（冻结左不允许超过表格右边距）</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/colResizable/fixed/Demo2">
      <template #tip>
        <vxe-tip status="primary">冻结右列宽拖动（冻结右不允许超过表格左边距）</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/colResizable/fixed/Demo3">
      <template #tip>
        <vxe-tip status="primary">左右冻结列宽拖动（冻结左不允许超过冻结右，冻结右不允许超过冻结左）</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
