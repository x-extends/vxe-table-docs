<template>
  <div>
    <h2>{{ $t('app.aside.nav.i18n') }}</h2>
    <p class="tip">{{ $t('app.body.demo.start.i18n.i18nTitle') }}</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <!-- <h2>{{ $t('app.body.demo.start.i18n.translate') }}</h2>
    <p class="tip">{{ $t('app.body.demo.start.i18n.translateTitle') }}</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[2] }}</pre-code>
      <pre-code class="html">{{ demoCodes[3] }}</pre-code>
    </pre> -->
    <!-- <h2>{{ $t('app.body.demo.start.i18n.findError') }}</h2>
    <p class="tip">通过 <a class="link" href="https://github.com/x-extends/vxe-table/pulls">Pull requests</a> 贡献翻译 -> <a class="link" href="https://github.com/x-extends/vxe-table/tree/master/packages/locale/lang">添加或修改</a></p>
    <div>
      <ul class="lang-list">
        <li><a class="link" href="https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/zh-CN.js" target="_blank">简体中文（zh-CN）</a></li>
        <li><a class="link" href="https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/zh-TC.js" target="_blank">繁体中文（zh-TC）</a></li>
        <li><a class="link" href="https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/en-US.js" target="_blank">English（en-US）</a></li>
        <li><a class="link" href="https://github.com/x-extends/vxe-table/blob/master/packages/locale/lang/ja-JP.js" target="_blank">ジャパン（ja-JP）</a></li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      demoCodes: [
        `
        import { VxeUI } from 'vxe-table'

        import zhCN from '@vxe-ui/core/packages/language/zh-CN'
        // import zhHK from '@vxe-ui/core/packages/language/zh-HK'
        // import zhTW from '@vxe-ui/core/packages/language/zh-TW'
        // import zhMO from '@vxe-ui/core/packages/language/zh-MO'
        // import enUS from '@vxe-ui/core/packages/language/en-US'
        // import jaJP from '@vxe-ui/core/packages/language/ja-JP'
        // import esES from '@vxe-ui/core/packages/language/es-ES'
        // import ptBR from '@vxe-ui/core/packages/language/pt-BR'

        // 设置中文
        VxeUI.setI18n('zh-CN', zhCN)

        // 设置繁体中文
        // VxeUI.setI18n('zh-HK', zhHK)
        // VxeUI.setI18n('zh-TW', zhTW)
        // VxeUI.setI18n('zh-MO', zhMO)

        // 设置英文
        // VxeUI.setI18n('en-US', enUS)
        `,
        `
        import { createApp } = 'vue'
        import i18n from './i18n'
        import { VxeUI } from 'vxe-table'

        createApp(App).use(i18n).use(VxeUI).$mount('#app')
        `,
        `
        VxeUI.setConfig({
        })
        `,
        `
        <vxe-table
          border
          height="600"
          :data="tableData">
          <vxe-column field="name" title="app.body.label.name"></vxe-column>
          <vxe-column field="age" title="app.body.label.age"></vxe-column>
          <vxe-column field="sex" title="app.body.label.sex"></vxe-column>
        </vxe-table>
        `
      ]
    }
  }
})
</script>

<style scoped lang="scss">
.lang-list {
  list-style: disc;
  padding-left: 40px;
}
</style>
