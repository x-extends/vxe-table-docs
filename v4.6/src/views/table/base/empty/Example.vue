<template>
  <div>
    <CodeLight path="table/base/empty/Demo1">
      <template #tip>
        <div>当数据为空时，通过 <table-api-link prop="empty-text"/> 设置空数据提示文本，可以使用 <router-link class="link" :to="{name: 'RendererEmpty'}">渲染器</router-link> 实现全局复用</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/empty/Demo2">
      <template #tip>
        <div>可以通过 slot=<table-api-link prop="empty"/> 自定义提示语</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/empty/Demo3">
      <template #tip>
        <div>出现滚动条</div>
      </template>
    </CodeLight>
  </div>
</template>
