<template>
  <div>
    <CodeLight path="table/base/fixedFull/Demo1">
      <template #tip>
        <vxe-tip status="primary">横纵内容过多时，同时固定列和表头</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/fixedFull/Demo2">
      <template #tip>
        <vxe-tip status="primary">固定列建议设置 <ApiLink name="table" prop="show-overflow"/> 该值，禁用自动换行，大幅提升渲染速度</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/fixedFull/Demo3">
      <template #tip>
        <vxe-tip status="primary"><span>分组表头<span class="red">（注：固定列必须按组进行设置）</span></span></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
