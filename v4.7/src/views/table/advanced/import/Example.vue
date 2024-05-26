<template>
  <div>
    <CodeLight path="table/advanced/import/Demo1">
      <template #tip>
        <div>导入数据：通过 <table-api-link prop="importData"/> 函数可以直接将数据导入表格中</div>
        <div>如果是服务端导出，通过设置 <table-api-link prop="remote"/> 和 <table-api-link prop="importMethod"/> 开启服务端自定义导入</div>
        <div><span class="red">（注：附件中的字段名必须和表格一致，数据格式不正确将无法导入；前端导入的数据量有限，建议使用后端导入）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
