<template>
  <div>
    <CodeLight path="grid/fullQuery/Demo1">
      <template #tip>
        <div>数据代理、固定列、服务端排序、服务端筛选、服务端分页，导出不分页的所有数据，对于分页场景下，如果想要保留选中状态，可以通过设置 <table-api-link prop="radio-config"/> 的 <table-api-link prop="reserve"/> 属性</div>
        <div>如果需要手动触发数据代理查询，通过调用 <grid-api-link prop="commitProxy"/> 方法提交数据代理指令</div>
      </template>
    </CodeLight>
  </div>
</template>
