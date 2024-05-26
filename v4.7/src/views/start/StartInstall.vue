<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <p class="tip">
      配合 <a class="link" href="https://vxeui.com" target="_blank">Vxe UI</a> 组件库，更强更好用，支持表单可视化、列表可视化、流程可视化<br>
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/" target="_blank">webpack</a>、<a class="link" href="https://vitejs.dev/" target="_blank">vite</a> 等打包工具配合使用。<br>
      依赖库：<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" target="_blank">vue 3.2+</a><br>
    </p>
    <pre>
      <pre-code class="shell">
        npm install vxe-table@alpha
      </pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      demoCodes: [
        `
        // ...
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        // 可选组件库 Vxe UI
        import VxeUI from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        createApp(App).use(VxeUI).use(VxeUITable).mount('#app')
        `
      ]
    }
  }
})
</script>
