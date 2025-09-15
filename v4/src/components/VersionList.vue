<template>
  <div v-if="pluginType && selectPluginVersion" class="version-list">
    <span class="version-title">{{ $t('app.aside.stableVersion') }}</span>
    <span>{{ pluginType }}@{{ selectPluginVersion }}</span>
    <vxe-link :href="currBuyPluginBUrl" status="primary" target="_blank">{{ $t('app.aside.releaseTitle') }}</vxe-link>
  </div>
  <div v-else class="version-list">
    <span>
      <span class="version-title">{{ $t('app.aside.stableVersion') }}</span>
      <span>{{ packName }}@{{ selectStableVersion }}</span>
    </span>
    <span v-if="showBetaVersion" style="margin-left: 0.5em;">
      <span class="version-title">{{ $t('app.aside.latestVersion') }}</span>
      <span>@{{ selectBetaVersion }}</span>
    </span>
    <vxe-link style="margin-left: 0.5em;" status="primary" :href="`https://github.com/x-extends/${packName}/releases`" target="_blank">更新日志</vxe-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import { useAppStore } from '@/store/app'
import XEUtils from 'xe-utils'
import axios from 'axios'

const appStore = useAppStore()
const packName = computed(() => appStore.packName)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
const isPluginDocs = computed(() => appStore.isPluginDocs)

const pluginType = inject('pluginType', '' as string)

const stableVersionList = ref<any[]>([])
const betaVersionList = ref<any[]>([])

const selectPluginVersion = ref('')
const selectStableVersion = ref('')
const selectBetaVersion = ref('')

const pluginUrlMaps = ref<Record<string, string>>({})

const currBuyPluginBUrl = computed(() => {
  if (pluginUrlMaps.value[pluginType]) {
    return `${appStore.pluginBuyUrl}#${pluginUrlMaps.value[pluginType]}?rl=1`
  }
  return appStore.pluginBuyUrl
})

const showBetaVersion = computed(() => {
  const betaList = betaVersionList.value
  if (selectStableVersion.value) {
    if (betaList.length) {
      const stableNums = selectStableVersion.value.split('-')[0].split('.')
      const stable1 = XEUtils.toNumber(stableNums[0])
      const stable2 = XEUtils.toNumber(stableNums[1])
      const stable3 = XEUtils.toNumber(stableNums[2])
      const betaNums = betaList[0].value.split('-')[0].split('.')
      const beta1 = XEUtils.toNumber(betaNums[0])
      const beta2 = XEUtils.toNumber(betaNums[1])
      const beta3 = XEUtils.toNumber(betaNums[2])
      if (beta1 > stable1) {
        return true
      } else if (beta1 === stable1) {
        if (beta2 > stable2) {
          return true
        } else if (beta2 === stable2) {
          if (beta3 > stable3) {
            return true
          }
        }
      }
    }
  } else {
    return betaList.some((item) => item.value.indexOf('4.') === 0)
  }
  return false
})

const newBetsVersionList = computed(() => {
  const betaList = betaVersionList.value
  const stableList = stableVersionList.value
  if (selectStableVersion.value) {
    if (betaList.length) {
      const stableNums = selectStableVersion.value.split('-')[0].split('.')
      const stable1 = XEUtils.toNumber(stableNums[0])
      const stable2 = XEUtils.toNumber(stableNums[1])
      const stable3 = XEUtils.toNumber(stableNums[2])
      return betaList.filter((pack) => {
        const betaNums = pack.value.split('-')[0].split('.')
        const beta1 = XEUtils.toNumber(betaNums[0])
        const beta2 = XEUtils.toNumber(betaNums[1])
        const beta3 = XEUtils.toNumber(betaNums[2])
        if (beta1 > stable1) {
          return true
        } else if (beta1 === stable1) {
          if (beta2 > stable2) {
            return true
          } else if (beta2 === stable2) {
            if (beta3 > stable3) {
              return true
            }
          }
        }
        return false
      })
    }
  } else {
    return betaList.filter((item) => item.value.indexOf('4.') === 0)
  }
  return stableList
})

const getVersion = () => {
  if (isPluginDocs.value) {
    fetch(`${siteBaseUrl.value}/component-api/vxe-plugin-url.json?v=?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        pluginUrlMaps.value = data
      })
    })
    axios.get(`${siteBaseUrl.value}/component-api/vxe-plugin-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
      const vData = res.data || {}
      const tags = vData[pluginType]
      selectPluginVersion.value = tags[`v${appStore.docsVersion}-latest`]
    })
  }
  fetch(`${import.meta.env.VITE_APP_SERVE_API_URL}/api/npm/versions/${import.meta.env.VITE_APP_PACKAGE_NAME}`, { method: 'GET' })
    .then(response => response.json())
    .then((data) => {
      const { time, tags } = data || {}
      const stableList = data[`v${appStore.docsVersion}StableList`].map(value => ({ value, label: value }))
      const betaList = data[`v${appStore.docsVersion}BetaList`].map(value => ({ value, label: value }))
      stableVersionList.value = stableList
      betaVersionList.value = betaList
      if (stableList.length) {
        selectStableVersion.value = tags[`v${appStore.docsVersion}-latest`] || stableList[0].value
      }
      if (betaList.length) {
        selectBetaVersion.value = betaList[0].value
      }

      // 清明节
      const serveDate = XEUtils.toStringDate(time)
      const yymmdd = XEUtils.toDateString(serveDate, 'yyyyMMdd')
      if (['20230405', '20240404', '20250404', '20260405', '20270405', '20280404'].includes(yymmdd)) {
        document.documentElement.setAttribute('qingmingjie', '1')
      }
    }).catch(e => e)
}

getVersion()
</script>

<style lang="scss" scoped>
.version-list {
  font-size: 12px;
  margin-bottom: 10px;
  .version-title {
    font-weight: 700;
    margin: 0 6px;
  }
  .stable-select {
    width: 85px;
  }
  .latest-select {
    width: 136px;
  }
}
</style>
