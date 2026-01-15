<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/myform1/Demo1"
      :extraImports="['./data.ts', './DemoDesignMyForm1Setting.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="自定义表单1">
          通过 form-render 可以针对不同业务场景创建不同的表单，比如桌面端，移动端，小程序等，当然也可以一套表单适配多端
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
