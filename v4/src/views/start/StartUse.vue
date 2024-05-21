<template>
  <div>
    <h2>{{ $t('app.aside.nav.use') }}</h2>
    <p class="tip">
      方式1：如果您使用了 vite，借助插件 <a class="link" href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install unplugin-vue-components @vxecli/import-unplugin-vue-components
      </pre-code>
      <div>修改文件 vite.config</div>
      <pre-code class="typescript">
        // ...
        import Components from 'unplugin-vue-components/vite'
        import { VxeTableResolver } from '@vxecli/import-unplugin-vue-components'

        export default defineConfig({
          plugins: [
            // ...,
            Components({
              resolvers: [
                VxeTableResolver()
              ]
            })
          ]
        })
      </pre-code>
    </pre>

    <p class="tip">
      方式2：如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install unplugin-vue-components @vxecli/import-unplugin-vue-components
      </pre-code>
      <div>修改文件 vue.config</div>
      <pre-code class="typescript">
        // ...
        import Components from 'unplugin-vue-components/webpack'
        import { VxeTableResolver } from '@vxecli/import-unplugin-vue-components'

        export default defineConfig({
          plugins: [
            // ...,
            Components({
              resolvers: [
                VxeTableResolver()
              ]
            })
          ]
        })
      </pre-code>
    </pre>

    <!-- <p class="tip">
      方式3：如果您使用了 vite，借助插件 <a class="link" href="https://www.npmjs.com/package/vite-plugin-style-import" target="_blank">vite-plugin-style-import</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install vite-plugin-style-import @vxecli/import-vite-plugin-style-import
      </pre-code>
      <div>修改文件 vite.config</div>
      <pre-code class="typescript">
        // ...
        import { createStyleImportPlugin } from 'vite-plugin-style-import'
        import { VxeTableResolve } from '@vxecli/import-vite-plugin-style-import'

        export default defineConfig({
          plugins: [
            // ...,
            createStyleImportPlugin({
              resolves: [
                VxeTableResolve()
              ]
            })
          ]
        })
      </pre-code>
    </pre> -->

    <h2>使用</h2>
    <p class="tip">
      以下是全量的组件及模块安装列表
    </p>
    <pre>
      <pre-code class="typescript">
        import { App, createApp } from 'vue'
        import XEUtils from 'xe-utils'
        import {
          // 全局实例对象
          VXETable,

          // 可选表格模块
          // VxeTableFilterModule,
          // VxeTableEditModule,
          // VxeTableMenuModule,
          // VxeTableExportModule,
          // VxeTableKeyboardModule,
          // VxeTableValidatorModule,
          // VxeTableCustomModule,

          // 可选组件
          VxeIcon,
          VxeTable,
          VxeColumn,
          VxeColgroup,
          // VxeGrid,
          // VxeTooltip,
          // VxeToolbar,
          // VxePager,
          // VxeForm,
          // VxeFormItem,
          // VxeFormGather,
          // VxeCheckbox,
          // VxeCheckboxGroup,
          // VxeRadio,
          // VxeRadioGroup,
          // VxeRadioButton,
          // VxeSwitch,
          // VxeInput,
          // VxeSelect,
          // VxeOptgroup,
          // VxeOption,
          // VxeTextarea,
          // VxeButton,
          // VxeButtonGroup,
          // VxeModal,
          // VxeList,
          // VxePulldown
        } from 'vxe-table'

        // 导入默认的语言
        import zhCN from 'vxe-table/es/locale/lang/zh-CN'

        // 导入主题变量，也可以重写主题变量
        import 'vxe-table/styles/cssvar.scss'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VXETable.setConfig({
          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
        })

        function useTable (app: App) {
          // 可选表格模块
          // app.use(VxeTableFilterModule)
          // app.use(VxeTableEditModule)
          // app.use(VxeTableMenuModule)
          // app.use(VxeTableExportModule)
          // app.use(VxeTableKeyboardModule)
          // app.use(VxeTableValidatorModule)
          // app.use(VxeTableCustomModule)

          // 可选组件
          app.use(VxeIcon)
          app.use(VxeTable)
          app.use(VxeColumn)
          app.use(VxeColgroup)
          // app.use(VxeVxeGrid)
          // app.use(VxeTooltip)
          // app.use(VxeToolbar)
          // app.use(VxePager)
          // app.use(VxeForm)
          // app.use(VxeFormItem)
          // app.use(VxeFormGather)
          // app.use(VxeCheckbox)
          // app.use(VxeCheckboxGroup)
          // app.use(VxeRadio)
          // app.use(VxeRadioGroup)
          // app.use(VxeRadioButton)
          // app.use(VxeSwitch)
          // app.use(VxeInput)
          // app.use(VxeSelect)
          // app.use(VxeOptgroup)
          // app.use(VxeOption)
          // app.use(VxeTextarea)
          // app.use(VxeButton)
          // app.use(VxeButtonGroup)
          // app.use(VxeModal)
          // app.use(VxeList)
          // app.use(VxePulldown)
        }

        createApp(App).use(useTable).mount('#app')
      </pre-code>
    </pre>
  </div>
</template>
