<template>
  <div>
    <CodeLight path="grid/toolbar/custom/Demo1">
      <template #tip>
        <vxe-tip status="primary">工具栏：通过 <ApiLink name="grid" prop="toolbar-config"/> 属性配置，支持显示/隐藏列、列宽拖动状态的保存功能，可以通过表格的 <ApiLink name="table" prop="custom-config"/> 参数开启将列个性化的设置状态保存到本地</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/toolbar/custom/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="mode"/> 设置弹窗模式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
