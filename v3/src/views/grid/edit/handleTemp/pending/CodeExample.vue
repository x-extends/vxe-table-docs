<template>
  <div>
    <CodeLight path="grid/edit/handleTemp/pending/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="标记">
          标记为待删除状态，通过调用 <ApiLink name="grid" prop="setPendingRow"/> 方法标记为待删除状态
        </vxe-tip>
        <vxe-tip status="error">
          由内部 CRUD 管理器自动记录操作行为，可以通过 <ApiLink name="grid" prop="getPendingRecords"/> 获取；
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
