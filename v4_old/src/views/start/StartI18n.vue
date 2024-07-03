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
        import { VXETable } from 'vxe-table'

        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
        // import zhHK from 'vxe-table/lib/locale/lang/zh-HK'
        // import zhTW from 'vxe-table/lib/locale/lang/zh-TW'
        // import zhMO from 'vxe-table/lib/locale/lang/zh-MO'
        // import enUS from 'vxe-table/lib/locale/lang/en-US'
        // import jaJP from 'vxe-table/lib/locale/lang/ja-JP'
        // import esES from 'vxe-table/lib/locale/lang/es-ES'
        // import ptBR from 'vxe-table/lib/locale/lang/pt-BR'

        // 增加语言
        VXETable.setI18n('zh-CN', zhCN)
        // VXETable.setI18n('zh-HK', zhHK)
        // VXETable.setI18n('zh-TW', zhTW)
        // VXETable.setI18n('zh-MO', zhMO)
        // VXETable.setI18n('en-US', enUS)
        // VXETable.setI18n('ja-JP', jaJP)
        // VXETable.setI18n('es-ES', esES)
        // VXETable.setI18n('pt-BR', ptBR)

        // 切换语言
        VXETable.setLanguage('zh-CN')
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
