<template>
  <div>
    <CodeLight path="table/tree/basic/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格，通过配置 <ApiLink name="table" prop="tree-config"/> 和指定列 <ApiLink name="column" prop="tree-node"/> 属性来开启树表格，<br>
          树表格支持两种结构：<br>
          1.父子层级列表，设置 <ApiLink name="table" prop="transform"/> 开启自动将列表转成树结构，通过 <ApiLink name="table" prop="rowField"/> 和 <ApiLink name="table" prop="parentField"/>指定字段名<br>
          2.树层级列表，带有树层级的结构
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo2">
      <template #tip>
        <vxe-tip status="primary">树层级列表，带有树层级的结构</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo3">
      <template #tip>
        <vxe-tip status="primary">默认展开树节点，通过 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="expandRowKeys"/>: []} 设置默认展开树节点的主键</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo4">
      <template #tip>
        <vxe-tip status="primary">默认展开所有树节点，通过 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="expandAll"/>: true} 设置默认展开所有树节点</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
