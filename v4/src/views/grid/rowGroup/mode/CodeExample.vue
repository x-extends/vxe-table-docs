<template>
  <div>
    <CodeLight path="grid/rowGroup/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="展开方式">
          默认是通过 <ApiLink name="grid" prop="rowGroupNode"/> 指定字段来展示层级关系
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/mode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="mode"/>='column' 设置为自动根据分组字段来展示层级关系
        </vxe-tip>
        <vxe-tip status="success">
          该方式不需要指定 <ApiLink name="grid" prop="rowGroupNode"/>，会自动根据分组字段来展示层级关系
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
