<template>
  <div>
    <CodeLight path="table/colDrag/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="冻结列">
        </vxe-tip>
        <vxe-tip status="error">
          冻结列式不允许被拖拽的，需要先取消冻结列后再拖拽
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
