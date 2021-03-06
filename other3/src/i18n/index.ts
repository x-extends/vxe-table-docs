import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tableZhCN from 'vxe-table/lib/locale/lang/zh-CN'
import tableZhTC from 'vxe-table/lib/locale/lang/zh-TC'
import tableEnUS from 'vxe-table/lib/locale/lang/en-US'
import tableJAJP from 'vxe-table/lib/locale/lang/ja-JP'

import myZhCN from './lang/zh-CN'
import myZhTC from './lang/zh-TC'
import myEnUS from './lang/en-US'

Vue.use(VueI18n)

const languageList = ['zh_CN', 'zh_TC', 'en_US']
const customLanguage = localStorage.getItem('language')

const i18n = new VueI18n({
  locale: customLanguage && languageList.includes(customLanguage) ? customLanguage : ['zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'].includes(navigator.language) ? 'zh_CN' : 'en_US',
  messages: {
    en_US: {
      ...tableEnUS,
      ...myEnUS
    },
    zh_CN: {
      ...tableZhCN,
      ...myZhCN
    },
    zh_TC: {
      ...tableZhTC,
      ...myZhTC
    },
    ja_JP: {
      ...tableJAJP,
      ...myZhCN
    }
  }
})

export default i18n
