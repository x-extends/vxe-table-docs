<template>
  <div>
    <CodeLight path="grid/template/default/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          单元格模板，使用插槽 <ApiLink name="column" prop="default"/> 来自定义模板
        </vxe-tip>
        <vxe-tip status="error">性能优化：提前转换好数据（最优） > <ApiLink name="column" prop="formatter"/>（field值发生变化时） > <ApiLink name="column" prop="slots"/>/template（实时响应）</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/default/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX <ApiLink name="column" prop="default"/> 来自定义模板<br>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
