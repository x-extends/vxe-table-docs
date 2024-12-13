<template>
  <div>
    <CodeLight path="grid/colDrag/crossDrag/Demo1" previewPath="/resource/docsImg/table_col_cross_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="跨层级拖拽">
          通过 <ApiLink name="grid" prop="column-drag-config"/>.<ApiLink name="grid" prop="isCrossDrag"/> 启用跨层级拖拽
        </vxe-tip>
        <vxe-tip status="error">
          启用后可以在不同表头直接任意拖拽，需要注意所有列必须有 <ApiLink name="column" prop="field"/> 属性
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
