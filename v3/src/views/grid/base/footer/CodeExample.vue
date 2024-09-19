<template>
  <div>
    <CodeLight path="grid/base/footer/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="grid" prop="footer-data"/> 设置表尾数据和 <ApiLink name="grid" prop="show-footer"/> 开启表尾展示</vxe-tip>
        <vxe-tip status="success">参数 <ApiLink name="grid" prop="footer-data"/> 是响应式的</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/footer/Demo2">
      <template #tip>
        <vxe-tip status="primary">多行表尾数据</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
