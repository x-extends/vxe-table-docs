<template>
  <div>
    <CodeLight path="grid/other/optimization/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="最优性能">
          提前转换好数据的方式，适用于纯文本展示的场景，不能自定义逻辑和自定义模板
        </vxe-tip>
        <vxe-tip status="success">
          <div>渲染性能：提前转换好数据给data=[{...}]（最优） > <ApiLink name="column" prop="formatter"/>格式化，field值发生变化时调用（优） > <ApiLink name="column" prop="slots"/>自定义插槽模板，实时响应调用（差）</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/other/optimization/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          性能优，适用于纯文本展示以及响应式计算字段值逻辑的场景，可以自定义逻辑但不能自定义自定义模板，使用 <ApiLink name="column" prop="formatter"/> 格式化数据，只会在当前列绑定的字段对应的值发生改变或者重新加载数据时才会触发执行
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/other/optimization/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          性能差，适用于任何场景，非常自由的自定义模板，<ApiLink name="column" prop="slots"/>自定义插槽模板，实时响应调用，任意数据发生变化时自动实时更新数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
