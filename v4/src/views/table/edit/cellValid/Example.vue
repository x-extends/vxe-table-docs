<template>
  <div>
    <CodeLight path="table/edit/cellValid/Demo1">
      <template #tip>
        <div>通过调用 <table-api-link prop="validate"/> 函数校验数据，<table-api-link prop="edit-rules"/> 校验规则配置，如果第一个参数为 true 则全量校验</div>
        <div><span class="red">（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
