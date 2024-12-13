<template>
  <div>
    <CodeLight path="table/rowDrag/tree/selfToChildDrag/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自己拖拽给自己子级">
          通过 <ApiLink name="table" prop="row-drag-config"/>.<ApiLink name="table" prop="isSelfToChildDrag"/> 启用允许自己拖拽给自己的子级
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
