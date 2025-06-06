<template>
  <div>
    <CodeLight path="grid/rowGroup/total/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分组统计">
          通过 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="showTotal"/> 显示分组统计
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/total/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="totalMethod"/> 自定义分组统计值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
