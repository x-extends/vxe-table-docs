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
        <vxe-tip status="primary">分组列头和平级拖拽 </vxe-tip>
        <vxe-tip status="error">
          分组列头的子列拖拽只对 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="immediate"/> 有效
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/sort/Demo3">
      <template #tip>
        <vxe-tip status="primary">分组列头和跨级拖拽 </vxe-tip>
        <vxe-tip status="error">
          分组列头的子列拖拽只对 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="immediate"/> 有效
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
