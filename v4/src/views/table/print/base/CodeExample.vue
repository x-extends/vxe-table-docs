<template>
  <div>
    <CodeLight path="table/print/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="打印表格"></vxe-tip>
      </template>
      <vxe-tip status="error">
        如果是按需加载，打印功能需要导入 <ApiLink name="print" redirect/> 组件
      </vxe-tip>
    </CodeLight>
  </div>
</template>
