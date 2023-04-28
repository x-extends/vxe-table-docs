<template>
  <div>
    <CodeLight path="table/base/basic/Demo1">
      <template #tip>
        <p class="tip">
          <table-api-link name="vxe-table"/> 基础表格，基于模板方式使用非常简单、便捷<br>
          <span class="red">（注：每一列 field 字段属性不可更改）</span>
        </p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/basic/Demo2">
      <template #tip>
        <p class="tip">使用 <table-api-link prop="row-config"/>.<table-api-link prop="isHover"/> 属性启用 hover 行高亮</p>
      </template>
    </CodeLight>
  </div>
</template>
