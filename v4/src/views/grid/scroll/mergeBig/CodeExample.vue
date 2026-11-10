<template>
  <div>
    <CodeLight path="grid/scroll/mergeBig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="超大量单元格合并">
          当通过 <ApiLink name="table" prop="merge-cells" /> 或调用函数 <ApiLink name="table" prop="setMergeCells" />、<ApiLink name="table" prop="setMergeCells" /> 来设置合并时，会自动对合并进行优化到最流畅效果
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
