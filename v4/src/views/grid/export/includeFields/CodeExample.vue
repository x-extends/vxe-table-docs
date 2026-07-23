<template>
  <div>
    <CodeLight path="grid/export/includeFields/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="指定列">
          通过 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="includeFields"/> 可以指定字段
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/export/includeFields/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          如果希望不改变默认列情况下，额外再加上隐藏导出字段，可以通过 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="extraFields"/> 来设置额外字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
