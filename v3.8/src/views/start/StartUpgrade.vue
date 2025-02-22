<template>
  <div>
    <h2>v3.0.x ~ v3.8.x 升级到 v3.9+</h2>
    <div class="red">v3.9+ 分离为纯表格 和 UI组件，升级版本，内部代码不需要改动，需调整安装方式及全局变量。</div>
    <p class="tip">全局安装方式（<span class="red">如果是按需，请按照新版文档重新安装</span>）：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">npm install vxe-table@3.8.25</pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <div>之后</div>
    <pre>
      <pre-code class="typescript">npm install vxe-pc-ui@3.3.99 vxe-table@3.13.7</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
    <p class="tip">全局图标设置：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        //  setup({})
        VXETable.setConfig({
          icon: {
            // ...
          }
        })
      </pre-code>
    </pre>
    <div>之后</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        //  setup({})
        VXETable.setIcon({
          // ...
        })
      </pre-code>
    </pre>
    <p class="tip">默认参数恢复：</p>
    <div>其他<a class="link" href="https://vxetable.cn/#/start/global" target="_blank">参数</a>可以看官网去按需要设置</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        //  setup({})
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
            }
          }
        })
      </pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoCodes: [
      `
        // ...
        import VXETable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        Vue.use(VXETable)
        `,
      `
        // ...
        import VXETable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        import VxeUI from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        Vue.use(VxeUI)
        Vue.use(VXETable)
        `
      ]
    }
  }
}
</script>
