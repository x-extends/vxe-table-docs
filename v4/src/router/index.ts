import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUseGlobal from '@/views/start/useGlobal/CodeExample.vue'
import StartUseImport from '@/views/start/useImport/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/*',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/start',
    children: [
      {
        path: 'install',
        name: 'StartInstall',
        component: StartInstall
      },
      {
        path: 'useGlobal',
        name: 'StartUseGlobal',
        component: StartUseGlobal
      },
      {
        path: 'useImport',
        name: 'StartUseImport',
        component: StartUseImport
      },
      {
        path: 'global',
        name: 'StartConfig',
        component: StartConfig
      },
      {
        path: 'icons',
        name: 'StartIcons',
        component: StartIcons
      },
      {
        path: 'theme',
        name: 'StartTheme',
        component: StartTheme
      },
      {
        path: 'i18n',
        name: 'StartI18n',
        component: StartI18n
      },
      {
        path: 'z-index',
        name: 'StartUseZIndex',
        component: StartUseZIndex
      },
      {
        path: 'freeDonation',
        name: 'FreeDonation',
        component: FreeDonation
      },
      {
        path: 'joinSponsor',
        name: 'JoinSponsor',
        component: JoinSponsor
      }
    ]
  },
  {
    path: '/tool',
    children: [
      {
        path: 'clipboard',
        name: 'ToolClipboard',
        component: () => import('@/views/tool/clipboard/CodeExample.vue')
      }
    ]
  },
  {
    path: '/global',
    children: [
      {
        path: 'formats',
        children: [
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalFormatsTableAPI',
                component: () => import('@/views/global/formats/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalFormatsTableBase',
                component: () => import('@/views/global/formats/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'menus',
        children: [
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalMenusTableAPI',
                component: () => import('@/views/global/menus/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalMenusTableBase',
                component: () => import('@/views/global/menus/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'commands',
        children: [
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsTableAPI',
                component: () => import('@/views/global/commands/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsTableBase',
                component: () => import('@/views/global/commands/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'validators',
        children: [
          {
            path: 'form',
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsFormAPI',
                component: () => import('@/views/global/validators/form/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsFormBase',
                component: () => import('@/views/global/validators/form/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsTableAPI',
                component: () => import('@/views/global/validators/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsTableBase',
                component: () => import('@/views/global/validators/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'interceptor',
        children: [
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalInterceptorTableAPI',
                component: () => import('@/views/global/interceptor/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalInterceptorTableBase',
                component: () => import('@/views/global/interceptor/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'renderer',
        children: [
          {
            path: 'form',
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
                children: [
                  {
                    path: 'editInput',
                    name: 'GlobalRendererFormItemEditInput',
                    component: () => import('@/views/global/renderer/form/item/editInput/CodeExample.vue')
                  },
                  {
                    path: 'editUpload',
                    name: 'GlobalRendererFormItemEditUpload',
                    component: () => import('@/views/global/renderer/form/item/editUpload/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'table',
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
                children: [
                  {
                    path: 'myLink',
                    name: 'GlobalRendererTableDefaultMyLink',
                    component: () => import('@/views/global/renderer/table/default/myLink/CodeExample.vue')
                  },
                  {
                    path: 'myImg',
                    name: 'GlobalRendererTableDefaultMyImg',
                    component: () => import('@/views/global/renderer/table/default/myImg/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'edit',
                children: [
                  {
                    path: 'editInput',
                    name: 'GlobalRendererTableEditEditInput',
                    component: () => import('@/views/global/renderer/table/edit/editInput/CodeExample.vue')
                  },
                  {
                    path: 'editDownTable',
                    name: 'GlobalRendererTableEditEditDownTable',
                    component: () => import('@/views/global/renderer/table/edit/editDownTable/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'expand',
                children: [
                  {
                    path: 'myExpandList',
                    name: 'GlobalRendererTableExpandMyExpandList',
                    component: () => import('@/views/global/renderer/table/expand/myExpandList/CodeExample.vue')
                  },
                  {
                    path: 'myExpandTable',
                    name: 'GlobalRendererTableExpandMyExpandTable',
                    component: () => import('@/views/global/renderer/table/expand/myExpandTable/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'toolbar',
                children: [
                  {
                    path: 'btn',
                    name: 'GlobalRendererTableToolbarBtn',
                    component: () => import('@/views/global/renderer/table/toolbar/button/CodeExample.vue')
                  },
                  {
                    path: 'tool',
                    name: 'GlobalRendererTableToolbarTool',
                    component: () => import('@/views/global/renderer/table/toolbar/tool/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'filter',
                children: [
                  {
                    path: 'filterInput',
                    name: 'GlobalRendererTableFilterFilterInput',
                    component: () => import('@/views/global/renderer/table/filter/filterInput/CodeExample.vue')
                  },
                  {
                    path: 'filterComplex',
                    name: 'GlobalRendererTableFilterFilterComplex',
                    component: () => import('@/views/global/renderer/table/filter/filterComplex/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'empty',
                children: [
                  {
                    path: 'myEmpty',
                    name: 'GlobalRendererTableMyEmpty',
                    component: () => import('@/views/global/renderer/table/empty/myEmpty/CodeExample.vue')
                  },
                  {
                    path: 'myNotData',
                    name: 'GlobalRendererTableMyNotData',
                    component: () => import('@/views/global/renderer/table/empty/myNotData/CodeExample.vue')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/component',
    children: [
      {
        path: 'table',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableBaseBasic',
                component: () => import('@/views/table/base/basic/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentTableBaseSize',
                component: () => import('@/views/table/base/size/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentTableBaseAlign',
                component: () => import('@/views/table/base/align/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentTableBaseWidth',
                component: () => import('@/views/table/base/width/CodeExample.vue')
              },
              {
                path: 'autoBreak',
                name: 'ComponentTableBaseAutoBreak',
                component: () => import('@/views/table/base/autoBreak/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentTableBaseOverflow',
                component: () => import('@/views/table/base/overflow/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentTableBaseTooltip',
                component: () => import('@/views/table/base/tooltip/CodeExample.vue')
              },
              {
                path: 'stripe',
                name: 'ComponentTableBaseStripe',
                component: () => import('@/views/table/base/stripe/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentTableBaseBorder',
                component: () => import('@/views/table/base/border/CodeExample.vue')
              },
              {
                path: 'round',
                name: 'ComponentTableBaseRound',
                component: () => import('@/views/table/base/round/CodeExample.vue')
              },
              {
                path: 'style',
                name: 'ComponentTableBaseStyle',
                component: () => import('@/views/table/base/style/CodeExample.vue')
              },
              {
                path: 'dynamicStyle',
                name: 'ComponentTableBaseDynamicStyle',
                component: () => import('@/views/table/base/dynamicStyle/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTableBaseHeader',
                component: () => import('@/views/table/base/header/CodeExample.vue')
              },
              {
                path: 'headerHighlight',
                name: 'ComponentTableBaseHeaderHighlight',
                component: () => import('@/views/table/base/headerHighlight/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentTableBaseHeaderResizable',
                component: () => import('@/views/table/base/resizable/CodeExample.vue')
              },
              {
                path: 'minHeight',
                name: 'ComponentTableBaseHeaderMinHeight',
                component: () => import('@/views/table/base/minHeight/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentTableBaseHeight',
                component: () => import('@/views/table/base/height/CodeExample.vue')
              },
              {
                path: 'maxHeight',
                name: 'ComponentTableBaseMaxHeight',
                component: () => import('@/views/table/base/maxHeight/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentTableBaseRowHeight',
                component: () => import('@/views/table/base/rowHeight/CodeExample.vue')
              },
              {
                path: 'autoHeight',
                name: 'ComponentTableBaseAutoHeight',
                component: () => import('@/views/table/base/autoHeight/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableBaseFixed',
                component: () => import('@/views/table/base/fixed/CodeExample.vue')
              },
              {
                path: 'fixedFull',
                name: 'ComponentTableBaseFixedFull',
                component: () => import('@/views/table/base/fixedFull/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableBaseGroup',
                component: () => import('@/views/table/base/group/CodeExample.vue')
              },
              {
                path: 'seq',
                name: 'ComponentTableBaseSeq',
                component: () => import('@/views/table/base/seq/CodeExample.vue')
              },
              {
                path: 'current',
                name: 'ComponentTableBaseCurrent',
                component: () => import('@/views/table/base/current/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableBaseRadio',
                component: () => import('@/views/table/base/radio/CodeExample.vue')
              },
              {
                path: 'selection',
                name: 'ComponentTableBaseSelection',
                component: () => import('@/views/table/base/selection/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableBaseSort',
                component: () => import('@/views/table/base/sort/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTableBaseFilter',
                component: () => import('@/views/table/base/filter/CodeExample.vue')
              },
              {
                path: 'empty',
                name: 'ComponentTableBaseEmpty',
                component: () => import('@/views/table/base/empty/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentTableBaseLoading',
                component: () => import('@/views/table/base/loading/CodeExample.vue')
              },
              {
                path: 'format',
                name: 'ComponentTableBaseFormat',
                component: () => import('@/views/table/base/format/CodeExample.vue')
              },
              {
                path: 'data',
                name: 'ComponentTableBaseData',
                component: () => import('@/views/table/base/data/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentTableBaseHtml',
                component: () => import('@/views/table/base/html/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentTableBaseFull',
                component: () => import('@/views/table/base/full/CodeExample.vue')
              }
            ]
          },
          {
            path: 'footer',
            children: [
              {
                path: 'footerData',
                name: 'ComponentTableFooterFooterData',
                component: () => import('@/views/table/footer/footerData/CodeExample.vue')
              },
              {
                path: 'footerMethod',
                name: 'ComponentTableFooterFooterMethod',
                component: () => import('@/views/table/footer/footerMethod/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentTableFooterTemplate',
                component: () => import('@/views/table/footer/template/CodeExample.vue')
              }
            ]
          },
          {
            path: 'sort',
            children: [
              {
                path: 'multiple',
                name: 'ComponentTableSortMultiple',
                component: () => import('@/views/table/sort/multiple/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentTableSortRemote',
                component: () => import('@/views/table/sort/remote/CodeExample.vue')
              }
            ]
          },
          {
            path: 'filter',
            children: [
              {
                path: 'options',
                name: 'ComponentTableFilterOptions',
                component: () => import('@/views/table/filter/options/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentTableFilterRemote',
                component: () => import('@/views/table/filter/remote/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTableFilterHeader',
                component: () => import('@/views/table/filter/header/CodeExample.vue')
              },
              {
                path: 'manual',
                name: 'ComponentTableFilterManual',
                component: () => import('@/views/table/filter/manual/CodeExample.vue')
              }
            ]
          },
          {
            path: 'merge',
            children: [
              {
                path: 'row',
                name: 'ComponentTableMergeRow',
                component: () => import('@/views/table/merge/row/CodeExample.vue')
              },
              {
                path: 'column',
                name: 'ComponentTableMergeColumn',
                component: () => import('@/views/table/merge/column/CodeExample.vue')
              },
              {
                path: 'all',
                name: 'ComponentTableMergeAll',
                component: () => import('@/views/table/merge/all/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableMergeFooter',
                component: () => import('@/views/table/merge/footer/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentTableMergeHorizontal',
                component: () => import('@/views/table/merge/horizontal/CodeExample.vue')
              }
            ]
          },
          {
            path: 'expand',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableExpandBasic',
                component: () => import('@/views/table/expand/basic/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentTableExpandPadding',
                component: () => import('@/views/table/expand/padding/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentTableExpandIcon',
                component: () => import('@/views/table/expand/icon/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentTableExpandHeight',
                component: () => import('@/views/table/expand/height/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableExpandFixed',
                component: () => import('@/views/table/expand/fixed/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTableExpandTrigger',
                component: () => import('@/views/table/expand/trigger/CodeExample.vue')
              },
              {
                path: 'lazy',
                name: 'ComponentTableExpandLazy',
                component: () => import('@/views/table/expand/lazy/CodeExample.vue')
              },
              {
                path: 'visibleMethod',
                name: 'ComponentTableExpandVisibleMethod',
                component: () => import('@/views/table/expand/visibleMethod/CodeExample.vue')
              },
              {
                path: 'toggleMethod',
                name: 'ComponentTableExpandToggleMethod',
                component: () => import('@/views/table/expand/toggleMethod/CodeExample.vue')
              }
            ]
          },
          {
            path: 'menu',
            children: [
              {
                path: 'header',
                name: 'ComponentTableMenuHeader',
                component: () => import('@/views/table/menu/header/CodeExample.vue')
              },
              {
                path: 'body',
                name: 'ComponentTableMenuBody',
                component: () => import('@/views/table/menu/body/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableMenuFooter',
                component: () => import('@/views/table/menu/footer/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentTableMenuFull',
                component: () => import('@/views/table/menu/full/CodeExample.vue')
              },
              {
                path: 'privilege',
                name: 'ComponentTableMenuPrivilege',
                component: () => import('@/views/table/menu/privilege/CodeExample.vue')
              }
            ]
          },
          {
            path: 'toolbar',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableToolbarBasic',
                component: () => import('@/views/table/toolbar/basic/CodeExample.vue')
              },
              {
                path: 'custom',
                name: 'ComponentTableToolbarCustom',
                component: () => import('@/views/table/toolbar/custom/CodeExample.vue')
              },
              {
                path: 'print',
                name: 'ComponentTableToolbarPrint',
                component: () => import('@/views/table/toolbar/print/CodeExample.vue')
              },
              {
                path: 'import',
                name: 'ComponentTableToolbarImport',
                component: () => import('@/views/table/toolbar/import/CodeExample.vue')
              },
              {
                path: 'export',
                name: 'ComponentTableToolbarExport',
                component: () => import('@/views/table/toolbar/export/CodeExample.vue')
              }
            ]
          },
          {
            path: 'custom',
            children: [
              {
                path: 'toolbar',
                name: 'ComponentTableCustomToolbar',
                component: () => import('@/views/table/custom/toolbar/CodeExample.vue')
              },
              {
                path: 'popup',
                name: 'ComponentTableCustomPopup',
                component: () => import('@/views/table/custom/popup/CodeExample.vue')
              },
              {
                path: 'visible',
                name: 'ComponentTableCustomVisible',
                component: () => import('@/views/table/custom/visible/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableCustomFixed',
                component: () => import('@/views/table/custom/fixed/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentTableCustomResizable',
                component: () => import('@/views/table/custom/resizable/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableCustomSort',
                component: () => import('@/views/table/custom/sort/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentTableCustomTemplate',
                component: () => import('@/views/table/custom/template/CodeExample.vue')
              },
              {
                path: 'placement',
                name: 'ComponentTableCustomPlacement',
                component: () => import('@/views/table/custom/placement/CodeExample.vue')
              },
              {
                path: 'storage',
                name: 'ComponentTableCustomStorage',
                component: () => import('@/views/table/custom/storage/CodeExample.vue')
              },
              {
                path: 'events',
                name: 'ComponentTableCustomEvents',
                component: () => import('@/views/table/custom/events/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentTableCustomRemote',
                component: () => import('@/views/table/custom/remote/CodeExample.vue')
              },
              {
                path: 'remoteFull',
                name: 'ComponentTableCustomRemoteFull',
                component: () => import('@/views/table/custom/remoteFull/CodeExample.vue')
              },
              {
                path: 'manual',
                name: 'ComponentTableCustomManual',
                component: () => import('@/views/table/custom/manual/CodeExample.vue')
              },
              {
                path: 'collapseColumn',
                name: 'ComponentTableCustomCollapseColumn',
                component: () => import('@/views/table/custom/collapseColumn/CodeExample.vue')
              }
            ]
          },
          {
            path: 'tree',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableTreeBasic',
                component: () => import('@/views/table/tree/basic/CodeExample.vue')
              },
              {
                path: 'leveling',
                name: 'ComponentTableTreeLeveling',
                component: () => import('@/views/table/tree/leveling/CodeExample.vue')
              },
              {
                path: 'hierarchy',
                name: 'ComponentTableTreeHierarchy',
                component: () => import('@/views/table/tree/hierarchy/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentTableTreeIcon',
                component: () => import('@/views/table/tree/icon/CodeExample.vue')
              },
              {
                path: 'accordion',
                name: 'ComponentTableTreeAccordion',
                component: () => import('@/views/table/tree/accordion/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableTreeRadio',
                component: () => import('@/views/table/tree/radio/CodeExample.vue')
              },
              {
                path: 'checkbox',
                name: 'ComponentTableTreeCheckbox',
                component: () => import('@/views/table/tree/checkbox/CodeExample.vue')
              },
              {
                path: 'line',
                name: 'ComponentTableTreeLine',
                component: () => import('@/views/table/tree/line/CodeExample.vue')
              },
              {
                path: 'maxHeight',
                name: 'ComponentTableTreeMaxHeight',
                component: () => import('@/views/table/tree/maxHeight/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableTreeFixed',
                component: () => import('@/views/table/tree/fixed/CodeExample.vue')
              },
              {
                path: 'menu',
                name: 'ComponentTableTreeMenu',
                component: () => import('@/views/table/tree/menu/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableTreeSort',
                component: () => import('@/views/table/tree/sort/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTableTreeFilter',
                component: () => import('@/views/table/tree/filter/CodeExample.vue')
              },
              {
                path: 'lazy',
                name: 'ComponentTableTreeLazy',
                component: () => import('@/views/table/tree/lazy/CodeExample.vue')
              },
              {
                path: 'lazyEdit',
                name: 'ComponentTableTreeLazyEdit',
                component: () => import('@/views/table/tree/lazyEdit/CodeExample.vue')
              },
              {
                path: 'expand',
                name: 'ComponentTableTreeExpand',
                component: () => import('@/views/table/tree/expand/CodeExample.vue')
              },
              {
                path: 'expandLazy',
                name: 'ComponentTableTreeExpandLazy',
                component: () => import('@/views/table/tree/expandLazy/CodeExample.vue')
              }
            ]
          },
          {
            path: 'keyboard',
            children: [
              {
                path: 'selected',
                name: 'ComponentTableKeyboardSelected',
                component: () => import('@/views/table/keyboard/selected/CodeExample.vue')
              },
              {
                path: 'keyboard',
                name: 'ComponentTableKeyboardKeyboard',
                component: () => import('@/views/table/keyboard/keyboard/CodeExample.vue')
              },
              {
                path: 'edit',
                name: 'ComponentTableKeyboardEdit',
                component: () => import('@/views/table/keyboard/edit/CodeExample.vue')
              },
              {
                path: 'tree',
                name: 'ComponentTableKeyboardTree',
                component: () => import('@/views/table/keyboard/tree/CodeExample.vue')
              },
              {
                path: 'treeEdit',
                name: 'ComponentTableKeyboardTreeEdit',
                component: () => import('@/views/table/keyboard/treeEdit/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            children: [
              {
                path: 'manual',
                name: 'ComponentTableEditManual',
                component: () => import('@/views/table/edit/manual/CodeExample.vue')
              },
              {
                path: 'click',
                name: 'ComponentTableEditClick',
                component: () => import('@/views/table/edit/click/CodeExample.vue')
              },
              {
                path: 'dblclick',
                name: 'ComponentTableEditDblclick',
                component: () => import('@/views/table/edit/dblclick/CodeExample.vue')
              },
              {
                path: 'autoClear',
                name: 'ComponentTableEditAutoClear',
                component: () => import('@/views/table/edit/autoClear/CodeExample.vue')
              },
              {
                path: 'status',
                name: 'ComponentTableEditStatus',
                component: () => import('@/views/table/edit/status/CodeExample.vue')
              },
              {
                path: 'cellPlaceholder',
                name: 'ComponentTableEditCellPlaceholder',
                component: () => import('@/views/table/edit/cellPlaceholder/CodeExample.vue')
              },
              {
                path: 'insert',
                name: 'ComponentTableEditInsert',
                component: () => import('@/views/table/edit/insert/CodeExample.vue')
              },
              {
                path: 'remove',
                name: 'ComponentTableEditRemove',
                component: () => import('@/views/table/edit/remove/CodeExample.vue')
              },
              {
                path: 'pending',
                name: 'ComponentTableEditPending',
                component: () => import('@/views/table/edit/pending/CodeExample.vue')
              },
              {
                path: 'revert',
                name: 'ComponentTableEditRevert',
                component: () => import('@/views/table/edit/revert/CodeExample.vue')
              },
              {
                path: 'cellValid',
                name: 'ComponentTableEditCellValid',
                component: () => import('@/views/table/edit/cellValid/CodeExample.vue')
              },
              {
                path: 'rowValid',
                name: 'ComponentTableEditRowValid',
                component: () => import('@/views/table/edit/rowValid/CodeExample.vue')
              },
              {
                path: 'tree',
                name: 'ComponentTableEditTree',
                component: () => import('@/views/table/edit/tree/CodeExample.vue')
              },
              {
                path: 'span',
                name: 'ComponentTableEditSpan',
                component: () => import('@/views/table/edit/span/CodeExample.vue')
              },
              {
                path: 'menu',
                name: 'ComponentTableEditMenu',
                component: () => import('@/views/table/edit/menu/CodeExample.vue')
              },
              {
                path: 'fileList',
                name: 'ComponentTableEditFileList',
                component: () => import('@/views/table/edit/fileList/CodeExample.vue')
              },
              {
                path: 'modalForm',
                name: 'ComponentTableEditModalForm',
                component: () => import('@/views/table/edit/modalForm/CodeExample.vue')
              },
              {
                path: 'drawerForm',
                name: 'ComponentTableEditDrawerForm',
                component: () => import('@/views/table/edit/drawerForm/CodeExample.vue')
              },
              {
                path: 'uniqueSelect',
                name: 'ComponentTableEditUniqueSelect',
                component: () => import('@/views/table/edit/uniqueSelect/CodeExample.vue')
              },
              {
                path: 'cascadingSelect',
                name: 'ComponentTableEditCascadingSelect',
                component: () => import('@/views/table/edit/cascadingSelect/CodeExample.vue')
              },
              {
                path: 'footerImmediately',
                name: 'ComponentTableEditFooterImmediately',
                component: () => import('@/views/table/edit/footerImmediately/CodeExample.vue')
              },
              {
                path: 'realtimeSave',
                name: 'ComponentTableEditRealtimeSave',
                component: () => import('@/views/table/edit/realtimeSave/CodeExample.vue')
              }
            ]
          },
          {
            path: 'template',
            children: [
              {
                path: 'default',
                name: 'ComponentTableTemplateDefault',
                component: () => import('@/views/table/template/default/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTableTemplateHeader',
                component: () => import('@/views/table/template/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableTemplateFooter',
                component: () => import('@/views/table/template/footer/CodeExample.vue')
              },
              {
                path: 'checkbox',
                name: 'ComponentTableTemplateCheckbox',
                component: () => import('@/views/table/template/checkbox/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableTemplateRadio',
                component: () => import('@/views/table/template/radio/CodeExample.vue')
              },
              {
                path: 'content',
                name: 'ComponentTableTemplateContent',
                component: () => import('@/views/table/template/content/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTableTemplateFilter',
                component: () => import('@/views/table/template/filter/CodeExample.vue')
              },
              {
                path: 'edit',
                name: 'ComponentTableTemplateEdit',
                component: () => import('@/views/table/template/edit/CodeExample.vue')
              }
            ]
          },
          {
            path: 'import',
            children: [
              {
                path: 'base',
                name: 'ComponentTableImportBase',
                component: () => import('@/views/table/import/base/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentTableImportAdvanced',
                component: () => import('@/views/table/import/advanced/CodeExample.vue')
              }
            ]
          },
          {
            path: 'export',
            children: [
              {
                path: 'base',
                name: 'ComponentTableExportBase',
                component: () => import('@/views/table/export/base/CodeExample.vue')
              },
              {
                path: 'txt',
                name: 'ComponentTableExportTxt',
                component: () => import('@/views/table/export/txt/CodeExample.vue')
              },
              {
                path: 'xml',
                name: 'ComponentTableExportXml',
                component: () => import('@/views/table/export/xml/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentTableExportHtml',
                component: () => import('@/views/table/export/html/CodeExample.vue')
              },
              {
                path: 'csv',
                name: 'ComponentTableExportCsv',
                component: () => import('@/views/table/export/csv/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentTableExportAdvanced',
                component: () => import('@/views/table/export/advanced/CodeExample.vue')
              }
            ]
          },
          {
            path: 'print',
            children: [
              {
                path: 'base',
                name: 'ComponentTablePrintBase',
                component: () => import('@/views/table/print/base/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentTablePrintAdvanced',
                component: () => import('@/views/table/print/advanced/CodeExample.vue')
              },
              {
                path: 'page',
                name: 'ComponentTablePrintPage',
                component: () => import('@/views/table/print/page/CodeExample.vue')
              },
              {
                path: 'multilist',
                name: 'ComponentTablePrintMultilist',
                component: () => import('@/views/table/print/multilist/CodeExample.vue')
              }
            ]
          },
          {
            path: 'scroll',
            children: [
              {
                path: 'vertical',
                name: 'ComponentTableScrollVertical',
                component: () => import('@/views/table/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentTableScrollHorizontal',
                component: () => import('@/views/table/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentTableScrollHV',
                component: () => import('@/views/table/scroll/hv/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentTableScrollRowHeight',
                component: () => import('@/views/table/scroll/rowHeight/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableScrollGroup',
                component: () => import('@/views/table/scroll/group/CodeExample.vue')
              },
              {
                path: 'keyboard',
                name: 'ComponentTableScrollKeyboard',
                component: () => import('@/views/table/scroll/keyboard/CodeExample.vue')
              },
              {
                path: 'merge',
                name: 'ComponentTableScrollMerge',
                component: () => import('@/views/table/scroll/merge/CodeExample.vue')
              },
              {
                path: 'tree',
                name: 'ComponentTableScrollTree',
                component: () => import('@/views/table/scroll/tree/CodeExample.vue')
              }
            ]
          },
          {
            path: 'search',
            children: [
              {
                path: 'list',
                name: 'ComponentTableSearchList',
                component: () => import('@/views/table/search/list/CodeExample.vue')
              },
              {
                path: 'tree',
                name: 'ComponentTableSearchTree',
                component: () => import('@/views/table/search/tree/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'grid',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'basic',
                name: 'ComponentGridBaseBasic',
                component: () => import('@/views/grid/base/basic/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentGridBaseSize',
                component: () => import('@/views/grid/base/size/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentGridBaseAlign',
                component: () => import('@/views/grid/base/align/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentGridBaseWidth',
                component: () => import('@/views/grid/base/width/CodeExample.vue')
              },
              {
                path: 'autoBreak',
                name: 'ComponentGridBaseAutoBreak',
                component: () => import('@/views/grid/base/autoBreak/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentGridBaseOverflow',
                component: () => import('@/views/grid/base/overflow/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentGridBaseTooltip',
                component: () => import('@/views/grid/base/tooltip/CodeExample.vue')
              },
              {
                path: 'stripe',
                name: 'ComponentGridBaseStripe',
                component: () => import('@/views/grid/base/stripe/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentGridBaseBorder',
                component: () => import('@/views/grid/base/border/CodeExample.vue')
              },
              {
                path: 'round',
                name: 'ComponentGridBaseRound',
                component: () => import('@/views/grid/base/round/CodeExample.vue')
              },
              {
                path: 'style',
                name: 'ComponentGridBaseStyle',
                component: () => import('@/views/grid/base/style/CodeExample.vue')
              },
              {
                path: 'dynamicStyle',
                name: 'ComponentGridBaseDynamicStyle',
                component: () => import('@/views/grid/base/dynamicStyle/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentGridBaseHeader',
                component: () => import('@/views/grid/base/header/CodeExample.vue')
              },
              {
                path: 'headerHighlight',
                name: 'ComponentGridBaseHeaderHighlight',
                component: () => import('@/views/grid/base/headerHighlight/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentGridBaseHeaderResizable',
                component: () => import('@/views/grid/base/resizable/CodeExample.vue')
              },
              {
                path: 'minHeight',
                name: 'ComponentGridBaseHeaderMinHeight',
                component: () => import('@/views/grid/base/minHeight/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentGridBaseHeight',
                component: () => import('@/views/grid/base/height/CodeExample.vue')
              },
              {
                path: 'maxHeight',
                name: 'ComponentGridBaseMaxHeight',
                component: () => import('@/views/grid/base/maxHeight/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentGridBaseRowHeight',
                component: () => import('@/views/grid/base/rowHeight/CodeExample.vue')
              },
              {
                path: 'autoHeight',
                name: 'ComponentGridBaseAutoHeight',
                component: () => import('@/views/grid/base/autoHeight/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentGridBaseFixed',
                component: () => import('@/views/grid/base/fixed/CodeExample.vue')
              },
              {
                path: 'fixedFull',
                name: 'ComponentGridBaseFixedFull',
                component: () => import('@/views/grid/base/fixedFull/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentGridBaseFooter',
                component: () => import('@/views/grid/base/footer/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentGridBaseGroup',
                component: () => import('@/views/grid/base/group/CodeExample.vue')
              },
              {
                path: 'seq',
                name: 'ComponentGridBaseSeq',
                component: () => import('@/views/grid/base/seq/CodeExample.vue')
              },
              {
                path: 'current',
                name: 'ComponentGridBaseCurrent',
                component: () => import('@/views/grid/base/current/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentGridBaseRadio',
                component: () => import('@/views/grid/base/radio/CodeExample.vue')
              },
              {
                path: 'selection',
                name: 'ComponentGridBaseSelection',
                component: () => import('@/views/grid/base/selection/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentGridBaseSort',
                component: () => import('@/views/grid/base/sort/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentGridBaseFilter',
                component: () => import('@/views/grid/base/filter/CodeExample.vue')
              },
              {
                path: 'empty',
                name: 'ComponentGridBaseEmpty',
                component: () => import('@/views/grid/base/empty/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentGridBaseLoading',
                component: () => import('@/views/grid/base/loading/CodeExample.vue')
              },
              {
                path: 'format',
                name: 'ComponentGridBaseFormat',
                component: () => import('@/views/grid/base/format/CodeExample.vue')
              },
              {
                path: 'data',
                name: 'ComponentGridBaseData',
                component: () => import('@/views/grid/base/data/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentGridBaseHtml',
                component: () => import('@/views/grid/base/html/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentGridBaseFull',
                component: () => import('@/views/grid/base/full/CodeExample.vue')
              }
            ]
          },
          {
            path: 'layout',
            children: [
              {
                path: 'pager',
                name: 'ComponentGridLayoutPager',
                component: () => import('@/views/grid/layout/pager/CodeExample.vue')
              },
              {
                path: 'toolbar',
                name: 'ComponentGridLayoutToolbar',
                component: () => import('@/views/grid/layout/toolbar/CodeExample.vue')
              }
            ]
          },
          {
            path: 'footer',
            children: [
              {
                path: 'footerData',
                name: 'ComponentGridFooterFooterData',
                component: () => import('@/views/grid/footer/footerData/CodeExample.vue')
              },
              {
                path: 'footerMethod',
                name: 'ComponentGridFooterFooterMethod',
                component: () => import('@/views/grid/footer/footerMethod/CodeExample.vue')
              }
            ]
          },
          {
            path: 'merge',
            children: [
              {
                path: 'row',
                name: 'ComponentGridMergeRow',
                component: () => import('@/views/grid/merge/row/CodeExample.vue')
              },
              {
                path: 'column',
                name: 'ComponentGridMergeColumn',
                component: () => import('@/views/grid/merge/column/CodeExample.vue')
              },
              {
                path: 'all',
                name: 'ComponentGridMergeAll',
                component: () => import('@/views/grid/merge/all/CodeExample.vue')
              }
            ]
          },
          {
            path: 'expand',
            children: [
              {
                path: 'basic',
                name: 'ComponentGridExpandBasic',
                component: () => import('@/views/grid/expand/basic/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentGridExpandPadding',
                component: () => import('@/views/grid/expand/padding/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentGridExpandHeight',
                component: () => import('@/views/grid/expand/height/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentGridExpandFixed',
                component: () => import('@/views/grid/expand/fixed/CodeExample.vue')
              }
            ]
          },
          {
            path: 'menu',
            children: [
              {
                path: 'full',
                name: 'ComponentGridMenuFull',
                component: () => import('@/views/grid/menu/full/CodeExample.vue')
              },
              {
                path: 'privilege',
                name: 'ComponentGridMenuPrivilege',
                component: () => import('@/views/grid/menu/privilege/CodeExample.vue')
              }
            ]
          },
          {
            path: 'form',
            children: [
              {
                path: 'search',
                name: 'ComponentGridFormSearch',
                component: () => import('@/views/grid/form/search/CodeExample.vue')
              },
              {
                path: 'collapse',
                name: 'ComponentGridFormCollapse',
                component: () => import('@/views/grid/form/collapse/CodeExample.vue')
              }
            ]
          },
          {
            path: 'toolbar',
            children: [
              {
                path: 'custom',
                name: 'ComponentGridToolbarCustom',
                component: () => import('@/views/grid/toolbar/custom/CodeExample.vue')
              },
              {
                path: 'print',
                name: 'ComponentGridToolbarPrint',
                component: () => import('@/views/grid/toolbar/print/CodeExample.vue')
              },
              {
                path: 'zoom',
                name: 'ComponentGridToolbarZoom',
                component: () => import('@/views/grid/toolbar/zoom/CodeExample.vue')
              },
              {
                path: 'import',
                name: 'ComponentGridToolbarImport',
                component: () => import('@/views/grid/toolbar/import/CodeExample.vue')
              },
              {
                path: 'export',
                name: 'ComponentGridToolbarExport',
                component: () => import('@/views/grid/toolbar/export/CodeExample.vue')
              },
              {
                path: 'refresh',
                name: 'ComponentGridToolbarRefresh',
                component: () => import('@/views/grid/toolbar/refresh/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentGridToolbarIcon',
                component: () => import('@/views/grid/toolbar/icon/CodeExample.vue')
              }
            ]
          },
          {
            path: 'custom',
            children: [
              {
                path: 'popup',
                name: 'ComponentGridCustomPopup',
                component: () => import('@/views/grid/custom/popup/CodeExample.vue')
              },
              // {
              //   path: 'visible',
              //   name: 'ComponentGridCustomVisible',
              //   component: () => import('@/views/grid/custom/visible/CodeExample.vue')
              // },
              // {
              //   path: 'fixed',
              //   name: 'ComponentGridCustomFixed',
              //   component: () => import('@/views/grid/custom/fixed/CodeExample.vue')
              // },
              // {
              //   path: 'resizable',
              //   name: 'ComponentGridCustomResizable',
              //   component: () => import('@/views/grid/custom/resizable/CodeExample.vue')
              // },
              // {
              //   path: 'sort',
              //   name: 'ComponentGridCustomSort',
              //   component: () => import('@/views/grid/custom/sort/CodeExample.vue')
              // },
              // {
              //   path: 'template',
              //   name: 'ComponentGridCustomTemplate',
              //   component: () => import('@/views/grid/custom/template/CodeExample.vue')
              // },
              {
                path: 'placement',
                name: 'ComponentGridCustomPlacement',
                component: () => import('@/views/grid/custom/placement/CodeExample.vue')
              },
              {
                path: 'storage',
                name: 'ComponentGridCustomStorage',
                component: () => import('@/views/grid/custom/storage/CodeExample.vue')
              },
              // {
              //   path: 'events',
              //   name: 'ComponentGridCustomEvents',
              //   component: () => import('@/views/grid/custom/events/CodeExample.vue')
              // },
              {
                path: 'remote',
                name: 'ComponentGridCustomRemote',
                component: () => import('@/views/grid/custom/remote/CodeExample.vue')
              },
              {
                path: 'remoteFull',
                name: 'ComponentGridCustomRemoteFull',
                component: () => import('@/views/grid/custom/remoteFull/CodeExample.vue')
              }
            ]
          },
          {
            path: 'pager',
            children: [
              {
                path: 'base',
                name: 'ComponentGridPagerBase',
                component: () => import('@/views/grid/pager/base/CodeExample.vue')
              },
              {
                path: 'pageSize',
                name: 'ComponentGridPagerPageSize',
                component: () => import('@/views/grid/pager/pageSize/CodeExample.vue')
              }
            ]
          },
          {
            path: 'tree',
            children: [
              {
                path: 'leveling',
                name: 'ComponentGridTreeLeveling',
                component: () => import('@/views/grid/tree/leveling/CodeExample.vue')
              },
              {
                path: 'hierarchy',
                name: 'ComponentGridTreeHierarchy',
                component: () => import('@/views/grid/tree/hierarchy/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            children: [
              {
                path: 'click',
                name: 'ComponentGridEditClick',
                component: () => import('@/views/grid/edit/click/CodeExample.vue')
              },
              {
                path: 'dblclick',
                name: 'ComponentGridEditDblclick',
                component: () => import('@/views/grid/edit/dblclick/CodeExample.vue')
              },
              {
                path: 'cellDisable',
                name: 'ComponentGridEditCellDisable',
                component: () => import('@/views/grid/edit/cellDisable/CodeExample.vue')
              },
              {
                path: 'rowDisable',
                name: 'ComponentGridEditRowDisable',
                component: () => import('@/views/grid/edit/rowDisable/CodeExample.vue')
              }
            ]
          },
          {
            path: 'editRender',
            children: [
              {
                path: 'input',
                name: 'ComponentGridEditRenderInput',
                component: () => import('@/views/grid/editRender/input/CodeExample.vue')
              },
              {
                path: 'select',
                name: 'ComponentGridEditRenderSelect',
                component: () => import('@/views/grid/editRender/select/CodeExample.vue')
              },
              {
                path: 'vxe-input',
                name: 'ComponentGridEditRenderVxeInput',
                component: () => import('@/views/grid/editRender/vxe-input/CodeExample.vue')
              },
              {
                path: 'vxe-select',
                name: 'ComponentGridEditRenderVxeSelect',
                component: () => import('@/views/grid/editRender/vxe-select/CodeExample.vue')
              }
            ]
          },
          {
            path: 'template',
            children: [
              {
                path: 'layout',
                name: 'ComponentGridTemplateLayout',
                component: () => import('@/views/grid/template/layout/CodeExample.vue')
              },
              {
                path: 'default',
                name: 'ComponentGridTemplateDefault',
                component: () => import('@/views/grid/template/default/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentGridTemplateHeader',
                component: () => import('@/views/grid/template/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentGridTemplateFooter',
                component: () => import('@/views/grid/template/footer/CodeExample.vue')
              },
              {
                path: 'checkbox',
                name: 'ComponentGridTemplateCheckbox',
                component: () => import('@/views/grid/template/checkbox/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentGridTemplateRadio',
                component: () => import('@/views/grid/template/radio/CodeExample.vue')
              },
              {
                path: 'content',
                name: 'ComponentGridTemplateContent',
                component: () => import('@/views/grid/template/content/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentGridTemplateFilter',
                component: () => import('@/views/grid/template/filter/CodeExample.vue')
              },
              {
                path: 'edit',
                name: 'ComponentGridTemplateEdit',
                component: () => import('@/views/grid/template/edit/CodeExample.vue')
              },
              {
                path: 'valid',
                name: 'ComponentGridTemplateValid',
                component: () => import('@/views/grid/template/valid/CodeExample.vue')
              }
            ]
          },
          {
            path: 'import',
            children: [
              {
                path: 'base',
                name: 'ComponentGridImportBase',
                component: () => import('@/views/grid/import/base/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentGridImportAdvanced',
                component: () => import('@/views/grid/import/advanced/CodeExample.vue')
              }
            ]
          },
          {
            path: 'export',
            children: [
              {
                path: 'base',
                name: 'ComponentGridExportBase',
                component: () => import('@/views/grid/export/base/CodeExample.vue')
              },
              {
                path: 'txt',
                name: 'ComponentGridExportTxt',
                component: () => import('@/views/grid/export/txt/CodeExample.vue')
              },
              {
                path: 'xml',
                name: 'ComponentGridExportXml',
                component: () => import('@/views/grid/export/xml/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentGridExportHtml',
                component: () => import('@/views/grid/export/html/CodeExample.vue')
              },
              {
                path: 'csv',
                name: 'ComponentGridExportCsv',
                component: () => import('@/views/grid/export/csv/CodeExample.vue')
              },
              {
                path: 'data',
                name: 'ComponentGridExportData',
                component: () => import('@/views/grid/export/data/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentGridExportAdvanced',
                component: () => import('@/views/grid/export/advanced/CodeExample.vue')
              }
            ]
          },
          {
            path: 'print',
            children: [
              {
                path: 'base',
                name: 'ComponentGridPrintBase',
                component: () => import('@/views/grid/print/base/CodeExample.vue')
              },
              {
                path: 'beforeMethod',
                name: 'ComponentGridPrintBeforeMethod',
                component: () => import('@/views/grid/print/beforeMethod/CodeExample.vue')
              },
              {
                path: 'advanced',
                name: 'ComponentGridPrintAdvanced',
                component: () => import('@/views/grid/print/advanced/CodeExample.vue')
              }
            ]
          },
          {
            path: 'scroll',
            children: [
              {
                path: 'vertical',
                name: 'ComponentGridScrollVertical',
                component: () => import('@/views/grid/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentGridScrollHorizontal',
                component: () => import('@/views/grid/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentGridScrollHV',
                component: () => import('@/views/grid/scroll/hv/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentGridScrollGroup',
                component: () => import('@/views/grid/scroll/group/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentGridScrollFooter',
                component: () => import('@/views/grid/scroll/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'proxy',
            children: [
              {
                path: 'query',
                name: 'ComponentGridProxyQuery',
                component: () => import('@/views/grid/proxy/query/CodeExample.vue')
              },
              {
                path: 'pager',
                name: 'ComponentGridProxyPager',
                component: () => import('@/views/grid/proxy/pager/CodeExample.vue')
              },
              {
                path: 'toolbarQuery',
                name: 'ComponentGridProxyToolbarQuery',
                component: () => import('@/views/grid/proxy/toolbarQuery/CodeExample.vue')
              },
              {
                path: 'manualQuery',
                name: 'ComponentGridProxyManualQuery',
                component: () => import('@/views/grid/proxy/manualQuery/CodeExample.vue')
              },
              {
                path: 'toolbarExport',
                name: 'ComponentGridProxyToolbarExport',
                component: () => import('@/views/grid/proxy/toolbarExport/CodeExample.vue')
              },
              {
                path: 'toolbarRemoteExport',
                name: 'ComponentGridProxyToolbarRemoteExport',
                component: () => import('@/views/grid/proxy/toolbarRemoteExport/CodeExample.vue')
              },
              {
                path: 'toolbarDelete',
                name: 'ComponentGridProxyToolbarDelete',
                component: () => import('@/views/grid/proxy/toolbarDelete/CodeExample.vue')
              },
              {
                path: 'manualDelete',
                name: 'ComponentGridProxyManualDelete',
                component: () => import('@/views/grid/proxy/manualDelete/CodeExample.vue')
              },
              {
                path: 'toolbarMark',
                name: 'ComponentGridProxyToolbarMark',
                component: () => import('@/views/grid/proxy/toolbarMark/CodeExample.vue')
              },
              {
                path: 'manualMark',
                name: 'ComponentGridProxyManualMark',
                component: () => import('@/views/grid/proxy/manualMark/CodeExample.vue')
              },
              {
                path: 'toolbarSave',
                name: 'ComponentGridProxyToolbarSave',
                component: () => import('@/views/grid/proxy/toolbarSave/CodeExample.vue')
              },
              {
                path: 'manualSave',
                name: 'ComponentGridProxyManualSave',
                component: () => import('@/views/grid/proxy/manualSave/CodeExample.vue')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/:name/api',
    name: 'DocsApi',
    component: () => import('@/views/api/DocsApi.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
