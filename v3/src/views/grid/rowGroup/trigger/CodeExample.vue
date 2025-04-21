<template>
  <div>
    <CodeLight path="grid/rowGroup/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          点击单元格触发，通过配置 <ApiLink name="grid" prop="row-group-config"/>.<ApiLink name="grid" prop="trigger"/> 设置展开的触发方式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          点击行触发
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
