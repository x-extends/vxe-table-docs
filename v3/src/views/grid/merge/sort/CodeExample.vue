<template>
  <div>
    <CodeLight path="grid/merge/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="与排序同时使用">
          当排序后，临时合并的行与列都发生变化，临时合并被自动清除，需要重新赋值 <ApiLink name="grid" prop="merge-cells"/> 更新合并状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
