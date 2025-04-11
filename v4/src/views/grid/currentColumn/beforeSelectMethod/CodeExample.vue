<template>
  <div>
    <CodeLight path="grid/currentColumn/beforeSelectMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="选中拦截">
          通过设置 <ApiLink name="grid" prop="current-column-config"/>.<ApiLink name="grid" prop="beforeSelectMethod"/> 来控制是否允许被选择
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
