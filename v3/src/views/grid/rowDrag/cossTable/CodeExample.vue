<template>
  <div>
    <CodeLight path="grid/rowDrag/cossTable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="跨表拖拽">
          <ApiLink name="grid" prop="row-drag-config"/>.<ApiLink name="grid" prop="isCrossTableDrag"/> 启用跨表格、多表格互相拖拽。内置强大的 CRUD 管理器，可以轻松分析出数据的操作分布情况
        </vxe-tip>
        <vxe-tip status="error">
          跨表拖拽需要确保数据主键不重复，通过 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="keyField"/> 指定主键字段名
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
