<template>
  <div id="app" @click="clickEvent">
    <header class="page-header">
      <div class="left">
        <a :href="baseApiUrl">
          <img :src="`${baseApiUrl}logo.png`" width="18">
          <span class="title">vxe-table</span>
        </a>
        <a href='https://gitee.com/x-extends/vxe-table/stargazers'>
          <img src='https://gitee.com/x-extends/vxe-table/badge/star.svg?theme=gvp' alt='star'>
        </a>
        <a href="https://github.com/x-extends/vxe-table/stargazers">
          <img src="https://img.shields.io/github/stars/x-extends/vxe-table.svg">
        </a>
        <a href="http://npm-stat.com/charts.html?package=vxe-table">
          <img src="https://img.shields.io/npm/dm/vxe-table.svg">
        </a>
      </div>
      <div class="right">
        <div class="content">
          <span v-if="usedJSHeapSize && usedJSHeapSize !== '0'" class="performance">Memory used: {{ usedJSHeapSize }} MB.</span>
          <!-- <span>{{ $t('app.body.label.translations') }}:</span> -->
          <vxe-select class="locale-switch" size="mini" v-model="$i18n.locale">
            <vxe-option value="zh_CN" label="中文"></vxe-option>
            <vxe-option value="zh_TC" label="繁體中文"></vxe-option>
            <vxe-option value="en_US" label="English"></vxe-option>
            <!-- <vxe-option value="ja_JP" label="ジャパン"></vxe-option> -->
          </vxe-select>
          <!-- <span>{{ $t('app.body.label.version') }}: </span> -->
          <vxe-select class="version-switch" size="mini" v-model="version" @change="vChangeEvent">
            <!-- <vxe-option value="4.5" :label="$t('app.body.other.v4d5')" disabled></vxe-option> -->
            <vxe-option value="4" :label="$t('app.body.other.v4')"></vxe-option>
            <!-- <vxe-option value="3.5" :label="$t('app.body.other.v3d5')" disabled></vxe-option> -->
            <vxe-option value="3" :label="$t('app.body.other.v3')"></vxe-option>
            <vxe-option value="2" :label="$t('app.body.other.v2')" class-name="due-to-stop"></vxe-option>
            <vxe-option value="1" :label="$t('app.body.other.v1')" class-name="due-to-stop"></vxe-option>
          </vxe-select>
          <router-link class="link donation" :title="$t('app.footer.donationDesc')" :to="{name: 'Donation'}">{{ $t('app.header.label.donation') }}</router-link>
          <template v-if="apiLoading && showPlugin">
            <a v-if="disabledPlugin" class="link support" :href="pluginApiUrl" target="_blank">💡插件</a>
            <a v-else title="维护中" class="link support" style="cursor: no-drop;color: #BFBFBF;background-color:#fff;" @click="$XModal.alert('维护中...', '维护中')">插件</a>
          </template>
        </div>
      </div>
    </header>
    <div class="page-container">
      <div class="aside" :class="{visible: showLeft}">
        <div class="header">
          <div class="version-list">
            <template v-if="stableVersionList.length">
              <span class="title">{{  $t('app.body.label.stableVersion')}}</span>
              <vxe-select class="stable-select" v-model="selectStableVersion" size="mini" :options="stableVersionList"></vxe-select>
            </template>
            <template v-if="showBetaVetsion">
              <span class="title">{{  $t('app.body.label.latestVersion')}}</span>
              <vxe-select class="latest-select" v-model="selectBetaVersion" size="mini" :options="newBetsVersionList"></vxe-select>
            </template>
          </div>
          <vxe-input clearable v-model="filterName" type="search" class="search-input" :placeholder="$t('app.body.search.searchPlaceholder')" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
        </div>
        <div class="body">
          <div class="docs">
            <template v-if="apiList.length">
              <!-- <ul class="nav-child-menu">
                <li>
                  <router-link class="nav-link" :to="{name: 'Preview'}">
                    <span>粘性表格-概念</span>
                  </router-link>
                </li>
              </ul> -->
              <ul class="nav-menu">
                <li v-for="(item, index) in apiList" :key="index" :class="{expand: item.expand}">
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
              <div class="search-nodata">{{ $t('app.body.search.noDataPrefix') }}<span class="keyword-lighten">{{ filterName }}</span>{{ $t('app.body.search.noDataSuffix') }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="oper-wrapper" v-show="showOperBtn">
        <vxe-button class="oper-btn" :icon="showLeft ? 'vxe-icon-arrow-left' : 'vxe-icon-arrow-right'" @click="showLeft = !showLeft"></vxe-button>
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
            <div>
              <a class="link" href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022010374号</a>
              <span style="margin-left: 20px;">
                <span>©</span>
                <span><a class="link" :href="baseApiUrl" target="_blank">vxe-table</a> 2018-{{serveTY}}</span>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>

    <!-- <vxe-modal v-model="newVersionVisible" width="500" min-height="200" min-width="400" :position="{left: 20, top: 20}" :mask="false" :lock-view="false" show-footer resize>
      <template #title>
        <span style="color:red">v4.x next 发布</span>
      </template>
      <template #default>
        <ul>
          <li>* 支持 vue 3.0 Component API</li>
          <li>* 使用 typescript 重写组件，全面支持 typescript</li>
          <li>* 不再支持 IE，面向现代浏览器</li>
          <li>* 重写渲染器：移除 h 参数</li>
          <li>* 兼容基本参数及用法</li>
        </ul>
      </template>
      <template #footer>
        <vxe-button @click="claseNewVersionEvent">不看</vxe-button>
        <vxe-button status="primary" @click="viewNewVersionEvent">查看更多</vxe-button>
      </template>
    </vxe-modal> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'

export default {
  data () {
    return {
      showLeft: true,
      selected: null,
      filterName: '',
      version: '',
      apiList: [],
      tableData: [],
      selectBetaVersion: null,
      betaVersionList: [],
      selectStableVersion: null,
      stableVersionList: [],
      usedJSHeapSize: '0',
      newVersionVisible: false,
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
            // {
            //   label: 'app.aside.nav.shortcutKeyPlugin',
            //   disabled: true,
            //   locat: {
            //     name: 'TablePluginShortcutKey'
            //   }
            // },
            {
              label: 'app.aside.nav.exportXLSXPlugin',
              disabled: XEUtils.browse().msie,
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
            // },
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
            }
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
            {
              label: 'app.aside.nav.iviewRender',
              locat: {
                name: 'TableOtherIview'
              }
            },
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
    }
  },
  computed: {
    ...mapState([
      'serveTY',
      'docsVersion',
      'baseApiUrl',
      'pluginApiUrl',
      'serveApiUrl'
    ]),
    demoLink () {
      const { $route, apiList } = this
      for (let gIndex = 0; gIndex < apiList.length; gIndex++) {
        const group = apiList[gIndex]
        if (group.children) {
          for (let cIndex = 0; cIndex < group.children.length; cIndex++) {
            const item = group.children[cIndex]
            if (item.locat && item.locat.name === $route.name) {
              return item.demoUrl
            }
          }
        }
      }
      return null
    },
    showBetaVetsion () {
      const { betaVersionList, stableVersionList } = this
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
        return betaVersionList.some(item => item.value.indexOf('3.') === 0)
      }
      return false
    },
    newBetsVersionList () {
      const { betaVersionList, stableVersionList } = this
      if (stableVersionList.length) {
        if (betaVersionList.length) {
          const stableNums = stableVersionList[0].value.split('-')[0].split('.')
          const stable1 = XEUtils.toNumber(stableNums[0])
          const stable2 = XEUtils.toNumber(stableNums[1])
          const stable3 = XEUtils.toNumber(stableNums[2])
          return betaVersionList.filter(pack => {
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
        return betaVersionList.filter(item => item.value.indexOf('3.') === 0)
      }
      return stableVersionList
    },
    pageKey () {
      return this.$route.path.split('/')[2]
    },
    showOperBtn () {
      return ['StartInstall', 'StartUse', 'StartGlobal', 'StartIcons', 'StartTheme', 'StartI18n', 'VXEAPI', 'Donation', 'Run'].includes(this.$route.name)
    }
  },
  watch: {
    '$i18n.locale' (value) {
      localStorage.setItem('language', value)
      this.loadList()
      this.defaultExpand()
    },
    pageKey () {
      this.defaultExpand()
    }
  },
  created () {
    if (process.env.NODE_ENV === 'development') {
      setInterval(() => {
        const performance = window.performance || window.webkitPerformance
        if (performance && performance.memory) {
          this.usedJSHeapSize = XEUtils.toFixed(XEUtils.floor(performance.memory.usedJSHeapSize / 1048576, 2), 2)
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
    // setTimeout(() => {
    //   this.newVersionVisible = localStorage.getItem('VXE_TABLE_NEW_VERSION') !== '4.0'
    // }, 5000)
    this.init()

    if (process.env.NODE_ENV !== 'development') {
      if (!localStorage.getItem('READ_VERSION_UPGRADE_3d8')) {
        VXETable.modal.alert({
          title: '重要公告：v3.0.x ~ v3.8.x 停止维护',
          message: 'vxe-table v3.0.x ~ v3.8.x 版本于 2024 年 12 月 1 日起停止维护。建议使用最新版本。',
          status: 'warning',
          confirmButtonText: '我已知晓'
        }).then((type) => {
          if (type === 'confirm') {
            localStorage.setItem('READ_VERSION_UPGRADE_3d8', '1')
          }
        })
      }
    }
  },
  methods: {
    ...mapMutations([
      'setSupportQQ'
    ]),
    init () {
      this.version = this.docsVersion
      this.getVersion()
      this.loadList()
      setTimeout(() => this.defaultExpand(), 1500)
    },
    loadList () {
      this.tableData = XEUtils.clone(this.tableList, true)
      XEUtils.eachTree(this.tableData, item => {
        item.label = this.$t(item.label)
      })
      this.handleSearch()
    },
    defaultExpand () {
      const group = this.apiList.find(item => item.value === this.pageKey)
      if (group) {
        group.expand = true
      }
    },
    getVersion () {
      fetch(`${this.serveApiUrl}/baseapi/api/npm/versions/vxe-table`)
        .then(response => response.json())
        .then((data) => {
          const { sp, dp, ss, time, tags } = data
          this.apiLoading = true
          this.apiLoading = true
          this.disabledPlugin = dp
          this.showPlugin = sp
          this.setSupportQQ(ss)
          const stableVersionList = data[`v${this.version}StableList`].map(value => ({ value, label: value }))
          const betaVersionList = data[`v${this.version}BetaList`].map(value => ({ value, label: value }))
          this.stableVersionList = stableVersionList
          this.betaVersionList = betaVersionList
          if (stableVersionList.length) {
            this.selectStableVersion = tags && tags[`xtable-v${this.version}`] ? tags[`xtable-v${this.version}`] : stableVersionList[0].value
          }
          if (betaVersionList.length) {
            this.selectBetaVersion = betaVersionList[0].value
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
    },
    // 调用频率间隔 500 毫秒
    searchEvent: XEUtils.debounce(function () {
      this.handleSearch()
    }, 500, { leading: false, trailing: true }),
    handleSearch () {
      const filterName = XEUtils.toValueString(this.filterName).trim().toLowerCase()
      if (filterName) {
        const filterRE = new RegExp(filterName, 'gi')
        const rest = XEUtils.searchTree(this.tableData, item => item.label.toLowerCase().indexOf(filterName) > -1 || (item.keywords && item.keywords.some((key) => key.toLowerCase().indexOf(filterName) > -1)))
        XEUtils.eachTree(rest, item => {
          item.label = item.label.replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
        })
        this.apiList = rest
        this.apiList.forEach(group => {
          group.expand = true
        })
      } else {
        this.apiList = this.tableData
      }
    },
    clickEvent (evnt) {
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
    },
    linkEvent (item) {
      if (!item.disabled) {
        item.expand = !item.expand
      }
    },
    claseNewVersionEvent () {
      this.newVersionVisible = false
      localStorage.setItem('VXE_TABLE_NEW_VERSION', '4.0')
    },
    viewNewVersionEvent () {
      this.claseNewVersionEvent()
      location.href = '/vxe-table/v4/'
    },
    vChangeEvent () {
      switch (this.version) {
        case '1':
          location.href = `${this.baseApiUrl}v1/`
          break
        case '2':
          location.href = `${this.baseApiUrl}v2/`
          break
        case '3':
          location.href = `${this.baseApiUrl}v3/`
          break
        case '4':
          location.href = `${this.baseApiUrl}v4/`
          break
      }
    }
  }
}
</script>
