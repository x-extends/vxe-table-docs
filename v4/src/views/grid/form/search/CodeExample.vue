<template>
  <div>
    <CodeLight path="grid/form/search/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="集成表单搜索">
          配置式表单由 <ApiLink name="grid" prop="form-config"/>.items 和 <ApiLink name="grid" prop="form-config"/>.data 来渲染，表单事件可以通过 <ApiLink name="grid" prop="form-submit"/> 和 <ApiLink name="grid" prop="form-reset"/> 监听
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，表单功能需要导入 <ApiLink name="form" redirect/> 组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
