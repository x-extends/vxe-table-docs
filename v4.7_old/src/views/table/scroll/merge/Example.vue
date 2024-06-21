<template>
  <div>
    <CodeLight path="table/scroll/merge/Demo1">
      <template #tip>
        <div>
          虚拟渲染与单元格合并，可以通过设置参数 <table-api-link prop="merge-cells"/> 或调用函数 <table-api-link prop="setMergeCells"/>、<table-api-link prop="setMergeCells"/> 来控制单元格的临时合并状态<br>
          <span class="red">（注：合并是以牺牲渲染性能为代价，如果需要用合并建议关闭虚拟滚动）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
