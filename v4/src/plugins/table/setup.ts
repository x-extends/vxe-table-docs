import i18n from '../../i18n'

import { VXETable } from 'vxe-table'

// 设置默认参数
VXETable.config({
  translate: (key: any) => key && key.indexOf('app.') > -1 ? i18n.global.t(key) : key,
  i18n: (key: any, args?: any) => i18n.global.t(key, args)
})
