<template>
  <div>
    <CodeLight path="grid/cell/height/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格高度">
          可以通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="height"/> 设置所有单元格高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/height/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="表头单元格高度">
          可以通过 <ApiLink name="grid" prop="header-cell-config"/>.<ApiLink name="grid" prop="height"/> 设置所有表头单元格高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/height/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="表尾单元格高度">
          可以通过 <ApiLink name="grid" prop="footer-cell-config"/>.<ApiLink name="grid" prop="height"/> 设置所有表尾单元格高度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
