<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="国际化语言">
          通过调用 VxeUI.setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

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

            // 注册语言
            VxeUI.setI18n('zh-CN', zhCN)
            // VxeUI.setI18n('zh-HK', zhHK)
            // VxeUI.setI18n('zh-TW', zhTW)
            // VxeUI.setI18n('zh-MO', zhMO)
            VxeUI.setI18n('en-US', enUS)
            // VxeUI.setI18n('ja-JP', jaJP)
            // VxeUI.setI18n('es-ES', esES)
            // VxeUI.setI18n('pt-BR', ptBR)
            // VxeUI.setI18n('vi-VN', viVN)
            // VxeUI.setI18n('ko-KR', koKR)
            // VxeUI.setI18n('hu-HU', huHU)
            // VxeUI.setI18n('ru-RU', ruRU)

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
        <vxe-tip status="primary" title="使用自定义国际化">
          当使用其他国际化插件时，例如 vxe-i18n，可以使用自定义国际化
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import VueI18n from 'vue-i18n'
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
          </pre-code>
          <pre-code class="javascript">
            // ...
            import i18n from './i18n'
            import { VxeUI } from 'vxe-table'

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
