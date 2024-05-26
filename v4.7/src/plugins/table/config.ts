import i18n from '../../i18n'

import { VxeUI } from 'vxe-table'

// 设置默认参数
VxeUI.setConfig({
  translate: (key: any) => key && key.indexOf('app.') > -1 ? i18n.global.t(key) : key
})
