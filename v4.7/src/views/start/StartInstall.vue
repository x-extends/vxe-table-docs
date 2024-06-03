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
        npm install vxe-table@v4-latest vxe-pc-ui@v4-latest
      </pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过第三方开放的 CDN 来引用， <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将不受信任的第三方 CDN 用于正式环境，因为该连接随时都可能会失效，导致项目出错，如确实需要使用第三方 CDN 方式记得锁定版本号，锁定版本的方法请查看第三方的说明）</span>
    </p>
    <pre>
      <pre-code class="html">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-pc-ui@v4-latest/lib/style.css"&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@v4-latest/lib/style.css"&gt;
        &lt;!-- 引入vue --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
        &lt;!-- 引入组件 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-pc-ui@v4-latest"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@v4-latest"&gt;&lt;/script&gt;
      </pre-code>
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
        import VxeTable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        import VxeUI from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        createApp(App).use(VxeUI).use(VxeTable).mount('#app')
        `
      ]
    }
  }
})
</script>
