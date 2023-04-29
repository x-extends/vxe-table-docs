<template>
  <div>
    <CodeLight path="table/base/width/Demo1">
      <template #tip>
        <p class="tip">
          列宽，通过设置 <table-column-api-link prop="width"/> 参数，支持固定像素、百分比、等比例分配等，如果不设置则按照表格的宽度进行均匀分配<br>
          <span class="red">(注：不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "<table-column-api-link prop="min-width"/>" 实现等比例缩放)</span>
        </p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/width/Demo2">
      <template #tip>
        <p class="tip">部分固定列宽，其余自适应</p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/width/Demo3">
      <template #tip>
        <p class="tip">设置固定和最小宽，实现等比例放大</p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/width/Demo4">
      <template #tip>
        <p class="tip">设置百分比</p>
      </template>
    </CodeLight>
  </div>
</template>
