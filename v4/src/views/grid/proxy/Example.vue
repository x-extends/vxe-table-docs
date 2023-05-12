<template>
  <div>
    <CodeLight path="grid/proxy/Demo1">
      <template #tip>
        <div>
          数据代理<a class="link" href="https://github.com/x-extends/vxe-table-demo/tree/master/vxe-table-by-grid">（项目示例）</a>：通过配置 <grid-api-link prop="proxy-config"/> 参数，默认直接读取结果，响应结果应该为数组；
          可以通过 <grid-api-link prop="props"/> 修改默认值，由 <grid-api-link prop="pager-config"/> 代理数据转换，只需要配置好数据源即可；非常简单就可以渲染一个表格，从重复写冗余的代码中解放出来<br>
          对接格式：接收一个 <a class="link" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
