<template>
  <div>
    <CodeLight path="table/base/maxWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列最大宽度">
          列最大宽度，通过设置 <ApiLink name="column" prop="max-width"/> 参数，对于存在宽度或最小宽时，希望限制在最大宽度内时就非常有用了
        </vxe-tip>
        <vxe-tip status="error">避免全部列都使用最大列宽，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
