<template>
  <div>
    <CodeLight path="grid/custom/resizableWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列宽拖拽限制">
          通过设置 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="minWidth"/> 或 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="maxWidth"/> 来限制到每一列的最小宽和最大宽</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/resizableWidth/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          是否允许调整列宽
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
