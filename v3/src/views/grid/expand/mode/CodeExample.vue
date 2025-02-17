<template>
  <div>
    <CodeLight path="grid/expand/mode/Demo1" previewPath="/resource/docsImg/table_expand_mode_fixed.gif">
      <template #tip>
        <vxe-tip status="primary" title="展开内容的模式">
          默认是固定显示，如果存在冻结列，拖动横向滚动条也会始终显示在可视区中
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/expand/mode/Demo2" previewPath="/resource/docsImg/table_expand_mode_inside.gif">
      <template #tip>
        <vxe-tip status="primary">
          内嵌模式，通过 <ApiLink name="grid" prop="expand-config"/>.<ApiLink name="grid" prop="mode"/> 设置，如果存在冻结列，拖动横向滚动条时内容也会随着滚动
        </vxe-tip>
        <vxe-tip status="error">
          内嵌模式不支持虚拟滚动
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
