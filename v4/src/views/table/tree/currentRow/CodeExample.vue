<template>
  <div>
    <CodeLight path="table/tree/currentRow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示高亮行">使用 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="isCurrent"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/currentRow/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="current-row-config"/>.<ApiLink name="table" prop="beforeSelectMethod"/> 来控制是否允许被选择</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
