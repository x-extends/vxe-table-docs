<template>
  <div>
    <CodeLight path="table/tree/lazy/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格的懒加载，通过配置 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/> 和 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="lazy"/>, <ApiLink name="table" prop="loadMethod"/>} 加载方法来开启树形懒加载<br>
          当启用懒加载后，必须通过 <ApiLink name="table" prop="hasChild"/> 属性来标识是否存在子节点，从而控制该节点是否允许被点击<br>
        </vxe-tip>
        <vxe-tip status="error">懒加载启用后一次只允许异步加载一层根节点</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/lazy/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="expandRowKeys"/> 属性默认展开指定节点</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
