<template>
  <div>
    <CodeLight path="grid/rowGroup/expandGroupFields/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认展开">通过设置 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="expandGroupFields"/> 属性默认展开指定分组行字段</vxe-tip>
        <vxe-tip status="error">
          当数据未加载时，会在首次加载数据时触发 expandGroupFields 默认展开，非首次情况下通过调用 <ApiLink name="grid" prop="setRowGroupExpand"/> 或 <ApiLink name="grid" prop="setRowGroupExpandByField"/> 方法展开
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/expandGroupFields/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="expandAll"/> 属性默认展开全部分组行
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
