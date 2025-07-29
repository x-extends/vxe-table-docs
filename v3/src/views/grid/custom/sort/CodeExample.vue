<template>
  <div>
    <CodeLight path="grid/custom/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="允许拖拽列顺序">
          通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="allowSort"/> 启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/sort/Demo2">
      <template #tip>
        <vxe-tip status="primary">弹窗模式 </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/sort/Demo3">
      <template #tip>
        <vxe-tip status="primary">抽屉模式 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
