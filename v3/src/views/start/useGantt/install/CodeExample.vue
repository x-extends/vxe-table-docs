<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/" target="_blank">webpack</vxe-link> 等打包工具配合使用。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/" target="_blank">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="success" title="仅安装设计器">
          仅可以使用可视化设计器功能，不包含任何 UI 组件，建议使用第三方 UI 组件库自行实现。
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
            :content="`
              // ...
              import VxeUIGantt from 'vxe-gantt'
              import 'vxe-gantt/lib/style.css'
              // ...

              Vue.use(VxeUIGantt)
              //...
            `">
          </pre-code>
        </pre>
        <vxe-tip status="error" title="建议版本号">
          手动修改 package.json 文件，将 <span class="bold red">^</span> 改成 <span class="bold red">~</span>，避免版本自动升级新功能影响旧功能
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
              "vxe-gantt": "~${ganttLibVersion}"
              ...
            }
            `'>
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'ganttCDNLib'
    ]),
    ganttLibVersion (this: any) {
      return this.ganttCDNLib ? this.ganttCDNLib.split('@')[1] : ''
    }
  }
})
</script>
