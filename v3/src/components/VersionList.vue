<template>
  <div v-if="pluginType && selectPluginVersion" class="version-list">
    <div class="version-item">
      <div>
        <span class="version-title">{{ $t('app.aside.stableVersion') }}</span>
        <span>{{ pluginType }}@{{ selectPluginVersion }}</span>
      </div>
    </div>
    <div class="version-btn">
      <vxe-link style="margin-left: 0.5em;" status="primary" :href="currBuyPluginBUrl" target="_blank">{{ $t('app.aside.releaseTitle') }}</vxe-link>
    </div>
  </div>
  <div v-else class="version-list">
    <div class="version-item">
      <div>
        <span class="version-title">{{ $t('app.aside.stableVersion') }}</span>
        <span>{{ packName }}@{{ selectStableVersion }}</span>
      </div>
      <div v-if="showBetaVersion">
        <span class="version-title">{{ $t('app.aside.latestVersion') }}</span>
        <span>{{ packName }}@{{ selectBetaVersion }}</span>
      </div>
    </div>
    <div class="version-btn">
      <vxe-link style="margin-left: 1em;" status="primary" :href="`https://github.com/x-extends/${packName}/releases`" target="_blank">更新日志</vxe-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import XEUtils from 'xe-utils'
import axios from 'axios'

export default Vue.extend({
  inject: {
    pluginType: {
      default: ''
    }
  },
  data () {
    return {
      stableVersionList: [] as any[],
      betaVersionList: [] as any[],

      selectPluginVersion: '',
      selectStableVersion: '',
      selectBetaVersion: '',

      pluginUrlMaps: {} as Record<string, string>
    }
  },
  computed: {
    ...mapState([
      'packName',
      'docsVersion',
      'pluginBuyUrl',
      'isPluginDocs',
      'resBaseUrl',
      'siteBaseUrl',
      'apiBaseUrl'
    ]),
    ...({} as {
      packName () : string
      pluginType () : string
      pluginBuyUrl () : string
      isPluginDocs(): boolean
      resBaseUrl(): string
      siteBaseUrl(): string
    }),
    currBuyPluginBUrl () {
      const { pluginType, pluginUrlMaps } = this
      if (pluginUrlMaps[pluginType]) {
        return `${this.pluginBuyUrl}#${pluginUrlMaps[pluginType]}?rl=1`
      }
      return this.pluginBuyUrl
    },
    showBetaVersion () {
      const betaList = this.betaVersionList
      if (this.selectStableVersion) {
        if (betaList.length) {
          const stableNums = this.selectStableVersion.split('-')[0].split('.')
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
    },
    newBetsVersionList () {
      const betaList = this.betaVersionList
      const stableList = this.stableVersionList
      if (this.selectStableVersion) {
        if (betaList.length) {
          const stableNums = this.selectStableVersion.split('-')[0].split('.')
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
    }
  },
  methods: {
    getVersion (this: any) {
      if (this.isPluginDocs) {
        fetch(`${this.resBaseUrl}/component-api/vxe-plugin-url.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          res.json().then(data => {
            this.pluginUrlMaps = data
          })
        })
        axios.get(`${this.resBaseUrl}/component-api/vxe-plugin-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          const vData = res.data || {}
          const tags = vData[this.pluginType]
          this.selectPluginVersion = tags ? tags[`v${this.docsVersion}-latest`] : ''
        })
      }
      fetch(`${this.apiBaseUrl}/baseapi/api/npm/versions/${process.env.VUE_APP_PACKAGE_NAME}`, { method: 'GET' })
        .then(response => response.json())
        .then((data) => {
          const { time, tags } = data
          const stableList = data[`v${this.docsVersion}StableList`].map(value => ({ value, label: value }))
          const betaList = data[`v${this.docsVersion}BetaList`].map(value => ({ value, label: value }))
          this.stableVersionList = stableList
          this.betaVersionList = betaList
          if (stableList.length) {
            this.selectStableVersion = tags[`v${this.docsVersion}-latest`] || stableList[0].value
          }
          if (betaList.length) {
            this.selectBetaVersion = betaList[0].value
          }

          // 清明节
          const serveDate = XEUtils.toStringDate(time)
          const yymmdd = XEUtils.toDateString(serveDate, 'yyyyMMdd')
          if (['20230405', '20240404', '20250404', '20260405', '20270405', '20280404'].includes(yymmdd)) {
            document.documentElement.setAttribute('qingmingjie', '1')
          }
        }).catch(e => e)
    }
  },
  created () {
    this.getVersion()
  }
})
</script>

<style lang="scss" scoped>
.version-list {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto 0.8em auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .version-item {
    flex-grow: 0;
  }
  .version-title {
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
