<template>
  <div>
    <CodeLight path="global/validators/form/base/Demo1" :extraImports="['./demo1.form.validators.ts']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个输入框">基础使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/validators/form/base/Demo2" :extraImports="['./demo1.form.validators.ts']">
      <template #tip>
        <vxe-tip status="primary" title="配置式使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
