<template>
  <div>
    <CodeLight path="table/advanced/expand/Demo1">
      <template #tip>
        <div>
          通过设置 <table-api-link prop="expand-config"/> 属性和 type=<table-api-link prop="expand"/> 与 <table-column-api-link prop="slot"/> 可以开启展开行功能<br>
          <span class="red">（注：展开行不能用于虚拟滚动，该示例仅供参考）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/expand/Demo2">
      <template #tip>
        <div>默认展开指定行，通过 <table-api-link prop="expandRowKeys"/> 参数设置默认展开行，指定默认值需要有 <table-api-link prop="row-config"/>.<table-api-link prop="keyField"/></div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/expand/Demo3">
      <template #tip>
        <div>
          默认展开所有行，通过 <table-api-link prop="expandAll"/> 参数设置默认展开所有行<br>
          还可以配置 <table-api-link prop="labelField"/> 列显示属性
        </div>
      </template>
    </CodeLight>
  </div>
</template>
