import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const languageList = ['zh-CN', 'zh-TC', 'en-US']
const customLanguage = localStorage.getItem('VXE_DOCS_LANGUAGE')

const i18n = new VueI18n({
  locale: customLanguage && languageList.includes(customLanguage) ? customLanguage : ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(navigator.language) ? 'zh-CN' : 'en-US',
  messages: {}
})

export default i18n
