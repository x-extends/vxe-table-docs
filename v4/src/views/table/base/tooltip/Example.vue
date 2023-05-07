<template>
  <div>
    <CodeLight path="table/base/tooltip/Demo1">
      <template #tip>
        <div>
          通过 <table-api-link prop="tooltip-config"/>.<table-api-link prop="showAll"/> 开启全表工具提示，还可以配合 <table-api-link prop="contentMethod"/> 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息<br>
          还可以设置 <table-api-link prop="tooltip-config"/>.<table-api-link prop="enterable"/> 允许鼠标进入 tooltip 中，通过 <table-column-api-link prop="title-help"/> 设置列标题的帮助提示消息
        </div>
      </template>
    </CodeLight>
  </div>
</template>
