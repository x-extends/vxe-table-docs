<template>
  <div>
    <CodeLight path="grid/template/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格提示模板">
          单元格提示模板，使用插槽 <ApiLink name="grid" prop="headert-tooltip"/>、<ApiLink name="grid" prop="tooltip"/>、<ApiLink name="grid" prop="footer-tooltip"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/tooltip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当内容很多时，还可以通过 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="width"/>、<ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="height"/>、<ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="maxWidth"/>、<ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="maxHeight"/> 设置容器宽高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
