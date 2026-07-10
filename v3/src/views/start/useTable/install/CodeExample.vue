<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link href="https://util.vxeui.com" target="_blank">xe-utils 4.0+</vxe-link>、<vxe-link  href="https://v2.cn.vuejs.org/" target="_blank">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="纯表格安装">
          仅可使用表格基础功能，依赖 <vxe-link href="https://github.com/x-extends/vxe-core" target="_blank">core</vxe-link> 核心库，不包含任何 UI 基础组件，不能使用任何高级功能，基础组件可以通过插槽模板方式使用第三方 UI 组件库自行实现。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${tableCDNLib} ${coreCDNLib}
            # 或者
            yarn add ${tableCDNLib} ${coreCDNLib}
            # 或者
            pnpm add ${tableCDNLib} ${coreCDNLib}
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            createApp(App).use(VxeUITable).mount('#app')
            // ...">
          </pre-code>
        </pre>
        <vxe-tip status="success" title="TS 类型提示">
          当安装纯表格时，如果是 TS 项目，只需要安装 vxe-pc-ui 类型提示，安装后会自动加载类型提示，本身不会导入任何组件代码。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${uiCDNLib}
            # 或者
            yarn add ${uiCDNLib}
            # 或者
            pnpm add ${uiCDNLib}
            `">
          </pre-code>
        </pre>
        <vxe-tip status="error" title="建议版本号">
          检查并修改 package.json 文件，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>，避免版本自动升级新功能影响旧功能
        </vxe-tip>
        <pre>
          <pre-code
            language="json"
            :content='`
            {
              ...
              "vxe-table": "^${tableLibVersion}"
              ...
            }
            `'>
          </pre-code>
          改成
          <pre-code
            language="json"
            :content='`
            {
              ...
              "vxe-table": "~${tableLibVersion}"
              ...
            }
            `'>
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
      'coreCDNLib',
      'utilCDNLib',
      'uiCDNLib',
      'tableCDNLib'
    ]),
    tableLibVersion (this: any) {
      return this.tableCDNLib ? this.tableCDNLib.split('@')[1] : ''
    }
  }
})
</script>
