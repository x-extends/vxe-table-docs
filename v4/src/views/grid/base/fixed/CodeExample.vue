<template>
  <div>
    <CodeLight path="grid/base/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          冻结列，通过设置 <ApiLink name="grid" prop="fixed"/>=left|right 来启用冻结列<br>
          当横向内容过多时，将列冻结在左右两侧<br>
        </vxe-tip>
        <vxe-tip status="error">
          冻结列建议设置 <ApiLink name="grid" prop="show-overflow"/> 该值，启用优化模式大幅提升渲染速度，亦可防止冻结列里面的组件重复渲染等问题
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/fixed/Demo2">
      <template #tip>
        <vxe-tip status="primary">冻结分组表头</vxe-tip>
        <vxe-tip status="error">
          冻结分组时，必须按照每一组进行冻结
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
