<template>
  <div>
    <CodeLight path="table/base/resizable/Demo1">
      <template #tip>
        <div>通过设置 <table-api-link prop="column-config"/>.<table-api-link prop="resizable"/> 属性启用列宽拖动功能</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo2">
      <template #tip>
        <div>横向滚动条</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo3">
      <template #tip>
        <div>固定左列宽拖动（固定左不允许超过表格右边距）</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo4">
      <template #tip>
        <div>固定右列宽拖动（固定右不允许超过表格左边距）</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo5">
      <template #tip>
        <div>左右固定列宽拖动（固定左不允许超过固定右，固定右不允许超过固定左）</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo6">
      <template #tip>
        <div>分组表头拖动（只允许列拖动，不允许分组标题拖动）</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/resizable/Demo7">
      <template #tip>
        <div>左右固定列的分组表头拖动（只允许列拖动，不允许分组标题拖动）</div>
      </template>
    </CodeLight>
  </div>
</template>
