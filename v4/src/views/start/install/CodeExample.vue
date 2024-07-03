<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 3.2+</vxe-link></div>
        </vxe-tip>
        <vxe-tip status="error" title="需要注意！！！">
          <div>v4.0 可以直接升级 v4.6</div>
          <div>v4.6 不能直接升级 v4.7，需要调整安装方式，如果是使用老版本记得锁定版本号</div>
        </vxe-tip>
      </template>

      <template #use>
        <div>
          完整安装，可以直接使用完整功能。
          <vxe-link status="primary" href="https://github.com/xuliangzhan/vxe-table-demo/tree/master/vxe-table-by-vue3-vite-typescript" target="_blank">示例项目</vxe-link>
        </div>
        <pre>
          <pre-code class="shell">
            npm install vxe-table@next
            # 或者
            yarn add vxe-table@next
          </pre-code>
          <pre-code class="javascript">
            // ...纯表格
            import VxeTable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            // ...可选 UI
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            // ...

            createApp(App).use(VxeUI).use(VxeTable).mount('#app')
            // ...
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
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-pc-ui/lib/style.css"&gt;
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@next/lib/style.css"&gt;
            &lt;!-- 引入vue --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
            &lt;!-- 引入组件 --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-pc-ui"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@next"&gt;&lt;/script&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
