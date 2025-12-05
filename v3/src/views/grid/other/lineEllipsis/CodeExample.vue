<template>
  <div>
    <CodeLight path="grid/other/lineEllipsis/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现单元格多行文本溢出省略">
          实现 3 行文本溢出隐藏，支持自定义行数
        </vxe-tip>
        <vxe-tip status="error">
          该方式不支持自动显示溢出文本提示，可以配合 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="showAll"/> 使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
