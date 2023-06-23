<template>
  <div>
    <CodeLight path="button/Demo1">
      <template #tip>
        <div>按钮。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'button'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo2">
      <template #tip>
        <div>带状态颜色</div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo3">
      <template #tip>
        <div>圆角边框/圆角按钮</div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo4">
      <template #tip>
        <div>禁用状态</div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo5">
      <template #tip>
        <div>加载中</div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo6">
      <template #tip>
        <div>图标</div>
      </template>
    </CodeLight>

    <CodeLight path="button/Demo7">
      <template #tip>
        <div>下拉按钮</div>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Spacebar | 按下点击 |
            | Enter | 点击 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
