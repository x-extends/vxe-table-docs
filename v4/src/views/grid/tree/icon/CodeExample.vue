<template>
  <div>
    <CodeLight path="grid/tree/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树的展开图标">
          树的展开图标按钮由 <ApiLink name="grid" prop="tree-config"/> 和 column.<ApiLink name="grid" prop="tree-node"/> 启用，当需要展开按钮图标时，可以通过 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="gantt" prop="showIcon"/> 来全部显示或全部隐藏。还可以通过 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="gantt" prop="visibleMethod"/> 来隐藏指定行的树展开图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义展开节点图标，通过设置 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="iconOpen"/> 和 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="iconClose"/> 局部替换默认的图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
