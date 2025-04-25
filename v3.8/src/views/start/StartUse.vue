<template>
  <div>
    <h2>{{ $t('app.aside.nav.use') }}</h2>
    <p class="tip">
      如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import@1.13.6</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install babel-plugin-import@1.13.6 -D
      </pre-code>
      <div>修改文件 .babelrc 或 babel.config.js</div>
      <pre-code class="javascript">
        {
          "plugins": [
            [
              "import",
              {
                "libraryName": "vxe-table",
                "style": true // 样式是否也按需加载
              }
            ]
          ]
        }
      </pre-code>
    </pre>
    <p class="tip">最后这样按需引入模块，就可以减小体积了</p>
    <pre>
      <pre-code class="javascript">
        import Vue from 'vue'
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
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 导入默认的语言
        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VXETable.setConfig({
          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
        })

        // 可选表格模块
        // Vue.use(VxeTableFilterModule)
        // Vue.use(VxeTableEditModule)
        // Vue.use(VxeTableMenuModule)
        // Vue.use(VxeTableExportModule)
        // Vue.use(VxeTableKeyboardModule)
        // Vue.use(VxeTableValidatorModule)
        // Vue.use(VxeTableCustomModule)

        // 可选组件
        Vue.use(VxeIcon)
          Vue.use(VxeTable)
          Vue.use(VxeColumn)
          Vue.use(VxeColgroup)
          // Vue.use(VxeVxeGrid)
          // Vue.use(VxeTooltip)
          // Vue.use(VxeToolbar)
          // Vue.use(VxePager)
          // Vue.use(VxeForm)
          // Vue.use(VxeFormItem)
          // Vue.use(VxeFormGather)
          // Vue.use(VxeCheckbox)
          // Vue.use(VxeCheckboxGroup)
          // Vue.use(VxeRadio)
          // Vue.use(VxeRadioGroup)
          // Vue.use(VxeRadioButton)
          // Vue.use(VxeSwitch)
          // Vue.use(VxeInput)
          // Vue.use(VxeSelect)
          // Vue.use(VxeOptgroup)
          // Vue.use(VxeOption)
          // Vue.use(VxeTextarea)
          // Vue.use(VxeButton)
          // Vue.use(VxeButtonGroup)
          // Vue.use(VxeModal)
          // Vue.use(VxeList)
          // Vue.use(VxePulldown)
      </pre-code>
    </pre>
  </div>
</template>
