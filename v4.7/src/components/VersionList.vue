<template>
  <div class="version-list">
    <template v-if="stableVersionList.length">
      <span class="title">{{  $t('app.aside.stableVersion')}}</span>
      <vxe-select class="stable-select" v-model="selectStableVersion" size="mini" :options="stableVersionList"></vxe-select>
    </template>
    <template v-if="showBetaVersion">
      <span class="title">{{  $t('app.aside.latestVersion')}}</span>
      <vxe-select class="latest-select" v-model="selectBetaVersion" size="mini" :options="newBetsVersionList"></vxe-select>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import XEUtils from 'xe-utils'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const stableVersionList = ref<any[]>([])
const betaVersionList = ref<any[]>([])

const selectStableVersion = ref('')
const selectBetaVersion = ref('')

const showBetaVersion = computed(() => {
  const betaList = betaVersionList.value
  const stableList = stableVersionList.value
  if (stableList.length) {
    if (betaList.length) {
      const stableNums = stableList[0].value.split('-')[0].split('.')
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
    } else {
      return true
    }
  } else {
    return betaList.some((item: any) => item.value.indexOf('4.') === 0)
  }
  return false
})

const newBetsVersionList = computed(() => {
  const betaList = betaVersionList.value
  const stableList = stableVersionList.value
  if (stableList.length) {
    if (betaList.length) {
      const stableNums = stableList[0].value.split('-')[0].split('.')
      const stable1 = XEUtils.toNumber(stableNums[0])
      const stable2 = XEUtils.toNumber(stableNums[1])
      const stable3 = XEUtils.toNumber(stableNums[2])
      return betaList.filter((pack: any) => {
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
  fetch(`${process.env.VUE_APP_SERVE_API_URL}/api/npm/versions/${process.env.VUE_APP_PACKAGE_NAME}`, { method: 'GET' })
    .then(response => response.json())
    .then((data) => {
      const { sp, dp, ss, time, tags } = data
      const stableList = data[`v${appStore.docsVersion}StableList`].map(value => ({ value, label: value }))
      const betaList = data[`v${appStore.docsVersion}BetaList`].map(value => ({ value, label: value }))
      stableVersionList.value = stableList
      betaVersionList.value = betaList
      if (stableList.length) {
        selectStableVersion.value = tags[`v${appStore.docsVersion}-legacy`] || stableList[0].value
      }
      if (betaList.length) {
        selectBetaVersion.value = betaList[0].value
      }

      // 样式处理
      const serveDate = XEUtils.toStringDate(time)
      const yymmdd = XEUtils.toDateString(serveDate, 'yyyyMMdd')
      if (['20210404', '20220405', '20230405', '20240404', '20250404'].includes(yymmdd)) {
        localStorage.setItem('qingmingjie', '1')
        document.body.className = `${document.body.className} qingmingjie`
      } else {
        localStorage.removeItem('qingmingjie')
        document.body.className = document.body.className.replace('qingmingjie', '')
      }
    })
}

getVersion()
</script>

<style lang="scss" scoped>
.version-list {
  font-size: 12px;
  margin-bottom: 10px;
  & > .title {
    font-weight: 700;
    margin: 0 6px;
  }
  .stable-select {
    width: 74px;
  }
  .latest-select {
    width: 110px;
  }
}
</style>
