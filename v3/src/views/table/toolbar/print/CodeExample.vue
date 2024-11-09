<template>
  <div>
    <CodeLight path="table/toolbar/print/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="打印">通过 print 启用表格打印功能 </vxe-tip>
        <vxe-tip status="error">如果使用内置功能，需要先关联表格，通过调用 connect() 方法与表格进行关联，就可以开启相关的功能</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
