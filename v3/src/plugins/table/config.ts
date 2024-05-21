import i18n from '../../i18n'
import { VXETable } from 'vxe-table'

// 设置默认参数
VXETable.setConfig({
  translate: (key, args) => key && key.indexOf('app.') > -1 ? i18n.t(key, args) as string : key, // 自动翻译以 app. 开头的键值
  i18n: (key, args) => i18n.t(key, args) as string
})
