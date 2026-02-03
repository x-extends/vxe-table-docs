<template>
  <div>
    <CodeLight path="table/base/rowKey/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="行主键">
          通过 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/> 来设置，表格的每一行都必须存在行唯一主键，如果不存则自动生成，生成规则可以通过 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="createKey"/> 来自定义，也可以全局定义。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
