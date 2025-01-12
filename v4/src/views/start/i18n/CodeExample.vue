<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="国际化语言">
          使用内置国际化功能，通过调用 setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

            import zhCN from 'vxe-table/locale/lang/zh-CN'
            // import zhHK from 'vxe-table/locale/lang/zh-HK'
            // import zhTW from 'vxe-table/locale/lang/zh-TW'
            // import zhMO from 'vxe-table/locale/lang/zh-MO'
            // import arEG from 'vxe-table/locale/lang/ar-EG'
            // import deDE from 'vxe-table/locale/lang/de-DE'
            import enUS from 'vxe-table/locale/lang/en-US'
            // import esES from 'vxe-table/locale/lang/es-ES'
            // import frFR from 'vxe-table/locale/lang/fr-FR'
            // import huHU from 'vxe-table/locale/lang/hu-HU'
            // import hyAM from 'vxe-table/locale/lang/hy-AM'
            // import jaJP from 'vxe-table/locale/lang/ja-JP'
            // import koKR from 'vxe-table/locale/lang/ko-KR'
            // import nbNO from 'vxe-table/locale/lang/nb-NO'
            // import ptBR from 'vxe-table/locale/lang/pt-BR'
            // import ruRU from 'vxe-table/locale/lang/ru-RU'
            // import ugCN from 'vxe-table/locale/lang/ug-CN'
            // import ukUA from 'vxe-table/locale/lang/uk-UA'
            // import viVN from 'vxe-table/locale/lang/vi-VN'
            // import thTH from 'vxe-table/locale/lang/th-TH'
            // import itIT from 'vxe-table/locale/lang/it-IT'

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
            // VxeUI.setI18n('th-TH', thTH)
            // VxeUI.setI18n('it-IT', itIT)

            // 切换指定语言
            VxeUI.setLanguage('en-US')

            // 获取当前使用的语言
            VxeUI.getLanguage()
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="使用自定义国际化">
          当使用其他国际化插件时，例如 vxe-i18n，可以使用自定义国际化
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { createI18n } from 'vue-i18n'
            import zhCN from 'vxe-table/locale/lang/zh-CN'
            import enUS from 'vxe-table/locale/lang/en-US'

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
            import { VxeUI } from 'vxe-table'

            VxeUI.setConfig({
              // 对组件内置的提示语进行国际化翻译
              i18n: (key, args) => i18n.global.t(key, args)
            })

            // 切换指定语言
            i18n.locale = 'en_US'
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
