<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myUploadFileWidget/Demo1"
      :extraImports="['./demoFormDesignUploadFileWidget.ts', './DemoFormDesignUploadFileWidgetView.vue', './DemoFormDesignUploadFileWidgetProps.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="上传附件控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
