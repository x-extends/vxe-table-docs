<template>
  <div>
    <CodeLight path="table/edit/handleTemp/revert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="恢复">
          恢复被改动的临时数据，通过调用 <ApiLink name="grid" prop="revertData"/> 方法将数据恢复到上一次未改动之前的值，如果恢复已删除的数据，则默认还原到顶部位置
        </vxe-tip>
        <vxe-tip status="error">
          由内部 CRUD 管理器自动记录操作行为，开启 <ApiLink name="grid" prop="keep-source"/> 后生效
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
