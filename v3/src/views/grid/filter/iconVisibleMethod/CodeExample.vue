<template>
  <div>
    <CodeLight path="grid/filter/iconVisibleMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="筛选图标">通过 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="showIcon"/> 可以显示与隐藏全部筛选按钮图标</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/iconVisibleMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="iconVisibleMethod"/> 可以精确控制指定列的显示与隐藏筛选按钮图标</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
