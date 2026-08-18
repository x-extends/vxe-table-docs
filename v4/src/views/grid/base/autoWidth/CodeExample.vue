<template>
  <div>
    <CodeLight path="grid/base/autoWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="根据内容自适应宽度">
          当值设置为 <ApiLink name="grid" prop="width"/>='auto' | <ApiLink name="grid" prop="min-width"/>='auto' 时可以根据内容自适应宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoWidth/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 <ApiLink name="grid" prop="min-width"/>='auto' 方式可以避免宽度不够时不会自动铺满表格
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoWidth/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          对于某些场景，如果希望只对单元格进行自适应列宽，而列头保持自动换行不做设置，可以通过 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="auto-options"/> 来控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
