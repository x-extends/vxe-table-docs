<template>
  <div>
    <CodeLight path="table/drag/rowSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="行拖拽">
          通过 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="drag"/> 和列设置 <ApiLink name="column" prop="drag-sort"/> 启用行拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          启用拖动功能需要设置 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="useKey"/> 与 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="useKey"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
