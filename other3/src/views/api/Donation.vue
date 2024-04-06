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
        <img :src="`${baseApiUrl}static/donation/qq1.png`">
        <img :src="`${baseApiUrl}static/donation/qq2.png`">
      </div>
      <div style="padding: 15px 0;width: 500px;">
        <vxe-radio-group v-model="supportAuthor">
          <vxe-radio label="1" content="关于 vxe-table"></vxe-radio>
          <vxe-radio label="2" content="赞助作者"></vxe-radio>
        </vxe-radio-group>
        <div style="padding-top: 15px;">
          <span v-if="supportAuthor === '1'">vxe-table 是 <a class="link" href="https://github.com/x-extends/vxe-table/blob/master/LICENSE" target="_blank">MIT</a> 开源的，使用完全免费。</span>
        </div>
      </div>
      <div v-if="supportAuthor === '2'">
        <div>如果该项目帮助了您，请作者喝杯咖啡吧</div>
        <img :src="`${baseApiUrl}static/donation/pay.jpg`">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      supportAuthor: '1'
    }
  },
  computed: {
    ...mapState([
      'baseApiUrl',
      'pluginApiUrl'
    ])
  }
}
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
