<template>
  <div>
    <CodeLight path="global/renderer/form/item/editUpload/Demo1" :extraImports="['./DemoEditUpload.vue', './demo1.form.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个附件上传">基础使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/form/item/editUpload/Demo2" :extraImports="['./DemoEditUpload.vue', './demo1.form.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="配置式使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
