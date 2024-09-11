<template>
  <vxe-link :router-link="{name: 'DocsApi', params: { name }, query: { q: q || prop }}" :content="q || prop" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    q: String,
    prop: String
  }
})
</script>
