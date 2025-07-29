<template>
  <div>
    <CodeLight path="grid/custom/modal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="弹窗模式">通过设置 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="mode"/>='modal' 启用窗口模式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/modal/Demo2">
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
