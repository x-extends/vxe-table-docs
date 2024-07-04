<template>
  <div>
    <CodeLight path="table/custom/fixedMax/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="冻结列最大数量限制">默认最大只能冻结4列</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/fixedMax/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="maxFixedSize"/>=0 来取消最大冻结列数量限制 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
