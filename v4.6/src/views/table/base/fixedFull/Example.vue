<template>
  <div>
    <CodeLight path="table/base/fixedFull/Demo1">
      <template #tip>
        <div>横纵内容过多时，同时固定列和表头</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/fixedFull/Demo2">
      <template #tip>
        <div>固定列建议设置 <table-api-link prop="show-overflow"/> 该值，禁用自动换行，大幅提升渲染速度</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/fixedFull/Demo3">
      <template #tip>
        <div><span>分组表头<span class="red">（注：固定列必须按组进行设置）</span></span></div>
      </template>
    </CodeLight>
  </div>
</template>
