<template>
  <div>
    <CodeLight path="grid/edit/showNegativeStatus/Demo1" previewPath="/resource/docsImg/table_edit_show_negativeS_status.gif">
      <template #tip>
        <vxe-tip status="primary" title="负数自动标红">
          通过 <ApiLink name="grid" prop="edit-render"/>.<ApiLink name="grid" prop="showNegativeStatus"/> 启用负数自动显示红色字体
        </vxe-tip>
        <vxe-tip status="error">
          需要注意只要特定的控件才支持自动显示负数标红
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
