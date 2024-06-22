<template>
  <div>
    <CodeLight path="grid/toolbar/Demo1">
      <template #tip>
        <div>工具栏：通过 <grid-api-link prop="toolbar-config"/> 属性配置，支持显示/隐藏列、列宽拖动状态的保存功能，可以通过表格的 <table-api-link prop="custom-config"/> 参数开启将列个性化的设置状态保存到本地</div>
      </template>
    </CodeLight>

    <CodeLight path="grid/toolbar/Demo2">
      <template #tip>
        <div>通过 <grid-api-link prop="custom-config"/>.<grid-api-link prop="mode"/> 设置弹窗高级模式</div>
      </template>
    </CodeLight>
  </div>
</template>
