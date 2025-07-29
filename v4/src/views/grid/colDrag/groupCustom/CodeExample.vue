<template>
  <div>
    <CodeLight path="grid/colDrag/groupCustom/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="个性化列">
          分组列头
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/colDrag/groupCustom/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="immediate"/> 支持个性化分组列的拖拽排序
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
