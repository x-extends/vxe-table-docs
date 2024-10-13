<template>
  <div>
    <CodeLight
      path="grid/editTemplate/vxe-pulldown/Demo1"
      :extraImports="['./DemoUserSelectPulldown.vue', './DemoRoleSelectPulldown.vue']">
      <template #tip>
        <vxe-tip status="primary" title="下拉容器">
          查看 <ApiLink name="pulldown" redirect/> 文档 API
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
