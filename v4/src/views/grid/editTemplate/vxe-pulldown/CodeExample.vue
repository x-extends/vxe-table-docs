<template>
  <div>
    <CodeLight
      path="grid/editTemplate/vxe-pulldown/Demo1"
      :extraImports="['./DemoUserSelectPulldown.vue', './DemoRoleSelectPulldown.vue']">
      <template #tip>
        <vxe-tip status="primary" title="下拉容器">
          查看 <ApiLink name="pulldown" redirect/> 文档 API
        </vxe-tip>
        <vxe-tip status="error">
          需要注意，示例中的组件是全局安装的，非全局需自行导入对应的组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
