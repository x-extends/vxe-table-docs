<template>
  <div>
    <CodeLight path="table/base/headerHighlight/Demo1">
      <template #tip>
        <vxe-tip status="primary">高亮当前列，当前列是唯一的，通过设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="isCurrent"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/headerHighlight/Demo2">
      <template #tip>
        <vxe-tip status="primary">列和行选中高亮，通过设置 <ApiLink name="table" prop="column-config"/>.isCurrent、<ApiLink name="table" prop="row-config"/>.isCurrent 参数</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
