<template>
  <div>
    <CodeLight path="pulldown/Demo1">
      <template #tip>
        <div>下拉容器。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'pulldown'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="pulldown/Demo2">
      <template #tip>
        <div>自定义下拉列表</div>
      </template>
    </CodeLight>

    <CodeLight path="pulldown/Demo3">
      <template #tip>
        <div>自定义下拉按钮</div>
      </template>
    </CodeLight>

    <CodeLight path="pulldown/Demo4">
      <template #tip>
        <div>自定义下拉表格</div>
      </template>
    </CodeLight>
  </div>
</template>
