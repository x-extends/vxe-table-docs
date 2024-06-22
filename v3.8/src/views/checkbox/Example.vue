<template>
  <div>
    <CodeLight path="checkbox/Demo1">
      <template #tip>
        <div>复选框。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'checkbox'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="checkbox/Demo2">
      <template #tip>
        <div>半选状态</div>
      </template>
    </CodeLight>

    <CodeLight path="checkbox/Demo3">
      <template #tip>
        <div>禁用状态</div>
      </template>
    </CodeLight>

    <CodeLight path="checkbox/Demo4">
      <template #tip>
        <div>自定义选中和未选择的值</div>
      </template>
    </CodeLight>

    <CodeLight path="checkbox/Demo5">
      <template #tip>
        <div>复选组</div>
      </template>
    </CodeLight>

    <CodeLight path="checkbox/Demo6">
      <template #tip>
        <div>限制最大选择数量</div>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Spacebar | 按下勾选 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
