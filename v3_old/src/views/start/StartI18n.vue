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

        import zhCN from 'vxe-table/lib/locale/lang/zh-CN' // 中文(简体)
        // import zhHK from 'vxe-table/lib/locale/lang/zh-HK' // 中文(香港)
        // import zhTW from 'vxe-table/lib/locale/lang/zh-TW' // 中文(繁体)
        // import zhMO from 'vxe-table/lib/locale/lang/zh-MO' // 中文(澳门)
        // import arEG from 'vxe-table/lib/locale/lang/ar-EG' // 阿拉伯语(埃及)
        // import deDE from 'vxe-table/lib/locale/lang/de-DE' // 德语(德国)
        import enUS from 'vxe-table/lib/locale/lang/en-US' // 英语(美国)
        // import esES from 'vxe-table/lib/locale/lang/es-ES' // 西班牙语(国际)
        // import frFR from 'vxe-table/lib/locale/lang/fr-FR' // 法语(法国)
        // import huHU from 'vxe-table/lib/locale/lang/hu-HU' // 匈牙利语
        // import hyAM from 'vxe-table/lib/locale/lang/hy-AM' // 亚美尼亚语
        // import jaJP from 'vxe-table/lib/locale/lang/ja-JP' // 日语
        // import koKR from 'vxe-table/lib/locale/lang/ko-KR' // 朝鲜语
        // import nbNO from 'vxe-table/lib/locale/lang/nb-NO' // 挪威语(伯克梅尔)(挪威)
        // import ptBR from 'vxe-table/lib/locale/lang/pt-BR' // 葡萄牙语
        // import ruRU from 'vxe-table/lib/locale/lang/ru-RU' // 俄语
        // import ugCN from 'vxe-table/lib/locale/lang/ug-CN' // 维吾尔语
        // import ukUA from 'vxe-table/lib/locale/lang/uk-UA' // 乌克兰语
        // import viVN from 'vxe-table/lib/locale/lang/vi-VN' // 越南语
        // import thTH from 'vxe-table/lib/locale/lang/th-TH' // 泰语
        // import itIT from 'vxe-table/lib/locale/lang/it-IT' // 意大利语(意大利)
        // import idID from 'vxe-table/lib/locale/lang/id-ID' // 印度尼西亚语
        // import msMY from 'vxe-table/lib/locale/lang/ms-MY' // 马来语(马来西亚)

        // 注册语言
        VXETable.setI18n('zh-CN', zhCN)
        // VXETable.setI18n('zh-HK', zhHK)
        // VXETable.setI18n('zh-TW', zhTW)
        // VXETable.setI18n('zh-MO', zhMO)
        // VXETable.setI18n('ar-EG', arEG)
        // VXETable.setI18n('de-DE', deDE)
        VXETable.setI18n('en-US', enUS)
        // VXETable.setI18n('es-ES', esES)
        // VXETable.setI18n('fr-FR', frFR)
        // VXETable.setI18n('hu-HU', huHU)
        // VXETable.setI18n('ja-JP', jaJP)
        // VXETable.setI18n('ko-KR', koKR)
        // VXETable.setI18n('nb-NO', nbNO)
        // VXETable.setI18n('pt-BR', ptBR)
        // VXETable.setI18n('ru-RU', ruRU)
        // VXETable.setI18n('ug-CN', ugCN)
        // VXETable.setI18n('uk-UA', ukUA)
        // VXETable.setI18n('vi-VN', viVN)
        // VXETable.setI18n('th-TH', thTH)
        // VXETable.setI18n('it-IT', itIT)
        // VXETable.setI18n('id-ID', idID)
        // VXETable.setI18n('ms-MY', msMY)

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
