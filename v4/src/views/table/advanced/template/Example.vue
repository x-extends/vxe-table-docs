<template>
  <div>
    <CodeLight path="table/advanced/template/Demo1">
      <template #tip>
        <div>
          使用 <table-column-api-link prop="slot"/> 自定义模板；可以实现自定义任意内容及 html 元素<br>
          <table-column-api-link prop="default"/>：自定义内容模板（提前格式化（最优） > <table-column-api-link prop="formatter"/>（field值发生变化时） > <table-column-api-link prop="slots"/>（即时））<br>
          <table-column-api-link prop="header"/>：自定义表头模板<br>
          <table-column-api-link prop="footer"/>：自定义表尾模板<br>
          <table-column-api-link prop="filter"/>：自定义筛选模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）<br>
          <table-column-api-link prop="edit"/>：自定义可编辑模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）
        </div>
      </template>
    </CodeLight>
  </div>
</template>
