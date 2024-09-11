<template>
  <div>
    <CodeLight path="toolbar/Demo1">
      <template #tip>
        <div>工具栏。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'toolbar'}}">API</router-link></div>
        <div>如果需要与表格组合使用，需要通过调用 <table-api-link prop="connect"/> 方法与表格建立连接</div>
      </template>
    </CodeLight>

    <CodeLight path="toolbar/Demo2">
      <template #tip>
        <div>与表格组合使用</div>
      </template>
    </CodeLight>
  </div>
</template>
