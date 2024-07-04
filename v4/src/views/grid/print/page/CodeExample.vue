<template>
  <div>
    <CodeLight path="grid/print/page/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现将表格切割为多页打印">
          使用打印组件，可以轻松实现各种各种自定义打印，需要算好每一页的数量，然后按页分割
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 Print 组件
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/print/page/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          只在第一页显示表头，其余页不显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
