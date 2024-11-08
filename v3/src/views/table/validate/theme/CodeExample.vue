<template>
  <div>
    <CodeLight path="grid/validate/theme/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="valid-config"/>.<ApiLink name="grid" prop="theme"/>='beautify' 设置为美化样式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/validate/theme/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          同时显示多个错误提示，调用 fullValidate 方法校验，用法是一样的。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
