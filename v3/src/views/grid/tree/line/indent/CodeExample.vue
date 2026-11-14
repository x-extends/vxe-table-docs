<template>
  <div>
    <CodeLight path="grid/tree/line/indent/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="节点缩进">
          通过 css 变量来全局设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/line/indent/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          配合 <ApiLink name="grid" prop="tree-config" />.<ApiLink name="table" prop="indent" /> 来设置节点缩进
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
