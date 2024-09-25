<template>
  <div>
    <CodeLight path="grid/edit/rowValid/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过调用 <ApiLink name="grid" prop="validate"/> 函数校验数据，<ApiLink name="grid" prop="edit-rules"/> 校验规则配置<br>
          <span class="red">（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）</span>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/rowValid/Demo2">
      <template #tip>
        <vxe-tip status="primary">全量数据校验，如果第一个参数为 true 则全量数据校验</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/rowValid/Demo3">
      <template #tip>
        <vxe-tip status="primary">全表单元格校验，通过设置 <ApiLink name="grid" prop="valid-config"/>.<ApiLink name="grid" prop="msgMode"/> 开启</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
