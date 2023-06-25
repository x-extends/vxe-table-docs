<template>
  <div>
    <CodeLight path="tooltip/Demo1">
      <template #tip>
        <div>工具提示。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'tooltip'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/Demo2">
      <template #tip>
        <div>触发方式</div>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/Demo3">
      <template #tip>
        <div>手动模式</div>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/Demo4">
      <template #tip>
        <div>单实例模式</div>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/Demo5">
      <template #tip>
        <div>表格中使用</div>
      </template>
    </CodeLight>
  </div>
</template>
