<template>
  <div>
    <CodeLight path="grid/tree/filter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树结构筛选">
          树结构会默认情况下是父级被匹配到则所有子级也被匹配
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/filter/Demo2" previewPath="/resource/docsImg/table_filter_tree.gif">
      <template #tip>
        <vxe-tip status="primary">
          如果需要对每个层级的子节点进行筛选，通过设置 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="filterConfig"/> 则会对每一行进行筛选，该模式下如果不存在子级，则父级就转为普通节点，不可展开。
        </vxe-tip>
        <vxe-tip status="error">
          需要注意仅支持 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
