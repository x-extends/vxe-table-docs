<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/" target="_blank">vue 2.6+</vxe-link></div>
        </vxe-tip>
        <vxe-tip status="error" title="需要注意！！！">
          <div>v3.0 可以直接升级 v3.8（如果是使用老版本记得锁定版本号）</div>
          <div>v3.8 不能直接升级 v3.9（组件代码基本不用改，变动的是安装方式、全局的主题变量）</div>
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
