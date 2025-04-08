<template>
  <div>
    <CodeLight path="table/base/currentColumn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮当前列">通过设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="isCurrent"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/currentColumn/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="table" prop="current-column-config"/>.<ApiLink name="table" prop="beforeSelectMethod"/> 来控制是否允许被选择</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
