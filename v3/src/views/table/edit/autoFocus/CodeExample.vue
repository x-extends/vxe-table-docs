<template>
  <div>
    <CodeLight path="table/edit/autoFocus/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="编辑与聚焦">
        当使用自定义插槽时，如果为输入框，可以通过 <ApiLink name="column" prop="edit-render"/>.autoFocus 属性设置自动聚焦的元素，可以设置为 true，则自动匹配第一可输入元素，也可以传 css 选择器字符串。
        </vxe-tip>
        <vxe-tip status="error">
          需要注意 autoFocus="css 选择器" 所对应的元素必须是 input、textarea 等可输入元素才有效。建议 autoFocus=true，则自动识别 input、textarea 元素并聚焦
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
