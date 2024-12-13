<template>
  <div>
    <CodeLight path="table/tree/checkbox/Demo1">
      <template #tip>
        <vxe-tip status="primary">多选树表格</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/checkbox/Demo2">
      <template #tip>
        <vxe-tip status="primary">默认选中，通过指定 <ApiLink name="table" prop="checkRowKeys"/> 设置默认选中的行</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/checkbox/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="checkStrictly"/> 设置父子节点不互相关联，默认不显示头部复选框，可以通过 checkbox-config={<ApiLink name="table" prop="showHeader"/>} 设置允许全选/取消</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
