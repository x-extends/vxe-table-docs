<template>
  <div>
    <div class="fd-top">
      <vxe-link status="primary" icon="vxe-icon-feedback" :href="`https://github.com/x-extends/${packName}/releases`" target="_blank">更新日志</vxe-link>
      <vxe-link v-if="packName === 'vxe-table'" status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-table/issues/712" target="_blank">兼容性变动</vxe-link>
      <vxe-link v-else status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-pc-ui/issues/1" target="_blank">兼容性变动</vxe-link>
    </div>
    <vxe-tip :title="pageTitle" status="primary">
      <div><vxe-link status="primary" :href="`https://github.com/x-extends/${packName}`" target="_blank">{{ pageTitle }}</vxe-link> 是 MIT 开源的，使用完全免费。为了使项目能够健康持续的发展下去，您可以通过下方扫码来支持作者。</div>
    </vxe-tip>
    <vxe-tip title="发展历史" status="success">
      <div>2016 开源了 javascript 工具类 <vxe-link status="primary" href="https://github.com/x-extends/xe-utils" target="_blank">xe-utils</vxe-link>、请求库 <vxe-link status="primary" href="https://github.com/x-extends/xe-ajax" target="_blank">xe-ajax</vxe-link></div>
      <div>2018 开源了表格库 <vxe-link status="primary" href="https://github.com/x-extends/vxe-table" target="_blank">vxe-table</vxe-link></div>
      <div>2024 开源了组件库 <vxe-link status="primary" href="https://github.com/x-extends/vxe-pc-ui" target="_blank">vxe-pc-ui</vxe-link>（从 Vxe Table 中分离出组件，组成 Vxe UI）</div>
      <div>敬请期待：Admin 系统模板、低代码系统模板、移动端 H5 、小程序组件库、数据图表 </div>
    </vxe-tip>

    <vxe-tabs v-model="supportAuthor" >
      <vxe-tab-pane title="QQ交流群" name="1">
        <div style="text-align: center;">
          <img :src="`${siteBaseUrl}/static/donation/qq1.png`">
          <img :src="`${siteBaseUrl}/static/donation/qq2.png`">
        </div>
      </vxe-tab-pane>
      <vxe-tab-pane title="赞助作者" name="2">
        <div style="text-align: center;">
          <h2 style="padding: 40px 0 20px 0;">如果该项目帮助了您，请作者喝杯咖啡吧</h2>
          <img :src="`${siteBaseUrl}/static/donation/pay.jpg`">
          <div style="margin-top: 38px;font-size: 18px;">感谢您的支持，送一份 <vxe-link status="success" href="https://vxetable.cn/demo/vxe-ui-renderer-vue3-vite" target="_blank">渲染器详细教程文档</vxe-link>（<vxe-link status="primary" href="https://api.vxetable.cn/vxe/api/pub/vxeui/sponsor/demo/download?name=vxe-ui-renderer-vue3-vite" target="_blank">点击下载 vxe-table v4.7+ 版本</vxe-link>） ，所有支持过的用户都可以下载查看。</div>
        </div>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {
      supportAuthor: '1'
    }
  },
  computed: {
    ...mapState([
      'pageTitle',
      'packName',
      'siteBaseUrl'
    ])
  }
})
</script>

<style lang="scss" scoped>
.fd-top {
  text-align: right;
  padding: 8px 0 16px 0;
  .vxe-link {
    margin-right: 8px;
  }
}
</style>
