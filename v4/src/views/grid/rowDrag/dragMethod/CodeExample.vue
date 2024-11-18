<template>
  <div>
    <CodeLight path="grid/rowDrag/dragMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽拦截">
          通过 <ApiLink name="grid" prop="row-drag-config"/>.<ApiLink name="grid" prop="dragStartMethod"/> 可以自定义处理拖拽开始时的拖动
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowDrag/dragMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="row-drag-config"/>.<ApiLink name="grid" prop="dragEndMethod"/> 可以自定义处理拖拽结束时的拖动
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
