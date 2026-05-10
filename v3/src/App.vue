<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="tsx">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState([
      'resBaseUrl',
      'siteBaseUrl',
      'pageLoading',
      'componentsSize'
    ])
  },
  methods: {
    ...mapMutations([
      'setSystemConfig',
      'setVersionConfig'
    ])
  },
  created () {
    fetch(`${this.resBaseUrl}/component-api/system-config.json?v=${process.env.VUE_APP_DATE_NOW}`)
      .then(res => res.json())
      .then(data => {
        this.setSystemConfig(data)
      })

    fetch(`${this.resBaseUrl}/component-api/vxe-version.json?v=${process.env.VUE_APP_DATE_NOW}`)
      .then(res => res.json())
      .then(data => {
        this.setVersionConfig(data)
      })
  }
})
</script>
