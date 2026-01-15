import { VxeUI } from 'vxe-pc-ui'
import { DemoDesignMyForm1Data } from './demo1.form-design.data'
import DemoDesignMyForm1Setting from './DemoDesignMyForm1Setting.vue'

// 创建表单设计器控件 - 自定义表单
VxeUI.renderer.add('DemoDesignMyForm1', {
  // 表单设计器 - 自定义的表单数据（会跟内置的混合在一起）
  createFormDesignSettingFormConfig () {
    const formData: DemoDesignMyForm1Data = {
      isLog: true,
      attr1: '',
      attr2: ''
    }
    return formData
  },
  // 表单设计器 - 渲染控件右侧的表单属性设置
  renderFormDesignSettingFormView (renderOpts, renderParams) {
    return <DemoDesignMyForm1Setting render-opts={renderOpts} render-params={renderParams} />
  }
})
