<template>
  <div>
    <CodeLight path="grid/base/autoWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="根据内容自适应宽度">
          当值设置为 <ApiLink name="grid" prop="width"/>='auto' 时可以根据内容自适应宽度
        </vxe-tip>
        <vxe-tip status="error">
          需要注意，由于虚拟滚动是可视区渲染的，所以自适应列宽功能不支持虚拟滚动，需要关闭虚拟滚动才能使用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoWidth/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          对于某些场景，如果希望只对单元格进行自适应列宽，而列头保持自动换行不做设置，可以通过 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="auto-options"/> 来控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
