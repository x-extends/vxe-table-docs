<template>
  <div>
    <CodeLight path="table/edit/insert/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          调用 <ApiLink name="table" prop="insert"/>、<ApiLink name="table" prop="insertAt"/> 函数插入临时数据，还可以通过 <ApiLink name="table" prop="icon"/> 自定义编辑状态的图标<br>
        </vxe-tip>
        <vxe-tip status="error">
          <div>两种方式二选一</div>
          <div>1.直接使用内置的 CRUD 管理器进行增删改，不能操作数据源</div>
          <div>2.自行操作数据源，不能使用内置的函数</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
