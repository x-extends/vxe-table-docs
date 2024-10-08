<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/">vue 2.6+</vxe-link></div>
        </vxe-tip>
        <vxe-tip status="error" title="需要注意！！！">
          <div>v3.0 可以直接升级 v3.8</div>
          <div>v3.8 不能直接升级 v3.9，需要调整安装方式，如果是使用老版本记得锁定版本号</div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="shell">
            npm install vxe-table@3.9.0
            # 或者
            yarn add vxe-table@3.9.0
          </pre-code>
          <pre-code class="javascript">
            import Vue from 'vue'
            // ...

            // 完整导入 UI 组件库
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            // ...

            // 完整导入 表格库
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            Vue.use(VxeUI)
            Vue.use(VxeUITable)
            //...
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="CDN 方式">
          <div>可以通过第三方开放的 CDN 来引用， <vxe-link href="https://unpkg.com/vxe-table/">unpkg</vxe-link> 或 <vxe-link href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</vxe-link> 获取到最新版本的资源，并在页面上引入即可</div>
        </vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="html">
            &lt;!-- 引入样式 --&gt;
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-pc-ui@3.1.24/lib/style.css"&gt;
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@3.9.0/lib/style.css"&gt;
            &lt;!-- 引入vue --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"&gt;&lt;/script&gt;
            &lt;!-- 引入组件 --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-pc-ui@3.1.24"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@3.9.0"&gt;&lt;/script&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
