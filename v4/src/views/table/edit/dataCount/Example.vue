<template>
  <div>
    <CodeLight path="table/edit/dataCount/Demo1">
      <template #tip>
        <div>通过 <table-column-api-link prop="slot"/>插槽（实时） 或者 <table-column-api-link prop="formatter"/> 格式化内容（值改变时），自动计算联动的行数据，如果是用原生输入框可以通过添加 <table-column-api-link prop="immediate"/> 启用实时运算</div>
        <div><span class="red">（具体请自行实现，该示例仅供参考）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
