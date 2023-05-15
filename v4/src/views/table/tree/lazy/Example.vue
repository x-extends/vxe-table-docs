<template>
  <div>
    <CodeLight path="table/tree/lazy/Demo1">
      <template #tip>
        <div>
          树表格的懒加载，通过配置 <table-api-link prop="row-config"/>.<table-api-link prop="keyField"/> 和 <table-api-link prop="tree-config"/>={<table-api-link prop="lazy"/>, <table-api-link prop="loadMethod"/>} 加载方法来开启树形懒加载<br>
          当启用懒加载后，必须通过 <table-api-link prop="hasChild"/> 属性来标识是否存在子节点，从而控制该节点是否允许被点击<br>
          <span class="red">（注：懒加载启用后一次只允许异步加载一层根节点）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/lazy/Demo2">
      <template #tip>
        <div>通过设置 <table-api-link prop="expandRowKeys"/> 属性默认展开指定节点</div>
      </template>
    </CodeLight>
  </div>
</template>
