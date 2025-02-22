<template>
  <div>
    <CodeLight path="grid/tree/expandRowKeys/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认展开">通过设置 <ApiLink name="grid" prop="expandRowKeys"/> 属性默认展开指定节点</vxe-tip>
        <vxe-tip status="error">
          当数据未加载时，会在首次加载数据时触发 expandRowKeys 默认展开，非首次情况下通过调用 <ApiLink name="grid" prop="setTreeExpand"/> 方法展开
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
