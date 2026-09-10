<template>
  <div>
    <CodeLight path="grid/template/header/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          表头单元格模板，使用插槽 <ApiLink name="column" prop="header"/> 来自定义模板
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          头部插槽用于重写列头，会覆盖默认功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/header/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX <ApiLink name="column" prop="header"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
