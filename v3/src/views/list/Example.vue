<template>
  <div>
    <CodeLight path="list/Demo1">
      <template #tip>
        <div>虚拟列表。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'list'}}">API</router-link></div>
        <div>最大可以支持 80w 行，将大数组按需切割成可视区 items 条数进行渲染，使渲染性能大幅提升</div>
        <div><span class="red">（注：必须固定容器高度和行高）</span></div>
      </template>
    </CodeLight>

    <CodeLight path="list/Demo2">
      <template #tip>
        <div>列表</div>
      </template>
    </CodeLight>

    <CodeLight path="list/Demo3">
      <template #tip>
        <div>列表</div>
      </template>
    </CodeLight>

    <CodeLight path="list/Demo4">
      <template #tip>
        <div>列表</div>
      </template>
    </CodeLight>

    <CodeLight path="list/Demo5">
      <template #tip>
        <div>列表</div>
      </template>
    </CodeLight>
  </div>
</template>
