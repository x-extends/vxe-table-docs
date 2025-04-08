<template>
  <div>
    <CodeLight path="grid/base/currentColumn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮当前列">通过设置 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="isCurrent"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/currentColumn/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="grid" prop="current-column-config"/>.<ApiLink name="grid" prop="beforeSelectMethod"/> 来控制是否允许被选择</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
