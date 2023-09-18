<template>
  <div id="app" @click="clickEvent">
    <header class="page-header">
      <div class="left">
        <a :href="baseApiUrl">
          <img :src="`${baseApiUrl}logo.png`" width="18">
          <span class="title">vxe-table</span>
        </a>
        <a href='https://gitee.com/xuliangzhan_admin/vxe-table/stargazers'>
          <img src='https://gitee.com/xuliangzhan_admin/vxe-table/badge/star.svg?theme=gvp' alt='star'>
        </a>
        <a href="https://github.com/x-extends/vxe-table/stargazers">
          <img src="https://img.shields.io/github/stars/xuliangzhan/vxe-table.svg">
        </a>
        <a href="http://npm-stat.com/charts.html?package=vxe-table">
          <img src="https://img.shields.io/npm/dm/vxe-table.svg">
        </a>
      </div>
      <div class="right">
        <div class="content">
          <span v-if="appData.usedJSHeapSize && appData.usedJSHeapSize !== '0'" class="performance">Memory used: {{ appData.usedJSHeapSize }} MB.</span>
          <!-- <span>{{ $t('app.body.label.translations') }}:</span> -->
          <vxe-select class="locale-switch" size="mini" v-model="$i18n.locale">
            <vxe-option value="zh_CN" label="中文"></vxe-option>
            <vxe-option value="zh_TC" label="繁體中文"></vxe-option>
            <vxe-option value="en_US" label="English"></vxe-option>
            <!-- <vxe-option value="ja_JP" label="ジャパン"></vxe-option> -->
          </vxe-select>
          <!-- <span>{{ $t('app.body.label.version') }}: </span> -->
          <vxe-select class="version-switch" size="mini" v-model="appData.version" @change="vChangeEvent">
            <!-- <vxe-option value="4.5" :label="$t('app.body.other.v4d5')" disabled></vxe-option> -->
            <vxe-option value="4" :label="$t('app.body.other.v4')"></vxe-option>
            <!-- <vxe-option value="3.5" :label="$t('app.body.other.v3d5')" disabled></vxe-option> -->
            <vxe-option value="3" :label="$t('app.body.other.v3')"></vxe-option>
            <vxe-option value="2" :label="$t('app.body.other.v2')" class-name="due-to-stop"></vxe-option>
            <vxe-option value="1" :label="$t('app.body.other.v1')" class-name="due-to-stop"></vxe-option>
          </vxe-select>
          <router-link class="link donation" :title="$t('app.footer.donationDesc')" :to="{name: 'Donation'}">{{ $t('app.header.label.donation') }}</router-link>
          <template v-if="appData.apiLoading && appData.showPlugin">
            <a v-if="appData.disabledPlugin" class="link support" :href="pluginApiUrl" target="_blank">💡插件</a>
            <a v-else title="维护中" class="link support" style="cursor: no-drop;color: #BFBFBF;background-color:#fff;" @click="$XModal.alert('维护中...', '维护中')">插件</a>
          </template>
        </div>
      </div>
    </header>
    <div class="page-container">
      <div class="aside" :class="{visible: appData.showLeft}">
        <div class="header">
          <div class="version-list">
            <template v-if="appData.stableVersionList.length">
              <span class="title">{{  $t('app.body.label.stableVersion')}}</span>
              <vxe-select class="stable-select" v-model="appData.selectStableVersion" size="mini" :options="appData.stableVersionList"></vxe-select>
            </template>
            <template v-if="showBetaVetsion">
              <span class="title">{{  $t('app.body.label.latestVersion')}}</span>
              <vxe-select class="latest-select" v-model="appData.selectBetaVersion" size="mini" :options="newBetsVersionList"></vxe-select>
            </template>
          </div>
          <vxe-input clearable v-model="appData.filterName" type="search" class="search-input" :placeholder="$t('app.body.search.searchPlaceholder')" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
        </div>
        <div class="body">
          <div class="sponsors" v-if="appData.sponsorList.length">
            <h4 class="title">赞助商</h4>
            <div v-for="(item, index) in appData.sponsorList" :key="index">
              <a :href="item.url" :title="item.title" target="_blank">
                <img :src="item.img" :style="{width: item.width, height: item.height}">
              </a>
            </div>
          </div>
          <div class="docs">
            <template v-if="appData.apiList.length">
              <ul class="nav-menu">
                <li v-for="(item, index) in appData.apiList" :key="index" :class="{expand: item.expand}">
                  <a class="nav-link" @click="linkEvent(item)" :title="item.disabled ? $t('app.body.other.newFunc') : item.label" :class="{disabled: item.disabled, active: pageKey === item.value}">
                    <i class="vxe-icon-arrow-right nav-link-icon"></i>
                    <span v-html="item.label"></span>
                  </a>
                  <ul v-if="item.children" v-show="item.expand" class="nav-child-menu">
                    <li v-for="(child, cIndex) in item.children" :key="cIndex" :class="{'is-donation': ['Donation'].includes(child.locat.name)}">
                      <a class="nav-link disabled" v-if="child.disabled" :title="$t('app.body.other.newFunc')" v-html="child.label"></a>
                      <router-link v-else class="nav-link" :to="child.locat" :title="child.label" v-html="child.label"></router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="search-nodata">{{ $t('app.body.search.noDataPrefix') }}<span class="keyword-lighten">{{ appData.filterName }}</span>{{ $t('app.body.search.noDataSuffix') }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="oper-wrapper" v-show="showOperBtn">
        <vxe-button class="oper-btn" :icon="appData.showLeft ? 'vxe-icon-arrow-left' : 'vxe-icon-arrow-right'" @click="appData.showLeft = !appData.showLeft"></vxe-button>
      </div>
      <div class="body">
        <div class="content" :class="{full: ['VXEAPI', 'Donation', 'Run'].includes($route.name)}">
          <div class="page-view">
            <template v-if="!/\/start|\/module|\/api/.test($route.path)">
              <a v-if="demoLink" class="link todemo" :href="demoLink" target="_blank">{{ $t('app.body.button.runDemo') }}</a>
            </template>
            <router-view/>
          </div>
          <footer class="page-footer">
            <div><a class="link" href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022010374号-1</a></div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import i18n from './i18n'
import router from './router'
import XEUtils from 'xe-utils'

export default defineComponent({
  setup () {
    const store = useStore()
    const docsVersion = computed(() => store.state.docsVersion)
    const baseApiUrl = computed(() => store.state.baseApiUrl)
    const pluginApiUrl = computed(() => store.state.pluginApiUrl)
    const serveApiUrl = computed(() => store.state.serveApiUrl)

    const appData = reactive({
      showLeft: true,
      selected: null,
      filterName: '',
      version: docsVersion.value,
      apiList: [] as any[],
      tableData: [] as any[],
      selectBetaVersion: null,
      betaVersionList: [] as any[],
      selectStableVersion: null,
      stableVersionList: [] as any[],
      usedJSHeapSize: '0',
      sponsorList: [],
      apiLoading: false,
      showPlugin: false,
      disabledPlugin: false,
      tableList: [
        {
          label: 'app.aside.nav.module',
          value: 'module',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.print',
              locat: {
                name: 'TableOtherPrint'
              }
            },
            {
              label: '使用第三方图标',
              locat: {
                name: 'ModuleButton'
              },
              keywords: ['button']
            }
          ]
        },
        {
          label: 'app.aside.nav.plugin',
          value: 'plugin',
          expand: false,
          children: [
            // {
            //   label: 'app.aside.nav.elementPlugin',
            //   demoUrl: 'https://jsrun.pro/dwbKp/edit',
            //   locat: {
            //     name: 'TablePluginElementConfig'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.elementFilterPlugin',
            //   demoUrl: 'https://jsrun.pro/BWWKpv/edit',
            //   locat: {
            //     name: 'TablePluginElementFilter'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.elementPluginMore',
            //   demoUrl: 'https://jsrun.pro/uWWKp/edit',
            //   locat: {
            //     name: 'TablePluginElementPage'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.iviewPlugin',
            //   demoUrl: 'https://jsrun.pro/HPWKp/edit',
            //   locat: {
            //     name: 'TablePluginIviewConfig'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.iviewFilter',
            //   demoUrl: 'https://jsrun.pro/nPWKp/edit',
            //   locat: {
            //     name: 'TablePluginIviewFilter'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.iviewPluginMore',
            //   demoUrl: 'https://jsrun.pro/rPWKp/edit',
            //   locat: {
            //     name: 'TablePluginIviewPage'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.antdPlugin',
            //   demoUrl: 'https://jsrun.pro/APWKp/edit',
            //   locat: {
            //     name: 'TablePluginAntdConfig'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.antdFilter',
            //   locat: {
            //     name: 'TablePluginAntdFilter'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.antdPluginMore',
            //   locat: {
            //     name: 'TablePluginAntdPage'
            //   }
            // },
            // // {
            // //   label: 'app.aside.nav.shortcutKeyPlugin',
            // //   disabled: true,
            // //   locat: {
            // //     name: 'TablePluginShortcutKey'
            // //   }
            // // },
            // // {
            // //   label: 'app.aside.nav.chartsPlugin',
            // //   disabled: true,
            // //   demoUrl: 'https://jsrun.pro/9aWKp/edit',
            // //   locat: {
            // //     name: 'TablePluginCharts'
            // //   }
            // // },
            {
              label: 'app.aside.nav.exportXLSXPlugin',
              demoUrl: 'https://jsrun.pro/PIWKp/edit',
              locat: {
                name: 'TablePluginExportXLSX'
              },
              keywords: ['xlsx']
            },
            {
              label: 'app.aside.nav.exportPDFPlugin',
              demoUrl: 'https://jsrun.pro/I8WKp/edit',
              locat: {
                name: 'TablePluginExportPDF'
              },
              keywords: ['pdf']
            },
            {
              label: 'app.aside.nav.rendererPlugin',
              locat: {
                name: 'TablePluginRenderer'
              },
              keywords: ['renderer']
            },
            {
              label: 'app.aside.nav.menusPlugin',
              locat: {
                name: 'TablePluginMenus'
              },
              keywords: ['menu']
            }
            // {
            //   label: 'app.aside.nav.treeRowPlugin',
            //   locat: {
            //     name: 'TablePluginTreeRows'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.treeColPlugin',
            //   locat: {
            //     name: 'TablePluginTreeCols'
            //   }
            // }
          ]
        },
        {
          label: 'app.aside.nav.other',
          value: 'other',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.elementRender',
              locat: {
                name: 'TableOtherElement'
              }
            },
            // {
            //   label: 'app.aside.nav.iviewRender',
            //   locat: {
            //     name: 'TableOtherIview'
            //   }
            // },
            {
              label: 'app.aside.nav.antd',
              locat: {
                name: 'TableOtherAntd'
              }
            },
            {
              label: 'app.aside.nav.sortablejsRow',
              locat: {
                name: 'TableSortableRow'
              }
            },
            {
              label: 'app.aside.nav.sortablejsColumn',
              demoUrl: 'https://jsrun.pro/MibKp/edit',
              locat: {
                name: 'TableSortableColumn'
              }
            },
            {
              label: 'app.aside.nav.xlsxRender',
              locat: {
                name: 'TableXlsx'
              }
            }
          ]
        }
      ]
    })

    const getVersion = () => {
      fetch(`${serveApiUrl.value}/api/npm/versions/vxe-table`, { method: 'GET' })
        .then(response => response.json())
        .then((data) => {
          const { sp, dp, ss, time, tags } = data
          appData.apiLoading = true
          appData.disabledPlugin = dp
          appData.showPlugin = sp
          store.commit('setSupportQQ', ss)
          const stableVersionList = data[`v${appData.version}StableList`].map(value => ({ value, label: value }))
          const betaVersionList = data[`v${appData.version}BetaList`].map(value => ({ value, label: value }))
          appData.stableVersionList = stableVersionList
          appData.betaVersionList = betaVersionList
          if (stableVersionList.length) {
            appData.selectStableVersion = tags && tags[`xtable-v${appData.version}`] ? tags[`xtable-v${appData.version}`] : stableVersionList[0].value
          }
          if (betaVersionList.length) {
            appData.selectBetaVersion = betaVersionList[0].value
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

      if (localStorage.getItem('qingmingjie')) {
        document.body.className = `${document.body.className} qingmingjie`
      }
    }

    const handleSearch = () => {
      const filterName = XEUtils.toValueString(appData.filterName).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const rest = XEUtils.searchTree(appData.tableData, (item: any) => item.label.toLowerCase().indexOf(filterName) > -1 || (item.keywords && item.keywords.some((key: string) => key.toLowerCase().indexOf(filterName) > -1)))
        XEUtils.eachTree(rest, (item: any) => {
          item.label = item.label.replace(filterRE, (match: any) => `<span class="keyword-lighten">${match}</span>`)
        })
        appData.apiList = rest
        appData.apiList.forEach(group => {
          group.expand = true
        })
      } else {
        appData.apiList = appData.tableData
      }
    }

    // 调用频率间隔 500 毫秒
    const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

    const clickEvent = (evnt: any) => {
      const pElem = evnt.target
      if (pElem && pElem.className === 'demo-code') {
        const nextElem = pElem.nextSibling
        if (nextElem && nextElem.tagName.toLowerCase() === 'pre') {
          if (nextElem.className.indexOf('is-show') > -1) {
            nextElem.className = ''
          } else {
            nextElem.className = 'is-show'
          }
        }
      }
    }

    const linkEvent = (item: any) => {
      if (!item.disabled) {
        item.expand = !item.expand
      }
    }

    const vChangeEvent = () => {
      switch (appData.version) {
        case '1':
          location.href = `${baseApiUrl.value}v1/`
          break
        case '2':
          location.href = `${baseApiUrl.value}v2/`
          break
        case '3':
          location.href = `${baseApiUrl.value}v3/`
          break
        case '4':
          location.href = `${baseApiUrl.value}v4/`
          break
      }
    }

    const demoLink = computed(() => {
      const $route = router.currentRoute.value
      const apiList: any[] = appData.apiList
      for (let gIndex = 0; gIndex < apiList.length; gIndex++) {
        const group = apiList[gIndex]
        if (group.children) {
          for (let cIndex = 0; cIndex < group.children.length; cIndex++) {
            const item = group.children[cIndex]
            if (item.locat && item.locat.name === $route.name) {
              return item.demoV4Url
            }
          }
        }
      }
      return null
    })

    const showBetaVetsion = computed(() => {
      const betaVersionList: any[] = appData.betaVersionList
      const stableVersionList: any[] = appData.stableVersionList
      if (stableVersionList.length) {
        if (betaVersionList.length) {
          const stableNums = stableVersionList[0].value.split('-')[0].split('.')
          const stable1 = XEUtils.toNumber(stableNums[0])
          const stable2 = XEUtils.toNumber(stableNums[1])
          const stable3 = XEUtils.toNumber(stableNums[2])
          const betaNums = betaVersionList[0].value.split('-')[0].split('.')
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
        return betaVersionList.some((item: any) => item.value.indexOf('4.') === 0)
      }
      return false
    })

    const newBetsVersionList = computed(() => {
      const betaVersionList: any[] = appData.betaVersionList
      const stableVersionList: any[] = appData.stableVersionList
      if (stableVersionList.length) {
        if (betaVersionList.length) {
          const stableNums = stableVersionList[0].value.split('-')[0].split('.')
          const stable1 = XEUtils.toNumber(stableNums[0])
          const stable2 = XEUtils.toNumber(stableNums[1])
          const stable3 = XEUtils.toNumber(stableNums[2])
          return betaVersionList.filter((pack: any) => {
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
        return betaVersionList.filter((item: any) => item.value.indexOf('4.') === 0)
      }
      return stableVersionList
    })

    const pageKey = computed(() => {
      const $route = router.currentRoute.value
      return $route.path.split('/')[2]
    })

    const showOperBtn = computed(() => {
      const $route = router.currentRoute.value
      return XEUtils.isString($route.name) && ['StartInstall', 'StartUse', 'StartGlobal', 'StartIcons', 'StartTheme', 'StartI18n', 'VXEAPI', 'Donation', 'Run'].includes($route.name)
    })

    const defaultExpand = () => {
      const group = appData.apiList.find(item => item.value === pageKey.value)
      if (group) {
        group.expand = true
      }
    }

    const loadSponsors = () => {
      fetch(`${serveApiUrl.value}/api/npm/versions/vxe-table`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          appData.sponsorList = data
        })
    }

    const loadList = () => {
      appData.tableData = XEUtils.clone(appData.tableList, true)
      XEUtils.eachTree(appData.tableData, (item: any) => {
        item.label = i18n.global.t(item.label)
      })
      handleSearch()
    }

    const init = () => {
      getVersion()
      loadList()
      loadSponsors()
      setTimeout(() => defaultExpand(), 1500)
    }

    watch(() => i18n.global.locale, (value) => {
      localStorage.setItem('language', value)
      loadList()
      defaultExpand()
    })

    watch(pageKey, () => {
      defaultExpand()
    })

    nextTick(() => {
      if (process.env.NODE_ENV === 'development') {
        setInterval(() => {
          const performance: any = window.performance
          if (performance && performance.memory) {
            appData.usedJSHeapSize = XEUtils.toFixed(XEUtils.floor(performance.memory.usedJSHeapSize / 1048576, 2), 2)
          }
        }, 3000)
      } else {
        // setTimeout(() => {
        //   if (location.href.indexOf('vxetable.cn') === -1) {
        //     VXETable.modal.confirm('官网域名已切换 https://vxetable.cn', '', {
        //       confirmButtonText: '点击跳转'
        //     }).then(type => {
        //       if (type === 'confirm') {
        //         location.href = 'https://vxetable.cn'
        //       }
        //     })
        //   }
        // })
      }
      init()
    })

    return {
      baseApiUrl,
      pluginApiUrl,

      appData,
      demoLink,
      showBetaVetsion,
      newBetsVersionList,
      pageKey,
      showOperBtn,

      searchEvent,
      clickEvent,
      linkEvent,
      vChangeEvent
    }
  }
})
</script>
