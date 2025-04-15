<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default Vue.extend({
  computed: {
    ...mapState([
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
    axios.get(`${this.siteBaseUrl}/component-api/system-config.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      this.setSystemConfig(res.data)
    })
    axios.get(`${this.siteBaseUrl}/component-api/vxe-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      this.setVersionConfig(res.data)
    })
  }
})
</script>
