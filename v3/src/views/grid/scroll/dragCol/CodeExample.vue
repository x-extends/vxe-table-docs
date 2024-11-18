<template>
  <div>
    <CodeLight path="grid/scroll/dragCol/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整列顺序">
          拖拽调整列顺序与虚拟滚动的使用
        </vxe-tip>
        <vxe-tip status="error">
          启用拖动功能需要设置 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="useKey"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
