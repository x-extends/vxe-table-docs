<template>
  <div>
    <CodeLight path="table/edit/template/Demo1">
      <template #tip>
        <div>
          使用 edit <table-column-api-link prop="slot"/> 自定义渲染任意 Vue 组件，自定义渲染需要配合 <table-api-link prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新状态<br>
          <span class="red">（注：自定义渲染虽然可以支持任意的 vue 组件，但是并不是所有组件都能直接使用的，所有跨组件之间会存在冲突问题，如果不处理好冲突的情况下是大部分组件是无法使用的；
          可以通过 <router-link class="link" :to="{name: 'InterceptorAPI'}">事件拦截器</router-link> 来处理冲突）</span><br>
          <table-column-api-link prop="default"/>：自定义内容模板（提前格式化（最优） > <table-column-api-link prop="formatter"/>（值发生变化时） > <table-column-api-link prop="slots"/>（即时））<br>
          <table-column-api-link prop="header"/>：自定义表头模板<br>
          <table-column-api-link prop="footer"/>：自定义表尾模板<br>
          <table-column-api-link prop="filter"/>：自定义筛选模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）<br>
          <table-column-api-link prop="edit"/>：自定义可编辑模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）
        </div>
      </template>
    </CodeLight>
  </div>
</template>
