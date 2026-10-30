<template>
  <div>
    <CodeLight path="grid/cell/padding/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格边距">
          可以通过 <ApiLink name="grid" prop="cell-config" />.<ApiLink name="grid" prop="padding" /> 显示单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/padding/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          也可以单独设置上下左右的边距
        </vxe-tip>
        <vxe-tip status="error">
          当单元格高度被修改低于标准行高时，需要去掉内边距的场景就可以用到
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/padding/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="表头单元格边距">
          可以通过 <ApiLink name="grid" prop="header-cell-config" />.<ApiLink name="grid" prop="padding" /> 显示表头单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/padding/Demo4">
      <template #tip>
        <vxe-tip status="primary" title="表尾单元格边距">
          可以通过 <ApiLink name="grid" prop="footer-cell-config" />.<ApiLink name="grid" prop="padding" /> 显示表尾单元格的边距
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
