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
        <vxe-tip status="success" title="安装甘特图">
          甘特图依赖 <vxe-link  href="https://vxetable.cn" target="_blank">vxe-table v4.16+</vxe-link> 版本。
        </vxe-tip>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ ganttCDNLib }
            # 或者
            yarn add ${ ganttCDNLib }
            # 或者
            pnpm add ${ ganttCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // ...
            import VxeUIGantt from 'vxe-gantt'
            import 'vxe-gantt/lib/style.css'
            // ...

            createApp(App).use(VxeUIGantt).mount('#app')
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
              "vxe-gantt": "^${ganttLibVersion}"
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
              "vxe-gantt": "^${ganttLibVersion}"
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
const ganttCDNLib = computed(() => appStore.ganttCDNLib)
const ganttLibVersion = computed(() => appStore.ganttCDNLib ? appStore.ganttCDNLib.split('@')[1] : '')
</script>
