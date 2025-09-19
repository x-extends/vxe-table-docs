<template>
  <div>
    <CodeLight path="table/menu/header/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="表头右键菜单">通过 menu-config.header 来配置 </vxe-tip>
        <vxe-tip status="error" title="小提示">
          当表格被放置在滚动条的容器中，可能会导致菜单面板被遮挡，可以通过设置 <ApiLink name="grid" prop="menu-config"/>.<ApiLink name="grid" prop="transfer"/> 参数解决
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
