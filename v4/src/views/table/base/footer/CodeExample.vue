<template>
  <div>
    <CodeLight path="table/base/footer/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="show-footer"/> 开启表尾和 <ApiLink name="table" prop="footer-data"/> 设置表尾数据，结构和 data 一致</vxe-tip>
        <vxe-tip status="success">参数 <ApiLink name="table" prop="footer-data"/> 是响应式的</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/footer/Demo2">
      <template #tip>
        <vxe-tip status="primary">多行表尾数据</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
