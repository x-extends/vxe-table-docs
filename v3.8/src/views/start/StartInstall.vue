<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <div class="red">需要注意：v3.0.x 可以直接升级 v3.8.x</div>
    <div class="red">需要注意：v3.8.x 不能直接升级 v3.9+，需要调整安装方式，如果是使用老版本记得锁定版本号</div>
    <div style="color: #21c966;padding: 16px;margin: 16px 0;border: 2px solid #21c966;font-size: 1.2em;">
      <div>锁定版本方式，修改 package.json</div>
      <div>手动将对应的版本号修改为 "vxe-table": "~3.8.25"</div>
    </div>
    <p class="tip">
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/">webpack</a>、<a class="link" href="https://vitejs.dev/">vite</a> 等 打包工具配合使用。<br>
      依赖库： <a class="link" href="https://vxetable.cn/xe-utils" target="_blank">xe-utils</a>&nbsp;&nbsp;<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 2.6+</a><br>
    </p>
    <pre>
      <pre-code class="shell">
        npm install vxe-table@3.8.25
      </pre-code>
      <pre-code class="javascript">
        import Vue from 'vue'
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'

        Vue.use(VxeUITable)
      </pre-code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过第三方开放的 CDN 来引用， <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将不受信任的第三方 CDN 用于正式环境，因为该连接随时都可能会失效，导致项目出错，如确实需要使用第三方 CDN 方式记得锁定版本号，锁定版本的方法请查看第三方的说明）</span>
    </p>
    <pre>
      <pre-code class="xml">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@3.8.25/lib/style.css"&gt;
        &lt;!-- 引入vue --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"&gt;&lt;/script&gt;
        &lt;!-- 引入组件 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@3.8.25"&gt;&lt;/script&gt;
      </pre-code>
    </pre>
  </div>
</template>
