<template>
  <div>
    <CodeLight path="grid/other/tableTransfer/Demo1" previewPath="/resource/docsImg/table_other_table_transfer.gif">
      <template #tip>
        <vxe-tip status="primary" title="实现表格穿梭选择">
          实现表格穿梭选择，支持点击选择或者跨表直接拖拽
        </vxe-tip>
        <vxe-tip status="error">
          跨表拖拽需要确保数据主键不重复，通过 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="keyField"/> 指定主键字段名
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
