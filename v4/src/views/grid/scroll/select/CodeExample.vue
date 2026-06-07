<template>
  <div>
    <CodeLight path="grid/scroll/select/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="复杂单元格">
          单元格有大量下拉框，同时下拉框又有大量列表，此时渲染量就会超级巨大
        </vxe-tip>
        <vxe-tip status="success">
          表格高性能渲染会读取 <ApiLink name="column" prop="edit-render"/> 自适应进行优化缓存，最大化利用内存提高流畅度，即使数据量在大也可以流畅的渲染
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
