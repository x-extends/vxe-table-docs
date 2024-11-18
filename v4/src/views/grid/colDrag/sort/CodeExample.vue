<template>
  <div>
    <CodeLight path="grid/colDrag/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列拖拽">
          通过 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="drag"/> 启用列拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          启用拖动功能需要设置 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="useKey"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
