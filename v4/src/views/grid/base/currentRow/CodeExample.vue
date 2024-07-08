<template>
  <div>
    <CodeLight path="grid/base/currentRow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示高亮行">使用 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="isCurrent"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/currentRow/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="currentMethod"/> 来控制是否允许被选择</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
