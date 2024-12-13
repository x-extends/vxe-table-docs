<template>
  <div>
    <CodeLight path="grid/colDrag/selfToChildDrag/Demo1" previewPath="/resource/docsImg/table_col_self_to_child_drag_sort.gif">
      <template #tip>
        <vxe-tip status="primary" title="自己拖拽给自己子级">
          通过 <ApiLink name="grid" prop="column-drag-config"/>.<ApiLink name="grid" prop="isSelfToChildDrag"/> 启用允许自己拖拽给自己的子级
        </vxe-tip>
        <vxe-tip status="error">
          启用后可以在不同表头直接任意拖拽，需要注意所有列必须有 <ApiLink name="column" prop="field"/> 属性
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
