<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/" target="_blank">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="仅安装设计器">
          仅可以使用可视化设计器功能，不包含任何 UI 组件，建议使用第三方 UI 组件库自行实现。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
              npm install ${ designCDNLib }
              # 或者
              yarn add ${ designCDNLib }
              # 或者
              pnpm add ${ designCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            :content="`
              // ...
              import VxeUIDesign from 'vxe-design'
              import 'vxe-design/lib/style.css'
              // ...

              Vue.use(VxeUIDesign)
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
      'tableCDNLib',
      'designCDNLib'
    ])
  }
})
</script>
