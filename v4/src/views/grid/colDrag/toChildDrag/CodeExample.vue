<template>
  <div>
    <CodeLight path="grid/colDrag/toChildDrag/Demo1" previewPath="/resource/docsImg/table_col_to_child_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="拖拽转成子节点">
          通过 <ApiLink name="grid" prop="column-drag-config"/>.<ApiLink name="grid" prop="isToChildDrag"/> 启用便捷拖拽成子节点，拖拽的同时按住 Ctrl 键可以自动拖放到该节点的子级
        </vxe-tip>
        <vxe-tip status="error">
          启用后可以在不同表头直接任意拖拽，需要注意所有列必须有 <ApiLink name="column" prop="field"/> 属性
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
