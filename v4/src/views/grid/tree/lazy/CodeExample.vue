<template>
  <div>
    <CodeLight path="grid/tree/lazy/Demo1" previewPath="/resource/docsImg/table_tree_lazy.gif">
      <template #tip>
        <vxe-tip status="primary">
          树表格的懒加载，通过配置 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="keyField"/> 和 <ApiLink name="grid" prop="tree-config"/>={<ApiLink name="grid" prop="lazy"/>, <ApiLink name="grid" prop="loadMethod"/>} 加载方法来开启树形懒加载<br>
          当启用懒加载后，必须通过 <ApiLink name="grid" prop="hasChild"/> 属性来标识是否存在子节点，从而控制该节点是否允许被点击<br>
        </vxe-tip>
        <vxe-tip status="error">懒加载启用后默认一次只异步加载一层根节点</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
