<template>
  <div>
    <p class="tip">{{ pageTitle }} 是 MIT开源的，无论是个人还是企业商用都是使用完全免费的。为了使项目能更好的持续维护，您可以通过成为赞助商方式来支持该项目。</p>
    <div v-if="supportOptions.length" class="content" style="padding-top: 50px">
      <div class="sponsor-title">
        <span>* 赞助</span>
        <span>（</span>
        <span v-for="(item, index) in supportOptions" :key="index">
          <span>{{ item.price }}元/{{ item.days }}天</span>
          <span>，</span>
        </span>
        <span>）</span>
      </div>
      <div class="sponsor-desc">当前站点所有页面的右侧展示位（图片尺寸200*100）</div>
      <div class="sponsor-desc">联系邮箱：x_extends@163.com</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'
import axios from 'axios'

const appStore = useAppStore()
const resBaseUrl = computed(() => appStore.resBaseUrl)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
const pageTitle = computed(() => appStore.pageTitle)

const supportOptions = ref<{
  days: number
  price: number
}[]>([])

axios.get(`${resBaseUrl.value}/component-api/${import.meta.env.VITE_APP_PACKAGE_NAME}-sponsor-config.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  supportOptions.value = res.data ? res.data.sponsors : []
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
</style>
