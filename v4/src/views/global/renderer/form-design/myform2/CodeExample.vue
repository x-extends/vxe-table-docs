<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/myform2/Demo1"
      :extraImports="['./data.ts', './DemoDesignMyForm2Setting.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="自定义表单2"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
