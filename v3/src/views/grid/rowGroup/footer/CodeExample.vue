<template>
  <div>
    <CodeLight path="grid/rowGroup/footer/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="表尾合计">
          通过 <ApiLink name="column" prop="aggFunc"/> 和 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="calcValuesMethod"/> 自定义列的统计值后进行表尾合计
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
