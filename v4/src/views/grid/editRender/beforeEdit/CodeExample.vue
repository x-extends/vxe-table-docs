<template>
  <div>
    <CodeLight path="grid/editRender/beforeEdit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="阻止激活编辑">设置 <ApiLink name="grid" prop="edit-config"/> 的 <ApiLink name="grid" prop="beforeEditMethod"/> 方法判断单元格是否禁用，例如：限制第二行不允许编辑</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/editRender/beforeEdit/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          行模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
