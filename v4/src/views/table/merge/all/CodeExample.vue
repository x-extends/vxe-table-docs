<template>
  <div>
    <CodeLight path="table/merge/all/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="将行与列进行合并">
          通过设置 <ApiLink name="table" prop="merge-cells"/>={ row: 第几行开始, col: 第几列开始, rowspan: 合并多少行, colspan: 合并多少列 } 配置合并规则
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
