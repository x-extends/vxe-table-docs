<template>
  <div>
    <CodeLight path="grid/base/maxHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary">当一个表格高度需要自适应的时候可以设置为最大高度，通过设置 <ApiLink name="grid" prop="max-height"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/maxHeight/Demo2">
      <template #tip>
        <vxe-tip status="primary">如果设置 <ApiLink name="grid" prop="max-height"/>，当内容为达到最大高度时会自适应</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/maxHeight/Demo3">
      <template #tip>
        <vxe-tip status="primary">也可以设置相对于父容器的百分比</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
