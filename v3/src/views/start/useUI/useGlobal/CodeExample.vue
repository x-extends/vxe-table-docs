<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="配置按需加载 - 全局使用方式">
          当只用得到部分组件时，只需三步，通过按需加载插件可以去掉未被使用的组件。
        </vxe-tip>
        <vxe-tip status="success" title="步骤 1. 插件配置"></vxe-tip>
      </template>

      <template #use>
        <div>
          如果您使用了 webpack，借助插件 <vxe-link  href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</vxe-link> 可以实现按需加载模块。
        </div>
        <pre>
          <pre-code language="shell">
            npm install babel-plugin-import
          </pre-code>
          <pre-code language="javascript">
            // 修改文件 babel.config.js

            // ...
            plugins: [
              ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table'],
              ['import', { libraryName: 'vxe-pc-ui', style: true }, 'vxe-pc-ui']
            ]
            // ...
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="success" title="步骤 2. 搭配 UI 库按需导入" content="搭配强大的 UI 库可以使用全功能组件"></vxe-tip>
        <vxe-tip status="error" title="" content="组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            // ...
            import {
              VxeUI,

              VxeButton,
              VxeButtonGroup,
              VxeDrawer,
              VxeForm,
              VxeFormGroup,
              VxeFormItem,
              VxeIcon,
              VxeLoading,
              VxeModal,
              VxePager,
              VxePrint,
              VxeTooltip,
              VxeUpload
            } from 'vxe-pc-ui'

            import {
              VxeTable,
              VxeColumn,
              VxeColgroup,
              VxeGrid,
              VxeToolbar
            } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例（也可以使用旧别名 VXETable）

            // 导入主题变量，也可以重写主题变量
            import 'vxe-table/styles/cssvar.scss'
            import 'vxe-pc-ui/styles/cssvar.scss'

            // 导入默认的语言
            import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

            VxeUI.setI18n('zh-CN', zhCN)
            VxeUI.setLanguage('zh-CN')

            function lazyVxeUI (app) {
              app.use(VxeButton)
              app.use(VxeButtonGroup)
              app.use(VxeDrawer)
              app.use(VxeForm)
              app.use(VxeFormGroup)
              app.use(VxeFormItem)
              app.use(VxeIcon)
              app.use(VxeLoading)
              app.use(VxeModal)
              app.use(VxePager)
              app.use(VxePrint)
              app.use(VxeTooltip)
              app.use(VxeUpload)
            }

            function lazyVxeTable (app) {
              app.use(VxeTable)
              app.use(VxeColumn)
              app.use(VxeColgroup)
              app.use(VxeGrid)
              app.use(VxeToolbar)
            }

            createApp(App).use(lazyVxeUI).use(lazyVxeTable).mount('#app')
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="success" title="步骤 2. 纯表格按需导入" content="仅可使用表格，可以搭配第三方 UI 组件库使用"></vxe-tip>
        <vxe-tip status="error" title="" content="组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            // ...
            import {
              VxeUI,

              VxeTable,
              VxeColumn,
              VxeColgroup,
              VxeGrid,
              VxeToolbar
            } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例（也可以使用旧别名 VXETable）

            // 导入主题变量，也可以重写主题变量
            import 'vxe-table/styles/cssvar.scss'

            // 导入默认的语言
            import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

            VxeUI.setI18n('zh-CN', zhCN)
            VxeUI.setLanguage('zh-CN')

            function lazyVxeTable (app) {
              app.use(VxeTable)
              app.use(VxeColumn)
              app.use(VxeColgroup)
              app.use(VxeGrid)
              app.use(VxeToolbar)
            }

            createApp(App).use(lazyVxeTable).mount('#app')
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="success" title="步骤 3. 开始使用" content="由于是全局安装，直接就可以使用"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="html">
            {{ decodeURIComponent('%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cvxe-table%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3Cvxe-column%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%3C%2Fvxe-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A') }}
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
