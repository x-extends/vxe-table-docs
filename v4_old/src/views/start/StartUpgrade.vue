<template>
  <div>
    <h2>升级到 v4.7</h2>
    <p class="tip">v4.7 分离 表格 和 UI 组件，升级版本，内部代码完全不需要改动，需调整安装方式。</p>
    <div class="red">v4.0~v4.6 -> v4.7 不能直接升级， 需要调整安装方式，如果是使用老版本记得锁定版本号</div>
    <div class="red">需要注意：如果使用了 scss 变量，变量前缀有改动，由 $vxe-table-* 替换为 $vxe-ui-*，额外还有部名称调整</div>
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
        import VxeTable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        createApp(App).use(VxeTable).mount('#app')
        `,
      `
        // ...
        import VxeTable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        import VxeUI from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        createApp(App).use(VxeUI).use(VxeTable).mount('#app')
        `
      ]
    }
  }
})
</script>
