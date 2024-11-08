<template>
  <div>
    <CodeLight path="table/toolbar/basic/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="工具栏">在没有关联表格之前，工具栏只是一个布局组件。</vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 <ApiLink name="toolbar" redirect/> 组件
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/toolbar/basic/Demo2">
      <template #tip>
        <vxe-tip status="primary">关联表格，通过调用 connect() 方法与表格进行关联，就可以开启相关的功能</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
