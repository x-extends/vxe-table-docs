<template>
  <div>
    <CodeLight path="form/Demo1">
      <template #tip>
        <div>
          表单，查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'form'}}">API</router-link>，可以通过 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 设置全局参数<br>
          默认渲染方式为配置式，不支持自定义的布局，可以通过设置 custom-layout 切换为自定义布局<br>
          <span class="red">（注：重置功能只对配置 item-render 的项有效）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="form/Demo2">
      <template #tip>
        <div>表单校验</div>
      </template>
    </CodeLight>

    <CodeLight path="form/Demo3">
      <template #tip>
        <div>自定义布局</div>
        <div>默认渲染方式为配置式，不支持自定义的布局，可以通过设置 custom-layout 切换为自定义布局</div>
      </template>
    </CodeLight>

    <CodeLight path="form/Demo4">
      <template #tip>
        <div>配置式表单</div>
      </template>
    </CodeLight>
  </div>
</template>
