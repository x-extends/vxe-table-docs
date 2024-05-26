<template>
  <div>
    <CodeLight path="table/edit/rowValid/Demo1">
      <template #tip>
        <div>
          通过调用 <table-api-link prop="validate"/> 函数校验数据，<table-api-link prop="edit-rules"/> 校验规则配置<br>
          <span class="red">（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/rowValid/Demo2">
      <template #tip>
        <div>全量数据校验，如果第一个参数为 true 则全量数据校验</div>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/rowValid/Demo3">
      <template #tip>
        <div>全表单元格校验，通过设置 <table-api-link prop="valid-config"/>.<table-api-link prop="msgMode"/> 开启</div>
      </template>
    </CodeLight>
  </div>
</template>
