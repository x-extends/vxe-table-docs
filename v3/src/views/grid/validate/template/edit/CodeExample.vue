<template>
  <div>
    <CodeLight path="grid/validate/template/edit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义编辑模板"></vxe-tip>
        <vxe-tip status="error">
          使用自定义渲染需要配合 <ApiLink name="grid" prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新校验状态。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
