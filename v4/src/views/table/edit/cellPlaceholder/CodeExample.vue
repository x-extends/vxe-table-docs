<template>
  <div>
    <CodeLight path="table/edit/cellPlaceholder/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格空值占位符">
          设置 <ApiLink name="column" prop="edit-render"/>.<ApiLink name="column" prop="placeholder"/> 启用占位符，但单元格内容为空时，则显示占位符的内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
