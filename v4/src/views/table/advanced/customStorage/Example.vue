<template>
  <div>
    <CodeLight path="table/advanced/customStorage/Demo1">
      <template #tip>
        <div>
          显示/隐藏列功能，通过表格设置 <table-api-link prop="id"/> 和 <table-api-link prop="custom-config"/>={storage: true} 参数开启将列个性化 localStorage 保存功能<br>
          通过 <table-api-link prop="custom"/> 事件实现显示/隐藏列服务端保存，通过 <table-api-link prop="resizable-change"/> 事件实现列宽状态服务端保存
        </div>
      </template>
    </CodeLight>
  </div>
</template>
