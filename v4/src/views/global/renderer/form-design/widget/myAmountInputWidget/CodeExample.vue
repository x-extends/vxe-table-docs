<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myAmountInputWidget/Demo1"
      :extraImports="['./demoFormDesignAmountInputWidget.ts', './DemoFormDesignAmountInputWidgetProps.vue', './DemoFormDesignAmountInputWidgetView.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="数值输入控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
