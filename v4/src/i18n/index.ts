import { createI18n } from 'vue-i18n'

const languageList = ['zh-CN', 'zh-TC', 'en-US']
const customLanguage = localStorage.getItem('VXE_DOCS_LANGUAGE')
const i18n = createI18n({
  warnHtmlMessage: false,
  locale: customLanguage && languageList.includes(customLanguage) ? customLanguage : ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(navigator.language) ? 'zh-CN' : 'en-US',
  messages: {}
})

export default i18n
