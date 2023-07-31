<template>
  <div>
    <CodeLight path="table/advanced/mergeCell/Demo1">
      <template #tip>
        <div>单元格与表尾数据合并，可以通过绑定参数 <table-api-link prop="merge-cells"/> 或调用函数 <table-api-link prop="setMergeCells"/>、<table-api-link prop="setMergeCells"/> 来控制单元格的临时合并状态</div>
        <div><span class="red">（注意：合并数据属于临时行为，例如：操作数据源、显示隐藏列、固定列...等操作都会导致合并状态被取消）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
