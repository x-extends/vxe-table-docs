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
        <vxe-tip status="success" title="完整安装">
          可以使用完整功能组件
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
              npm install ${uiCDNLib } ${ tableCDNLib } ${ designCDNLib }
              # 或者
              yarn add ${uiCDNLib } ${ tableCDNLib } ${ designCDNLib }
              # 或者
              pnpm add ${uiCDNLib } ${ tableCDNLib } ${ designCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            :content="`
              // ...
              import VxeUIAll from 'vxe-pc-ui'
              import 'vxe-pc-ui/es/style.css'

              import VxeUITable from 'vxe-table'
              import 'vxe-table/es/style.css'

              import VxeUIDesign from 'vxe-design'
              import 'vxe-design/lib/style.css'
              // ...

              Vue.use(VxeUIAll)
              Vue.use(VxeUITable)
              Vue.use(VxeUIDesign)
              //...
            `">
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="框架模板示例">
          <div>极致精简、流畅的框架模板 <vxe-link href="https://github.com/x-extends/vxe-admin-template/tree/v3/" target="_blank"><vxe-icon name="github-fill"></vxe-icon>vxe-admin-template</vxe-link>、<vxe-link href="https://gitee.com/x-extends/vxe-admin-template/tree/v3/" target="_blank"><vxe-icon name="gitee-fill" status="error"></vxe-icon>vxe-admin-template</vxe-link>，<vxe-link href="https://vxeui.com/admin-template-v3/" target="_blank" status="primary">点击在线预览</vxe-link></div>
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
      'tableCDNLib',
      'designCDNLib'
    ])
  }
})
</script>
