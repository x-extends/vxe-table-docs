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
          <pre-code class="shell">
            npm install babel-plugin-import
          </pre-code>
          <pre-code class="javascript">
            // 修改文件 babel.config.js

            // ...
            plugins: [
              ['import', { libraryName: 'vxe-pc-ui', style: true }, 'vxe-pc-ui'],
              ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table']
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
              VxeAvatar,
              VxeBadge,
              VxeBreadcrumb,
              VxeBreadcrumbItem,
              VxeButton,
              VxeButtonGroup,
              VxeCalendar,
              VxeCard,
              VxeCarousel,
              VxeCarouselItem,
              VxeCheckbox,
              VxeCheckboxButton,
              VxeCheckboxGroup,
              VxeCol,
              VxeCollapse,
              VxeCollapsePane,
              VxeColorPicker,
              VxeCountdown,
              VxeDatePanel,
              VxeDatePicker,
              VxeDateRangePicker,
              VxeDrawer,
              VxeEmpty,
              VxeForm,
              VxeFormGather,
              VxeFormGroup,
              VxeFormItem,
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
              VxeList,
              VxeLoading,
              VxeMenu,
              VxeModal,
              VxeNoticeBar,
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
              VxeRate,
              VxeResult,
              VxeRow,
              VxeSelect,
              VxeSplit,
              VxeSplitPane,
              VxeSlider,
              VxeSteps,
              VxeSwitch,
              VxeTabPane,
              VxeTableSelect,
              VxeTabs,
              VxeTag,
              VxeTextEllipsis,
              VxeText,
              VxeTextarea,
              VxeTip,
              VxeTooltip,
              VxeTree,
              VxeTreeSelect,
              VxeUpload,
              VxeWatermark
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
              app.use(VxeAvatar)
              app.use(VxeBadge)
              app.use(VxeBreadcrumb)
              app.use(VxeBreadcrumbItem)
              app.use(VxeButton)
              app.use(VxeButtonGroup)
              app.use(VxeCalendar)
              app.use(VxeCard)
              app.use(VxeCarousel)
              app.use(VxeCarouselItem)
              app.use(VxeCheckbox)
              app.use(VxeCheckboxButton)
              app.use(VxeCheckboxGroup)
              app.use(VxeCol)
              app.use(VxeCollapse)
              app.use(VxeCollapsePane)
              app.use(VxeColorPicker)
              app.use(VxeCountdown)
              app.use(VxeDatePanel)
              app.use(VxeDatePicker)
              app.use(VxeDateRangePicker)
              app.use(VxeDrawer)
              app.use(VxeEmpty)
              app.use(VxeForm)
              app.use(VxeFormGather)
              app.use(VxeFormGroup)
              app.use(VxeFormItem)
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
              app.use(VxeList)
              app.use(VxeLoading)
              app.use(VxeMenu)
              app.use(VxeModal)
              app.use(VxeNoticeBar)
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
              app.use(VxeRate)
              app.use(VxeResult)
              app.use(VxeRow)
              app.use(VxeSelect)
              app.use(VxeSplit)
              app.use(VxeSplitPane)
              app.use(VxeSlider)
              app.use(VxeSteps)
              app.use(VxeSwitch)
              app.use(VxeTabPane)
              app.use(VxeTableSelect)
              app.use(VxeTabs)
              app.use(VxeTag)
              app.use(VxeTextEllipsis)
              app.use(VxeText)
              app.use(VxeTextarea)
              app.use(VxeTip)
              app.use(VxeTooltip)
              app.use(VxeTree)
              app.use(VxeTreeSelect)
              app.use(VxeUpload)
              app.use(VxeWatermark)
            }

            function lazyVxeTable (app) {
              app.use(VxeTable)
              app.use(VxeColumn)
              app.use(VxeColgroup)
              app.use(VxeGrid)
              app.use(VxeToolbar)
            }

            // ...
            Vue.use(lazyVxeUI)
            Vue.use(lazyVxeTable)
            // ...
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
