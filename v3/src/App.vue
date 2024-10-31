<template>
  <VxeLayoutContainer>
    <RouterView />
    <vxe-loading :value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="tsx">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { VxeUI } from 'vxe-pc-ui'
import axios from 'axios'

export default Vue.extend({
  computed: {
    ...mapState([
      'siteBaseUrl',
      'pageLoading'
    ])
  },
  methods: {
    ...mapMutations([
      'setVersionConfig'
    ])
  },
  created () {
    axios.get(`${this.siteBaseUrl}/component-api/vxe-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      this.setVersionConfig(res.data)
    })

    if (!localStorage.getItem('VXE_NEXT_READ')) {
      setTimeout(() => {
        VxeUI.modal.notification({
          id: 'VXE_NEXT_READ',
          title: 'Vxe UI 与 Table v4.8+,v3.10+ 预发布',
          width: 500,
          status: 'success',
          position: 'top-right',
          duration: 15000,
          slots: {
            default () {
              return <div>
                <div>功能点：</div>
                <div>1. 重构核心渲染，大幅提升渲染性能</div>
                <div>2. 大部分组件直接支持权限控制，使用将更方便 <vxe-link href="https://vxeui.com/v4/#/start/permission" status="primary" target="_blank">详细</vxe-link></div>
                <div>3. 虚拟滚动支持自适应列宽 <vxe-link href="https://vxeui.com/v4/#/component/grid/scroll/autoRowHeight" status="primary" target="_blank">详细</vxe-link></div>
                <div>4. 虚拟滚动支持自适应行高 <vxe-link href="https://vxeui.com/v4/#/component/grid/scroll/autoRowHeight" status="primary" target="_blank">详细</vxe-link></div>
                <div>5. 优化虚拟渲染加载的空白期，大幅降低虚拟渲染空白期的延迟 <vxe-link href="https://vxeui.com/v4/#/component/grid/scroll/mode" status="primary" target="_blank">详细</vxe-link></div>
                <div>6. 单元格选取功能支持动态行高 <vxe-link href="" status="primary">详细</vxe-link></div>
                <div>7. 更加强大窗口组件 <vxe-link href="https://vxeui.com/v4/#/component/modal/minimizeLayout" status="primary" target="_blank">详细</vxe-link></div>
                <div>8. 可视化设计器持续优化 <vxe-link href="https://vxeui.com/v4/#/component/grid/scroll/mode" status="primary" target="_blank">详细</vxe-link></div>
                <div>9. 增加更多的扩展插件，让更多优秀插件都能直接集成进来 <vxe-link href="https://vxeui.com/v4/#/component/grid/scroll/mode" status="primary" target="_blank">详细</vxe-link></div>
                <div>10. vxe-table v4.7+ 与 v3.9+ 功能同步，所有 API 保持同步兼容，后续版本升级更加简单 <vxe-link href="https://vxeui.com" status="primary" target="_blank">详细</vxe-link></div>
                <br/>
                <div>即将支持单元格行高拖拽</div>
                <div>即将支持虚拟表单，轻松渲染上万项的表单控件</div>
                <div style="text-align: right;">
                  <vxe-button status="primary" onClick={
                    () => {
                      localStorage.setItem('VXE_NEXT_READ', '1')
                      VxeUI.modal.close('VXE_NEXT_READ')
                    }
                  }>关闭，不再显示</vxe-button>
                </div>
              </div>
            }
          }
        })
      }, 10000)
    }
  }
})
</script>
