// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetUploadImageConfig } from './demoFormDesignUploadImageWidget'
import DemoFormDesignUploadImageWidgetView from './DemoFormDesignUploadImageWidgetView.vue'
import DemoFormDesignUploadImageWidgetProps from './DemoFormDesignUploadImageWidgetProps.vue'

// 创建表单设计器控件 - 上传附件
VxeUI.renderer.add('MyFormDesignUploadImageWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetUploadImageConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignUploadImageWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignUploadImageWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
