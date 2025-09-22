<template>
  <div>
    <div class="fd-top">
      <vxe-link status="primary" icon="vxe-icon-feedback" :href="`https://github.com/x-extends/${packName}/releases`" target="_blank">更新日志</vxe-link>
      <vxe-link v-if="packName === 'vxe-table'" status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-table/issues/712" target="_blank">兼容性变动</vxe-link>
      <vxe-link v-else status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-pc-ui/issues/1" target="_blank">兼容性变动</vxe-link>
    </div>
    <vxe-tip :title="pageTitle" status="primary">
      <div><vxe-link status="primary" :href="`https://github.com/x-extends/${packName}`" target="_blank">{{ pageTitle }}</vxe-link> 是 MIT开源的，无论是个人还是企业商用都是使用完全免费的。为了使项目能够健康持续的发展下去，您可以通过下方扫码来支持作者。</div>
    </vxe-tip>

    <vxe-tabs v-model="supportAuthor" >
      <vxe-tab-pane title="QQ交流群" name="1">
        <div style="text-align: center;padding: 32px;">
          <vxe-image :src="`${siteBaseUrl}/resource/donation/qq1.png`" style="max-width: 300px;margin: 0 16px;"></vxe-image>
          <vxe-image :src="`${siteBaseUrl}/resource/donation/qq2.png`" style="max-width: 300px;margin: 0 16px;"></vxe-image>
        </div>
      </vxe-tab-pane>
      <vxe-tab-pane title="赞助作者" name="2">
        <div style="text-align: center;">
          <h2 style="padding: 40px 0 20px 0;">如果该项目帮助了您，请作者喝杯咖啡吧</h2>
          <vxe-image :src="`${siteBaseUrl}/resource/donation/pay.jpg`"></vxe-image>
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
