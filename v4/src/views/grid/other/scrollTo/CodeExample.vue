<template>
  <div>
    <CodeLight path="grid/other/scrollTo/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="定位行、定位列">
          通过调用 <ApiLink name="grid" prop="scrollToRow"/> 或 <ApiLink name="grid" prop="scrollToColumn"/> 滚动到对应的单元格。该功能对于很多场景都非常有用，调用定位可以使单元格始终保持在表格的可视区内。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/other/scrollTo/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          虚拟滚动启用后
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
