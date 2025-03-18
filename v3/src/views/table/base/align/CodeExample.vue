<template>
  <div>
    <CodeLight path="table/base/align/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="对齐方式">通过 <ApiLink name="column" prop="align"/> 设置指定列的对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/align/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="align"/> 设置表格整体对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/align/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="header-align"/> 设置表格整体表头对齐方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/align/Demo4">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="footer-align"/> 设置表格整体表尾对齐方式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
