<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/" target="_blank">vite</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/" target="_blank">vue 3.2+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="仅安装表格">
          仅可使用表格基础功能，不包含任何 UI 基础组件，不能使用任何高级功能，基础组件可以通过插槽模板方式使用第三方 UI 组件库自行实现。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${utilCDNLib} ${uiCDNLib} ${tableCDNLib}
            # 或者
            yarn add ${utilCDNLib} ${uiCDNLib} ${tableCDNLib}
            # 或者
            pnpm add ${utilCDNLib} ${uiCDNLib} ${tableCDNLib}
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            createApp(App).use(VxeUITable).mount('#app')
            // ...">
          </pre-code>
        </pre>
        <vxe-tip status="error" title="建议版本号">
          检查并修改 package.json 文件，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>，避免版本自动升级新功能影响旧功能
        </vxe-tip>
        <pre>
          <pre-code
            language="json"
            :content='`
            {
              ...
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
const utilCDNLib = computed(() => appStore.utilCDNLib)
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const tableLibVersion = computed(() => appStore.tableCDNLib ? appStore.tableCDNLib.split('@')[1] : '')
</script>
