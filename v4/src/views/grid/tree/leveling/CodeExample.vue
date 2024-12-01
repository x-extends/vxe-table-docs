<template>
  <div>
    <CodeLight path="grid/tree/leveling/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="平级结构">
          树结构由 <ApiLink name="grid" prop="tree-config"/> 和 column.<ApiLink name="grid" prop="tree-node"/> 参数开启，支持自动转换带有父子层级字段的平级列表数据，例如 { id: 'xx', parentId: 'xx' }。只需要设置 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="transform"/> 就可以开启自动转换
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
