<template>
  <div>
    <h2>{{ $t('app.aside.nav.i18n') }}</h2>
    <p class="tip">{{ $t('app.body.demo.start.i18n.i18nTitle') }}</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
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
        import { VxeUI } from 'vxe-pc-ui'

        import zhCN from 'vxe-pc-ui/lib/language/zh-CN'
        // import zhHK from 'vxe-pc-ui/lib/language/zh-HK'
        // import zhTW from 'vxe-pc-ui/lib/language/zh-TW'
        // import zhMO from 'vxe-pc-ui/lib/language/zh-MO'
        // import enUS from 'vxe-pc-ui/lib/language/en-US'
        // import jaJP from 'vxe-pc-ui/lib/language/ja-JP'
        // import esES from 'vxe-pc-ui/lib/language/es-ES'
        // import ptBR from 'vxe-pc-ui/lib/language/pt-BR'

        // 增加语言
        VxeUI.setI18n('zh-CN', zhCN)
        // VxeUI.setI18n('zh-HK', zhHK)
        // VxeUI.setI18n('zh-TW', zhTW)
        // VxeUI.setI18n('zh-MO', zhMO)
        // VxeUI.setI18n('en-US', enUS)
        // VxeUI.setI18n('ja-JP', jaJP)
        // VxeUI.setI18n('es-ES', esES)
        // VxeUI.setI18n('pt-BR', ptBR)

        // 切换语言
        VxeUI.setLanguage('zh-CN')
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
