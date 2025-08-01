<template>
  <div>
    <p class="tip">vxe-table 是 MIT 开源的，使用完全免费。为了使项目能更好的持续维护，您可以通过成为赞助商方式来支持该项目。</p>
    <div class="content" style="padding-top: 50px">
      <div class="sponsor-title">* 赞助（1000元/30天，1800元/60天）</div>
      <div class="sponsor-desc">所有页面的右侧展示位（图片尺寸200*100）</div>
      <div class="sponsor-img">
        <img :src="`${baseApiUrl}static/sponsor/right.png`" style="max-width: 800px;">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useAppStore } from '@/store/app'

export default defineComponent({
  setup () {
    const appStore = useAppStore()
    const siteBaseUrl = computed(() => appStore.siteBaseUrl)
    const baseApiUrl = computed(() => appStore.baseApiUrl)
    const pluginApiUrl = computed(() => appStore.pluginApiUrl)
    const showSupportQQ = computed(() => appStore.showSupportQQ)

    const supportAuthor = ref('1')
    return {siteBaseUrl,
      baseApiUrl,
      pluginApiUrl,
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
