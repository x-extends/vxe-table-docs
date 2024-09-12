<template>
  <div>
    <h2>{{ $t('app.aside.nav.i18n') }}</h2>
    <p class="tip">使用内置国际化功能，通过调用 setLanguage('zh-CN') 方法可以切换组件语言</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <p class="tip">当使用其他国际化插件时，例如 vxe-i18n，可以使用自定义国际化</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[2] }}</pre-code>
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
        `,
        `
        import { createI18n } from 'vue-i18n'
        import zhCN from 'vxe-table/lib/language/zh-CN'
        // import zhHK from 'vxe-table/lib/language/zh-HK'
        // import zhTW from 'vxe-table/lib/language/zh-TW'
        // import zhMO from 'vxe-table/lib/language/zh-MO'
        import enUS from 'vxe-table/lib/language/en-US'
        // import jaJP from 'vxe-table/lib/language/ja-JP'
        // import esES from 'vxe-table/lib/language/es-ES'
        // import ptBR from 'vxe-table/lib/language/pt-BR'
        // import viVN from 'vxe-table/lib/language/vi-VN'
        // import koKR from 'vxe-table/lib/language/ko-KR'
        // import huHU from 'vxe-table/lib/language/hu-HU'
        // import ruRU from 'vxe-table/lib/language/ru-RU'

        const messages = {
          zh_CN: {
            ...zhCN
          },
          en_US: {
            ...enUS
          }
        }

        const i18n = createI18n({
          locale: 'zh_CN',
          messages,
        })

        export default i18n
        `,
        `
        // ...
        import i18n from './i18n'
        import { VXETable } from 'vxe-table'

        VXETable.setConfig({
          // 对组件内置的提示语进行国际化翻译
          i18n: (key, args) => i18n.global.t(key, args)
        })

        // 切换指定语言
        i18n.locale = 'en_US'
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
