<template>
  <div>
    <CodeLight path="grid/base/autoBreak/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应单元格高度">
          通过 <ApiLink name="grid" prop="show-overflow" />=false 设置自适应单元格高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/autoBreak/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          如果希望自适应高度的同时，再限制最大高度，可以使用 <ApiLink name="grid" prop="cell-config" />.<ApiLink name="grid" prop="max-height" /> 来设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
