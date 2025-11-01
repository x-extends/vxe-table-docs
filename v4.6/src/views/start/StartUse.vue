<template>
  <div>
    <h2>{{ $t('app.aside.nav.use') }}</h2>
    <div style="color: red;padding: 16px;margin: 16px 0;border: 2px solid red;font-size: 1.2em;">
      <div class="" style="font-weight: 700;font-size: 48px;">严重问题提醒：</div>
      <div>锁定版本方式，修改 package.json，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>，避免版本自动升级新功能影响旧功能</div>
      <div>例如：手动将对应的版本号修改为 "vxe-table": "~3.8.28"</div>
    </div>
    <p class="tip">
      当只用得到部分组件时，只需两步，通过按需加载插件可以去掉未被使用的组件。
    </p>
    <h2>1. 配置插件</h2>
    <p class="tip">
      如果您使用了 vite，借助插件 <a class="link" href="https://www.npmjs.com/package/vite-plugin-lazy-import" target="_blank">vite-plugin-lazy-import</a> 可以实现按需加载模块。
    </p>
    <pre>
      <pre-code class="shell">
        npm install vite-plugin-lazy-import -D
      </pre-code>
      <div>修改文件 vite.config</div>
      <pre-code class="typescript">
        // ...
        import { lazyImport, VxeResolver } from 'vite-plugin-lazy-import'

        export default defineConfig({
          plugins: [
            // ...,
            lazyImport({
              resolvers: [
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

    <p class="tip">
      方如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 可以实现按需加载模块，减少文件体积。
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

    <h2>2. 导入使用</h2>
    <p class="tip">
      以下是全量的组件及模块安装列表
    </p>
    <pre>
      <pre-code class="typescript">
        // ...
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
          // VxeDrawer,
          // VxeList,
          // VxePulldown
        } from 'vxe-table'
        // ...

        // 导入默认的语言
        import zhCN from 'vxe-table/es/locale/lang/zh-CN'

        // 导入主题变量，也可以重写主题变量
        import 'vxe-table/styles/cssvar.scss'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VXETable.setConfig({
          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
        })

        function LazyVxeUITable (app) {
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
          // app.use(VxeDrawer)
          // app.use(VxeList)
          // app.use(VxePulldown)
        }

        createApp(App).use(LazyVxeUITable).mount('#app')
      </pre-code>
    </pre>
  </div>
</template>
