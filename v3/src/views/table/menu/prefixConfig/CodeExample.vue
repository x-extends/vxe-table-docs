<template>
  <div>
    <CodeLight path="table/menu/prefixConfig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义前缀">
          通过 <ApiLink name="table" prop="prefix-config"/> 参数来配置
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          当表格被放置在滚动条的容器中，可能会导致菜单面板被遮挡，可以通过设置 <ApiLink name="grid" prop="menu-config"/>.<ApiLink name="grid" prop="transfer"/> 参数解决
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
