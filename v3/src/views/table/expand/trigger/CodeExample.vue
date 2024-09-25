<template>
  <div>
    <CodeLight path="table/expand/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          默认点击按钮触发
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/expand/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          点击单元格触发
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/expand/trigger/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          点击行触发
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/expand/trigger/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          手动触发，只能通过函数式调用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
