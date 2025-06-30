<template>
  <div>
    <CodeLight path="grid/rowDrag/sort/Demo1" previewPath="/resource/docsImg/table_row_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="行拖拽">
          通过 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="drag"/> 和列设置 <ApiLink name="column" prop="drag-sort"/> 启用行拖拽排序功能
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

    <CodeLight path="grid/rowDrag/sort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以同时配置多个触发按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
