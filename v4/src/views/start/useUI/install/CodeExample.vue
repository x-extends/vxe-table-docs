<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/" target="_blank">vite</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" target="_blank">vue 3.2+</vxe-link></div>
          <div>组件依赖关系：<vxe-link href="https://github.com/x-extends/vxe-ui-docs/blob/main/framework.md" status="error" target="_blank">点击查看</vxe-link></div>
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
            import VxeUIAll from 'vxe-pc-ui'
            import 'vxe-pc-ui/es/style.css'

            import VxeUITable from 'vxe-table'
            import 'vxe-table/es/style.css'
            // ...

            createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
            // ...">
          </pre-code>
        </pre>
        <vxe-tip status="error" title="建议版本号">
          检查并修改 package.json 文件，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>
        </vxe-tip>
        <pre>
          <pre-code
            language="json"
            :content='`
            {
              ...
              "vxe-pc-ui": "^${uiLibVersion}",
              "vxe-table": "^${tableLibVersion}"
              ...
            }
            `'>
          </pre-code>
          改成
          <pre-code
            language="json"
            :content='`
            {
              ...
              "vxe-pc-ui": "~${uiLibVersion}",
              "vxe-table": "~${tableLibVersion}"
              ...
            }
            `'>
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const designCDNLib = computed(() => appStore.designCDNLib)
const uiLibVersion = computed(() => appStore.uiCDNLib ? appStore.uiCDNLib.split('@')[1] : '')
const tableLibVersion = computed(() => appStore.tableCDNLib ? appStore.tableCDNLib.split('@')[1] : '')
</script>
