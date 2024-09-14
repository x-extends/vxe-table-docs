<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myTextareaWidget/Demo1"
      :extraImports="['./demoFormDesignTextareaWidget.ts', './DemoFormDesignTextareaWidgetProps.vue', './DemoFormDesignTextareaWidgetView.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个多行输入框控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
