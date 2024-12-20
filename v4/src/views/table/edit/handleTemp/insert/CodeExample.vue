<template>
  <div>
    <CodeLight path="table/edit/handleTemp/insert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="新增">
          插入临时数据，通过调用 <ApiLink name="table" prop="insert"/> 或 <ApiLink name="table" prop="insertAt"/> 方法插入临时数据
        </vxe-tip>
        <vxe-tip status="error">
          由内部 CRUD 管理器自动记录操作行为，可以通过 <ApiLink name="table" prop="getInsertRecords"/> 获取；临时数据跟数据源是无关的，不存在数据同步的关系
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/handleTemp/insert/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          树节点插入临时数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
