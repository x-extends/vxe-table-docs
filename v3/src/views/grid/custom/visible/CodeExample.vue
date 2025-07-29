<template>
  <div>
    <CodeLight path="grid/custom/visible/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="允许调整列显示隐藏">
          通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="allowVisible"/> 启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/visible/Demo2">
      <template #tip>
        <vxe-tip status="primary">弹窗模式 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
