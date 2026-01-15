<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myInputWidget/Demo1"
      :extraImports="['./demoFormDesignInputWidget.ts', './DemoFormDesignInputWidgetView.vue', './DemoFormDesignInputWidgetProps.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="输入框控件">
          本示例创建了一个输入框控件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
