<template>
  <div>
    <CodeLight path="grid/cell/verticalAlign/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="垂直对齐">
          通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="height"/> 与 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="vertical-align"/> 设置所有列或指定列垂直对齐方式，默认为垂直居中
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cell/verticalAlign/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定列 <ApiLink name="column" prop="vertical-align"/> 设置垂直对齐方式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
