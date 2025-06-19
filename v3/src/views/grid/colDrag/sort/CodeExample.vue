<template>
  <div>
    <CodeLight path="grid/colDrag/sort/Demo1" previewPath="/resource/docsImg/table_col_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="列拖拽">
          通过 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="drag"/> 启用列拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          通过 <ApiLink name="grid" prop="column-drag-config"/>.<ApiLink name="grid" prop="animation"/>=false 来关闭拖拽动画可以大幅提高流畅度
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 移动到指定行的上面或者下面 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
