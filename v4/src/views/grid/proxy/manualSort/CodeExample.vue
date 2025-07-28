<template>
  <div>
    <CodeLight path="grid/proxy/manualSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现单列的服务端排序"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/proxy/manualSort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现多列的服务端排序，通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="multiple"/> 启用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
