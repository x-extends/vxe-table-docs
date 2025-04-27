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
          <pre-code language="javascript">
            import { VxeUI } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例（也可以使用旧别名 VXETable）

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
            // VxeUI.setI18n('id-ID', idID)

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
          <pre-code language="javascript">
            import { createI18n } from 'vue-i18n'
            import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
            import enUS from 'vxe-table/lib/locale/lang/en-US'

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
          <pre-code language="javascript">
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
