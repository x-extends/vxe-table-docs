<template>
  <div>
    <CodeLight path="table/template/default/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          单元格模板，使用插槽 <ApiLink name="column" prop="default"/> 来自定义模板
        </vxe-tip>
        <vxe-tip status="success">
          <div>渲染性能：提前转换好数据给data=[{...}]（最优） > <ApiLink name="column" prop="formatter"/>格式化，field值发生变化时调用（较好） > <ApiLink name="column" prop="slots"/>自定义插槽模板，实时响应调用（差）</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
