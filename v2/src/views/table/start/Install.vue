<template>
  <div>
    <h2>{{ $t('app.aside.nav.install') }}</h2>
    <p class="tip">
      推荐使用 npm 的方式安装，它能更好地和 <a class="link" href="https://webpack.js.org/">webpack</a> 打包工具配合使用。<br>
      依赖库： <a class="link" href="https://www.npmjs.com/package/xe-utils">xe-utils</a>&nbsp;&nbsp;<a class="link" href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" style="font-size: 20px;font-weight: 700;">vue2.6+</a><br>
    </p>
    <pre>
      <code class="shell">
        npm install xe-utils@3.5.31 vxe-table@2.11.0
      </code>
      <code class="javascript">
        import Vue from 'vue'
        import 'xe-utils'
        import VXETable from 'vxe-table'
        import 'vxe-table/lib/style.css'

        Vue.use(VXETable)

        // 给 vue 实例挂载内部对象，例如：
        // Vue.prototype.$XModal = VXETable.modal
        // Vue.prototype.$XPrint = VXETable.print
        // Vue.prototype.$XReadFile = VXETable.readFile
      </code>
    </pre>
    <h2>CDN</h2>
    <p class="tip">
      可以通过 <a class="link" href="https://unpkg.com/vxe-table/">unpkg</a> 或 <a class="link" href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</a> 获取到最新版本的资源，并在页面上引入即可<br>
      <span class="red">（注：不建议将公共的CDN地址用于生产，因为该连接随时都可能会失效，导致项目挂掉，使用CDN方式记得锁定版本号）</span>
    </p>
    <pre>
      <code class="xml">
        &lt;!-- 引入样式 --&gt;
        &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@2/lib/style.css"&gt;
        &lt;!-- 引入vue --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;
        &lt;!-- 引入脚本 --&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@2"&gt;&lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
