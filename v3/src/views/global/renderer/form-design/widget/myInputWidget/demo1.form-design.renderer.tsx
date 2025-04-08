// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetInputConfig } from './demoFormDesignInputWidget'
import DemoFormDesignInputWidgetView from './DemoFormDesignInputWidgetView.vue'
import DemoFormDesignInputWidgetProps from './DemoFormDesignInputWidgetProps.vue'

// 创建表单设计器控件 - 单行输入
VxeUI.renderer.add('MyFormDesignInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (h, renderOpts, renderParams) {
    return <DemoFormDesignInputWidgetView render-opts={renderOpts} render-params={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (h, renderOpts, renderParams) {
    return <DemoFormDesignInputWidgetProps render-opts={renderOpts} render-params={renderParams} />
  }
})
