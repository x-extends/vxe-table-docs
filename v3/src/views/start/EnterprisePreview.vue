<template>
  <div>
    <CodeLight :previewPath="previewUrl">
      <template #describe>
        <div style="text-align: center;">
          <vxe-button status="error" title="点击在线体验企业版功能" @click="openEvent">点击在线体验</vxe-button>
        </div>
      </template>
    </CodeLight>
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
    previewCode () {
      return this.$route.params.previewCode || ''
    },
    previewUrl () {
      if (this.previewCode) {
        return `${(this as any).siteBaseUrl}/resource/docsImg/${(this as any).previewCode}.gif?v=${process.env.VUE_APP_DATE_NOW}`
      }
      return ''
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
::v-deep(.example-preview-body) {
  .vxe-image {
    max-height: 800px;
  }
}
</style>
