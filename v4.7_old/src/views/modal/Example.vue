<template>
  <div>
    <CodeLight path="modal/Demo1">
      <template #tip>
        <div>轻提示。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'modal'}}">API</router-link></div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo2">
      <template #tip>
        <div>提示框</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo3">
      <template #tip>
        <div>确认框</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo4">
      <template #tip>
        <div>弹窗</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo5">
      <template #tip>
        <div>遮罩层，锁定页面</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo6">
      <template #tip>
        <div>多窗口可叠加</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo7">
      <template #tip>
        <div>拖动窗口调整大小</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo8">
      <template #tip>
        <div>最大化</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo9">
      <template #tip>
        <div>记忆功能的弹窗，缓存上次拖动的位置</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo10">
      <template #tip>
        <div>阻止关闭，点击关闭，或者按 ESC 键之前可以拦截</div>
      </template>
    </CodeLight>

    <CodeLight path="modal/Demo11">
      <template #tip>
        <div>自定义模板，如果在不使用内部功能情况下需要显示底部，需要设置 show-footer</div>
      </template>
    </CodeLight>
  </div>
</template>
