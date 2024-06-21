<template>
  <div>
    <CodeLight path="table/edit/insert/Demo1">
      <template #tip>
        <div>
          调用 <table-api-link prop="insert"/>、<table-api-link prop="insertAt"/> 函数插入临时数据，还可以通过 <table-api-link prop="icon"/> 自定义编辑状态的图标<br>
          <span class="red">（可以直接使用内置的 CRUD 管理器进行增删改，也可以自行操作数据源，两种方式二选一）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
