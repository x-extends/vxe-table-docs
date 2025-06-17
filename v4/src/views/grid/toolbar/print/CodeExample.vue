<template>
  <div>
    <CodeLight path="grid/toolbar/print/Demo1">
      <template #tip>
        <vxe-tip status="primary">打印</vxe-tip>
        <vxe-tip status="success">
          内置 code 功能：print、open_print 打印
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 <ApiLink name="print" redirect/> 组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
