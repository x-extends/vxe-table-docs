<template>
  <div>
    <CodeLight path="grid/base/autoHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          当一个表格需要铺满父容器时，通过设置 <ApiLink name="table" prop="height"/>=auto 表格会自动根据父容器的高度去铺满，但是只会在数据重新加载时才会计算<br>
          可以根据不同场景添加 <ApiLink name="table" prop="sync-resize"/>（属性监听） 或 <ApiLink name="table" prop="auto-resize"/>（父元素监听），这样就只需要通过样式控制父容器高度就可以实现响应式表格
        </vxe-tip>
        <vxe-tip status="error">
          如果父容器缺少 overflow: hidden 溢出隐藏。则只支持自适应宽高增大，不支持宽高自适应缩小，还会造成慢慢的卡顿缩放。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoHeight/Demo2">
      <template #tip>
        <vxe-tip status="primary">也可以设置相对于父容器的百分比</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoHeight/Demo3">
      <template #tip>
        <vxe-tip status="primary">设置为 <ApiLink name="table" prop="auto-resize"/> 响应式就可以自动跟随父容器宽、高动态变化</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoHeight/Demo4">
      <template #tip>
        <vxe-tip status="primary">自适应页签高度</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
