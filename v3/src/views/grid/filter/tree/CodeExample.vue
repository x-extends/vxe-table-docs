<template>
  <div>
    <CodeLight path="grid/filter/tree/Demo1" previewPath="/resource/docsImg/table_filter_tree.gif">
      <template #tip>
        <vxe-tip status="primary" title="树结构筛选">
          树结构会同时对每个层级的子节点进行筛选
        </vxe-tip>
        <vxe-tip status="error">
          需要注意仅支持 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
