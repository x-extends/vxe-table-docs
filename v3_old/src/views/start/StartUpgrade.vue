<template>
  <div>
    <h2>v3.0 ~ v3.8 升级到 v3.9</h2>
    <div class="red">v3.9+ 分离为纯表格 和 UI组件，升级版本，内部代码不需要改动，需调整安装方式及全局变量。</div>
    <p class="tip">安装方式：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <div>之后</div>
    <pre>
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
    <div>新版本默认关闭虚拟滚动，通过以下开启</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        //  setup({})
        VXETable.setConfig({
          // 恢复老版本校验样式
          cellVaildMode: 'obsolete',
          // 恢复窗口默认显示确认按钮
          mode: {
            showConfirmButton: true
          },
          // 恢复默认启用虚拟滚动
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
