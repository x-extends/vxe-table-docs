<template>
  <div>
    <h2>{{ $t('app.aside.nav.use') }}</h2>
    <p class="tip">
      如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install babel-plugin-import -D
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
          // 全局对象
          VXETable,

          // 功能模块
          // Filter,
          // Menu,
          // Edit,
          // Export,
          // Keyboard,
          // Validator,

          // 可选组件
          Icon,
          Column,
          // Colgroup,
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
          // Pulldown,

          // 表格
          Table
        } from 'vxe-table'
        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VXETable.config({
          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
        })

        // 表格功能
        // Vue.use(Filter)
        // .use(Edit)
        // .use(Menu)
        // .use(Export)
        // .use(Keyboard)
        // .use(Validator)

        // 可选组件
        Vue.use(Icon)
        .use(Column)
        // .use(Colgroup)
        // .use(Grid)
        // .use(Toolbar)
        // .use(Pager)
        // .use(Checkbox)
        // .use(CheckboxGroup)
        // .use(Radio)
        // .use(RadioGroup)
        // .use(RadioButton)
        // .use(Input)
        // .use(Textarea)
        // .use(Button)
        // .use(Modal)
        // .use(Tooltip)
        // .use(Form)
        // .use(FormItem)
        // .use(FormGather)
        // .use(Select)
        // .use(Optgroup)
        // .use(Option)
        // .use(Switch)
        // .use(List)
        // .use(Pulldown)

        // 安装表格
        .use(Table)
      </pre-code>
    </pre>
  </div>
</template>
