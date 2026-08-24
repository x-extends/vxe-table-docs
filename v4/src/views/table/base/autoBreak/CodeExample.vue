<template>
  <div>
    <CodeLight path="table/base/autoBreak/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自适应单元格高度">
          通过 <ApiLink name="table" prop="show-overflow" />=false 设置自适应单元格高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/autoBreak/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          如果希望自适应高度的同时，再限制最大高度，可以使用 <ApiLink name="table" prop="cell-config" />.<ApiLink name="table" prop="max-height" /> 来设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
