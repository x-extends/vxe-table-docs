<template>
  <div>
    <CodeLight path="table/filter/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="筛选">
          通过 <ApiLink name="column" prop="filters"/> 开启筛选功能
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          当表格被放置在滚动条的容器中，可能会导致筛选面板被遮挡，可以通过设置 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="transfer"/> 参数解决
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
