<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="对组件内置内容进行翻译">
          通过调用 VxeUI.setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例

            /**
             * 如果是纯表格安装方式
             * import { VxeUI } from 'vxe-table'
             * 从以下路径导入 'vxe-table/lib/locale/lang/*'
             */

            // import zhCN from 'vxe-pc-ui/lib/language/zh-CN' // 简体中文
            import zhCHT from 'vxe-pc-ui/lib/language/zh-CHT' // 繁体中文
            // import zhHK from 'vxe-pc-ui/lib/language/zh-HK' // 中文(香港)
            // import zhTW from 'vxe-pc-ui/lib/language/zh-TW' // 中文(台湾)
            // import zhMO from 'vxe-pc-ui/lib/language/zh-MO' // 中文(澳门)
            // import arEG from 'vxe-pc-ui/lib/language/ar-EG' // 阿拉伯语(埃及)
            // import deDE from 'vxe-pc-ui/lib/language/de-DE' // 德语(德国)
            import enUS from 'vxe-pc-ui/lib/language/en-US' // 英语(美国)
            // import esES from 'vxe-pc-ui/lib/language/es-ES' // 西班牙语(国际)
            // import frFR from 'vxe-pc-ui/lib/language/fr-FR' // 法语(法国)
            // import huHU from 'vxe-pc-ui/lib/language/hu-HU' // 匈牙利语
            // import hyAM from 'vxe-pc-ui/lib/language/hy-AM' // 亚美尼亚语
            // import jaJP from 'vxe-pc-ui/lib/language/ja-JP' // 日语
            // import koKR from 'vxe-pc-ui/lib/language/ko-KR' // 朝鲜语
            // import nbNO from 'vxe-pc-ui/lib/language/nb-NO' // 挪威语(伯克梅尔)(挪威)
            // import ptBR from 'vxe-pc-ui/lib/language/pt-BR' // 葡萄牙语
            // import ruRU from 'vxe-pc-ui/lib/language/ru-RU' // 俄语
            // import ugCN from 'vxe-pc-ui/lib/language/ug-CN' // 维吾尔语
            // import ukUA from 'vxe-pc-ui/lib/language/uk-UA' // 乌克兰语
            // import viVN from 'vxe-pc-ui/lib/language/vi-VN' // 越南语
            // import thTH from 'vxe-pc-ui/lib/language/th-TH' // 泰语
            // import itIT from 'vxe-pc-ui/lib/language/it-IT' // 意大利语(意大利)
            // import idID from 'vxe-pc-ui/lib/language/id-ID' // 印度尼西亚语
            // import msMY from 'vxe-pc-ui/lib/language/ms-MY' // 马来语(马来西亚)

            // 注册语言
            VxeUI.setI18n('zh-CN', zhCN)
            // VxeUI.setI18n('zh-CHT', zhCHT)
            // VxeUI.setI18n('zh-HK', zhHK)
            // VxeUI.setI18n('zh-TW', zhTW)
            // VxeUI.setI18n('zh-MO', zhMO)
            // VxeUI.setI18n('ar-EG', arEG)
            // VxeUI.setI18n('de-DE', deDE)
            VxeUI.setI18n('en-US', enUS)
            // VxeUI.setI18n('es-ES', esES)
            // VxeUI.setI18n('fr-FR', frFR)
            // VxeUI.setI18n('hu-HU', huHU)
            // VxeUI.setI18n('ja-JP', jaJP)
            // VxeUI.setI18n('ko-KR', koKR)
            // VxeUI.setI18n('nb-NO', nbNO)
            // VxeUI.setI18n('pt-BR', ptBR)
            // VxeUI.setI18n('ru-RU', ruRU)
            // VxeUI.setI18n('ug-CN', ugCN)
            // VxeUI.setI18n('uk-UA', ukUA)
            // VxeUI.setI18n('vi-VN', viVN)
            // VxeUI.setI18n('th-TH', thTH)
            // VxeUI.setI18n('it-IT', itIT)
            // VxeUI.setI18n('id-ID', idID)
            // VxeUI.setI18n('ms-MY', msMY)

            // 切换语言
            VxeUI.setLanguage('zh-CN')

            // 获取当前使用的语言
            VxeUI.getLanguage()
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="使用自定义国际化的方式进行翻译">
          当使用其他国际化插件时，例如 vue-i18n，可以使用自定义国际化
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import VueI18n from 'vue-i18n'
            import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
            import enUS from 'vxe-table/lib/locale/lang/en-US'

            Vue.use(VueI18n)

            const i18n = createI18n({
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
          </pre-code>
          <pre-code class="javascript">
            // ...
            import i18n from './i18n'
            import { VxeUI } from 'vxe-pc-ui'

            VxeUI.setConfig({
              // 对组件内置的提示语进行国际化翻译
              i18n: (key, args) => i18n.t(key, args)
            })

            // 切换指定语言
            i18n.locale = 'en_US'
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
