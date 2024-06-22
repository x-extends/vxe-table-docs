<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="国际化">
          通过调用 VxeUI.setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

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
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
