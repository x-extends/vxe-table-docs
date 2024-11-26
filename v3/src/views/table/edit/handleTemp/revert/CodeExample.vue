<template>
  <div>
    <CodeLight path="table/edit/handleTemp/revert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="恢复">
          恢复被改动的临时数据，通过调用 <ApiLink name="table" prop="revertData"/> 方法将数据恢复到上一次未改动之前的值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
