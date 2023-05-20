<template>
  <div>
    <CodeLight path="table/base/html/Demo1">
      <template #tip>
        <div>
          设置 <table-column-api-link prop="type"/>=<table-column-api-link prop="html"/> 显示为 HTML 标签，不支持和其他功能列共存，需要启用 <table-api-link prop="column-config"/>.<table-api-link prop="useKey"/> 与 <table-api-link prop="row-config"/>.<table-api-link prop="useKey"/><br>
          <span class="red">（动态渲染任意 HTML 是非常危险的，很容易导致 <a class="link" href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC">XSS</a> 攻击，请确保内容是可信的）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
