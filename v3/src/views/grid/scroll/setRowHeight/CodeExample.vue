<template>
  <div>
    <CodeLight path="grid/scroll/setRowHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置行高 + 自适应行高">
          自适应行高的同时与设置指定行的行高，通过调用 <ApiLink name="grid" prop="setRowHeight"/> 设置行高与 <ApiLink name="grid" prop="getRowHeight"/> 获取行高，需要设置 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="keyField"/> 行主键。对于需要给指定行自定义计算行高设置时可能会用到，非常灵活的自定义每一行的行高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
