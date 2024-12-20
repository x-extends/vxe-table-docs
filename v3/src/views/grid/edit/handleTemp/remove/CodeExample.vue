<template>
  <div>
    <CodeLight path="grid/edit/handleTemp/remove/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="删除">
          移除临时数据，通过调用 <ApiLink name="grid" prop="remove"/> 方法移除临时数据
        </vxe-tip>
        <vxe-tip status="error">
          由内部 CRUD 管理器自动记录操作行为，可以通过 <ApiLink name="grid" prop="getRemoveRecords"/> 获取；临时数据跟数据源是无关的，不存在数据同步的关系
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/handleTemp/remove/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="删除">
          树节点移除临时数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
