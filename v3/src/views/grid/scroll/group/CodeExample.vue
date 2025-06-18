<template>
  <div>
    <CodeLight path="grid/scroll/group/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分组表头">
          纵向虚拟滚动
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/scroll/group/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          横向虚拟滚动
        </vxe-tip>
        <vxe-tip status="error">
          当使用分组表头后，表头是不支持虚拟滚动的，应避免使用大量列头
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
