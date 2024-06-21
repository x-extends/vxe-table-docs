<template>
  <div>
    <CodeLight path="table/base/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          冻结列，通过设置 <ApiLink name="column" prop="fixed"/>=left|right 来启用冻结列<br>
          当横向内容过多时，将列冻结在左右两侧<br>
          <span class="red">（注：冻结列建议设置 <ApiLink name="table" prop="show-overflow"/> 该值，启用优化模式大幅提升渲染速度，亦可防止冻结列里面的组件重复渲染等问题 ）</span>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/fixed/Demo2">
      <template #tip>
        <vxe-tip status="primary">如果列宽足够的情况下，冻结列将于非冻结列行为一致</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
