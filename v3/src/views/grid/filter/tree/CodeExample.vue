<template>
  <div>
    <CodeLight path="grid/filter/tree/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树结构筛选">
         通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="isDeep"/>=true 设置深层筛选，树结构会同时对每个层级的子节点进行筛选，如果父节点被匹配则子节点也被匹配
        </vxe-tip>
        <vxe-tip status="error">
          需要注意仅支持 <ApiLink name="table" prop="tree-config"/>.<ApiLink name="table" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/tree/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="isDeep"/>=false 设置只筛选第一级节点
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/tree/Demo3" previewPath="/resource/docsImg/table_filter_tree.gif">
      <template #tip>
        <vxe-tip status="primary">
          如果需要对每个层级的子节点进行筛选，通过设置 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="isEvery"/> 则会对每一级节点进行筛选，该模式下如果不存在子级，则父级就转为普通节点，不可展开。
        </vxe-tip>
        <vxe-tip status="error">
          需要注意仅支持 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
