<template>
  <div>
    <CodeLight path="grid/base/footerFormat/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          局部自定义 <ApiLink name="column" prop="footer-formatter"/> 格式化表尾内容<br>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/footerFormat/Demo2" :extraImports="['./demo2.footerFormat.ts']">
      <template #tip>
        <vxe-tip status="primary">
          全局格式化内容，使用 footer-formatter 添加格式函数，会在渲染的时候自动调用<br>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
