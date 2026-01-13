<template>
  <div>
    <p class="tip">vxe-table 是 MIT开源的，无论是个人还是企业商用都是使用完全免费的。为了使项目能更好的持续维护，您可以通过成为赞助商方式来支持该项目。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  setup () {
    const appStore = useAppStore()
    const showSupportQQ = computed(() => appStore.showSupportQQ)

    const supportAuthor = ref('1')
    return {
      showSupportQQ,
      supportAuthor
    }
  }
})
</script>

<style lang="scss" scoped>
.sponsor-title {
  font-size: 18px;
  font-weight: 700;
}
.sponsor-desc {
  font-size: 15px;
  margin-top: 5px;
}
.sponsor-img {
  text-align: center;
  margin-top: 40px;
}
</style>
