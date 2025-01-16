<template>
  <div>
    <CodeLight path="grid/cell/padding/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格边距">
          可以通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="padding"/> 显示单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/padding/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="表头单元格边距">
          可以通过 <ApiLink name="grid" prop="header-cell-config"/>.<ApiLink name="grid" prop="padding"/> 显示表头单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/padding/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="表尾单元格边距">
          可以通过 <ApiLink name="grid" prop="footer-cell-config"/>.<ApiLink name="grid" prop="padding"/> 显示表尾单元格的边距
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
