<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/mySelectWidget/Demo1"
      :extraImports="['./demoFormDesignSelectWidget.ts', './DemoFormDesignSelectWidgetView.vue', './DemoFormDesignSelectWidgetProps.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="下拉框控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
