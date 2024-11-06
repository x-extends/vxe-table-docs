<template>
  <div>
    <CodeLight path="grid/scroll/dragRow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整行顺序">
          拖拽调整行顺序与虚拟滚动的使用
        </vxe-tip>
        <vxe-tip status="error">
          启用拖动功能需要设置 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="useKey"/> 与 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="useKey"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
