<template>
  <div>
    <CodeLight path="table/advanced/export/Demo1">
      <template #tip>
        <div>
          通过调用 <table-api-link prop="exportData"/> 函数指定 type='csv' 可以直接将表格导出为 CSV/HTML/XML/TXT 格式的文件；<br>
          默认会排除 field 为空和 type 相关的功能列（除 seq、checkbox、radio 之外），可以通过自定义 <table-api-link prop="columnFilterMethod"/> 列过滤方法<br>
          对于 csv 等特殊类型，可以通过设置 <table-column-api-link prop="cell-type"/> 将数值类型转为字符串类型<br>
          如果是服务端导出，通过设置 <table-api-link prop="remote"/> 和 <table-api-link prop="exportMethod"/> 开启服务端自定义导出<br>
          <span class="red">（注：树结构和虚拟滚动只允许导出数据源，前端导出的数据量有限，建议使用后端导出）</span>
          <span class="red">（注：导出多级表头合并列，需要将导出格式设置为 html/xlsx 格式）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/export/Demo2">
      <template #tip>
        <div>配置 <table-api-link prop="columnFilterMethod"/> 参数过滤指定列</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/export/Demo3">
      <template #tip>
        <div>配置 <table-api-link prop="dataFilterMethod"/> 参数过滤指定行</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/export/Demo4">
      <template #tip>
        <div>配置 <table-api-link prop="dataFilterMethod"/> 不导出表头，指定文件名，导出源数据,格式化数据</div>
      </template>
    </CodeLight>
  </div>
</template>
