<template>
  <div>
    <CodeLight path="grid/print/columns/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="指定默认列">
          参数 <ApiLink name="grid" prop="print-config"/>.<ApiLink name="grid" prop="columns"/> 可以指定默认勾选哪些列
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/print/columns/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="print-config"/>.<ApiLink name="grid" prop="includeFields"/> 可以默认指定字段
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/print/columns/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="print-config"/>.<ApiLink name="grid" prop="excludeFields"/> 可以默认排除字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
