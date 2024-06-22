<template>
  <div>
    <CodeLight path="grid/pageProxy/Demo1">
      <template #tip>
        <div>
          数据代理：通过配置 <grid-api-link prop="proxy-config"/> 启用数据代理将不需要再主动发送请求，由表格代理增删改查的相关调用逻辑，只需要配好对应的接口即可自动渲染<br>
          通过配置 <grid-api-link prop="pager-config"/> 参数开启分页功能，对于分页场景下，如果要实现分页动态序号，可以通过 <table-api-link prop="seq-config"/>={<table-api-link prop="startIndex"/>} 属性设置起始值<br>
          分页情况下则默认读取响应结果中 page.total 和 result 属性，可以通过 <grid-api-link prop="props"/> 修改<br>
          对接格式：接收一个 <a class="link" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
