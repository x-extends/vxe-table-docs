<template>
  <div>
    <CodeLight path="global/renderer/form/item/myItemAmount/Demo1" :extraImports="['./DemoFormItemAmount.vue', './demo1.form.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个金额输入">基础使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/form/item/myItemAmount/Demo2" :extraImports="['./DemoFormItemAmount.vue', './demo1.form.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="配置式使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
