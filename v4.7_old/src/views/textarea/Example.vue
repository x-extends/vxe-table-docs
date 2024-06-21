<template>
  <div>
    <CodeLight path="textarea/Demo1">
      <template #tip>
        <div>多行文本。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'textarea'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="textarea/Demo2">
      <template #tip>
        <div>只读/禁用状态</div>
      </template>
    </CodeLight>

    <CodeLight path="textarea/Demo3">
      <template #tip>
        <div>显示字数统计</div>
      </template>
    </CodeLight>

    <CodeLight path="textarea/Demo4">
      <template #tip>
        <div>自适应文本高度</div>
      </template>
    </CodeLight>

    <CodeLight path="textarea/Demo5">
      <template #tip>
        <div>可调节元素的高度</div>
      </template>
    </CodeLight>
  </div>
</template>
