<template>
  <div>
    <CodeLight path="grid/tree/hierarchy/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="层级结构">
          树结构由 tree-config 和 column.tree-node 参数开启，支持渲染带有树层级结构的数据，例如 { id: 'xx', children: [] }
        </vxe-tip>
        <vxe-tip status="error">
          该模式下仅支持部分功能，不建议使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
