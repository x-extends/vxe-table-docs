<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myTextareaWidget/Demo1"
      :extraImports="['./demoMyTextareaWidget.ts', './DemoMyTextareaWidgetProps.vue', './DemoMyTextareaWidgetView.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个多行输入框控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
