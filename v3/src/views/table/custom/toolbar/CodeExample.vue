<template>
  <div>
    <CodeLight path="table/custom/toolbar/Demo1" previewPath="/resource/docsImg/table_custom_toolbar.gif">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="toolbar" prop="custom"/> 启用列个性化设置功能</vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，打印功能需要导入 <ApiLink name="button" redirect/>,<ApiLink name="number-input" redirect/>,<ApiLink name="modal" redirect/>,<ApiLink name="drawer" redirect/> 组件
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/toolbar/Demo2">
      <template #tip>
        <vxe-tip status="primary">弹窗模式 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
