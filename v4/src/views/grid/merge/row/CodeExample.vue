<template>
  <div>
    <CodeLight path="grid/merge/row/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="将行进行合并">
          通过设置 <ApiLink name="grid" prop="merge-cells"/>={ row: 第几行开始, col: 第几列开始, rowspan: 合并多少行, colspan: 合并多少列 } 配置合并规则
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
