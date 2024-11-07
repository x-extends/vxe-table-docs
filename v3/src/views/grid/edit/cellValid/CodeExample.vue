<template>
  <div>
    <CodeLight path="grid/edit/cellValid/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过调用 <ApiLink name="grid" prop="validate"/> 函数校验数据，<ApiLink name="grid" prop="edit-rules"/> 校验规则配置
        </vxe-tip>
        <vxe-tip status="error">
          如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
