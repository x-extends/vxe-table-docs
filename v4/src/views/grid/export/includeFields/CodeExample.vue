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
          参数 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="columns"/> 可以指定哪些列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
