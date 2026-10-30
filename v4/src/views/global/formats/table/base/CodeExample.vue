<template>
  <div>
    <CodeLight path="global/formats/table/base/Demo1" :extra-imports="['./demo1.table.formats.ts']">
      <template #tip>
        <vxe-tip status="primary" title="Table 使用方法"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/formats/table/base/Demo2" :extra-imports="['./demo1.table.formats.ts']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用方式"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
