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
          <pre-code
            language="shell"
            :content="`
              npm install ${ tableCDNLib }
              # 或者
              yarn add ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            :content="`
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
            `">
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib'
    ])
  }
})
</script>
