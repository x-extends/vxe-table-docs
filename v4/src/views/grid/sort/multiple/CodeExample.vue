<template>
  <div>
    <CodeLight path="grid/sort/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary">配置 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="multiple"/> 启用多字段排序</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/sort/multiple/Demo2">
      <template #tip>
        <vxe-tip status="primary">如果需要获取排序字段的先后顺序，可以通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="chronological"/> 设置</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
