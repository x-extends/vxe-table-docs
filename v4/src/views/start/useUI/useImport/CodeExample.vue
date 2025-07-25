<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="配置按需加载 - 局部手动导入使用方式">
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
                      libraryName: 'vxe-pc-ui'
                    }),
                    VxeResolver({
                      libraryName: 'vxe-table'
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
        <vxe-tip status="success" title="步骤 2. 导入使用" content="根据需要选择引入就可以实现按需加载模块，减少文件体积，以下是全量的组件及模块安装列表。"></vxe-tip>
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
            import 'vxe-pc-ui/styles/cssvar.scss'
            import 'vxe-table/styles/cssvar.scss'
            import 'vxe-design/styles/cssvar.scss'

            // 导入默认的语言
            import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

            VxeUI.setI18n('zh-CN', zhCN)
            VxeUI.setLanguage('zh-CN')

            // 注册组件
            // 如果页面中已经被显性导入了，则可以不用调用注册
            // 如果是配置式的，没有在页面中显性导入，则需要逐个注册
            VxeUI.component(VxeAlert)
            VxeUI.component(VxeAnchor)
            VxeUI.component(VxeAnchorLink)
            VxeUI.component(VxeAvatar)
            VxeUI.component(VxeBadge)
            VxeUI.component(VxeBreadcrumb)
            VxeUI.component(VxeBreadcrumbItem)
            VxeUI.component(VxeButton)
            VxeUI.component(VxeButtonGroup)
            VxeUI.component(VxeCalendar)
            VxeUI.component(VxeCard)
            VxeUI.component(VxeCarousel)
            VxeUI.component(VxeCarouselItem)
            VxeUI.component(VxeCheckbox)
            VxeUI.component(VxeCheckboxButton)
            VxeUI.component(VxeCheckboxGroup)
            VxeUI.component(VxeCol)
            VxeUI.component(VxeCollapse)
            VxeUI.component(VxeCollapsePane)
            VxeUI.component(VxeColorPicker)
            VxeUI.component(VxeCountdown)
            VxeUI.component(VxeDatePanel)
            VxeUI.component(VxeDatePicker)
            VxeUI.component(VxeDateRangePicker)
            VxeUI.component(VxeDrawer)
            VxeUI.component(VxeEmpty)
            VxeUI.component(VxeForm)
            VxeUI.component(VxeFormGather)
            VxeUI.component(VxeFormGroup)
            VxeUI.component(VxeFormItem)
            VxeUI.component(VxeIcon)
            VxeUI.component(VxeIconPicker)
            VxeUI.component(VxeImage)
            VxeUI.component(VxeImageGroup)
            VxeUI.component(VxeImagePreview)
            VxeUI.component(VxeInput)
            VxeUI.component(VxeLayoutAside)
            VxeUI.component(VxeLayoutBody)
            VxeUI.component(VxeLayoutContainer)
            VxeUI.component(VxeLayoutFooter)
            VxeUI.component(VxeLayoutHeader)
            VxeUI.component(VxeLink)
            VxeUI.component(VxeList)
            VxeUI.component(VxeLoading)
            VxeUI.component(VxeMenu)
            VxeUI.component(VxeModal)
            VxeUI.component(VxeNoticeBar)
            VxeUI.component(VxeNumberInput)
            VxeUI.component(VxeOptgroup)
            VxeUI.component(VxeOption)
            VxeUI.component(VxePager)
            VxeUI.component(VxePasswordInput)
            VxeUI.component(VxePrintPageBreak)
            VxeUI.component(VxePrint)
            VxeUI.component(VxePulldown)
            VxeUI.component(VxeRadio)
            VxeUI.component(VxeRadioButton)
            VxeUI.component(VxeRadioGroup)
            VxeUI.component(VxeRate)
            VxeUI.component(VxeResult)
            VxeUI.component(VxeRow)
            VxeUI.component(VxeSelect)
            VxeUI.component(VxeSplit)
            VxeUI.component(VxeSplitPane)
            VxeUI.component(VxeSlider)
            VxeUI.component(VxeSteps)
            VxeUI.component(VxeSwitch)
            VxeUI.component(VxeTabPane)
            VxeUI.component(VxeTableSelect)
            VxeUI.component(VxeTabs)
            VxeUI.component(VxeTag)
            VxeUI.component(VxeTextEllipsis)
            VxeUI.component(VxeText)
            VxeUI.component(VxeTextarea)
            VxeUI.component(VxeTip)
            VxeUI.component(VxeTooltip)
            VxeUI.component(VxeTree)
            VxeUI.component(VxeTreeSelect)
            VxeUI.component(VxeUpload)
            VxeUI.component(VxeWatermark)

            VxeUI.component(VxeTable)
            VxeUI.component(VxeColumn)
            VxeUI.component(VxeColgroup)
            VxeUI.component(VxeGrid)
            VxeUI.component(VxeToolbar)
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="success" title="步骤 3. 开始使用" content="由于没有安装，所以用到哪个就导入哪个"></vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="html">
            {{ decodeURIComponent("%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CVxeButton%3E%E6%8C%89%E9%92%AE%3C%2FVxeButton%3E%0A%20%20%20%20%3CVxeTable%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3CVxeColumn%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%3C%2FVxeTable%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20VxeButton%20%7D%20from%20'vxe-pc-ui'%0Aimport%20%7B%20VxeTable%2C%20VxeColumn%20%7D%20from%20'vxe-table'%0A%3C%2Fscript%3E%0A") }}
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
