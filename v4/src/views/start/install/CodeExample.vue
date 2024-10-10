<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/" target="_blank">vite</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D" target="_blank">vue 3.2+</vxe-link></div>
        </vxe-tip>
        <vxe-tip status="error" title="需要注意！！！">
          <div>v4.0 可以直接升级 v4.6（如果是使用老版本记得锁定版本号）</div>
          <div>v4.6 不能直接升级 v4.7（组件代码基本不用改，变动的是安装方式、全局的主题变量）</div>
        </vxe-tip>
      </template>

      <template #use>
        <div>
          完整安装，可以直接使用完整功能。
          <vxe-link status="primary" href="https://github.com/xuliangzhan/vxe-table-demo/tree/master/vxe-table-by-vue3-vite-typescript" target="_blank">示例项目</vxe-link>
        </div>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ tableCDNLib }
            # 或者
            yarn add ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
            // 完整导入 UI 组件库
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            // ...

            // 完整导入 表格库
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            createApp(App).use(VxeUI).use(VxeUITable).mount('#app')
            // ...">
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
const tableCDNLib = computed(() => appStore.tableCDNLib)
</script>
