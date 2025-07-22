<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myNumberInputWidget/Demo1"
      :extraImports="['./demoFormDesignNumberInputWidget.ts', './DemoFormDesignNumberInputWidgetProps.vue', './DemoFormDesignNumberInputWidgetView.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="数值输入控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
