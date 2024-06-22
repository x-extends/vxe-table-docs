<template>
  <div>
    <CodeLight path="table/base/dynamicStyle/Demo1">
      <template #tip>
        <div>
          行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、可以通过设置 <table-api-link prop="cell-style"/>、<table-api-link prop="header-cell-style"/>、<table-api-link prop="row-style"/> ...等参数<br>
          <span class="red">（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
