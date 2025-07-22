// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetNumberInputConfig } from './demoFormDesignNumberInputWidget'
import DemoFormDesignNumberInputWidgetView from './DemoFormDesignNumberInputWidgetView.vue'
import DemoFormDesignNumberInputWidgetProps from './DemoFormDesignNumberInputWidgetProps.vue'

// 创建表单设计器控件 - 多行输入
VxeUI.renderer.add('MyFormDesignNumberInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetNumberInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignNumberInputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignNumberInputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
