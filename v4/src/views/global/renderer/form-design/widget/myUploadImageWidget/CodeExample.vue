<template>
  <div>
    <CodeLight
      path="global/renderer/form-design/widget/myUploadImageWidget/Demo1"
      :extraImports="['./demoFormDesignUploadImageWidget.ts', './DemoFormDesignUploadImageWidgetView.vue', './DemoFormDesignUploadImageWidgetProps.vue', './demo1.form-design.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="上传图片控件"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
