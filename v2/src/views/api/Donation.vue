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
