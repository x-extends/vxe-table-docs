<template>
  <div>
    <CodeLight path="table/base/style/Demo1">
      <template #tip>
        <div>
          行的样色、单元格样式，表头的样式、表尾的样式、全部都可以完全自定义，通过设置 <table-api-link prop="cell-class-name"/>、<table-api-link prop="header-cell-class-name"/>、<table-api-link prop="row-class-name"/> ...等参数<br>
          <span class="red">（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/style/Demo2">
      <template #tip>
        <div>通过 <table-api-link prop="cell-click"/> 事件点击改变颜色</div>
      </template>
    </CodeLight>
  </div>
</template>
