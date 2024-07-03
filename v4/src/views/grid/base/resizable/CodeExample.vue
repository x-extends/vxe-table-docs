<template>
  <div>
    <CodeLight path="grid/base/resizable/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="resizable"/> 属性启用列宽拖动功能</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/resizable/Demo2">
      <template #tip>
        <vxe-tip status="primary">横向滚动条</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/resizable/Demo3">
      <template #tip>
        <vxe-tip status="primary">左右固定列宽拖动（固定左不允许超过固定右，固定右不允许超过固定左）</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/resizable/Demo4">
      <template #tip>
        <vxe-tip status="primary">分组表头拖动（只允许列拖动，不允许分组标题拖动）</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
