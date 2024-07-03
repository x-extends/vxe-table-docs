<template>
  <div>
    <h2>按需加载</h2>
    <p class="tip">
      当只用得到部分组件时，只需三步，通过按需加载插件可以去掉未被使用的组件。
    </p>
    <h2>步骤 1. 插件配置</h2>
    <p class="tip">
      如果您使用了 vite，借助插件 <a class="link" href="https://www.npmjs.com/package/vite-plugin-lazy-import" target="_blank">vite-plugin-lazy-import</a> 可以实现按需加载模块。
    </p>
    <pre>
      <pre-code class="shell">
        npm install vite-plugin-lazy-import -D
      </pre-code>
      <pre-code class="typescript">
        // 修改文件 vue.config.js

        // ...
        import { lazyImport, VxeResolver } from 'vite-plugin-lazy-import'

        export default defineConfig({
          plugins: [
            // ...,
            lazyImport({
              resolvers: [
                VxeResolver({
                  libraryName: 'vxe-table'
                }),
                VxeResolver({
                  libraryName: 'vxe-pc-ui'
                })
              ]
            })
            // ...
          ]
        })
      </pre-code>
    </pre>

    <p class="tip">
      如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</a> 可以实现按需加载模块。
    </p>
    <pre>
      <pre-code class="shell">
        npm install babel-plugin-import
      </pre-code>
      <pre-code class="typescript">
        // 修改文件 babel.config.js

        // ...
        plugins: [
          ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table'],
          ['import', { libraryName: 'vxe-pc-ui', style: true }, 'vxe-pc-ui']
        ]
        // ...
      </pre-code>
    </pre>

    <h2>步骤 2. 全局导入</h2>
    <p class="tip">
      <span>根据需要选择引入就可以实现按需加载模块，减少文件体积，以下是全量的组件及模块安装列表。</span><br>
      <span class="red">组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。</span>
    </p>
    <pre>
      <pre-code class="typescript">
        // ...
        import {
          VXETable,
          VxeTable,
          VxeColumn,
          // VxeColgroup,
          // VxeGrid,
          // VxeToolbar
        } from 'vxe-table'

        import {
          // VxeButton,
          // VxeButtonGroup,
          // VxeCheckbox,
          // VxeCheckboxGroup,
          // VxeFormItem,
          // VxeForm,
          VxeIcon,
          VxeLoading,
          // VxeInput,
          // VxeModal,
          // VxePager,
          // VxePulldown,
          // VxeRadio,
          // VxeRadioButton,
          // VxeRadioGroup,
          // VxeSelect,
          // VxeSwitch,
          // VxeTextarea,
          // VxeTooltip
        } from 'vxe-pc-ui'
        // ...

        // 导入主题变量，也可以重写主题变量
        import 'vxe-table/styles/cssvar.scss'
        import 'vxe-pc-ui/styles/cssvar.scss'

        // 导入默认的语言
        import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

        VXETable.setI18n('zh-CN', zhCN)
        VXETable.setLanguage('zh-CN')

        function LazyVxeTable (app) {
          app.use(VxeTable)
          app.use(VxeColumn)
          // app.use(VxeColgroup)
          // app.use(VxeGrid)
          // app.use(VxeToolbar)
        }

        function LazyVxeUI (app) {
          // app.use(VxeButton)
          // app.use(VxeButtonGroup)
          // app.use(VxeCheckbox)
          // app.use(VxeCheckboxGroup)
          // app.use(VxeFormItem)
          // app.use(VxeForm)
          app.use(VxeIcon)
          app.use(VxeLoading)
          // app.use(VxeInput)
          // app.use(VxeModal)
          // app.use(VxePager)
          // app.use(VxePulldown)
          // app.use(VxeRadio)
          // app.use(VxeRadioButton)
          // app.use(VxeRadioGroup)
          // app.use(VxeSelect)
          // app.use(VxeSwitch)
          // app.use(VxeTextarea)
          // app.use(VxeTooltip)
        }

        createApp(App).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
      </pre-code>
    </pre>

    <h2>步骤 3. 开始使用</h2>
    <p class="tip">
      由于是全局安装，直接就可以使用
    </p>
    <pre>
      <pre-code class="html">
        {{ decodeURIComponent('%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cvxe-table%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3Cvxe-column%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%3C%2Fvxe-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A') }}
      </pre-code>
    </pre>
  </div>
</template>
