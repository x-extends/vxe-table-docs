<template>
  <div>
    <CodeLight path="table/base/autoHeight/Demo1">
      <template #tip>
        <div>
          当一个表格需要铺满父容器时，通过设置 <table-api-link prop="height"/>=auto 表格会自动根据父容器的高度去铺满，但是只会在数据重新加载时才会计算<br>
          可以根据不同场景添加 <table-api-link prop="sync-resize"/>（属性监听） 或 <table-api-link prop="auto-resize"/>（父元素监听），这样就只需要通过样式控制父容器高度就可以实现响应式表格
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/autoHeight/Demo2">
      <template #tip>
        <div>也可以设置相对于父容器的百分比</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/autoHeight/Demo3">
      <template #tip>
        <div>设置为 <table-api-link prop="auto-resize"/> 响应式就可以自动跟随父容器宽、高动态变化</div>
      </template>
    </CodeLight>
  </div>
</template>
