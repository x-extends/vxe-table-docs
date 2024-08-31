<template>
  <div>
    <CodeLight path="table/edit/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="table" prop="edit-config"/>={trigger: 'manual', mode: 'row'} 启用行编辑的功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/manual/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以配合 <ApiLink name="table" prop="revertData"/> 函数实现取消就还原数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
