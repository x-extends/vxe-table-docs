<template>
  <div>
    <CodeLight path="grid/base/width/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          列宽，通过设置 <ApiLink name="column" prop="width"/> 参数，支持固定像素、百分比、等比例分配等，如果不设置则按照表格的宽度进行均匀分配<br>
        </vxe-tip>
        <vxe-tip status="error">不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "<ApiLink name="column" prop="min-width"/>" 实现等比例缩放</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/width/Demo2">
      <template #tip>
        <vxe-tip status="primary">部分固定列宽，其余自动分配剩余空间</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/width/Demo3">
      <template #tip>
        <vxe-tip status="primary">设置固定和最小宽，实现等比例放大</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/width/Demo4">
      <template #tip>
        <vxe-tip status="primary">设置百分比</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/width/Demo5">
      <template #tip>
        <vxe-tip status="primary">根据内容自适应宽度</vxe-tip>
        <vxe-tip status="error">
          需要注意，由于虚拟滚动是可视区渲染的，所以自适应列宽功能不支持虚拟滚动，需要关闭虚拟滚动才能使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
