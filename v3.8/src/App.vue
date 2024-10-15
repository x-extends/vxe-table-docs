<template>
  <div id="app" @click="clickEvent">
    <header class="page-header">
      <div class="left">
        <a :href="baseApiUrl">
          <img :src="`${baseApiUrl}logo.png`" width="18">
          <span class="title">Vxe Table</span>
        </a>
        <a href='https://gitee.com/xuliangzhan/vxe-table/stargazers'>
          <img src='https://gitee.com/xuliangzhan/vxe-table/badge/star.svg?theme=gvp' alt='star'>
        </a>
        <a href="http://npm-stat.com/charts.html?package=vxe-table">
          <img src="https://img.shields.io/npm/dm/vxe-table.svg">
        </a>
        <a href="https://github.com/x-extends/vxe-table/stargazers">
          <img src="https://img.shields.io/github/stars/x-extends/vxe-table.svg">
        </a>
      </div>
      <div class="right">
        <div class="content">
          <span v-if="usedJSHeapSize && usedJSHeapSize !== '0'" class="performance">Memory used: {{ usedJSHeapSize }} MB.</span>
          <vxe-pulldown v-model="showSystemMenu">
            <vxe-button class="system-menu-btn" mode="text" @click="showSystemMenu = !showSystemMenu">
              <vxe-icon class="system-menu-btn-icon" name="arrow-down"></vxe-icon>
              <span class="system-menu-btn-text">{{ $t('app.header.moreProducts') }}</span>
            </vxe-button>

            <template #dropdown>
              <ul class="system-menu-wrapper">
                <li v-for="(item, index) in systemMenuList" :key="index">
                  <a class="link" :href="item.href" target="_blank">{{ item.content }}</a>
                  <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
                </li>
              </ul>
            </template>
          </vxe-pulldown>
          <!-- <span>{{ $t('app.body.label.translations') }}:</span> -->
          <vxe-select class="locale-switch" size="mini" v-model="$i18n.locale">
            <vxe-option value="zh_CN" label="中文"></vxe-option>
            <vxe-option value="zh_TC" label="繁體中文"></vxe-option>
            <vxe-option value="en_US" label="English"></vxe-option>
            <!-- <vxe-option value="ja_JP" label="ジャパン"></vxe-option> -->
          </vxe-select>
          <!-- <span>{{ $t('app.body.label.version') }}: </span> -->
          <vxe-select class="version-switch" size="mini" v-model="compVersion" :options="sysVersionOptions" @change="vChangeEvent"></vxe-select>
          <router-link class="link donation" :title="$t('app.footer.donationDesc')" :to="{name: 'Donation'}">{{ $t('app.header.label.donation') }}</router-link>
          <template v-if="apiLoading && showPlugin">
            <template v-if="disabledPlugin">
              <a class="link support" :href="pluginDocsUrl" target="_blank">{{ $t('app.header.label.extendPlugin') }}</a>
              <!-- <a class="link support" :href="pluginApiUrl" target="_blank">{{ $t('app.header.label.purchaseAuthorization') }}</a> -->
            </template>
            <a v-else title="维护中" class="link support" style="cursor: no-drop;color: #BFBFBF;background-color:#fff;" @click="updatingEvent">{{ $t('app.header.label.extendPlugin') }}</a>
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
              <ul class="nav-menu">
                <li v-for="(item, index) in apiList" :key="index" :class="{expand: item.expand}">
                  <a v-if="item.linkUrl" :href="item.linkUrl" target="_blank" class="link" style="padding-left: 20px;color: #409eff;">更多组件</a>
                  <a v-else class="nav-link" @click="linkEvent(item)" :title="item.disabled ? $t('app.body.other.newFunc') : item.label" :class="[item.className, {'is-new': item.isNew, disabled: item.disabled, active: pageKey === item.value}]">
                    <i class="vxe-icon-arrow-right nav-link-icon"></i>
                    <span v-html="item.label"></span>
                  </a>
                  <ul v-if="item.children" v-show="item.expand" class="nav-child-menu">
                    <li v-for="(child, cIndex) in item.children" :key="cIndex" :class="[child.className, {'is-donation': child.locat && ['Donation'].includes(child.locat.name)}]">
                      <a class="nav-link disabled" v-if="child.disabled" :title="$t('app.body.other.newFunc')" v-html="child.label"></a>
                      <a class="nav-link" v-else-if="child.url" :href="child.url" :title="$t('app.body.other.newFunc')" v-html="child.label" target="_blank"></a>
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
        <div class="content" :class="{full: ['VXEAPI', 'Donation'].includes($route.name)}">
          <div class="page-view">
            <template v-if="!/\/start|\/module|\/api/.test($route.path)">
              <a v-if="demoLink" class="link todemo" :href="demoLink" target="_blank">{{ $t('app.body.button.runDemo') }}</a>
            </template>
            <router-view/>
          </div>
          <div v-if="currentLink.preLink || currentLink.nextLink" class="footer-link">
            <router-link v-if="currentLink.preLink" class="pre-link" :to="currentLink.preLink.locat" >{{currentLink.preLink.label}}</router-link>
            <router-link v-if="currentLink.nextLink" class="next-link" :to="currentLink.nextLink.locat">{{currentLink.nextLink.label}}</router-link>
          </div>
          <footer class="page-footer">
            <div>
              <a class="link" href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022010374号-1</a>
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
      compVersion: process.env.VUE_APP_VXE_VERSION,
      docsVersion: '3',
      apiList: [],
      showSystemMenu: false,
      systemMenuList: [],
      systemVersionList: [],
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
          label: 'app.aside.nav.start',
          value: 'start',
          expand: false,
          children: [
            {
              label: '版本升级指南',
              className: 'is-upgrade',
              locat: {
                name: 'StartUpgrade'
              }
            },
            {
              label: 'app.aside.nav.install',
              locat: {
                name: 'StartInstall'
              }
            },
            {
              label: 'app.aside.nav.use',
              locat: {
                name: 'StartUse'
              }
            },
            {
              label: 'app.aside.nav.global',
              locat: {
                name: 'StartGlobal'
              },
              keywords: ['_XID', '_X_ID', '_X_CHILD']
            },
            {
              label: 'app.aside.nav.icons',
              locat: {
                name: 'StartIcons'
              }
            },
            {
              label: 'app.aside.nav.theme',
              locat: {
                name: 'StartTheme'
              }
            },
            {
              label: 'app.aside.nav.useZindex',
              locat: {
                name: 'StartUseZindex'
              }
            },
            {
              label: 'app.aside.nav.i18n',
              demoUrl: 'https://jsrun.pro/SbfKp/edit',
              locat: {
                name: 'StartI18n'
              }
            }
          ]
        },
        {
          label: 'app.aside.nav.module',
          value: 'module',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.icon',
              locat: {
                name: 'ModuleIcon'
              },
              keywords: ['icon']
            },
            {
              label: 'app.aside.nav.button',
              locat: {
                name: 'ModuleButton'
              },
              keywords: ['button']
            },
            {
              label: 'app.aside.nav.radio',
              locat: {
                name: 'ModuleRadio'
              },
              keywords: ['radio']
            },
            {
              label: 'app.aside.nav.checkbox',
              locat: {
                name: 'ModuleCheckbox'
              },
              keywords: ['checkbox']
            },
            {
              label: 'app.aside.nav.switch',
              locat: {
                name: 'ModuleSwitch'
              },
              keywords: ['switch']
            },
            {
              label: 'app.aside.nav.input',
              locat: {
                name: 'ModuleInput'
              },
              keywords: ['input']
            },
            {
              label: 'app.aside.nav.textarea',
              locat: {
                name: 'ModuleTextarea'
              },
              keywords: ['textarea']
            },
            {
              label: 'app.aside.nav.select',
              locat: {
                name: 'ModuleSelect'
              },
              keywords: ['select']
            },
            {
              label: 'app.aside.nav.pulldown',
              locat: {
                name: 'ModulePulldown'
              },
              keywords: ['pulldown']
            },
            {
              label: 'app.aside.nav.pager',
              locat: {
                name: 'ModulePager'
              },
              keywords: ['pager']
            },
            // {
            //   label: 'app.aside.nav.tooltip',
            //   locat: {
            //     name: 'ModuleTooltip'
            //   }
            // },
            {
              label: 'app.aside.nav.toolbar',
              locat: {
                name: 'ModuleToolbar'
              },
              keywords: ['toolbar']
            },
            {
              label: 'app.aside.nav.list',
              locat: {
                name: 'ModuleList'
              },
              keywords: ['list']
            },
            {
              label: 'app.aside.nav.modal',
              locat: {
                name: 'ModuleModal'
              },
              keywords: ['modal']
            },
            {
              label: 'app.aside.nav.file',
              locat: {
                name: 'ModuleFile'
              },
              keywords: ['file']
            },
            {
              label: 'app.aside.nav.print',
              locat: {
                name: 'ModulePrint'
              },
              keywords: ['print']
            }
          ]
        },
        {
          label: 'app.aside.nav.form',
          value: 'form',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.baseForm',
              locat: {
                name: 'FormBasics'
              },
              keywords: ['form', 'form-item', 'form-gather']
            },
            {
              label: 'app.aside.nav.customLayout',
              locat: {
                name: 'FormCustomLayout'
              },
              keywords: ['custom-layout']
            },
            {
              label: 'app.aside.nav.formVertical',
              locat: {
                name: 'FormVertical'
              },
              keywords: ['vertical']
            },
            {
              label: 'app.aside.nav.formValid',
              locat: {
                name: 'FormValid'
              },
              keywords: ['rulest']
            },
            {
              label: 'app.aside.nav.configForm',
              locat: {
                name: 'FormConfig'
              },
              keywords: ['form']
            }
          ]
        },
        {
          label: 'app.aside.nav.basics',
          value: 'base',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.base',
              demoUrl: 'https://jsrun.pro/VrXKp/edit',
              locat: {
                name: 'TableBasic'
              },
              keywords: ['field', 'title', 'width', 'type', 'isHover']
            },
            {
              label: 'app.aside.nav.size',
              demoUrl: 'https://jsrun.pro/PmXKp/edit',
              locat: {
                name: 'TableSize'
              },
              keywords: ['size']
            },
            {
              label: 'app.aside.nav.seq',
              demoUrl: 'https://jsrun.pro/xrXKp/edit',
              locat: {
                name: 'TableSeq'
              },
              keywords: ['seq']
            },
            {
              label: 'app.aside.nav.width',
              locat: {
                name: 'TableWidth'
              },
              keywords: ['width', 'min-width']
            },
            {
              label: 'app.aside.nav.autoBreak',
              locat: {
                name: 'TableAutoBreak'
              },
              keywords: ['scroll-x', 'scroll-y']
            },
            {
              label: 'app.aside.nav.tooltips',
              locat: {
                name: 'TableTooltip'
              },
              keywords: ['ellipsis', 'tooltip']
            },
            {
              label: 'app.aside.nav.ellipsis',
              locat: {
                name: 'TableOverflow'
              },
              keywords: ['ellipsis', 'tooltip']
            },
            {
              label: 'app.aside.nav.stripe',
              demoUrl: 'https://jsrun.pro/zrXKp/edit',
              locat: {
                name: 'TableStripe'
              },
              keywords: ['stripe']
            },
            {
              label: 'app.aside.nav.border',
              demoUrl: 'https://jsrun.pro/QrXKp/edit',
              locat: {
                name: 'TableBorder'
              },
              keywords: ['border']
            },
            {
              label: 'app.aside.nav.round',
              demoUrl: 'https://jsrun.pro/Ua2Kp/edit',
              locat: {
                name: 'TableRound'
              },
              keywords: ['round']
            },
            {
              label: 'app.aside.nav.style',
              demoUrl: 'https://jsrun.pro/EmXKp/edit',
              locat: {
                name: 'TableStyle'
              },
              keywords: ['header-cell-class-name', 'row-class-name', 'cell-class-name']
            },
            {
              label: 'app.aside.nav.dynamicStyle',
              demoUrl: 'https://jsrun.pro/mVWKp/edit',
              locat: {
                name: 'TableDynamicStyle'
              },
              keywords: ['header-cell-style', 'row-style', 'cell-style']
            },
            {
              label: 'app.aside.nav.scrollStyle',
              locat: {
                name: 'TableScrollStyle'
              },
              keywords: ['scroll']
            },
            {
              label: 'app.aside.nav.hideHead',
              demoUrl: 'https://jsrun.pro/7mXKp/edit',
              locat: {
                name: 'TableHeader'
              },
              keywords: ['show-header']
            },
            {
              label: 'app.aside.nav.resizable',
              demoUrl: 'https://jsrun.pro/5AXKp/edit',
              locat: {
                name: 'TableResizable'
              },
              keywords: ['resizable']
            },
            {
              label: 'app.aside.nav.minHeight',
              locat: {
                name: 'TableMinHeight'
              },
              keywords: ['min-height']
            },
            {
              label: 'app.aside.nav.maxHeight',
              demoUrl: 'https://jsrun.pro/smXKp/edit',
              locat: {
                name: 'TableMaxHeight'
              },
              keywords: ['max-height']
            },
            {
              label: 'app.aside.nav.rowHeight',
              locat: {
                name: 'TableRowHeight'
              },
              keywords: ['row-config', 'height']
            },
            {
              label: 'app.aside.nav.resize',
              locat: {
                name: 'TableAutoHeight'
              },
              keywords: ['auto-resize', 'sync-resize', 'height', 'max-height']
            },
            {
              label: 'app.aside.nav.height',
              demoUrl: 'https://jsrun.pro/JrXKp/edit',
              locat: {
                name: 'TableHeight'
              },
              keywords: ['auto-resize', 'sync-resize', 'height']
            },
            {
              label: 'app.aside.nav.fixed',
              demoUrl: 'https://jsrun.pro/TrXKp/edit',
              locat: {
                name: 'TableFixed'
              },
              keywords: ['fixed']
            },
            {
              label: 'app.aside.nav.fullFixed',
              demoUrl: 'https://jsrun.pro/8rXKp/edit',
              locat: {
                name: 'TableFixedFull'
              },
              keywords: ['fixed']
            },
            {
              label: 'app.aside.nav.footer',
              locat: {
                name: 'TableFooter'
              },
              keywords: ['footer-data', 'summation']
            },
            {
              label: 'app.aside.nav.group',
              demoUrl: 'https://jsrun.pro/7rXKp/edit',
              locat: {
                name: 'TableGroup'
              },
              keywords: ['colgroup']
            },
            {
              label: 'app.aside.nav.headerHighlight',
              locat: {
                name: 'TableHeaderHighlight'
              },
              keywords: ['isHover']
            },
            {
              label: 'app.aside.nav.current',
              locat: {
                name: 'TableCurrent'
              },
              keywords: ['isHover']
            },
            {
              label: 'app.aside.nav.radio',
              demoUrl: 'https://jsrun.pro/9rXKp/edit',
              locat: {
                name: 'TableRadio'
              },
              keywords: ['radio', 'radio-config']
            },
            {
              label: 'app.aside.nav.checkbox',
              demoUrl: 'https://jsrun.pro/erXKp/edit',
              locat: {
                name: 'TableSelection'
              },
              keywords: ['checkbox', 'checkbox-config']
            },
            {
              label: 'app.aside.nav.sort',
              demoUrl: 'https://jsrun.pro/crXKp/edit',
              locat: {
                name: 'TableSort'
              },
              keywords: ['sortable']
            },
            {
              label: 'app.aside.nav.filter',
              demoUrl: 'https://jsrun.pro/drXKp/edit',
              locat: {
                name: 'TableFilter'
              },
              keywords: ['filters']
            },
            {
              label: 'app.aside.nav.empty',
              locat: {
                name: 'TableEmpty'
              },
              keywords: ['empty-text']
            },
            {
              label: 'app.aside.nav.loading',
              demoUrl: 'https://jsrun.pro/GjXKp/edit',
              locat: {
                name: 'TableLoading'
              },
              keywords: ['loading']
            },
            {
              label: 'app.aside.nav.format',
              demoUrl: 'https://jsrun.pro/FrXKp/edit',
              locat: {
                name: 'TableFormat'
              },
              keywords: ['formatter']
            },
            {
              label: 'app.aside.nav.html',
              demoUrl: 'https://jsrun.pro/ItWKp/edit',
              locat: {
                name: 'TableHTML'
              },
              keywords: ['html']
            },
            {
              label: 'app.aside.nav.data',
              demoUrl: 'https://jsrun.pro/FjWKp/edit',
              locat: {
                name: 'TableData'
              },
              keywords: ['data']
            },
            {
              label: 'app.aside.nav.full',
              locat: {
                name: 'TableFull'
              },
              keywords: ['highlight', 'range']
            }
          ]
        },
        {
          label: 'app.aside.nav.more',
          value: 'advanced',
          expand: false,
          children: [
            {

              label: 'app.aside.nav.events',
              locat: {
                name: 'TableEvent'
              }
            },
            {
              label: 'app.aside.nav.template',
              demoUrl: 'https://jsrun.pro/DjXKp/edit',
              locat: {
                name: 'TableTemplate'
              },
              keywords: ['自定义插槽']
            },
            {
              label: 'app.aside.nav.dynamic',
              // demoUrl: 'https://jsrun.pro/SIWKp/edit',
              locat: {
                name: 'TableDynamic'
              }
            },
            {
              label: 'app.aside.nav.customCheckbox',
              locat: {
                name: 'TableCustomCheckbox'
              }
            },
            {
              label: 'app.aside.nav.customRadio',
              locat: {
                name: 'TableCustomRadio'
              }
            },
            {
              label: 'app.aside.nav.sortIcon',
              locat: {
                name: 'TableSortIcon'
              }
            },
            {
              label: 'app.aside.nav.customSort',
              locat: {
                name: 'TableCustomSort'
              }
            },
            {
              label: 'app.aside.nav.multiSort',
              locat: {
                name: 'TableMultiSort'
              }
            },
            {
              label: 'app.aside.nav.manualFilter',
              locat: {
                name: 'TableManualFilter'
              }
            },
            {
              label: 'app.aside.nav.filterIcon',
              locat: {
                name: 'TableFilterIcon'
              }
            },
            {
              label: 'app.aside.nav.customFilter',
              locat: {
                name: 'TableCustomFilter'
              }
            },
            {
              label: 'app.aside.nav.span',
              demoUrl: 'https://jsrun.pro/5jXKp/edit',
              locat: {
                name: 'TableSpan'
              }
            },
            {
              label: 'app.aside.nav.spanRow',
              locat: {
                name: 'TableSpanRow'
              }
            },
            {
              label: 'app.aside.nav.mergeCell',
              locat: {
                name: 'TableMergeCell'
              }
            },
            {
              label: 'app.aside.nav.footer',
              locat: {
                name: 'TableCustomFooter'
              }
            },
            {
              label: 'app.aside.nav.footerSpan',
              locat: {
                name: 'TableFooterSpan'
              }
            },
            {
              label: 'app.aside.nav.fluidHeight',
              locat: {
                name: 'TableFooterMaxHeight'
              }
            },
            {
              label: 'app.aside.nav.import',
              demoUrl: 'https://jsrun.pro/UaWKp/edit',
              locat: {
                name: 'TableImport'
              }
            },
            {
              label: 'app.aside.nav.export',
              demoUrl: 'https://jsrun.pro/cmXKp/edit',
              locat: {
                name: 'TableExport'
              },
              keywords: ['html', 'csv', 'txt', 'xml']
            },
            {
              label: 'app.aside.nav.print',
              locat: {
                name: 'TablePrint'
              }
            },
            {
              label: 'app.aside.nav.fixedType',
              locat: {
                name: 'TableFixedType'
              }
            },
            {
              label: 'app.aside.nav.contextMenu',
              // demoUrl: 'https://jsrun.pro/VjXKp/edit',
              locat: {
                name: 'TableMenu'
              }
            },
            {
              label: 'app.aside.nav.menuPrivilege',
              locat: {
                name: 'TableMenuPrivilege'
              }
            },
            {
              label: 'app.aside.nav.expandRow',
              // demoUrl: 'https://jsrun.pro/eRXKp/edit',
              locat: {
                name: 'TableExpand'
              }
            },
            {
              label: 'app.aside.nav.expandRowIcon',
              locat: {
                name: 'TableExpandIcon'
              }
            },
            {
              label: 'app.aside.nav.expandRowLazy',
              locat: {
                name: 'TableExpandLazy'
              }
            },
            {
              label: 'app.aside.nav.accordion',
              locat: {
                name: 'TableExpandAccordion'
              }
            },
            {
              label: 'app.aside.nav.toolbar',
              locat: {
                name: 'TableToolbar'
              }
            },
            {
              label: 'app.aside.nav.customs',
              // demoUrl: 'https://jsrun.pro/PrXKp/edit',
              locat: {
                name: 'TableCustom'
              }
            },
            {
              label: 'app.aside.nav.customStorage',
              locat: {
                name: 'TableCustomStorage'
              }
            },
            {
              label: 'app.aside.nav.customlWidthStorage',
              locat: {
                name: 'TableCustomlWidthStorage'
              }
            },
            {
              label: 'app.aside.nav.search',
              locat: {
                name: 'TableSearch'
              }
            },
            {
              label: 'app.aside.nav.groupBy',
              locat: {
                name: 'TableGroupBy'
              }
            },
            {
              label: 'app.aside.nav.details',
              locat: {
                name: 'TableDetails'
              }
            },
            {
              label: 'app.aside.nav.popupEdit',
              locat: {
                name: 'TablePopupEdit'
              }
            },
            {
              label: 'app.aside.nav.form',
              locat: {
                name: 'TableForm'
              }
            },
            {
              label: 'app.aside.nav.pager',
              locat: {
                name: 'TablePage'
              }
            },
            {
              label: 'app.aside.nav.pageIcon',
              locat: {
                name: 'TablePageIcon'
              }
            },
            {
              label: 'app.aside.nav.moveHighlight',
              locat: {
                name: 'TableHighlight'
              }
            },
            {
              label: 'app.aside.nav.rangeSelect',
              locat: {
                name: 'TableRangeSelect'
              }
            },
            {
              label: 'app.aside.nav.tabs',
              locat: {
                name: 'TableTabs'
              }
            // },
            // {
            //   label: 'app.aside.nav.keepAlives',
            //   locat: {
            //     name: 'TableKeepAliveTable1'
            //   }
            }
          ]
        },
        {
          label: 'app.aside.nav.tree',
          value: 'tree',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.base',
              demoUrl: 'https://jsrun.pro/YfWKp/edit',
              locat: {
                name: 'TableTreeBasic'
              }
            },
            // {
            //   label: 'app.aside.nav.stripe',
            //   locat: {
            //     name: 'TableTreeStripe'
            //   }
            // },
            {
              label: 'app.aside.nav.treeNormal',
              locat: {
                name: 'TableTreeNormal'
              }
            },
            {
              label: 'app.aside.nav.customIcon',
              locat: {
                name: 'TableTreeIcon'
              }
            },
            {
              label: 'app.aside.nav.radio',
              // demoUrl: 'https://jsrun.pro/kfWKp/edit',
              locat: {
                name: 'TableTreeRadio'
              }
            },
            {
              label: 'app.aside.nav.accordion',
              locat: {
                name: 'TableTreeAccordion'
              }
            },
            {
              label: 'app.aside.nav.checkbox',
              // demoUrl: 'https://jsrun.pro/B6bKp/edit',
              locat: {
                name: 'TableTreeSelection'
              }
            },
            {
              label: 'app.aside.nav.fixed',
              // demoUrl: 'https://jsrun.pro/ifWKp/edit',
              locat: {
                name: 'TableTreeFixed'
              }
            },
            {
              label: 'app.aside.nav.fluidHeight',
              locat: {
                name: 'TableTreeMaxHeight'
              }
            },
            {
              label: 'app.aside.nav.filter',
              // demoUrl: 'https://jsrun.pro/CDWKp/edit',
              locat: {
                name: 'TableTreeFilter'
              }
            },
            // {
            //   label: 'app.aside.nav.treeSort',
            //   locat: {
            //     name: 'TableTreeSort'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.groupSummary',
            //   // demoUrl: 'https://jsrun.pro/KVWKp/edit',
            //   locat: {
            //     name: 'TableTreeGroupSummary'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.groupSummaryCount',
            //   // demoUrl: 'https://jsrun.pro/GTWKp/edit',
            //   locat: {
            //     name: 'TableTreeGroupSummaryCount'
            //   }
            // },
            {
              label: 'app.aside.nav.expandRow',
              locat: {
                name: 'TableTreeExpand'
              }
            },
            {
              label: 'app.aside.nav.expandTreeLazy',
              locat: {
                name: 'TableTreeExpandLazy'
              }
            },
            {
              label: 'app.aside.nav.crud',
              locat: {
                name: 'TableTreeCRUD'
              }
            },
            {
              label: 'app.aside.nav.insert',
              locat: {
                name: 'TableTreeInsert'
              }
            },
            {
              label: 'app.aside.nav.contextMenu',
              locat: {
                name: 'TableTreeMenu'
              }
            },
            // {
            //   label: 'app.aside.nav.span',
            //   disabled: true,
            //   locat: {
            //     name: 'TableTreeSpan'
            //   }
            // },
            {
              label: 'app.aside.nav.moveHighlight',
              locat: {
                name: 'TableTreeHighlight'
              }
            },
            // {
            //   label: 'app.aside.nav.keyboard',
            //   disabled: true,
            //   locat: {
            //     name: 'TableTreeKeyboard'
            //   }
            // },
            {
              label: 'app.aside.nav.lazy',
              locat: {
                name: 'TableTreeLazy'
              }
            },
            {
              label: 'app.aside.nav.lazyMenu',
              locat: {
                name: 'TableTreeLazyMenu'
              }
            },
            {
              label: 'app.aside.nav.lazyEdit',
              locat: {
                name: 'TableTreeLazyEdit'
              }
            },
            {
              label: 'app.aside.nav.treeLine',
              locat: {
                name: 'TableTreeLine'
              }
            },
            {
              label: 'app.aside.nav.edit',
              locat: {
                name: 'TableTreeEdit'
              }
            },
            {
              label: 'app.aside.nav.cellValid',
              locat: {
                name: 'TableTreeEditCellValid'
              }
            },
            {
              label: 'app.aside.nav.rowValid',
              locat: {
                name: 'TableTreeEditRowValid'
              }
            },
            // {
            //   label: 'app.aside.nav.forceCellValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableTreeEditForceCellValid'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.forceRowValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableTreeEditForceRowValid'
            //   }
            // },
            {
              label: 'app.aside.nav.template',
              locat: {
                name: 'TableTreeTemplate'
              }
            }
          ]
        },
        {
          label: 'app.aside.nav.editable',
          value: 'edit',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.popupForm',
              locat: {
                name: 'TableEditPopupForm'
              }
            },
            {
              label: 'app.aside.nav.manual',
              demoUrl: 'https://jsrun.pro/SWWKp/edit',
              locat: {
                name: 'TableEditManual'
              },
              keywords: ['edit-config']
            },
            {
              label: 'app.aside.nav.click',
              demoUrl: 'https://jsrun.pro/4WWKp/edit',
              locat: {
                name: 'TableEditClick'
              },
              keywords: ['edit-config']
            },
            {
              label: 'app.aside.nav.dblclick',
              demoUrl: 'https://jsrun.pro/KfWKp/edit',
              locat: {
                name: 'TableEditDBLClick'
              },
              keywords: ['edit-config']
            },
            {
              label: 'app.aside.nav.selectContent',
              demoUrl: 'https://jsrun.pro/pfWKp/edit',
              locat: {
                name: 'TableEditSelect'
              }
            },
            {
              label: 'app.aside.nav.autoClear',
              demoUrl: 'https://jsrun.pro/LcWKp/edit',
              locat: {
                name: 'TableAutoClearManual'
              }
            },
            {
              label: 'app.aside.nav.cellPlaceholder',
              locat: {
                name: 'TableEditCellPlaceholder'
              }
            },
            {
              label: 'app.aside.nav.insert',
              // demoUrl: 'https://jsrun.pro/vcWKp/edit',
              locat: {
                name: 'TableEditInsert'
              },
              keywords: ['insertAt']
            },
            {
              label: 'app.aside.nav.delete',
              // demoUrl: 'https://jsrun.pro/6cWKp/edit',
              locat: {
                name: 'TableEditRemove'
              },
              keywords: ['remove']
            },
            {
              label: 'app.aside.nav.pending',
              locat: {
                name: 'TableEditPending'
              },
              keywords: ['pending']
            },
            {
              label: 'app.aside.nav.revert',
              locat: {
                name: 'TableEditRevert'
              },
              keywords: ['revertData']
            },
            {
              label: 'app.aside.nav.partialUpdate',
              locat: {
                name: 'TableEditStatus'
              },
              keywords: ['updateStatus', 'showStatus', 'showUpdateStatus', 'showInsertStatus']
            },
            {
              label: 'app.aside.nav.cellDisable',
              locat: {
                name: 'TableEditCellDisable'
              }
            },
            {
              label: 'app.aside.nav.rowDisable',
              locat: {
                name: 'TableEditRowDisable'
              }
            },
            {
              label: 'app.aside.nav.cellValid',
              demoUrl: 'https://jsrun.pro/IcWKp/edit',
              locat: {
                name: 'TableEditCellValid'
              },
              keywords: ['valid-config', 'validate', 'fullValidate']
            },
            {
              label: 'app.aside.nav.rowValid',
              demoUrl: 'https://jsrun.pro/wcWKp/edit',
              locat: {
                name: 'TableEditRowValid'
              },
              keywords: ['valid-config', 'validate', 'fullValidate']
            },
            // {
            //   label: 'app.aside.nav.forceCellValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableEditForceCellValid'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.forceRowValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableEditForceRowValid'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.highlightCell',
            //   locat: {
            //     name: 'TableEditHighlightCell'
            //   }
            // },
            {
              label: 'app.aside.nav.keyboard',
              locat: {
                name: 'TableEditKeyboard'
              }
            },
            {
              label: 'app.aside.nav.keyboardEdit',
              locat: {
                name: 'TableEditKeyboardEdit'
              }
            },
            {
              label: 'app.aside.nav.footer',
              locat: {
                name: 'TableEditFooter'
              }
            },
            {
              label: 'app.aside.nav.footerImmediately',
              locat: {
                name: 'TableEditFooterImmediately'
              }
            },
            {
              label: 'app.aside.nav.expandRow',
              locat: {
                name: 'TableEditExpand'
              }
            },
            {
              label: 'app.aside.nav.contextMenu',
              locat: {
                name: 'TableEditMenu'
              }
            },
            {
              label: 'app.aside.nav.span',
              locat: {
                name: 'TableEditSpan'
              }
            },
            {
              label: 'app.aside.nav.form',
              locat: {
                name: 'TableEditForm'
              }
            },
            {
              label: 'app.aside.nav.upload',
              locat: {
                name: 'TableEditUpload'
              }
            },
            {
              label: 'app.aside.nav.realtimeSave',
              locat: {
                name: 'TableEditRealtimeSave'
              }
            },
            {
              label: 'app.aside.nav.dataCount',
              demoUrl: 'https://jsrun.pro/JQWKp/edit',
              locat: {
                name: 'TableEditDataCount'
              }
            },
            {
              label: 'app.aside.nav.uniqueSelect',
              locat: {
                name: 'TableEditUniqueSelect'
              }
            },
            {
              label: 'app.aside.nav.cascadingSelect',
              locat: {
                name: 'TableEditCascadingSelect'
              }
            },
            {
              label: 'app.aside.nav.events',
              // demoUrl: 'https://jsrun.pro/QIWKp/edit',
              locat: {
                name: 'TableEditEvents'
              }
            },
            {
              label: 'app.aside.nav.template',
              locat: {
                name: 'TableEditTemplate'
              },
              keywords: ['slots', 'updateStatus', 'template', '插槽']
            },
            {
              label: 'app.aside.nav.full',
              locat: {
                name: 'TableEditFull'
              }
            }
          ]
        },
        {
          label: 'app.aside.nav.grid',
          value: 'grid',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.base',
              demoUrl: 'https://jsrun.pro/5RXKp/edit',
              locat: {
                name: 'GridBasic'
              }
            },
            {
              label: 'app.aside.nav.events',
              locat: {
                name: 'GridEvents'
              }
            },
            {
              label: 'app.aside.nav.group',
              demoUrl: 'https://jsrun.pro/M8WKp/edit',
              locat: {
                name: 'GridGroup'
              }
            },
            {
              label: 'app.aside.nav.reverse',
              demoUrl: 'https://jsrun.pro/zIWKp/edit',
              locat: {
                name: 'GridReverse'
              }
            },
            {
              label: 'app.aside.nav.template',
              locat: {
                name: 'GridTemplate'
              }
            },
            {
              label: 'app.aside.nav.footer',
              locat: {
                name: 'GridFooter'
              }
            },
            {
              label: 'app.aside.nav.pager',
              locat: {
                name: 'GridPage'
              }
            },
            {
              label: 'app.aside.nav.form',
              locat: {
                name: 'GridForm'
              }
            },
            {
              label: 'app.aside.nav.proxy',
              // demoUrl: 'https://jsrun.pro/XwWKp/edit',
              locat: {
                name: 'GridProxy'
              }
            },
            {
              label: 'app.aside.nav.proxyPage',
              // demoUrl: 'https://jsrun.pro/ywWKp/edit',
              locat: {
                name: 'GridPageProxy'
              }
            },
            {
              label: 'app.aside.nav.formProxy',
              locat: {
                name: 'GridFormProxy'
              }
            },
            {
              label: 'app.aside.nav.edit',
              locat: {
                name: 'GridEdit'
              }
            },
            {
              label: 'app.aside.nav.cellDisable',
              locat: {
                name: 'GridCellDisable'
              }
            },
            {
              label: 'app.aside.nav.rowDisable',
              locat: {
                name: 'GridRowDisable'
              }
            },
            {
              label: 'app.aside.nav.crudToolbar',
              locat: {
                name: 'GridToolbar'
              }
            },
            {
              label: 'app.aside.nav.customToolbar',
              locat: {
                name: 'GridCustomToolbar'
              }
            },
            {
              label: 'app.aside.nav.toolbarIcon',
              locat: {
                name: 'GridToolbarIcon'
              }
            },
            {
              label: 'app.aside.nav.fullscreen',
              locat: {
                name: 'GridFullscreen'
              }
            },
            // {
            //   label: 'app.aside.nav.dynamicColumn',
            //   locat: {
            //     name: 'GridDynamic'
            //   }
            // },
            {
              label: 'app.aside.nav.contextMenu',
              // demoUrl: 'https://jsrun.pro/m6WKp/edit',
              locat: {
                name: 'GridMenu'
              },
              keywords: ['menu-config', 'menu-click', 'cell-menu']
            },
            // {
            //   label: 'app.aside.nav.span',
            //   disabled: true,
            //   locat: {
            //     name: 'GridSpan'
            //   }
            // },
            {
              label: 'app.aside.nav.upload',
              locat: {
                name: 'GridUpload'
              }
            },
            {
              label: 'app.aside.nav.customLayout',
              locat: {
                name: 'GridLayout'
              },
              keywords: ['layouts', '自定义布局']
            },
            {
              label: 'app.aside.nav.baseTree',
              locat: {
                name: 'GridTree'
              }
            },
            {
              label: 'app.aside.nav.lazyTree',
              locat: {
                name: 'GridTreeLazy'
              }
            },
            {
              label: 'app.aside.nav.treeLazyEdit',
              locat: {
                name: 'GridTreeLazyEdit'
              }
            },
            {
              label: 'app.aside.nav.crudTreeToolbar',
              locat: {
                name: 'GridTreeEdit'
              }
            },
            // {
            //   label: 'app.aside.nav.keepAlives',
            //   locat: {
            //     name: 'GridKeepAliveGrid1'
            //   }
            // },
            {
              label: 'app.aside.nav.fullQuery',
              locat: {
                name: 'GridFullQuery'
              },
              keywords: ['queryAll', 'modes']
            },
            {
              label: 'app.aside.nav.full',
              // demoUrl: 'https://jsrun.pro/r6WKp/edit',
              locat: {
                name: 'GridFullEdit'
              },
              keywords: ['importMethod', 'exportMethod', 'modes']
            // },
            // {
            //   label: 'app.aside.nav.configProxy',
            //   locat: {
            //     name: 'GridConfigProxy'
            //   }
            }
          ]
        },
        {
          label: 'app.aside.nav.scroll',
          value: 'scroll',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.bigData',
              demoUrl: 'https://jsrun.pro/XRXKp/edit',
              locat: {
                name: 'TableScroll'
              }
            },
            {
              label: 'app.aside.nav.tree',
              locat: {
                name: 'TableScrollTree'
              }
            },
            {
              label: 'app.aside.nav.lazyTree',
              locat: {
                name: 'TableScrollLazyTree'
              }
            },
            {
              label: 'app.aside.nav.moveHighlight',
              locat: {
                name: 'TableScrollHighlight'
              }
            },
            {
              label: 'app.aside.nav.fluidHeight',
              locat: {
                name: 'TableScrollMaxHeight'
              }
            },
            {
              label: 'app.aside.nav.rowHeight',
              locat: {
                name: 'TableScrollRowHeight'
              }
            },
            {
              label: 'app.aside.nav.group',
              locat: {
                name: 'TableScrollGroup'
              }
            },
            {
              label: 'app.aside.nav.merge',
              locat: {
                name: 'TableScrollMerge'
              }
            },
            {
              label: 'app.aside.nav.keyboard',
              locat: {
                name: 'TableScrollKeyboard'
              }
            },
            {
              label: 'app.aside.nav.edit',
              // demoUrl: 'https://jsrun.pro/MIWKp/edit',
              locat: {
                name: 'TableScrollEdit'
              }
            },
            {
              label: 'app.aside.nav.cellValid',
              locat: {
                name: 'TableScrollCellValid'
              }
            },
            {
              label: 'app.aside.nav.rowValid',
              locat: {
                name: 'TableScrollRowValid'
              }
            },
            // {
            //   label: 'app.aside.nav.forceCellValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableScrollForceCellValid'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.forceRowValid',
            //   disabled: true,
            //   locat: {
            //     name: 'TableScrollForceRowValid'
            //   }
            // },
            {
              label: 'app.aside.nav.partialLoad',
              // demoUrl: 'https://jsrun.pro/EVWKp/edit',
              locat: {
                name: 'TableScrollPartialLoad'
              }
            },
            {
              label: 'app.aside.nav.fullPartialLoad',
              // demoUrl: 'https://jsrun.pro/sVWKp/edit',
              locat: {
                name: 'TableScrollFullPartialLoad'
              }
            },
            {
              label: 'app.aside.nav.footer',
              locat: {
                name: 'TableScrollFooter'
              }
            },
            {
              label: 'app.aside.nav.template',
              locat: {
                name: 'TableScrollTemplate'
              }
            },
            {
              label: 'app.aside.nav.tabs',
              locat: {
                name: 'TableScrollTabs'
              }
            },
            // {
            //   label: 'app.aside.nav.keepAlives',
            //   locat: {
            //     name: 'TableScrollKeepAliveTable1'
            //   }
            // },
            // {
            //   label: 'app.aside.nav.scrollMode',
            //   locat: {
            //     name: 'TableScrollMode'
            //   }
            // },
            {
              label: 'app.aside.nav.scrollRows',
              locat: {
                name: 'TableScrollRows'
              }
            },
            {
              label: 'app.aside.nav.scrollFullRows',
              locat: {
                name: 'TableScrollFullRows'
              }
            },
            {
              label: 'app.aside.nav.scrollCols',
              locat: {
                name: 'TableScrollCols'
              }
            },
            {
              label: 'app.aside.nav.scrollFullCols',
              locat: {
                name: 'TableScrollFullCols'
              }
            // },
            // {
            //   label: 'app.aside.nav.infiniteScroll',
            //   disabled: true,
            //   locat: {
            //     name: 'TableScroll'
            //   }
            }
          ]
        },
        {
          label: 'app.aside.nav.plugin',
          value: 'plugin',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.linkPlugin',
              url: '/other3/',
              keywords: ['plugin']
            }
          ]
        },
        {
          label: 'app.aside.nav.formats',
          value: 'formats',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'FormatsAPI'
              },
              keywords: ['formats']
            }
          ]
        },
        {
          label: 'app.aside.nav.commands',
          value: 'commands',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'CommandsAPI'
              },
              keywords: ['commands']
            }
          ]
        },
        {
          label: 'app.aside.nav.menus',
          value: 'menus',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'MenusAPI'
              },
              keywords: ['menus']
            }
          ]
        },
        {
          label: 'app.aside.nav.validators',
          value: 'validators',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'ValidatorsAPI'
              },
              keywords: ['validators']
            }
          ]
        },
        {
          label: 'app.aside.nav.renderer',
          value: 'renderer',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'RendererAPI'
              }
            },
            {
              label: 'app.aside.nav.rendererFilter',
              locat: {
                name: 'RendererFilter'
              }
            },
            {
              label: 'app.aside.nav.rendererDefault',
              locat: {
                name: 'RendererDefault'
              }
            },
            {
              label: 'app.aside.nav.rendererEdit',
              locat: {
                name: 'RendererEdit'
              }
            },
            {
              label: 'app.aside.nav.rendererExpand',
              locat: {
                name: 'RendererExpand'
              }
            },
            {
              label: 'app.aside.nav.rendererToolbar',
              locat: {
                name: 'RendererToolbar'
              }
            },
            {
              label: 'app.aside.nav.rendererForm',
              locat: {
                name: 'RendererForm'
              }
            },
            {
              label: 'app.aside.nav.rendererEmpty',
              locat: {
                name: 'RendererEmpty'
              }
            }
          ]
        },
        {
          label: 'app.aside.nav.interceptor',
          value: 'interceptor',
          expand: false,
          children: [
            {
              label: 'app.aside.nav.api',
              locat: {
                name: 'InterceptorAPI'
              },
              keywords: ['interceptor']
            }
          ]
        },
        {
          label: '组件库',
          value: 'lib',
          children: [
            {
              label: '点击查看',
              url: 'https://vxeui.com/v3/'
            }
          ]
        },
        {
          label: 'app.aside.nav.api',
          value: 'api',
          expand: false,
          children: [
            // {
            //   label: 'app.footer.donation',
            //   locat: {
            //     name: 'Donation'
            //   }
            // },
            {
              label: 'app.aside.nav.vxeTable',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'table'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeTableColgroup',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'colgroup'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeTableColumn',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'column'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeGrid',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'grid'
                }
              }
            },
            // {
            //   label: 'app.aside.nav.vxeVirtualTree',
            //   locat: {
            //     name: 'VXEAPI',
            //     params: {
            //       name: 'virtual-tree'
            //     }
            //   }
            // },
            {
              label: 'app.aside.nav.vxeToolbar',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'toolbar'
                }
              }
            },
            {
              label: 'app.aside.nav.vxePager',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'pager'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeRadio',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'radio'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeRadioGroup',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'radio-group'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeRadioButton',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'radio-button'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeCheckbox',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'checkbox'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeCheckboxGroup',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'checkbox-group'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeSwitch',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'switch'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeInput',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'input'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeSelect',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'select'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeOptgroup',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'optgroup'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeOption',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'option'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeTextarea',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'textarea'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeButton',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'button'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeButtonGroup',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'button-group'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeModal',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'modal'
                }
              }
            },
            // {
            //   label: 'app.aside.nav.vxeTooltip',
            //   locat: {
            //     name: 'VXEAPI',
            //     params: {
            //       name: 'tooltip'
            //     }
            //   }
            // },
            {
              label: 'app.aside.nav.vxeForm',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'form'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeFormGather',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'form-gather'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeFormItem',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'form-item'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeList',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'list'
                }
              }
            },
            {
              label: 'app.aside.nav.vxePulldown',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'pulldown'
                }
              }
            },
            {
              label: 'app.aside.nav.vxeIcon',
              locat: {
                name: 'VXEAPI',
                params: {
                  name: 'icon'
                }
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
      'baseApiUrl',
      'pluginDocsUrl',
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
      return ['StartInstall', 'StartUse', 'StartGlobal', 'StartIcons', 'StartTheme', 'StartI18n', 'VXEAPI', 'Donation'].includes(this.$route.name)
    },
    currentLink () {
      const { $route, tableData } = this
      const childArr = XEUtils.toTreeArray(tableData).filter(data => data.locat && data.locat.name !== 'VXEAPI')
      const cindex = childArr.findIndex(item => (item.locat && item.locat.name) === ($route && $route.name))
      return {
        preLink: cindex >= 0 && childArr[cindex - 1],
        nextLink: cindex >= 0 && childArr[cindex + 1]
      }
    },
    sysVersionOptions () {
      return this.systemVersionList.map(item => {
        return {
          label: this.$t(`app.body.other.v${item.version.replace('.', 'd')}`),
          value: item.version,
          disabled: !!item.isDisabled,
          className: item.isStop ? 'due-to-stop' : (item.isAbandoned ? 'about-to-stop' : '')
        }
      })
    },
    selectSysVersion () {
      return this.systemVersionList.find(item => item.version === this.compVersion)
    }
  },
  watch: {
    '$i18n.locale' (value) {
      localStorage.setItem('language', value)
      this.loadList()
      this.defaultExpand()
    },
    $route () {
      document.querySelector('.body .content').scrollTo(0, 0)
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

    fetch(`https://vxeui.com/component-api/system-list.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        this.systemMenuList = data
      })
    })

    fetch(`https://vxeui.com/component-api/vxe-table-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        this.systemVersionList = data
      })
    })
  },
  methods: {
    ...mapMutations([
      'setSupportQQ'
    ]),
    init () {
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
      fetch(`${this.serveApiUrl}/api/npm/versions/vxe-table`)
        .then(response => response.json())
        .then((data) => {
          const { sp, dp, ss, time, tags } = data
          this.apiLoading = true
          this.apiLoading = true
          this.disabledPlugin = dp
          this.showPlugin = sp
          this.setSupportQQ(ss)
          const stableVersionList = data[`v${this.docsVersion}StableList`].map(value => ({ value, label: value }))
          const betaVersionList = data[`v${this.docsVersion}BetaList`].map(value => ({ value, label: value }))
          this.stableVersionList = stableVersionList
          this.betaVersionList = betaVersionList
          if (stableVersionList.length) {
            this.selectStableVersion = tags[`v${this.docsVersion}-legacy`] || stableVersionList[0].value
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
    updatingEvent  () {
      VXETable.modal.alert('维护中...', '维护中')
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
      const selectSysItem = this.selectSysVersion
      if (selectSysItem) {
        location.href = selectSysItem.url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.system-menu-btn-text {
  display: inline-block;
  position: relative;
  padding: 4px 8px 4px 8px;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: red;
  }
}
.system-menu-btn-icon {
  font-size: 12px;
}
.system-menu-wrapper {
  padding: 8px 0;
  margin: 0;
  list-style: none;
  width: 360px;
  border: 1px solid #dcdfe6;
  & > li {
    position: relative;
    line-height: 28px;
    padding: 0 16px;
    font-size: 14px;
    .enterprise {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      background-color: #f6ca9d;
      border-radius: 10px;
      font-size: 12px;
      padding: 0 8px;
      color: #606266;
      transform: scale(0.8);
    }
    a {
      color: #606266;
      &:hover {
        color: #409eff;
        text-decoration: underline;
      }
    }
  }
}
</style>
