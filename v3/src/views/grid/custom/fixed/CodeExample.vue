<template>
  <div>
    <CodeLight path="grid/custom/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="允许调整列冻结">
          通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="allowFixed"/> 启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/fixed/Demo2">
      <template #tip>
        <vxe-tip status="primary">弹窗模式 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
