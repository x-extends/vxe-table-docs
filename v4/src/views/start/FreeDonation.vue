<template>
  <div>
    <div class="fd-top">
      <vxe-link status="primary" icon="vxe-icon-feedback" :href="`https://github.com/x-extends/${appStore.packName}/releases`" target="_blank">更新日志</vxe-link>
      <vxe-link v-if="appStore.packName === 'vxe-table'" status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-table/issues/712" target="_blank">兼容性变动</vxe-link>
      <vxe-link v-else status="error" icon="vxe-icon-warning-triangle" href="https://github.com/x-extends/vxe-pc-ui/issues/1" target="_blank">兼容性变动</vxe-link>
    </div>
    <vxe-tip :title="appStore.pageTitle" status="primary">
      <div><vxe-link status="primary" :href="`https://github.com/x-extends/${appStore.packName}`" target="_blank">{{ appStore.pageTitle }}</vxe-link> 是 MIT开源的，无论是个人还是企业商用都是使用完全免费的。为了使项目能够健康持续的发展下去，您可以通过下方扫码来支持作者。</div>
    </vxe-tip>
    <vxe-tip title="发展历史" status="success">
      <div>
        2017-12 开源了 javascript 工具类 <vxe-link status="primary" href="https://util.vxeui.com" target="_blank">xe-utils</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/xe-utils" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/xe-utils" target="_blank"></vxe-link>
      </div>
      <div>
        2021-12 开源了异步请求库 <vxe-link status="primary" href="https://vxeui.com/xe-ajax" target="_blank">xe-ajax</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/xe-ajax" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/xe-ajax" target="_blank"></vxe-link>
      </div>
      <div>
        2019-04 开源了表格库 <vxe-link status="primary" href="https://vxetable.cn" target="_blank">vxe-table</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-table" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/vxe-table" target="_blank"></vxe-link>
      </div>
      <div>
        2024-05 开源了桌面端组件库 <vxe-link status="primary" href="https://vxeui.com" target="_blank">vxe-pc-ui</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-pc-ui" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/vxe-pc-ui" target="_blank"></vxe-link>
      </div>
      <div>
        2025-06 开源了可视化组件库 <vxe-link status="primary" href="https://design.vxeui.com" target="_blank">vxe-design</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-design" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/vxe-design" target="_blank"></vxe-link>
      </div>
      <div>
        2025-08 开源了可视化甘特图 <vxe-link status="primary" href="https://gantt.vxeui.com" target="_blank">vxe-gantt</vxe-link>
        <vxe-link status="primary" icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-gantt" target="_blank"></vxe-link>
        <vxe-link status="error" icon="vxe-icon-gitee-fill" href="https://gitee.com/x-extends/vxe-gantt" target="_blank"></vxe-link>
      </div>
      <div>敬请期待：工作流设计器、打印设计器、低代码系统模板、移动端 H5 、小程序组件库</div>
    </vxe-tip>

    <vxe-tabs v-model="supportAuthor" >
      <vxe-tab-pane title="QQ交流群" name="1">
        <iframe :src="`${resBaseUrl}/resource/useCdn/free-discussion-group.html?v=${nowTime}`" style="width: 0;border: 0;height: 700px;width: 100%;"></iframe>
      </vxe-tab-pane>
      <vxe-tab-pane title="赞助作者" name="2">
        <iframe :src="`${resBaseUrl}/resource/useCdn/free-donation.html?v=${nowTime}`" style="width: 0;border: 0;height: 700px;width: 100%;"></iframe>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const nowTime = computed(() => appStore.nowTime)
const resBaseUrl = computed(() => appStore.resBaseUrl)

const supportAuthor = ref('1')
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
