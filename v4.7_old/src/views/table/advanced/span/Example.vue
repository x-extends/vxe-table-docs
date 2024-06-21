<template>
  <div>
    <CodeLight path="table/advanced/span/Demo1">
      <template #tip>
        <div>
          合并行或列，通过 <table-api-link prop="merge-cells"/> 临时合并，或者自定义 <table-api-link prop="span-method"/> 合并方法<br>
          <span class="red">（注：<table-api-link prop="span-method"/> ，不能用于虚拟滚动、树形结构、展开行、固定列，合并的逻辑都是自行实现的，该示例仅供参考）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/span/Demo2">
      <template #tip>
        <div>合并列</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/span/Demo3">
      <template #tip>
        <div>合并行</div>
      </template>
    </CodeLight>
  </div>
</template>
