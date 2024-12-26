<template>
  <div>
    <CodeLight path="table/tree/lazy/Demo1" previewPath="/resource/docsImg/table_tree_lazy.gif">
      <template #tip>
        <vxe-tip status="primary">
          树表格的懒加载，通过配置 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/> 和 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="lazy"/>, <ApiLink name="table" prop="loadMethod"/>} 加载方法来开启树形懒加载<br>
          当启用懒加载后，必须通过 <ApiLink name="table" prop="hasChild"/> 属性来标识是否存在子节点，从而控制该节点是否允许被点击<br>
        </vxe-tip>
        <vxe-tip status="error">懒加载启用后默认一次只异步加载一层根节点</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/lazy/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="expandRowKeys"/> 属性默认展开指定节点</vxe-tip>
        <vxe-tip status="error">
          当数据未加载时，会在首次加载数据时触发 expandRowKeys 默认展开，非首次情况下通过调用 <ApiLink name="table" prop="setTreeExpand"/> 方法展开
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
