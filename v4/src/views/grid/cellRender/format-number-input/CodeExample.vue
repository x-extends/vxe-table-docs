<template>
  <div>
    <CodeLight path="grid/cellRender/format-number-input/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="负数自动标红">
          FormatNumberInput 格式化数字, { name: 'FormatNumberInput', showNegativeStatus: boolean, <ApiLink name="number-input" prop="props"/> }
        </vxe-tip>
        <vxe-tip status="error">
          需要注意只要特定的控件才支持自动显示负数标红
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
