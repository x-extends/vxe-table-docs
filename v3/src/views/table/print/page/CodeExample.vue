<template>
  <div>
    <CodeLight path="table/print/page/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现将表格切割为多页打印">
          使用打印组件，可以轻松实现各种各种自定义打印，需要算好每一页的数量，然后按页分割
        </vxe-tip>
        <vxe-tip status="error">如果是按需加载，需要导入 <ApiLink name="print" redirect/> 组件</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
