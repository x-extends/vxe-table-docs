<template>
  <div>
    <CodeLight path="grid/custom/moveBtn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="排序快捷按钮">
          通过设置 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="showSortMoveButton"/> 启用上移和下移排序按钮
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/moveBtn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="showSortPutButton"/> 启用置顶和置尾排序按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
