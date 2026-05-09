<template>
  <div>
    <CodeLight path="grid/export/exportMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="格式化导出内容">
          通过 <ApiLink name="column" prop="export-method"/> 可以格式化导出单元格的内容
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          优先级 <ApiLink name="column" prop="export-method"/> > <ApiLink name="column" prop="formatter"/>，两者区别是一个会显示在单元格中，一个不会显示在单元格中
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/export/exportMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="column" prop="formatter"/> 来格式化
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
