<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/" target="_blank">vite</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" target="_blank">vue 3.2+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="仅安装表格">
          仅可使用表格基础功能，不包含任何 UI 组件，不能使用任何高级功能，建议使用第三方 UI 组件库自行实现。
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

            createApp(App).use(VxeUITable).mount('#app')
            // ...">
          </pre-code>
        </pre>
        <vxe-tip status="error" title="版本号建议">
          打开 package.json 文件，手动改成修订版本号自动更新，避免新版本的自动更新对项目产生影响：
          将 <span class="red">"vxe-table": "^{{ tableVersion }}"</span> 改成 <span class="red">"vxe-table": "~{{ tableVersion }}"</span>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const tableCDNLib = computed(() => appStore.tableCDNLib)
const tableVersion = computed(() => appStore.tableCDNLib ? appStore.tableCDNLib.split('@')[1] : '')
</script>
