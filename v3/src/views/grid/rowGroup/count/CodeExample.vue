<template>
  <div>
    <CodeLight path="grid/rowGroup/count/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多列合计">
          通过 <ApiLink name="column" prop="aggFunc"/> 和 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="calcValuesMethod"/> 自定义列的统计值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
