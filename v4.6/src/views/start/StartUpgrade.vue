<template>
  <div>
    <h2>v4.0.x ~ v4.6.x 升级到 v4.7+</h2>
    <div class="red">v4.7+ 分离为纯表格 和 UI组件，升级版本，内部代码不需要改动，需调整安装方式及全局变量。</div>
    <p class="tip">全局安装方式（<span class="red">如果是按需，请按照新版文档重新安装</span>）：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">npm install vxe-table@4.6.25</pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <div>之后</div>
    <pre>
      <pre-code class="typescript">npm install vxe-pc-ui@4.3.95 vxe-table@4.11.8</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
    <p class="tip">全局主题 css 变量：</p>
    <div>之前 --vxe-table-*</div>
    <pre>
      <pre-code class="css">
        // 主题色
        --vxe-font-color: #{$vxe-font-color};
      </pre-code>
    </pre>
    <div>之后 --vxe-ui-*</div>
    <pre>
      <pre-code class="css">
        // 主题色
        --vxe-ui-font-primary-color: #409eff;
      </pre-code>
    </pre>
    <p class="tip">默认参数恢复：</p>
    <div>其他<a class="link" href="https://vxetable.cn/#/start/global" target="_blank">参数</a>可以看官网去按需要设置</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 旧版本使用 setup({}) 或者 config({})
        VXETable.setConfig({
          // 恢复窗口默认显示确认按钮
          mode: {
            showConfirmButton: true
          },
          // 默认启用虚拟滚动
          table: {
            scrollX: {
              enabled: true,
              gt: 60
            },
            scrollY: {
              enabled: true,
              gt: 100
            },
            virtualXConfig: {
              enabled: true,
              gt: 60
            },
            virtualYConfig: {
              enabled: true,
              gt: 100
            }
          }
        })
      </pre-code>
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
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        createApp(App).use(VxeUITable).mount('#app')
        `,
      `
        // ...
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        import VxeUIAll from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
        `
      ]
    }
  }
})
</script>
