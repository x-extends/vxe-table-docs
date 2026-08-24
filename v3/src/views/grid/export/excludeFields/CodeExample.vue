<template>
  <div>
    <CodeLight path="grid/export/excludeFields/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="排除列">
          通过 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="excludeFields"/> 排除字段
        </vxe-tip>
        <vxe-tip status="success" title="小提示">
          默认是导出带有 field 的列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
