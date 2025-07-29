<template>
  <div>
    <CodeLight path="grid/custom/toolbar/Demo1" previewPath="/resource/docsImg/table_custom_toolbar.gif">
      <template #tip>
        <vxe-tip status="primary" title="个性化列">
          通过设置 <ApiLink name="grid" prop="toolbar-config"/>.<ApiLink name="grid" prop="custom"/> 启用列个性化设置功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/toolbar/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列头
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
