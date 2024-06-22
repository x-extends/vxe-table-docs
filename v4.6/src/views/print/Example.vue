<template>
  <div>
    <CodeLight path="print/Demo1">
      <template #tip>
        <div>表格打印，可以将任意视图的 HTML 片段输出打印</div>
        <div class="green">内置 class 类可以直接使用：.vxe-table 表格元素，.vxe-page-break-before 在元素之前换页，.vxe-page-break-after 在元素之后换页</div>
      </template>
    </CodeLight>

    <CodeLight path="print/Demo2">
      <template #tip>
        <div>HTML打印</div>
      </template>
    </CodeLight>

    <CodeLight path="print/Demo3">
      <template #tip>
        <div>自定义模板打印</div>
      </template>
    </CodeLight>

    <CodeLight path="print/Demo4">
      <template #tip>
        <div>图片打印</div>
      </template>
    </CodeLight>
  </div>
</template>
