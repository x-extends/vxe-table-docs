<template>
  <div>
    <CodeLight path="form/basics/Demo1">
      <template #tip>
        <div>
          表单，查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'form'}}">API</router-link>，可以通过 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 设置全局参数<br>
          默认渲染方式为配置式，不支持自定义的布局，可以通过设置 custom-layout 切换为自定义布局<br>
          <span class="red">（注：重置功能只对配置 item-render 的项有效）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
