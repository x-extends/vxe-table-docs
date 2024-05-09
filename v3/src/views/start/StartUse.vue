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
          // Filter,
          // Menu,
          // Edit,
          // Export,
          // Keyboard,
          // Validator,
          // Custom,

          // 可选组件
          Icon,
          Column,
          Colgroup,
          Table,
          // Grid,
          // Toolbar,
          // Pager,
          // Checkbox,
          // CheckboxGroup,
          // Radio,
          // RadioGroup,
          // RadioButton,
          // Input,
          // Textarea,
          // Button,
          // ButtonGroup,
          // Modal,
          // Tooltip,
          // Form,
          // FormItem,
          // FormGather,
          // Select,
          // Optgroup,
          // Option,
          // Switch,
          // List,
          // Pulldown
        } from 'vxe-table'

        // 导入默认的语言
        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VXETable.config({
          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
        })

        // 可选表格模块
        // Vue.use(Filter)
        // Vue.use(Edit)
        // Vue.use(Menu)
        // Vue.use(Export)
        // Vue.use(Keyboard)
        // Vue.use(Validator)
        // Vue.use(Custom)

        // 可选组件
        Vue.use(Icon)
        Vue.use(Column)
        Vue.use(Colgroup)
        Vue.use(Table)
        // Vue.use(Grid)
        // Vue.use(Toolbar)
        // Vue.use(Pager)
        // Vue.use(Checkbox)
        // Vue.use(CheckboxGroup)
        // Vue.use(Radio)
        // Vue.use(RadioGroup)
        // Vue.use(RadioButton)
        // Vue.use(Input)
        // Vue.use(Textarea)
        // Vue.use(Button)
        // Vue.use(ButtonGroup)
        // Vue.use(Modal)
        // Vue.use(Tooltip)
        // Vue.use(Form)
        // Vue.use(FormItem)
        // Vue.use(FormGather)
        // Vue.use(Select)
        // Vue.use(Optgroup)
        // Vue.use(Option)
        // Vue.use(Switch)
        // Vue.use(List)
        // Vue.use(Pulldown)
      </pre-code>
    </pre>
  </div>
</template>
