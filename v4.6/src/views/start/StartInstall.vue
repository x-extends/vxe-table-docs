<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <div class="red">需要注意：v4.0.x 可以直接升级 v4.6.x</div>
    <div class="red">需要注意：v4.6.x 不能直接升级 v4.7+，需要调整安装方式，如果是使用老版本记得锁定版本号</div>
    <div style="color: red;padding: 16px;margin: 16px 0;border: 2px solid red;font-size: 1.2em;">
      <div class="" style="font-weight: 700;font-size: 48px;">重要提醒：</div>
      <div>锁定版本方式，修改 package.json，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>，避免版本自动升级新功能影响旧功能</div>
      <div>例如：手动将对应的版本号修改为 "vxe-table": "~4.6.25"</div>
    </div>
    <p class="tip">
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/">webpack</a>、<a class="link" href="https://vitejs.dev/">vite</a> 等打包工具配合使用。<br>
      依赖库： <a class="link" href="https://vxetable.cn/xe-utils" target="_blank">xe-utils</a>&nbsp;&nbsp;<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 3.2+</a><br>
    </p>
    <pre>
      <pre-code class="shell">
        npm install vxe-table@4.6.25
        # 或者
        yarn add vxe-table@4.6.25
      </pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过第三方开放的 CDN 来引用， <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将不受信任的第三方 CDN 用于正式环境，因为该连接随时都可能会失效，导致项目出错，如确实需要使用第三方 CDN 方式记得锁定版本号，锁定版本的方法请查看第三方的说明）</span>
    </p>
    <pre>
      <pre-code class="xml">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@4.6.25/lib/style.css"&gt;
        &lt;!-- 引入vue --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
        &lt;!-- 引入组件 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@4.6.25"&gt;&lt;/script&gt;
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
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        createApp(App).use(VxeUITable).mount('#app')
        `
      ]
    }
  }
})
</script>
