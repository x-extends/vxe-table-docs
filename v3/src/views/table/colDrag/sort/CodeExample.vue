<template>
  <div>
    <CodeLight path="table/colDrag/sort/Demo1" previewPath="/resource/docsImg/table_col_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="列拖拽">
          通过 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="drag"/> 启用列拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          通过 <ApiLink name="table" prop="column-drag-config"/>.<ApiLink name="table" prop="animation"/>=false 来关闭拖拽动画可以大幅提高流畅度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
