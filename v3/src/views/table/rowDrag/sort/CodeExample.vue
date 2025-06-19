<template>
  <div>
    <CodeLight path="table/rowDrag/sort/Demo1" previewPath="/resource/docsImg/table_row_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="行拖拽">
          通过 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="drag"/> 和列设置 <ApiLink name="column" prop="drag-sort"/> 启用行拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          通过 <ApiLink name="table" prop="row-drag-config"/>.<ApiLink name="table" prop="animation"/>=false 来关闭拖拽动画可以大幅提高流畅度
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

    <CodeLight path="table/rowDrag/sort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以同时配置多个触发按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
