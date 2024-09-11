import Vue from 'vue'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

import './config'
import './renderer'
import './formats'
import './menus'
import './commands'
import './validators'

Vue.use(VxeUI)
Vue.use(VxeUITable)
