<template>
  <div>
    <p class="tip">{{ $t('app.footer.donationDesc') }}</p>
    <div class="upgrade">
      <a class="link" href="https://github.com/x-extends/vxe-table/issues/712">
        <span>😱{{ $t('app.body.other.compatibility') }}</span>
      </a>
      <a class="link" href="https://github.com/x-extends/vxe-table/releases">
        <span>👀{{ $t('app.body.other.releases') }}</span>
      </a>
    </div>
    <div class="content" style="padding-top: 50px">
      <div style="float: left;">
        <div style="padding: 15px 0;">
          <div style="font-size: 22px;font-weight: 700;">QQ交流群</div>
          <div style="padding-top: 15px;">该群供大家交流問題，如果群人数已满，将会不定期剔除不活跃的，<br>如果有 bug 请准备好 <a class="link" href="https://vxetable.cn/issues.html" target="_blank">复现链接</a> 并通过提交 <a class="link" href="https://github.com/x-extends/vxe-table/issues" target="_blank">issues</a> 反馈</div>
        </div>
        <img :src="`${resBaseUrl}/resource/donation/qq1.png`">
        <img :src="`${resBaseUrl}/resource/donation/qq2.png`">
      </div>
      <div style="float: right;">
        <div style="padding: 15px 0;width: 1000px;">
          <vxe-radio-group v-model="supportAuthor">
            <vxe-radio label="1" content="关于 vxe-table"></vxe-radio>
            <vxe-radio label="2" content="赞助作者"></vxe-radio>
          </vxe-radio-group>
          <div style="padding-top: 15px;">
            <span v-if="supportAuthor === '1'">vxe-table 是 <a class="link" href="https://github.com/x-extends/vxe-table/blob/master/LICENSE" target="_blank">MIT</a>开源的。</span>
          </div>
        </div>
        <div v-if="supportAuthor === '2'">
          <div>如果该项目帮助了您，请作者喝杯咖啡吧</div>
          <img :src="`${resBaseUrl}/resource/donation/pay.jpg`">
          <div style="margin-top: 38px;font-size: 18px;">感谢您的支持，送一份 <a class="link" href="https://vxeui.com/demo/vxe-ui-renderer-vue3-vite" target="_blank">渲染器详细教程文档</a>（<a class="link" href="https://api.vxeui.com/storeapi/api/pub/vxeui/sponsor/demo/download?name=vxe-ui-renderer-vue3-vite" target="_blank">点击下载 vxe-table v4.7+ 版本</a>） ，所有支持过的用户都可以下载查看。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  setup () {
    const appStore = useAppStore()
    const resBaseUrl = computed(() => appStore.resBaseUrl)
    const pluginApiUrl = computed(() => appStore.pluginApiUrl)

    const supportAuthor = ref('1')
    return {
      pluginApiUrl,
      resBaseUrl,
      supportAuthor
    }
  }
})
</script>

<style lang="scss" scoped>
.desc {
  padding-left: 40px;
  .title {
    padding: 5px 0;
    font-weight: 700;
  }
  .plan {
    margin: 0;
    padding: 0;
    i {
      color: #409eff;
      margin-right: 5px;
    }
  }
}
.content {
  text-align: center;
}
</style>
