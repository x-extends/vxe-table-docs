<template>
  <vxe-link v-if="redirect && !hasUIDoMain" :href="`https://vxeui.com/#/${name}/api?q=${q || prop || ''}`" :content="q || prop || `vxe-${name}`"></vxe-link>
  <vxe-link v-else :router-link="{name: 'DocsApi', params: { name }, query: { pt: pluginType || '', q: q || prop || '' }}" :content="q || prop || `vxe-${name}`" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    q: String,
    prop: String,
    redirect: Boolean
  },
  inject: {
    pluginType: {
      default: ''
    }
  },
  computed: {
    ...({} as {
      pluginType(): string
    }),
    hasUIDoMain () {
      return location.origin.indexOf('vxeui') > -1
    }
  }
})
</script>
