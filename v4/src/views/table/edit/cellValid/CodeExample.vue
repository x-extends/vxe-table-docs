<template>
  <div>
    <CodeLight path="table/edit/cellValid/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过调用 <ApiLink name="table" prop="validate"/> 函数校验数据，<ApiLink name="table" prop="edit-rules"/> 校验规则配置
        </vxe-tip>
        <vxe-tip status="error">
          如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/cellValid/Demo2">
      <template #tip>
        <vxe-tip status="primary">全量数据校验，如果第一个参数为 true 则全量数据校验</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/cellValid/Demo3">
      <template #tip>
        <vxe-tip status="primary">全表单元格校验，通过设置 <ApiLink name="table" prop="valid-config"/>.<ApiLink name="table" prop="msgMode"/> 开启</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
