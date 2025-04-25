<template>
  <div>
    <h2>{{ $t('app.aside.nav.i18n') }}</h2>
    <p class="tip">使用内置国际化功能，通过调用 setLanguage('zh-CN') 方法可以切换组件语言</p>
    <pre>
      <pre-code class="javascript">{{ demoCodes[0] }}</pre-code>
    </pre>
    <p class="tip">当使用其他国际化插件时，例如 vxe-i18n，可以使用自定义国际化</p>
    <pre>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[2] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoCodes: [
        `
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

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
        VXETable.setI18n('zh-CN', zhCN)
        // VXETable.setI18n('zh-HK', zhHK)
        // VXETable.setI18n('zh-TW', zhTW)
        // VXETable.setI18n('zh-MO', zhMO)
        // VXETable.setI18n('arEG', arEG)
        // VXETable.setI18n('deDE', deDE)
        VXETable.setI18n('en-US', enUS)
        // VXETable.setI18n('es-ES', esES)
        // VXETable.setI18n('fr-FR', frFR)
        // VXETable.setI18n('huH-U', huHU)
        // VXETable.setI18n('ja-JP', jaJP)
        // VXETable.setI18n('ko-KR', koKR)
        // VXETable.setI18n('nb-NO', nbNO)
        // VXETable.setI18n('pt-BR', ptBR)
        // VXETable.setI18n('ru-RU', ruRU)
        // VXETable.setI18n('ug-CN', ugCN)
        // VXETable.setI18n('ukU-A', ukUA)
        // VXETable.setI18n('vi-VN', viVN)

        // 切换语言
        VXETable.setLanguage('zh-CN')

        // 获取当前使用的语言
        VXETable.getLanguage()
        `,
        `
        import VueI18n from 'vue-i18n'
        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
        // import zhHK from 'vxe-table/lib/locale/lang/zh-HK'
        // import zhTW from 'vxe-table/lib/locale/lang/zh-TW'
        // import zhMO from 'vxe-table/lib/locale/lang/zh-MO'
        import enUS from 'vxe-table/lib/locale/lang/en-US'
        // import jaJP from 'vxe-table/lib/locale/lang/ja-JP'
        // import esES from 'vxe-table/lib/locale/lang/es-ES'
        // import ptBR from 'vxe-table/lib/locale/lang/pt-BR'
        // import viVN from 'vxe-table/lib/locale/lang/vi-VN'
        // import koKR from 'vxe-table/lib/locale/lang/ko-KR'
        // import huHU from 'vxe-table/lib/locale/lang/hu-HU'
        // import ruRU from 'vxe-table/lib/locale/lang/ru-RU'

        Vue.use(VueI18n)

        const i18n = new VueI18n({
          locale: 'zh_CN',
          messages: {
            zh_CN: {
              ...zhCN
            },
            en_US: {
              ...enUS
            }
          }
        })

        export default i18n
        `,
        `
        // ...
        import i18n from './i18n'
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        VXETable.setConfig({
          // 对组件内置的提示语进行国际化翻译
          i18n: (key, args) => i18n.t(key, args)
        })

        // 切换指定语言
        i18n.locale = 'en_US'
        `
      ]
    }
  }
}
</script>

<style scoped>
.lang-list {
  list-style: disc;
  padding-left: 40px;
}
</style>
