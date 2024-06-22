<template>
  <div>
    <CodeLight path="table/advanced/customStorage/Demo1">
      <template #tip>
        <div>列个性化设置，通过表格设置 <table-api-link prop="id"/> 和 <table-api-link prop="custom-config"/>={storage: true} 参数开启将列个性化 localStorage 保存功能</div>
        <div>支持显示/隐藏列、固定列、列宽状态等缓存自定义状态，刷新页面状态始终保留</div>
        <div>通过 <table-api-link prop="custom"/> 事件实现显示/隐藏列服务端保存</div>
        <div>通过 <table-api-link prop="resizable-change"/> 事件实现列宽状态服务端保存</div>
      </template>
    </CodeLight>
  </div>
</template>
