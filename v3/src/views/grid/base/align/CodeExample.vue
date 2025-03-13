<template>
  <div>
    <CodeLight path="grid/base/align/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="对齐方式">通过 <ApiLink name="column" prop="align"/> 设置表格整体对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/align/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="对齐方式">通过 <ApiLink name="grid" prop="align"/> 设置表格整体对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/align/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="header-align"/> 设置表头对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/align/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="footer-align"/> 设置表尾对齐方式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
