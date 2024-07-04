<template>
  <div>
    <CodeLight path="grid/import/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="导入数据">
          导入数据时需要列字段匹配上，可以在导出时将参数设置为 original 源数据导出
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 Upload 组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
