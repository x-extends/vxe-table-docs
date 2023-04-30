<template>
  <div>
    <CodeLight path="grid/template/Demo1">
      <template #tip>
        <p class="tip">
          使用自定义模板渲染，通过 <table-column-api-link prop="slots"/> 属性使用自定义插槽来编写模板或 <a class="link" href="https://cn.vuejs.org/v2/guide/render-function.html#JSX" target="_blank">JSX</a> 渲染函数或 <a class="link" href="https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM" target="_blank">VNode</a><span class="red">（注：返回数组格式）</span><br>
          <grid-api-link prop="form"/>：自定义表单模板<br>
          <grid-api-link prop="toolbar"/>：自定义工具栏模板<br>
          <grid-api-link prop="top"/>：自定义顶部模板<br>
          <grid-api-link prop="bottom"/>：自定义底部模板<br>
          <grid-api-link prop="pager"/>：自定义分页模板<br>
        </p>
      </template>
    </CodeLight>
  </div>
</template>
