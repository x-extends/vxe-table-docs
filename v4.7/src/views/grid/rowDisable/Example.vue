<template>
  <div>
    <CodeLight path="grid/rowDisable/Demo1">
      <template #tip>
        <div>设置 <table-api-link prop="edit-config"/> 的 <table-api-link prop="beforeEditMethod"/> 方法判断单元格是否禁用，例如：限制第二行不允许编辑</div>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowDisable/Demo1">
      <template #tip>
        <div>配合 <table-api-link prop="edit-actived"/> 事件，实现行编辑中对列的权限控制，例如：限制 age 小于 27 或者 name 为 'x' 开头的列禁止编辑</div>
      </template>
    </CodeLight>
  </div>
</template>
