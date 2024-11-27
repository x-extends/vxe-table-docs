<template>
  <div>
    <div class="preview-btn">
      <vxe-button status="warning" icon="vxe-icon-question-circle" title="点击查看企业版" @click="openEvent">点击查看</vxe-button>
    </div>
    <div class="preview-img">
      <vxe-image :src="previewUrl"></vxe-image>
    </div>
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
      'siteBaseUrl'
    ]),
    previewUrl () {
      return `${(this as any).siteBaseUrl}/resource/docsImg/${this.$route.params.previewCode}.gif?v=${process.env.VUE_APP_DATE_NOW}`
    }
  },
  methods: {
    openEvent () {
      open(`https://vxetable.cn/pluginDocs/table${process.env.VUE_APP_VXE_VERSION}/#${decodeURIComponent(`${this.$route.query.previewPath || ''}`)}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.preview-btn {
  text-align: center;
  padding-bottom: 16px;
}
.preview-img {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
