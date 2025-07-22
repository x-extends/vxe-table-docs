<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myDatePickerWidget/Demo1"
      :extraImports="['./demoFormDesignDatePickerWidget.ts', './DemoFormDesignDatePickerWidgetView.vue', './DemoFormDesignDatePickerWidgetProps.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="日期选择控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
