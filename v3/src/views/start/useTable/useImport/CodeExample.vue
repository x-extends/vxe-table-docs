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
              ['import', { libraryName: 'vxe-table', style: true }, 'vxe-table']
            ]
            // ...
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

            // 注册组件
            // 如果页面中已经被显性导入了，则可以不用调用注册
            // 如果是配置式的，没有在页面中显性导入，则需要逐个注册
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
          <pre-code language="html">
            {{ decodeURIComponent("%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CVxeTable%20%3Adata%3D%22tableData%22%3E%0A%20%20%20%20%20%20%3CVxeColumn%20type%3D%22seq%22%20width%3D%2260%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22name%22%20title%3D%22Name%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22sex%22%20title%3D%22Sex%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%20%20%3CVxeColumn%20field%3D%22age%22%20title%3D%22Age%22%3E%3C%2FVxeColumn%3E%0A%20%20%20%20%3C%2FVxeTable%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20VxeTable%2C%20VxeColumn%20%7D%20from%20'vxe-table'%0A%0Aexport%20default%20%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20VxeTable%2C%0A%20%20%20%20VxeColumn%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E") }}
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
