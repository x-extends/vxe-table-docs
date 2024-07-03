<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="国际化">
          通过调用 setLanguage('zh-CN') 方法可以切换组件语言
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
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
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
