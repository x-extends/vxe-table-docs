<template>
  <div>
    <h2>升级到 v4.7</h2>
    <p class="tip">v4.7 分离 表格 和 UI 组件，升级代码完全不需要改动，只需调整安装方式即可。</p>
    <p>之前</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <p>之后</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      demoCodes: [
      `
        // ...
        import { VXETable } from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        createApp(App).use(VXETable).mount('#app')
        `,
      `
        // ...
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        // 可选组件库 Vxe UI
        import VxeUI from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        createApp(App).use(VxeUI).use(VxeUITable).mount('#app')
        `
      ]
    }
  }
})
</script>
