<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="CDN 方式">
          <div>可以通过第三方开放的 CDN 来引用， <vxe-link :href="`https://unpkg.com/${packName}/`">unpkg</vxe-link> 或 <vxe-link :href="`https://cdn.jsdelivr.net/npm/${packName}/`">cdnjs</vxe-link> 获取到最新版本的资源，并在页面上引入即可</div>
        </vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>
      </template>

      <template #use>
        <iframe :src="cdnUrl" style="display: block;width: 100%;height: 1060px;border: 1px solid #000;"></iframe>
        <code-render language="html" :code="cdnCode"></code-render>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const packName = computed(() => appStore.packName)
const docsVersion = computed(() => appStore.docsVersion)

const cdnCode = ref('')

const cdnUrl = computed(() => {
  return `/resource/cdn/${packName.value}-v${docsVersion.value}.html?v=${import.meta.env.VITE_APP_DATE_NOW}`
})

fetch(cdnUrl.value).then(res => res.text()).then(html => {
  cdnCode.value = html
})
</script>
