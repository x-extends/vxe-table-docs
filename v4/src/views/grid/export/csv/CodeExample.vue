<template>
  <div>
    <CodeLight path="grid/export/csv/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="导出 CSV 文件">
          导出时单元格类型默认是自动转换的，如果是需要字符串类型，可以通过 column.<ApiLink name="column" prop="cell-type"/> 设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
