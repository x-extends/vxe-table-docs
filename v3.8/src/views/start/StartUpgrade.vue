<template>
  <div>
    <h2>v3.0.x ~ v3.8.x 升级到 v3.9+</h2>
    <div class="red">v3.9+ 分离为纯表格 和 UI组件，升级版本，内部代码不需要改动，需调整安装方式及全局变量。</div>
    <p class="tip">全局安装方式（<span class="red">如果是按需，请按照新版文档重新安装</span>）：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">npm install vxe-table@3.8.28</pre-code>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <div>之后</div>
    <pre>
      <pre-code :key="`${uiLatest}${tableLatest}`" class="typescript">npm install xe-utils@{{ utilsLatest }} vxe-pc-ui@{{ uiLatest }} vxe-table@{{ tableLatest }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
    <p class="tip">全局图标设置：</p>
    <div>之前</div>
    <pre>
      <pre-code class="typescript">
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 旧版本使用 setup({}) 或者 config({})
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
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 旧版本使用 setup({}) 或者 config({})
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
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 旧版本使用 setup({}) 或者 config({})
        VXETable.setConfig({
          // 恢复窗口默认显示确认按钮
          mode: {
            showConfirmButton: true
          },
          // 默认启用虚拟滚动
          table: {
            // 新版本默认 fixed
            expandConfig: {
              mode: 'inside'
            },
            // 3.9+
            scrollX: {
              enabled: true,
              gt: 60
            },
            scrollY: {
              enabled: true,
              gt: 100,
              mode: 'scroll' // 恢复旧的虚拟滚动模式，不建议设置
            },
            // 3.15+
            virtualXConfig: {
              enabled: true,
              gt: 60
            },
            virtualYConfig: {
              enabled: true,
              gt: 100,
              mode: 'scroll' // 恢复旧的虚拟滚动模式，不建议设置
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
      utilsLatest: '3.9.0',
      uiLatest: '3.9.0',
      tableLatest: '3.18.0',
      demoCodes: [
      `
        // ...
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        Vue.use(VxeUITable)
        `,
      `
        // ...
        import VxeUITable from 'vxe-table'
        import 'vxe-table/lib/style.css'
        // ...

        import VxeUIBase from 'vxe-pc-ui'
        import 'vxe-pc-ui/lib/style.css'
        // ...

        Vue.use(VxeUIBase)
        Vue.use(VxeUITable)
        `
      ]
    }
  },
  created () {
    fetch(`https://vxeui.com/component-api/vxe-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        if (data && data['vxe-table']) {
          this.utilsLatest = data['xe-utils']['v3-latest']
          this.uiLatest = data['vxe-pc-ui']['v3-latest']
          this.tableLatest = data['vxe-table']['v3-latest']
        }
      })
    })
  }
}
</script>
