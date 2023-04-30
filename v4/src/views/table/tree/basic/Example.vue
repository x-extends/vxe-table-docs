<template>
  <div>
    <CodeLight path="table/tree/basic/Demo1">
      <template #tip>
        <p class="tip">
          树表格，通过配置 <table-api-link prop="tree-config"/> 和指定列 <table-column-api-link prop="tree-node"/> 属性来开启树表格，<br>
          树表格支持两种结构：<br>
          1.父子层级列表，设置 <table-api-link prop="transform"/> 开启自动将列表转成树结构，通过 <table-api-link prop="rowField"/> 和 <table-api-link prop="parentField"/>指定字段名<br>
          2.树层级列表，带有树层级的结构
        </p>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo2">
      <template #tip>
        <p class="tip">树层级列表，带有树层级的结构</p>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo3">
      <template #tip>
        <p class="tip">默认展开树节点，通过 <table-api-link prop="tree-config"/>={<table-api-link prop="expandRowKeys"/>: []} 设置默认展开树节点的主键</p>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/basic/Demo4">
      <template #tip>
        <p class="tip">默认展开所有树节点，通过 <table-api-link prop="tree-config"/>={<table-api-link prop="expandAll"/>: true} 设置默认展开所有树节点</p>
      </template>
    </CodeLight>
  </div>
</template>
