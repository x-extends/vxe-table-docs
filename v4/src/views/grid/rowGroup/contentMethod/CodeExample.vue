<template>
  <div>
    <CodeLight path="grid/rowGroup/contentMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义分组内容">
          通过 <ApiLink name="grid" prop="row-group-config"/>.<ApiLink name="grid" prop="contentMethod"/> 显示分组统计
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/contentMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          显示分组统计
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
