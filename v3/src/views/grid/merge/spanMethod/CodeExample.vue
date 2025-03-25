<template>
  <div>
    <CodeLight path="grid/merge/spanMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并行">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并行函数，将多行相同字段值的数据合并为一行
        </vxe-tip>
        <vxe-tip status="error">该方式不支持虚拟滚动</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/merge/spanMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并列">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并列函数，将多行对应的字段合并为一列
        </vxe-tip>
        <vxe-tip status="error">该方式不支持虚拟滚动</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
