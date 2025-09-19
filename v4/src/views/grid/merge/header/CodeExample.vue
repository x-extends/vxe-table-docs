<template>
  <div>
    <CodeLight path="grid/merge/header/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="合并列头">
          通过设置 <ApiLink name="grid" prop="merge-header-cells"/>={ row: 第几行开始, col: 第几列开始, rowspan: 合并多少行, colspan: 合并多少列 } 配置合并规则
        </vxe-tip>
        <vxe-tip status="error">
          由于临时合并的特性，可以配置 <ApiLink name="gantt" prop="columns-change"/> 事件，在列更新时重新计算合并规则
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          需要注意，自定义列头合并后，被自定义合并的列将不支持拖拽调整列宽
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/merge/header/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义分组合并，默认是树形分组列头，可以通过 <ApiLink name="grid" prop="show-custom-header"/> 转为自定义列头，从而实现灵活的列头合并
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          需要注意，自定义列头合并后，被自定义合并的列将不支持拖拽调整列宽
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
