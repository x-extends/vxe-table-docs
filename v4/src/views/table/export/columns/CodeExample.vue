<template>
  <div>
    <CodeLight path="table/export/columns/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="指定默认列">
          参数 <ApiLink name="table" prop="export-config"/>.<ApiLink name="table" prop="columns"/> 可以指定默认勾选哪些列
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/export/columns/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="table" prop="export-config"/>.<ApiLink name="table" prop="includeFields"/> 可以默认指定字段
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/export/columns/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="table" prop="export-config"/>.<ApiLink name="table" prop="excludeFields"/> 可以默认排除字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
