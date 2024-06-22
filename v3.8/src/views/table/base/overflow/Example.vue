<template>
  <div>
    <CodeLight path="table/base/overflow/Demo1">
      <template #tip>
        <div>
          当内容溢出时显示为省略号，<table-column-api-link prop="show-overflow"/> 和 <table-api-link prop="show-header-overflow"/> 和 <table-api-link prop="show-footer-overflow"/><br>
          <table-column-api-link prop="ellipsis"/> 当内容溢出时显示为省略号<br>
          <table-column-api-link prop="title"/> 当内容溢出时显示为省略号并用原生 title 显示<br>
          <table-column-api-link prop="tooltip"/> 当内容溢出时显示为省略号并用 tooltip 显示<br>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/overflow/Demo2">
      <template #tip>
        <div>
          通过设置 <table-api-link prop="contentMethod"/> 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息<br>
          还可以通过 <table-api-link prop="enterable"/> 开启鼠标是否可进入到 tooltip 中
        </div>
      </template>
    </CodeLight>
  </div>
</template>
