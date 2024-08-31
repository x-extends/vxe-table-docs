<template>
  <div>
    <CodeLight path="grid/edit/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="grid" prop="edit-config"/>={trigger: 'manual', mode: 'row'} 启用行编辑的功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/manual/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以配合 <ApiLink name="grid" prop="revertData"/> 函数实现取消就还原数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
