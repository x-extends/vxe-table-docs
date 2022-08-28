<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <p class="tip">
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/">webpack</a> 打包工具配合使用。<br>
      依赖库： <a class="link" href="https://www.npmjs.com/package/xe-utils">xe-utils</a>&nbsp;&nbsp;<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" style="font-size: 20px;font-weight: 700;">vue 2.6+</a><br>
    </p>
    <pre>
      <pre-code class="shell">
        npm install xe-utils vxe-table@legacy
      </pre-code>
      <pre-code class="javascript">
        import Vue from 'vue'
        import 'xe-utils'
        import VXETable from 'vxe-table'
        import 'vxe-table/lib/style.css'

        Vue.use(VXETable)

        // 给 vue 实例挂载内部对象，例如：
        // Vue.prototype.$XModal = VXETable.modal
        // Vue.prototype.$XPrint = VXETable.print
        // Vue.prototype.$XSaveFile = VXETable.saveFile
        // Vue.prototype.$XReadFile = VXETable.readFile
      </pre-code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过 <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将不受信任的CDN地址用于生产，因为该连接随时都可能会失效，导致项目挂掉，使用CDN方式记得锁定版本号，锁定版本的方法请查看 <a class="link" href="https://unpkg.com/">unpkg.com</a>）</span>
    </p>
    <pre>
      <pre-code class="xml">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@legacy/lib/style.css"&gt;
        &lt;!-- 引入脚本 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@legacy"&gt;&lt;/script&gt;
      </pre-code>
    </pre>
  </div>
</template>
