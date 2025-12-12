<template>
  <div>
    <CodeLight path="grid/merge/filter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="与筛选同时使用">
          当筛选后，临时合并的行与列都发生变化，临时合并被自动清除，需要重新赋值 <ApiLink name="grid" prop="merge-cells"/> 更新合并状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
