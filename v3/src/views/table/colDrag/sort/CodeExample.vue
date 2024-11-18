<template>
  <div>
    <CodeLight path="table/colDrag/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列拖拽">
          通过 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="drag"/> 启用列拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          启用拖动功能需要设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="useKey"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
