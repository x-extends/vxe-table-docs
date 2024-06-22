<template>
  <div>
    <CodeLight path="table/advanced/sortIcon/Demo1">
      <template #tip>
        <div>排序图标上下布局，通过设置 <table-api-link prop="sort-config"/>={<table-api-link prop="iconAsc"/>, <table-api-link prop="iconDesc"/>} 局部替换默认的图标</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/sortIcon/Demo2">
      <template #tip>
        <div>排序图标左右布局，通过设置 <table-api-link prop="sort-config"/>.<table-api-link prop="iconLayout"/> 布局方式</div>
      </template>
    </CodeLight>
  </div>
</template>
