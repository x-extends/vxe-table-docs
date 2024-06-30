<template>
  <div>
    <p class="tip">{{ appStore.pageTitle }} 是 MIT 开源的，使用完全免费。为了使项目能更好的持续维护，您可以通过成为赞助商方式来支持作者。</p>
    <div class="content" style="padding-top: 50px">
      <div class="sponsor-title">* 赞助（1000元/30天，1800元/60天）</div>
      <div class="sponsor-desc">当前站点所有页面的右侧展示位（图片尺寸200*100）</div>
      <div class="sponsor-desc">联系邮箱：x_extends@163.com</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
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
</style>
