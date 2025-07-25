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
        <vxe-tip status="success" title="安装表格和可视化设计器">
          搭配强大设计器可以实现低代码、可视化生成表格列、列表渲染视图
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install${designCDNLib}  ${ tableCDNLib }
            # 或者
            yarn add ${designCDNLib} ${ tableCDNLib }
            # 或者
            pnpm add ${designCDNLib} ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUIDesign from 'vxe-design'
            import 'vxe-design/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            Vue.use(VxeUIDesign)
            Vue.use(VxeUITable)
            // ...">
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
