<template>
  <div>
    <CodeLight path="table/rowDrag/tree/selfToChildDrag/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自己拖拽给自己子级">
          通过 <ApiLink name="table" prop="row-drag-config"/>.<ApiLink name="table" prop="isSelfToChildDrag"/> 启用允许自己拖拽给自己的子级
        </vxe-tip>
        <vxe-tip status="error">
          树拖拽功能仅支持 <ApiLink name="table" prop="tree-config"/>.<ApiLink name="table" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
