<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/" target="_blank">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="方式1.完整安装表格和配套 UI 库">
          搭配强大的 UI 库可以使用全功能组件
        </vxe-tip>
        <vxe-tip status="error">
          需要注意 vxe-table v3.9+ 开始支持 Vxe UI，不兼容老版本
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${uiCDNLib } ${ tableCDNLib }
            # 或者
            yarn add ${uiCDNLib } ${ tableCDNLib }
            # 或者
            pnpm add ${uiCDNLib } ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            Vue.use(VxeUI)
            Vue.use(VxeUITable)
            // ...">
          </pre-code>
        </pre>
        <vxe-tip status="success" title="方式2.安装纯表格">
          仅可使用表格，可以搭配第三方 UI 组件库使用。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ tableCDNLib }
            # 或者
            yarn add ${ tableCDNLib }
            # 或者
            pnpm add ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            Vue.use(VxeUITable)
            // ...">
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="框架模板示例">
          <div>极致精简、流畅的框架模板 <vxe-link href="https://github.com/x-extends/vxe-admin-template/tree/v3/" target="_blank"><vxe-icon name="github-fill"></vxe-icon>vxe-admin-template</vxe-link>、<vxe-link href="https://gitee.com/x-extends/vxe-admin-template/tree/v3/" target="_blank"><vxe-icon name="gitee-fill" status="error"></vxe-icon>vxe-admin-template</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            git clone https://gitee.com/x-extends/vxe-admin-template.git
            # 或者
            git clone https://github.com/x-extends/vxe-admin-template.git

            # 切换分支
            git switch v3
            `">
          </pre-code>
          <pre-code
            language="shell"
            content="
            # 切换目录
            cd vxe-admin-template

            # 更新依赖
            npm run update

            # 运行项目
            npm run serve

            # 打包正式环境生成 dist 目录
            npm run build

            # 打包正式环境生成 zip 文件
            npm run build:zip
            ">
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib'
    ])
  }
})
</script>
