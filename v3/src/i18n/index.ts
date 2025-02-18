import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const languageList = ['zh-CN', 'zh-CHT', 'en-US', 'ja-JP', 'ru-RU', 'uk-UA', 'pt-BR', 'ko-KR', 'fr-FR', 'es-ES', 'de-DE', 'ar-EG']
const customLanguage = localStorage.getItem('VXE_DOCS_LANGUAGE')

const i18n = new VueI18n({
  locale: customLanguage && languageList.includes(customLanguage) ? customLanguage : ['zh-CN', 'zh-HK', 'zh-MO', 'zh-CHT'].includes(navigator.language) ? 'zh-CN' : 'en-US',
  messages: {}
})

export default i18n
