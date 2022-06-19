import Vue from 'vue'
import PreCode from '../components/PreCode.vue'
import DemoBlock from '../components/DemoBlock.vue'

import './utils'
import './highlight'
import './codemirror'
import './element'
import './iview'
import './antd'
import './table'

Vue.component(PreCode.name, PreCode)
Vue.component(DemoBlock.name, DemoBlock)
