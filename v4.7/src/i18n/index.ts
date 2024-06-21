import { createI18n } from 'vue-i18n'

import myZhCN from './lang/zh-CN'
import myZhTC from './lang/zh-TC'
import myEnUS from './lang/en-US'

const languageList = ['zh-CN', 'zh-TC', 'en-US']
const customLanguage = localStorage.getItem('VXE_DOCS_LANGUAGE')
const i18n = createI18n({
  warnHtmlMessage: false,
  locale: customLanguage && languageList.includes(customLanguage) ? customLanguage : ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(navigator.language) ? 'zh-CN' : 'en-US',
  messages: {
    'zh-CN': {
      ...myZhCN
    },
    'zh-TC': {
      ...myZhTC
    },
    'en-US': {
      ...myEnUS
    }
  }
})

export default i18n
