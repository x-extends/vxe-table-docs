<template>
  <div>
    <CodeLight path="table/rowGroup/count/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多列合计">
          通过 <ApiLink name="column" prop="aggFunc"/> 和 <ApiLink name="table" prop="aggregate-config"/>.<ApiLink name="table" prop="calcValuesMethod"/> 自定义列的统计值
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/rowGroup/count/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="table" prop="aggregate-config"/>.<ApiLink name="table" prop="formatValuesMethod"/> 格式化显示的内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
