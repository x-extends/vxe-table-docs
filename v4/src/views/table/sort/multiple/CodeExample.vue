<template>
  <div>
    <CodeLight path="table/sort/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary">配置 <ApiLink name="table" prop="multiple"/> 启用多字段排序</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/sort/multiple/Demo2">
      <template #tip>
        <vxe-tip status="primary">如果需要获取排序字段的先后顺序，可以通过 sort-config.chronological 设置</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
