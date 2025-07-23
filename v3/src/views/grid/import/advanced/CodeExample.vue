<template>
  <div>
    <CodeLight path="grid/import/advanced/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高级导入">
          必须设置参数 <ApiLink name="grid" prop="import-config"/> 才能启用高级导入功能
        </vxe-tip>
        <vxe-tip status="error">
          需要注意导入是不支持分组列头和表尾数据的
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
