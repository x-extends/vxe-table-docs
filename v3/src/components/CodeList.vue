<template>
  <div>
    <div v-for="(item, index) in confs" :key="index">
      <div>{{ item.title }}</div>
      <CodeRender :language="item.language" :code="item.content"></CodeRender>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    confs: Array as PropType<any[]>
  }
})
</script>

<style lang="scss" scoped>
.def-tmpl {
  display: none;
}
</style>
