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

        import zhCN from 'vxe-pc-ui/lib/language/zh-CN'
        // import zhHK from 'vxe-pc-ui/lib/language/zh-HK'
        // import zhTW from 'vxe-pc-ui/lib/language/zh-TW'
        // import zhMO from 'vxe-pc-ui/lib/language/zh-MO'
        // import arEG from 'vxe-pc-ui/lib/language/ar-EG'
        // import deDE from 'vxe-pc-ui/lib/language/de-DE'
        import enUS from 'vxe-pc-ui/lib/language/en-US'
        // import esES from 'vxe-pc-ui/lib/language/es-ES'
        // import frFR from 'vxe-pc-ui/lib/language/fr-FR'
        // import huHU from 'vxe-pc-ui/lib/language/hu-HU'
        // import hyAM from 'vxe-pc-ui/lib/language/hy-AM'
        // import jaJP from 'vxe-pc-ui/lib/language/ja-JP'
        // import koKR from 'vxe-pc-ui/lib/language/ko-KR'
        // import nbNO from 'vxe-pc-ui/lib/language/nb-NO'
        // import ptBR from 'vxe-pc-ui/lib/language/pt-BR'
        // import ruRU from 'vxe-pc-ui/lib/language/ru-RU'
        // import ugCN from 'vxe-pc-ui/lib/language/ug-CN'
        // import ukUA from 'vxe-pc-ui/lib/language/uk-UA'
        // import viVN from 'vxe-pc-ui/lib/language/vi-VN'

        // 注册语言
        VxeUI.setI18n('zh-CN', zhCN)
        // VxeUI.setI18n('zh-HK', zhHK)
        // VxeUI.setI18n('zh-TW', zhTW)
        // VxeUI.setI18n('zh-MO', zhMO)
        // VxeUI.setI18n('arEG', arEG)
        // VxeUI.setI18n('deDE', deDE)
        VxeUI.setI18n('en-US', enUS)
        // VxeUI.setI18n('es-ES', esES)
        // VxeUI.setI18n('fr-FR', frFR)
        // VxeUI.setI18n('huH-U', huHU)
        // VxeUI.setI18n('ja-JP', jaJP)
        // VxeUI.setI18n('ko-KR', koKR)
        // VxeUI.setI18n('nb-NO', nbNO)
        // VxeUI.setI18n('pt-BR', ptBR)
        // VxeUI.setI18n('ru-RU', ruRU)
        // VxeUI.setI18n('ug-CN', ugCN)
        // VxeUI.setI18n('ukU-A', ukUA)
        // VxeUI.setI18n('vi-VN', viVN)

        // 切换语言
        VXETable.setLanguage('zh-CN')
        `,
        `
        import { createI18n } from 'vue-i18n'
        import zhCN from 'vxe-table/locale/lang/zh-CN'
        // import zhHK from 'vxe-table/locale/lang/zh-HK'
        // import zhTW from 'vxe-table/locale/lang/zh-TW'
        // import zhMO from 'vxe-table/locale/lang/zh-MO'
        import enUS from 'vxe-table/locale/lang/en-US'
        // import jaJP from 'vxe-table/locale/lang/ja-JP'
        // import esES from 'vxe-table/locale/lang/es-ES'
        // import ptBR from 'vxe-table/locale/lang/pt-BR'
        // import viVN from 'vxe-table/locale/lang/vi-VN'
        // import koKR from 'vxe-table/locale/lang/ko-KR'
        // import huHU from 'vxe-table/locale/lang/hu-HU'
        // import ruRU from 'vxe-table/locale/lang/ru-RU'

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
