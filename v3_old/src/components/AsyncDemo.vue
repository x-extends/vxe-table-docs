<template>
  <component v-if="currentComponent" v-bind:is="currentComponent"></component>
</template>

<script>
import Vue from 'vue'

const asyncComponentsMaps = {}

export default {
  props: {
    path: String
  },
  data () {
    return {
      currentComponent: ''
    }
  },
  mounted () {
    const compName = this.path.replace(/\//g, '-')
    if (!asyncComponentsMaps[compName]) {
      asyncComponentsMaps[compName] = compName
      Vue.component(compName, () => import(`@/views/${this.path}`))
    }
    this.currentComponent = compName
  }
}
</script>
