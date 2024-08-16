<template>
  <div>
    <h2>按需加载</h2>
    <p class="tip">
      当只用得到部分组件时，只需三步，通过按需加载插件可以去掉未被使用的组件。
    </p>
    <h2>1. 配置插件</h2>
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

    <h2>2. 导入使用</h2>
    <p class="tip">
      以下是全量组件的安装列表
    </p>
    <pre>
      <pre-code class="typescript">
        // ...
        import {
          VxeUI,

          VxeButton,
          VxeButtonGroup,
          VxeCheckbox,
          VxeCheckboxGroup,
          VxeForm,
          VxeFormGather,
          VxeFormItem,
          VxeIcon,
          VxeInput,
          VxeList,
          VxeLoading,
          VxeModal,
          VxeOptgroup,
          VxeOption,
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

        VXETable.setI18n('zh-CN', zhCN)
        VXETable.setLanguage('zh-CN')

        // 注册组件
        // 如果页面中已经被显性导入了，则可以不用调用注册
        // 如果是配置式的，没有在页面中显性导入，则需要逐个注册
        VxeUI.component(VxeButton)
        VxeUI.component(VxeButtonGroup)
        VxeUI.component(VxeCheckbox)
        VxeUI.component(VxeCheckboxGroup)
        VxeUI.component(VxeForm)
        VxeUI.component(VxeFormGather)
        VxeUI.component(VxeFormItem)
        VxeUI.component(VxeIcon)
        VxeUI.component(VxeInput)
        VxeUI.component(VxeList)
        VxeUI.component(VxeLoading)
        VxeUI.component(VxeModal)
        VxeUI.component(VxeOptgroup)
        VxeUI.component(VxeOption)
        VxeUI.component(VxePager)
        VxeUI.component(VxePulldown)
        VxeUI.component(VxeRadio)
        VxeUI.component(VxeRadioButton)
        VxeUI.component(VxeRadioGroup)
        VxeUI.component(VxeSelect)
        VxeUI.component(VxeSwitch)
        VxeUI.component(VxeTextarea)
        VxeUI.component(VxeTooltip)

        VxeUI.component(VxeTable)
        VxeUI.component(VxeColumn)
        VxeUI.component(VxeColgroup)
        VxeUI.component(VxeGrid)
        VxeUI.component(VxeToolbar)
      </pre-code>
    </pre>

    <h2>步骤 3. 开始使用</h2>
    <p class="tip">
      由于没有安装，所以用到哪个就导入哪个
    </p>
    <pre>
      <pre-code class="html">
        {{ decodeURIComponent("%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CVxeButton%3E%E6%8C%89%E9%92%AE%3C%2FVxeButton%3E%0A%20%20%20%20%3CVxeTable%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3CVxeColumn%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%3C%2FVxeTable%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20VxeButton%20%7D%20from%20'vxe-pc-ui'%0Aimport%20%7B%20VxeTable%2C%20VxeColumn%20%7D%20from%20'vxe-table'%0A%3C%2Fscript%3E%0A") }}
      </pre-code>
    </pre>
  </div>
</template>
