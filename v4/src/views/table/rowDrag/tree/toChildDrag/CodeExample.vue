<template>
  <div>
    <CodeLight path="table/rowDrag/tree/toChildDrag/Demo1" previewPath="/resource/docsImg/table_row_drag_tree_to_child_drag.gif">
      <template #tip>
        <vxe-tip status="primary" title="拖拽转成子节点">
          通过 <ApiLink name="table" prop="row-drag-config"/>.<ApiLink name="table" prop="isToChildDrag"/> 启用便捷拖拽成子节点，拖拽的同时按住 Ctrl 键可以自动拖放到该节点的子级
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 移动到指定行的上面或者下面 |
            | MouseLeft + Ctrl | 拖拽节点转成目标节点的子级 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
