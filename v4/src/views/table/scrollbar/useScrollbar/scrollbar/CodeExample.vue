<template>
  <div>
    <CodeLight path="grid/scrollbar/useScrollbar/scrollbar/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动条">
          默认是使用原生滚动条，可以通过 <ApiLink name="grid" prop="use-scrollbar" /> 使用虚拟滚动条
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/scrollbar/useScrollbar/scrollbar/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="scrollbar-config" />.<ApiLink name="grid" prop="visible" /> 来禁用滚动条
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
