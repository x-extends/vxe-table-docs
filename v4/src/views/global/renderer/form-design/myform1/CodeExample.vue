<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/myform1/Demo1"
      :extraImports="['./data.ts', './DemoDesignMyForm1Setting.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="自定义表单1"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
