// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetAmountInputConfig } from './demoFormDesignAmountInputWidget'
import DemoFormDesignAmountInputWidgetView from './DemoFormDesignAmountInputWidgetView.vue'
import DemoFormDesignAmountInputWidgetProps from './DemoFormDesignAmountInputWidgetProps.vue'

// 创建表单设计器控件 - 多行输入
VxeUI.renderer.add('MyFormDesignAmountInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetAmountInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignAmountInputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignAmountInputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
