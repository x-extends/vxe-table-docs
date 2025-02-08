<template>
  <div>
    <CodeLight path="grid/cell/width/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          列宽，通过设置 <ApiLink name="column" prop="width"/> 参数，支持固定像素、百分比、等比例分配等，如果不设置则按照表格的宽度进行均匀分配<br>
        </vxe-tip>
        <vxe-tip status="error">不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "<ApiLink name="column" prop="min-width"/>" 实现等比例缩放</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
