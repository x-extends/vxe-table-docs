<template>
  <div>
    <CodeLight path="grid/validate/theme/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="valid-config"/>.<ApiLink name="grid" prop="theme"/>='beautify' 设置为高亮样式
        </vxe-tip>
        <vxe-tip status="success">建议通过<vxe-link status="primary" :router-link="{ name: 'StartConfig'}">全局参数</vxe-link>设置，保持统一的样式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/validate/theme/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          同时显示多个错误提示，调用 fullValidate 方法校验，用法是一样的。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/validate/theme/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="valid-config"/>.<ApiLink name="grid" prop="showErrorBackground"/> 显示校验错误单元格背景色
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
