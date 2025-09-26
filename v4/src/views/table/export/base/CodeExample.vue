<template>
  <div>
    <CodeLight path="table/export/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="导出数据">
          通过调用 exportData 可以直接将表格数据导出到文件中
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 <ApiLink name="checkbox" redirect/>,<ApiLink name="select" redirect/>,<ApiLink name="button" redirect/>,<ApiLink name="input" redirect/>,<ApiLink name="modal" redirect/> 组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
