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
          如果您使用了 vite，借助插件 <vxe-link href="https://www.npmjs.com/package/vite-plugin-lazy-import" target="_blank">vite-plugin-lazy-import</vxe-link> 可以实现按需加载模块。
        </div>
        <pre>
          <pre-code class="shell">
            npm install vite-plugin-lazy-import -D
          </pre-code>
          <pre-code class="javascript">
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
      </template>
    </CodeLight>

    <CodeLight>
      <template #use>
        <div>
          如果您使用了 webpack，借助插件 <vxe-link  href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</vxe-link> 可以实现按需加载模块。
        </div>
        <pre>
          <pre-code class="shell">
            npm install babel-plugin-import
          </pre-code>
          <pre-code class="javascript">
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
        <vxe-tip status="success" title="步骤 2. 全局导入" content="根据需要选择引入就可以实现按需加载模块，减少文件体积，以下是全量的组件及模块安装列表。"></vxe-tip>
        <vxe-tip status="error" title="" content="组件按需加载是不带语言包和主题的，需要手动导入语言包和主题变量。"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            // ...
            import {
              VxeUI,

              VxeAlert,
              VxeAnchor,
              VxeAnchorLink,
              VxeBreadcrumb,
              VxeBreadcrumbItem,
              VxeButton,
              VxeButtonGroup,
              VxeCalendar,
              VxeCard,
              VxeCarousel,
              VxeCheckbox,
              VxeCheckboxGroup,
              VxeCol,
              VxeCollapse,
              VxeCollapsePane,
              VxeDatePicker,
              VxeDrawer,
              VxeForm,
              VxeFormDesign,
              VxeFormGather,
              VxeFormItem,
              VxeFormView,
              VxeIcon,
              VxeIconPicker,
              VxeImage,
              VxeImageGroup,
              VxeImagePreview,
              VxeInput,
              VxeLayoutAside,
              VxeLayoutBody,
              VxeLayoutContainer,
              VxeLayoutFooter,
              VxeLayoutHeader,
              VxeLink,
              VxeListDesign,
              VxeListView,
              VxeList,
              VxeLoading,
              VxeMenu,
              VxeModal,
              VxeNumberInput,
              VxeOptgroup,
              VxeOption,
              VxePager,
              VxePasswordInput,
              VxePrintPageBreak,
              VxePrint,
              VxePulldown,
              VxeRadio,
              VxeRadioButton,
              VxeRadioGroup,
              VxeRow,
              VxeSelect,
              VxeSwitch,
              VxeTabPane,
              VxeTabs,
              VxeTag,
              VxeText,
              VxeTextarea,
              VxeTip,
              VxeTooltip,
              VxeTree,
              VxeTreeSelect,
              VxeUpload
            } from 'vxe-pc-ui'

            import {
              VxeTable,
              VxeColumn,
              VxeColgroup,
              VxeGrid,
              VxeToolbar
            } from 'vxe-table'

            // 导入主题变量，也可以重写主题变量
            import 'vxe-table/styles/cssvar.scss'
            import 'vxe-pc-ui/styles/cssvar.scss'

            // 导入默认的语言
            import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

            VxeUI.setI18n('zh-CN', zhCN)
            VxeUI.setLanguage('zh-CN')

            function lazyVxeUI (app) {
              app.use(VxeAlert)
              app.use(VxeAnchor)
              app.use(VxeAnchorLink)
              app.use(VxeBreadcrumb)
              app.use(VxeBreadcrumbItem)
              app.use(VxeButton)
              app.use(VxeButtonGroup)
              app.use(VxeCalendar)
              app.use(VxeCard)
              app.use(VxeCarousel)
              app.use(VxeCheckbox)
              app.use(VxeCheckboxGroup)
              app.use(VxeCol)
              app.use(VxeCollapse)
              app.use(VxeCollapsePane)
              app.use(VxeDatePicker)
              app.use(VxeDrawer)
              app.use(VxeForm)
              app.use(VxeFormDesign)
              app.use(VxeFormGather)
              app.use(VxeFormItem)
              app.use(VxeFormView)
              app.use(VxeIcon)
              app.use(VxeIconPicker)
              app.use(VxeImage)
              app.use(VxeImageGroup)
              app.use(VxeImagePreview)
              app.use(VxeInput)
              app.use(VxeLayoutAside)
              app.use(VxeLayoutBody)
              app.use(VxeLayoutContainer)
              app.use(VxeLayoutFooter)
              app.use(VxeLayoutHeader)
              app.use(VxeLink)
              app.use(VxeListDesign)
              app.use(VxeListView)
              app.use(VxeList)
              app.use(VxeLoading)
              app.use(VxeMenu)
              app.use(VxeModal)
              app.use(VxeNumberInput)
              app.use(VxeOptgroup)
              app.use(VxeOption)
              app.use(VxePager)
              app.use(VxePasswordInput)
              app.use(VxePrintPageBreak)
              app.use(VxePrint)
              app.use(VxePulldown)
              app.use(VxeRadio)
              app.use(VxeRadioButton)
              app.use(VxeRadioGroup)
              app.use(VxeRow)
              app.use(VxeSelect)
              app.use(VxeSwitch)
              app.use(VxeTabPane)
              app.use(VxeTabs)
              app.use(VxeTag)
              app.use(VxeText)
              app.use(VxeTextarea)
              app.use(VxeTip)
              app.use(VxeTooltip)
              app.use(VxeTree)
              app.use(VxeTreeSelect)
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
        <vxe-tip status="success" title="步骤 3. 开始使用" content="由于是全局安装，直接就可以使用"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="html">
            {{ decodeURIComponent('%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cvxe-table%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3Cvxe-column%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%20%20%3Cvxe-column%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2Fvxe-column%3E%0A%20%20%20%20%3C%2Fvxe-table%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A') }}
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
