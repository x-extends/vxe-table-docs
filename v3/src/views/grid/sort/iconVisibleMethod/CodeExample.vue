<template>
  <div>
    <CodeLight path="grid/sort/iconVisibleMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="排序图标">通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="showIcon"/> 可以显示与隐藏全部排序按钮图标</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/sort/iconVisibleMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="iconVisibleMethod"/> 可以精确控制指定列的显示与隐藏排序按钮图标</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
