<template>
  <div>
    <CodeLight path="grid/tree/line/color/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="线颜色">
          通过 css 变量来全局设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/line/color/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="grid" prop="tree-config" />.<ApiLink name="table" prop="lineColor" /> 来设置连接线颜色
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
