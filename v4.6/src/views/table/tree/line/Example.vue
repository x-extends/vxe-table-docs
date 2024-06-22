<template>
  <div>
    <CodeLight path="table/tree/line/Demo1">
      <template #tip>
        <div>
          树表格，通过配置 <table-api-link prop="tree-config"/>={<table-api-link prop="line"/>: true} 属性来开启树节点连接线<br>
          <span class="red">（注：连接线不支持虚拟滚动）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo2">
      <template #tip>
        <div>复选框</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo3">
      <template #tip>
        <div>自定义图标，通过设置 <table-api-link prop="tree-config"/>={<table-api-link prop="iconOpen"/>, <table-api-link prop="iconClose"/>} 局部替换默认的图标</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo4">
      <template #tip>
        <div>更多自定义</div>
      </template>
    </CodeLight>
  </div>
</template>
