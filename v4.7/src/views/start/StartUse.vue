<template>
  <div>
    <h2>按需加载</h2>
    <p class="tip">
      方式1：如果您使用了 vite，借助插件 <a class="link" href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 可以实现按需加载模块。
    </p>
    <pre>
      <pre-code class="shell">
        npm install unplugin-vue-components @vxecli/import-unplugin-vue-components
      </pre-code>
      <div>修改文件 vite.config</div>
      <pre-code class="typescript">
        // ...
        import Components from 'unplugin-vue-components/vite'
        import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

        export default defineConfig({
          plugins: [
            // ...,
            Components({
              resolvers: [
                VxeResolver({
                  libraryName: 'vxe-pc-ui'
                  // importStyle: true
                }),
                VxeResolver({
                  libraryName: 'vxe-table'
                  // importStyle: true
                })
              ]
            })
          ]
        })
      </pre-code>
    </pre>

    <p class="tip">
      方式2：如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 可以实现按需加载模块。
    </p>
    <pre>
      <pre-code class="shell">
        npm install unplugin-vue-components @vxecli/import-unplugin-vue-components
      </pre-code>
      <div>修改文件 vue.config</div>
      <pre-code class="typescript">
        // ...
        import Components from 'unplugin-vue-components/webpack'
        import { VxeResolver } from '@vxecli/import-unplugin-vue-components'

        export default defineConfig({
          plugins: [
            // ...,
            Components({
              resolvers: [
                VxeResolver({
                  libraryName: 'vxe-pc-ui'
                  // importStyle: true
                }),
                VxeResolver({
                  libraryName: 'vxe-table'
                  // importStyle: true
                })
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
        import { VxeResolver } from '@vxecli/import-vite-plugin-style-import'

        export default defineConfig({
          plugins: [
            // ...,
            createStyleImportPlugin({
              resolves: [
                VxeResolver({
                  libraryName: 'vxe-table'
                  // importStyle: true
                })
              ]
            })
          ]
        })
      </pre-code>
    </pre> -->

    <h2>使用</h2>
    <p class="tip">
      以下是全量组件的安装列表
    </p>
    <pre>
      <pre-code class="typescript">
        // ...
        import {
          VxeUI,
          VxeTable,
          VxeColumn,
          VxeColgroup,
          VxeGrid,
          VxeToolbar
        } from 'vxe-table'

        import {
          VxeButton,
          VxeButtonGroup,
          VxeCheckbox,
          VxeCheckboxGroup,
          VxeFormItem,
          VxeForm,
          VxeIcon,
          VxeInput,
          VxeModal,
          VxePager,
          VxePulldown,
          VxeRadio,
          VxeRadioButton,
          VxeRadioGroup,
          VxeSelect,
          VxeSwitch,
          VxeTextarea,
          VxeTooltip
        } from 'vxe-pc-ui'
        // ...

        // 导入主题变量，也可以重写主题变量
        import 'vxe-table/styles/cssvar.scss'
        import 'vxe-pc-ui/styles/cssvar.scss'

        // 导入默认的语言
        import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

        VxeUI.setI18n('zh-CN', zhCN)
        VxeUI.setLanguage('zh-CN')

        function LazyVxeTable (app) {
          app.use(VxeTable)
          app.use(VxeColumn)
          app.use(VxeColgroup)
          app.use(VxeGrid)
          app.use(VxeToolbar)
        }

        function LazyVxeUI (app) {
          app.use(VxeButton)
          app.use(VxeButtonGroup)
          app.use(VxeCheckbox)
          app.use(VxeCheckboxGroup)
          app.use(VxeFormItem)
          app.use(VxeForm)
          app.use(VxeIcon)
          app.use(VxeInput)
          app.use(VxeModal)
          app.use(VxePager)
          app.use(VxePulldown)
          app.use(VxeRadio)
          app.use(VxeRadioButton)
          app.use(VxeRadioGroup)
          app.use(VxeSelect)
          app.use(VxeSwitch)
          app.use(VxeTextarea)
          app.use(VxeTooltip)
        }

        createApp(App).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
      </pre-code>
    </pre>
  </div>
</template>
