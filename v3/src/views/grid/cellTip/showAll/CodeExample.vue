<template>
  <div>
    <CodeLight path="grid/cellTip/showAll/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义单元格提示">
          可以通过 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="showAll"/> 显示全局单元格提示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
