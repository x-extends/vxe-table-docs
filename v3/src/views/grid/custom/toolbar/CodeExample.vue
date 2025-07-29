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
          分组列头，通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="immediate"/> 支持分组列拖拽排序
        </vxe-tip>
        <vxe-tip status="error">
          如果分组列表的拖拽功能，分组列头需要设置 field 唯一字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
