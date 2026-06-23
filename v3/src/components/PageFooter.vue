<template>
  <div class="page-footer">
    <VxeLink href="http://beian.miit.gov.cn/" target="_blank" :content="aqCode">
      <template #icon>
        <img :src="`${resBaseUrl}/badge.png`" style="height: 14px;padding-bottom: 0.2em;">
      </template>
    </VxeLink>
    <span style="margin-left: 20px;">
      <span>©</span>
      <span><VxeLink status="primary" :href="siteBaseUrl" target="_blank">VXE</VxeLink> 2018-{{serveTY}}</span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState([
      'serveTY',
      'resBaseUrl',
      'siteBaseUrl'
    ]),
    aqCode () {
      if (location.origin && location.origin.indexOf('vxeui.com')) {
        return '粤ICP备2022010374号'
      }
      return '粤ICP备2022010374号'
    }
  }
})
</script>

<style lang="scss">
.page-footer {
  padding-top: 4em;
  text-align: center;
}
</style>
