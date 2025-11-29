<template>
  <div>
    <CodeLight path="grid/rowGroup/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="排序">
          使用分组排序,当没有定义分组合计时，只排序子项
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/sort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当定义分组合计时，同时排序分组合计
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
