import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'
import PageLayout from '@/components/PageLayout.vue'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUseGlobal from '@/views/start/useGlobal/CodeExample.vue'
import StartUseImport from '@/views/start/useImport/CodeExample.vue'
import StartCDN from '@/views/start/cdn/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import StartPermission from '@/views/start/permission/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'
import EnterprisePreview from '@/views/start/EnterprisePreview.vue'

const tableRouteConfig: RouteRecordRaw = {
  path: 'table',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
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
          path: 'scrollStyle',
          name: 'ComponentTableBaseScrollStyle',
          component: () => import('@/views/table/base/scrollStyle/CodeExample.vue')
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
          path: 'padding',
          name: 'ComponentTableBasePadding',
          component: () => import('@/views/table/base/padding/CodeExample.vue')
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
          path: 'footer',
          name: 'ComponentTableBaseFooter',
          component: () => import('@/views/table/base/footer/CodeExample.vue')
        },
        {
          path: 'currentColumn',
          name: 'ComponentTableBaseCurrentColumn',
          component: () => import('@/views/table/base/currentColumn/CodeExample.vue')
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
          path: 'currentRow',
          name: 'ComponentTableBaseCurrentRow',
          component: () => import('@/views/table/base/currentRow/CodeExample.vue')
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
          path: 'titlePrefix',
          name: 'ComponentTableBaseTitlePrefix',
          component: () => import('@/views/table/base/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentTableBaseTitleSuffix',
          component: () => import('@/views/table/base/titleSuffix/CodeExample.vue')
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
      component: RouteLayout,
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
          path: 'footerFormat',
          name: 'ComponentTableFooterFooterFormat',
          component: () => import('@/views/table/footer/footerFormat/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableFooterTemplate',
          component: () => import('@/views/table/footer/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentTableRadioHighlight',
          component: () => import('@/views/table/radio/highlight/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableRadioCheckMethod',
          component: () => import('@/views/table/radio/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableRadioVisibleMethod',
          component: () => import('@/views/table/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableRadioTemplate',
          component: () => import('@/views/table/radio/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentTableCheckboxHighlight',
          component: () => import('@/views/table/checkbox/highlight/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentTableCheckboxField',
          component: () => import('@/views/table/checkbox/field/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableCheckboxCheckMethod',
          component: () => import('@/views/table/checkbox/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableCheckboxVisibleMethod',
          component: () => import('@/views/table/checkbox/visibleMethod/CodeExample.vue')
        },
        {
          path: 'range',
          name: 'ComponentTableCheckboxRange',
          component: () => import('@/views/table/checkbox/range/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableCheckboxTemplate',
          component: () => import('@/views/table/checkbox/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'sort',
      component: RouteLayout,
      children: [
        {
          path: 'multiple',
          name: 'ComponentTableSortMultiple',
          component: () => import('@/views/table/sort/multiple/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableSortTrigger',
          component: () => import('@/views/table/sort/trigger/CodeExample.vue')
        },
        {
          path: 'orders',
          name: 'ComponentTableSortOrders',
          component: () => import('@/views/table/sort/orders/CodeExample.vue')
        },
        {
          path: 'defaultSort',
          name: 'ComponentTableSortDefaultSort',
          component: () => import('@/views/table/sort/defaultSort/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentTableSortRemote',
          component: () => import('@/views/table/sort/remote/CodeExample.vue')
        },
        {
          path: 'sortType',
          name: 'ComponentTableSortSortType',
          component: () => import('@/views/table/sort/sortType/CodeExample.vue')
        },
        {
          path: 'sortMethod',
          name: 'ComponentTableSortSortMethod',
          component: () => import('@/views/table/sort/sortMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
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
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentTableRowDragSort',
          component: () => import('@/views/table/rowDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableRowDragFixed',
          component: () => import('@/views/table/rowDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableRowDragIcon',
          component: () => import('@/views/table/rowDrag/icon/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableRowDragTree',
          component: () => import('@/views/table/rowDrag/tree/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentTableRowDragEvents',
          component: () => import('@/views/table/rowDrag/events/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentTableRowDragDisabledMethod',
          component: () => import('@/views/table/rowDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableRowDragVisibleMethod',
          component: () => import('@/views/table/rowDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentTableRowDragDragMethod',
          component: () => import('@/views/table/rowDrag/dragMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentTableColDragSort',
          component: () => import('@/views/table/colDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableColDragFixed',
          component: () => import('@/views/table/colDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableColDragIcon',
          component: () => import('@/views/table/colDrag/icon/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableColDragGroup',
          component: () => import('@/views/table/colDrag/group/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentTableColDragEvents',
          component: () => import('@/views/table/colDrag/events/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentTableColDragDisabledMethod',
          component: () => import('@/views/table/colDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableColDragVisibleMethod',
          component: () => import('@/views/table/colDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentTableColDragDragMethod',
          component: () => import('@/views/table/colDrag/dragMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'merge',
      component: RouteLayout,
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
      component: RouteLayout,
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
        },
        {
          path: 'childTable',
          name: 'ComponentTableExpandChildTable',
          component: () => import('@/views/table/expand/childTable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
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
          path: 'prefixConfig',
          name: 'ComponentTableMenuPrefixConfig',
          component: () => import('@/views/table/menu/prefixConfig/CodeExample.vue')
        },
        {
          path: 'suffixConfig',
          name: 'ComponentTableMenuSuffixConfig',
          component: () => import('@/views/table/menu/suffixConfig/CodeExample.vue')
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
      path: 'form',
      component: RouteLayout,
      children: [
        {
          path: 'formData',
          name: 'ComponentTableFormFormData',
          component: () => import('@/views/table/form/formData/CodeExample.vue')
        },
        {
          path: 'collapse',
          name: 'ComponentTableFormCollapse',
          component: () => import('@/views/table/form/collapse/CodeExample.vue')
        }
      ]
    },
    {
      path: 'toolbar',
      component: RouteLayout,
      children: [
        {
          path: 'buttons',
          name: 'ComponentTableToolbarButtons',
          component: () => import('@/views/table/toolbar/buttons/CodeExample.vue')
        },
        {
          path: 'tools',
          name: 'ComponentTableToolbarTools',
          component: () => import('@/views/table/toolbar/tools/CodeExample.vue')
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
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'buttons',
              name: 'ComponentTableToolbarTemplateButtons',
              component: () => import('@/views/table/toolbar/template/buttons/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentTableToolbarTemplateTools',
              component: () => import('@/views/table/toolbar/template/tools/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'custom',
      component: RouteLayout,
      children: [
        {
          path: 'toolbar',
          name: 'ComponentTableCustomToolbar',
          component: () => import('@/views/table/custom/toolbar/CodeExample.vue')
        },
        {
          path: 'modal',
          name: 'ComponentTableCustomModal',
          component: () => import('@/views/table/custom/modal/CodeExample.vue')
        },
        {
          path: 'drawer',
          name: 'ComponentTableCustomDrawer',
          component: () => import('@/views/table/custom/drawer/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableCustomCheckMethod',
          component: () => import('@/views/table/custom/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableCustomVisibleMethod',
          component: () => import('@/views/table/custom/visibleMethod/CodeExample.vue')
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
          path: 'fixedMax',
          name: 'ComponentTableCustomFixedMax',
          component: () => import('@/views/table/custom/fixedMax/CodeExample.vue')
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
          path: 'customBtn',
          name: 'ComponentTableCustomCustomBtn',
          component: () => import('@/views/table/custom/customBtn/CodeExample.vue')
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
          path: 'immediate',
          name: 'ComponentTableCustomImmediate',
          component: () => import('@/views/table/custom/immediate/CodeExample.vue')
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
      path: 'pager',
      component: RouteLayout,
      children: [
        {
          path: 'mockPage',
          name: 'ComponentTablePagerMockPage',
          component: () => import('@/views/table/pager/mockPage/CodeExample.vue')
        },
        {
          path: 'layouts',
          name: 'ComponentTablePagerLayouts',
          component: () => import('@/views/table/pager/layouts/CodeExample.vue')
        },
        {
          path: 'start',
          name: 'ComponentTablePagerStart',
          component: () => import('@/views/table/pager/start/CodeExample.vue')
        }
      ]
    },
    {
      path: 'tree',
      component: RouteLayout,
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
          path: 'stripe',
          name: 'ComponentTableTreeStripe',
          component: () => import('@/views/table/tree/stripe/CodeExample.vue')
        },
        {
          path: 'seqMode',
          name: 'ComponentTableTreeSeqMode',
          component: () => import('@/views/table/tree/seqMode/CodeExample.vue')
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
          path: 'currentRow',
          name: 'ComponentTableTreeCurrentRow',
          component: () => import('@/views/table/tree/currentRow/CodeExample.vue')
        },
        {
          path: 'currentColumn',
          name: 'ComponentTableTreeCurrentColumn',
          component: () => import('@/views/table/tree/currentColumn/CodeExample.vue')
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
        },
        {
          path: 'group',
          name: 'ComponentTableTreeGroup',
          component: () => import('@/views/table/tree/group/CodeExample.vue')
        }
      ]
    },
    {
      path: 'keyboard',
      component: RouteLayout,
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
          path: 'editMethod',
          name: 'ComponentTableKeyboardEditMethod',
          component: () => import('@/views/table/keyboard/editMethod/CodeExample.vue')
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
      component: RouteLayout,
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
          path: 'autoFocus',
          name: 'ComponentTableEditAutoFocus',
          component: () => import('@/views/table/edit/autoFocus/CodeExample.vue')
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
        // {
        //   path: 'update',
        //   name: 'ComponentTableEditUpdate',
        //   component: () => import('@/views/table/edit/update/CodeExample.vue')
        // },
        // {
        //   path: 'insert',
        //   name: 'ComponentTableEditInsert',
        //   component: () => import('@/views/table/edit/insert/CodeExample.vue')
        // },
        // {
        //   path: 'remove',
        //   name: 'ComponentTableEditRemove',
        //   component: () => import('@/views/table/edit/remove/CodeExample.vue')
        // },
        // {
        //   path: 'pending',
        //   name: 'ComponentTableEditPending',
        //   component: () => import('@/views/table/edit/pending/CodeExample.vue')
        // },
        // {
        //   path: 'revert',
        //   name: 'ComponentTableEditRevert',
        //   component: () => import('@/views/table/edit/revert/CodeExample.vue')
        // },
        {
          path: 'handleTemp',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentTableEditHandleTempInsert',
              component: () => import('@/views/table/edit/handleTemp/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentTableEditHandleTempRemove',
              component: () => import('@/views/table/edit/handleTemp/remove/CodeExample.vue')
            },
            {
              path: 'pending',
              name: 'ComponentTableEditHandleTempPending',
              component: () => import('@/views/table/edit/handleTemp/pending/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentTableEditHandleTempUpdate',
              component: () => import('@/views/table/edit/handleTemp/update/CodeExample.vue')
            },
            {
              path: 'revert',
              name: 'ComponentTableEditHandleTempRevert',
              component: () => import('@/views/table/edit/handleTemp/revert/CodeExample.vue')
            }
          ]
        },
        {
          path: 'handleOriginal',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentTableEditHandleOriginalInsert',
              component: () => import('@/views/table/edit/handleOriginal/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentTableEditHandleOriginalRemove',
              component: () => import('@/views/table/edit/handleOriginal/remove/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentTableEditHandleOriginalUpdate',
              component: () => import('@/views/table/edit/handleOriginal/update/CodeExample.vue')
            }
          ]
        },
        {
          path: 'cellDisable',
          name: 'ComponentTableEditCellDisable',
          component: () => import('@/views/table/edit/cellDisable/CodeExample.vue')
        },
        {
          path: 'rowDisable',
          name: 'ComponentTableEditRowDisable',
          component: () => import('@/views/table/edit/rowDisable/CodeExample.vue')
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
          path: 'modalSelect',
          name: 'ComponentTableEditModalSelect',
          component: () => import('@/views/table/edit/modalSelect/CodeExample.vue')
        },
        {
          path: 'drawerForm',
          name: 'ComponentTableEditDrawerForm',
          component: () => import('@/views/table/edit/drawerForm/CodeExample.vue')
        },
        {
          path: 'drawerSelect',
          name: 'ComponentTableEditDrawerSelect',
          component: () => import('@/views/table/edit/drawerSelect/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentTableEditRowHeight',
          component: () => import('@/views/table/edit/rowHeight/CodeExample.vue')
        },
        {
          path: 'multiLineText',
          name: 'ComponentTableEditMultiLineText',
          component: () => import('@/views/table/edit/multiLineText/CodeExample.vue')
        },
        {
          path: 'linkageDisabled',
          name: 'ComponentTableEditLinkageDisabled',
          component: () => import('@/views/table/edit/linkageDisabled/CodeExample.vue')
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
          path: 'rowImmediately',
          name: 'ComponentTableEditRowImmediately',
          component: () => import('@/views/table/edit/rowImmediately/CodeExample.vue')
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
      path: 'validate',
      component: RouteLayout,
      children: [
        {
          path: 'rules',
          name: 'ComponentTableValidateRules',
          component: () => import('@/views/table/validate/rules/CodeExample.vue')
        },
        {
          path: 'string',
          name: 'ComponentTableValidateString',
          component: () => import('@/views/table/validate/string/CodeExample.vue')
        },
        {
          path: 'number',
          name: 'ComponentTableValidateNumber',
          component: () => import('@/views/table/validate/number/CodeExample.vue')
        },
        {
          path: 'regexp',
          name: 'ComponentTableValidateRegexp',
          component: () => import('@/views/table/validate/regexp/CodeExample.vue')
        },
        {
          path: 'array',
          name: 'ComponentTableValidateArray',
          component: () => import('@/views/table/validate/array/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentTableValidateCustom',
          component: () => import('@/views/table/validate/custom/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentTableValidateMode',
          component: () => import('@/views/table/validate/mode/CodeExample.vue')
        },
        {
          path: 'theme',
          name: 'ComponentTableValidateTheme',
          component: () => import('@/views/table/validate/theme/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'valid',
              name: 'ComponentTableValidateTemplateValid',
              component: () => import('@/views/table/validate/template/valid/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'cellRender',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-switch',
          name: 'ComponentTableCellRenderVxeSwitch',
          component: () => import('@/views/table/cellRender/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio-group',
          name: 'ComponentTableCellRenderVxeRadioGroup',
          component: () => import('@/views/table/cellRender/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
          name: 'ComponentTableCellRenderVxeCheckboxGroup',
          component: () => import('@/views/table/cellRender/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentTableCellRenderVxeButtonGroup',
          component: () => import('@/views/table/cellRender/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentTableCellRenderVxeImage',
          component: () => import('@/views/table/cellRender/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentTableCellRenderVxeImageGroup',
          component: () => import('@/views/table/cellRender/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentTableCellRenderVxeTextEllipsis',
          component: () => import('@/views/table/cellRender/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentTableCellRenderVxeRate',
          component: () => import('@/views/table/cellRender/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-slider',
          name: 'ComponentTableCellRenderVxeSlider',
          component: () => import('@/views/table/cellRender/vxe-slider/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentTableCellRenderVxeUpload',
          component: () => import('@/views/table/cellRender/vxe-upload/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cellTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-tag',
          name: 'ComponentTableCellTemplateVxeTag',
          component: () => import('@/views/table/cellTemplate/vxe-tag/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentTableCellTemplateVxeSwitch',
          component: () => import('@/views/table/cellTemplate/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio-group',
          name: 'ComponentTableCellTemplateVxeRadioGroup',
          component: () => import('@/views/table/cellTemplate/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
          name: 'ComponentTableCellTemplateVxeCheckboxGroup',
          component: () => import('@/views/table/cellTemplate/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button',
          name: 'ComponentTableCellTemplateVxeButton',
          component: () => import('@/views/table/cellTemplate/vxe-button/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentTableCellTemplateVxeImage',
          component: () => import('@/views/table/cellTemplate/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentTableCellTemplateVxeImageGroup',
          component: () => import('@/views/table/cellTemplate/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentTableCellTemplateVxeTextEllipsis',
          component: () => import('@/views/table/cellTemplate/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentTableCellTemplateVxeRate',
          component: () => import('@/views/table/cellTemplate/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-slider',
          name: 'ComponentTableCellTemplateVxeSlider',
          component: () => import('@/views/table/cellTemplate/vxe-slider/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentTableCellTemplateVxeUpload',
          component: () => import('@/views/table/cellTemplate/vxe-upload/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentTableCellTemplateVxeModal',
          component: () => import('@/views/table/cellTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentTableCellTemplateVxeDrawer',
          component: () => import('@/views/table/cellTemplate/vxe-drawer/CodeExample.vue')
        },
        {
          path: 'allEdit',
          name: 'ComponentTableCellTemplateAllEdit',
          component: () => import('@/views/table/cellTemplate/allEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editRender',
      component: RouteLayout,
      children: [
        {
          path: 'input',
          name: 'ComponentTableEditRenderInput',
          component: () => import('@/views/table/editRender/input/CodeExample.vue')
        },
        {
          path: 'select',
          name: 'ComponentTableEditRenderSelect',
          component: () => import('@/views/table/editRender/select/CodeExample.vue')
        },
        {
          path: 'vxe-input',
          name: 'ComponentTableEditRenderVxeInput',
          component: () => import('@/views/table/editRender/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentTableEditRenderVxeNumberInput',
          component: () => import('@/views/table/editRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentTableEditRenderVxeIconPicker',
          component: () => import('@/views/table/editTemplate/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentTableEditRenderVxeDatePicker',
          component: () => import('@/views/table/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditRenderVxeSelect',
          component: () => import('@/views/table/editRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentTableEditRenderVxeTreeSelect',
          component: () => import('@/views/table/editRender/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentTableEditRenderVxeTableSelect',
          component: () => import('@/views/table/editRender/vxe-table-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentTableEditTemplateVxeInput',
          component: () => import('@/views/table/editTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentTableEditTemplateVxeNumberInput',
          component: () => import('@/views/table/editTemplate/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentTableEditTemplateVxeIconPicker',
          component: () => import('@/views/table/editTemplate/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentTableEditTemplateVxeDatePicker',
          component: () => import('@/views/table/editTemplate/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditTemplateVxeSelect',
          component: () => import('@/views/table/editTemplate/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentTableEditTemplateVxeTreeSelect',
          component: () => import('@/views/table/editTemplate/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentTableEditTemplateVxeTableSelect',
          component: () => import('@/views/table/editTemplate/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'vxe-pulldown',
          name: 'ComponentTableEditTemplateVxePulldown',
          component: () => import('@/views/table/editTemplate/vxe-pulldown/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentTableEditTemplateVxeModal',
          component: () => import('@/views/table/editTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentTableEditTemplateVxeDrawer',
          component: () => import('@/views/table/editTemplate/vxe-drawer/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
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
      component: RouteLayout,
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
      component: RouteLayout,
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
          path: 'exportMethod',
          name: 'ComponentTableExportExportMethod',
          component: () => import('@/views/table/export/exportMethod/CodeExample.vue')
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
      component: RouteLayout,
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
        },
        {
          path: 'order',
          name: 'ComponentTablePrintOrder',
          component: () => import('@/views/table/print/order/CodeExample.vue')
        }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
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
          path: 'loadData',
          name: 'ComponentTableScrollLoadData',
          component: () => import('@/views/table/scroll/loadData/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableScrollFixed',
          component: () => import('@/views/table/scroll/fixed/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentTableScrollMode',
          component: () => import('@/views/table/scroll/mode/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentTableScrollRowHeight',
          component: () => import('@/views/table/scroll/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowHeight',
          name: 'ComponentTableScrollAutoRowHeight',
          component: () => import('@/views/table/scroll/autoRowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowVH',
          name: 'ComponentTableScrollAutoRowVH',
          component: () => import('@/views/table/scroll/autoRowVH/CodeExample.vue')
        },
        {
          path: 'autoRowFixed',
          name: 'ComponentTableScrollAutoRowFixed',
          component: () => import('@/views/table/scroll/autoRowFixed/CodeExample.vue')
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
        },
        {
          path: 'edit',
          name: 'ComponentTableScrollEdit',
          component: () => import('@/views/table/scroll/edit/CodeExample.vue')
        },
        {
          path: 'hvEdit',
          name: 'ComponentTableScrollHVEdit',
          component: () => import('@/views/table/scroll/hvEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'search',
      component: RouteLayout,
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
    },
    {
      path: 'events',
      component: RouteLayout,
      children: [
        {
          path: 'click',
          name: 'ComponentTableEventsClick',
          component: () => import('@/views/table/events/click/CodeExample.vue')
        },
        {
          path: 'scroll',
          name: 'ComponentTableEventsScroll',
          component: () => import('@/views/table/events/scroll/CodeExample.vue')
        }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        {
          path: 'lineEllipsis',
          name: 'ComponentTableOtherLineEllipsis',
          component: () => import('@/views/table/other/lineEllipsis/CodeExample.vue')
        }
      ]
    }
  ]
}

const gridRouteConfig: RouteRecordRaw = {
  path: 'grid',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
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
          path: 'scrollStyle',
          name: 'ComponentGridBaseScrollStyle',
          component: () => import('@/views/grid/base/scrollStyle/CodeExample.vue')
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
          path: 'padding',
          name: 'ComponentGridBasePadding',
          component: () => import('@/views/grid/base/padding/CodeExample.vue')
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
          path: 'currentColumn',
          name: 'ComponentGridBaseCurrentColumn',
          component: () => import('@/views/grid/base/currentColumn/CodeExample.vue')
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
          path: 'currentRow',
          name: 'ComponentGridBaseCurrentRow',
          component: () => import('@/views/grid/base/currentRow/CodeExample.vue')
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
          path: 'columns',
          name: 'ComponentGridBaseColumns',
          component: () => import('@/views/grid/base/columns/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentGridBaseFull',
          component: () => import('@/views/grid/base/full/CodeExample.vue')
        }
      ]
    },
    {
      path: 'sort',
      component: RouteLayout,
      children: [
        {
          path: 'multiple',
          name: 'ComponentGridSortMultiple',
          component: () => import('@/views/grid/sort/multiple/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridSortRemote',
          component: () => import('@/views/grid/sort/remote/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
      children: [
        {
          path: 'options',
          name: 'ComponentGridFilterOptions',
          component: () => import('@/views/grid/filter/options/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridFilterRemote',
          component: () => import('@/views/grid/filter/remote/CodeExample.vue')
        },
        {
          path: 'headerFilter',
          name: 'ComponentGridFilterHeaderFilter',
          component: () => import('@/views/grid/filter/headerFilter/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filterRender',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridFilterRenderVxeInput',
          component: () => import('@/views/grid/filterRender/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentGridFilterRenderVxeNumberInput',
          component: () => import('@/views/grid/filterRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridFilterRenderVxeSelect',
          component: () => import('@/views/grid/filterRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridFilterRenderVxeDatePicker',
          component: () => import('@/views/grid/filterRender/vxe-date-picker/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filterTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridFilterTemplateVxeInput',
          component: () => import('@/views/grid/filterTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridFilterTemplateVxeSelect',
          component: () => import('@/views/grid/filterTemplate/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentGridRowDragSort',
          component: () => import('@/views/grid/rowDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridRowDragFixed',
          component: () => import('@/views/grid/rowDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentGridRowDragIcon',
          component: () => import('@/views/grid/rowDrag/icon/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridRowDragTree',
          component: () => import('@/views/grid/rowDrag/tree/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentGridRowDragEvents',
          component: () => import('@/views/grid/rowDrag/events/CodeExample.vue')
        },
        {
          path: 'tooltipMethod',
          name: 'ComponentGridRowDragTooltipMethod',
          component: () => import('@/views/grid/rowDrag/tooltipMethod/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentGridRowDragDisabledMethod',
          component: () => import('@/views/grid/rowDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridRowDragVisibleMethod',
          component: () => import('@/views/grid/rowDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentGridRowDragDragMethod',
          component: () => import('@/views/grid/rowDrag/dragMethod/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'tip',
              name: 'ComponentGridRowDragTemplateTip',
              component: () => import('@/views/grid/rowDrag/template/tip/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'colDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentGridColDragSort',
          component: () => import('@/views/grid/colDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridColDragFixed',
          component: () => import('@/views/grid/colDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentGridColDragIcon',
          component: () => import('@/views/grid/colDrag/icon/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridColDragGroup',
          component: () => import('@/views/grid/colDrag/group/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentGridColDragEvents',
          component: () => import('@/views/grid/colDrag/events/CodeExample.vue')
        },
        {
          path: 'tooltipMethod',
          name: 'ComponentGridColDragTooltipMethod',
          component: () => import('@/views/grid/colDrag/tooltipMethod/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentGridColDragDisabledMethod',
          component: () => import('@/views/grid/colDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridColDragVisibleMethod',
          component: () => import('@/views/grid/colDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentGridColDragDragMethod',
          component: () => import('@/views/grid/colDrag/dragMethod/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'tip',
              name: 'ComponentGridColDragTemplateTip',
              component: () => import('@/views/grid/colDrag/template/tip/CodeExample.vue')
            }
          ]
        },
        {
          path: 'rowCol',
          name: 'ComponentGridColDragRowCol',
          component: () => import('@/views/grid/colDrag/rowCol/CodeExample.vue')
        }
      ]
    },
    {
      path: 'layout',
      component: RouteLayout,
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
      component: RouteLayout,
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
        },
        {
          path: 'footerFormat',
          name: 'ComponentGridFooterFooterFormat',
          component: () => import('@/views/grid/footer/footerFormat/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridFooterTemplate',
          component: () => import('@/views/grid/footer/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentGridRadioHighlight',
          component: () => import('@/views/grid/radio/highlight/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridRadioCheckMethod',
          component: () => import('@/views/grid/radio/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridRadioVisibleMethod',
          component: () => import('@/views/grid/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridRadioTemplate',
          component: () => import('@/views/grid/radio/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentGridCheckboxHighlight',
          component: () => import('@/views/grid/checkbox/highlight/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentGridCheckboxField',
          component: () => import('@/views/grid/checkbox/field/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridCheckboxCheckMethod',
          component: () => import('@/views/grid/checkbox/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridCheckboxVisibleMethod',
          component: () => import('@/views/grid/checkbox/visibleMethod/CodeExample.vue')
        },
        {
          path: 'range',
          name: 'ComponentGridCheckboxRange',
          component: () => import('@/views/grid/checkbox/range/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridCheckboxTemplate',
          component: () => import('@/views/grid/checkbox/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'merge',
      component: RouteLayout,
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
        },
        {
          path: 'footer',
          name: 'ComponentGridMergeFooter',
          component: () => import('@/views/grid/merge/footer/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentGridMergeHorizontal',
          component: () => import('@/views/grid/merge/horizontal/CodeExample.vue')
        }
      ]
    },
    {
      path: 'expand',
      component: RouteLayout,
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
        },
        {
          path: 'childTable',
          name: 'ComponentGridExpandChildTable',
          component: () => import('@/views/grid/expand/childTable/CodeExample.vue')
        },
        {
          path: 'selectModalTable',
          name: 'ComponentGridExpandSelectModalTable',
          component: () => import('@/views/grid/expand/selectModalTable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        {
          path: 'prefixConfig',
          name: 'ComponentGridMenuPrefixConfig',
          component: () => import('@/views/grid/menu/prefixConfig/CodeExample.vue')
        },
        {
          path: 'suffixConfig',
          name: 'ComponentGridMenuSuffixConfig',
          component: () => import('@/views/grid/menu/suffixConfig/CodeExample.vue')
        },
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
      component: RouteLayout,
      children: [
        {
          path: 'search',
          name: 'ComponentGridFormSearch',
          component: () => import('@/views/grid/form/search/CodeExample.vue')
        },
        {
          path: 'formData',
          name: 'ComponentGridFormFormData',
          component: () => import('@/views/grid/form/formData/CodeExample.vue')
        },
        {
          path: 'collapse',
          name: 'ComponentGridFormCollapse',
          component: () => import('@/views/grid/form/collapse/CodeExample.vue')
        },
        {
          path: 'itemTemplate',
          name: 'ComponentGridFormItemTemplate',
          component: () => import('@/views/grid/form/itemTemplate/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridFormTemplate',
          component: () => import('@/views/grid/form/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'toolbar',
      component: RouteLayout,
      children: [
        {
          path: 'buttons',
          name: 'ComponentGridToolbarButtons',
          component: () => import('@/views/grid/toolbar/buttons/CodeExample.vue')
        },
        {
          path: 'tools',
          name: 'ComponentGridToolbarTools',
          component: () => import('@/views/grid/toolbar/tools/CodeExample.vue')
        },
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
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'buttons',
              name: 'ComponentGridToolbarTemplateButtons',
              component: () => import('@/views/grid/toolbar/template/buttons/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentGridToolbarTemplateTools',
              component: () => import('@/views/grid/toolbar/template/tools/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'custom',
      component: RouteLayout,
      children: [
        {
          path: 'toolbar',
          name: 'ComponentGridCustomToolbar',
          component: () => import('@/views/grid/custom/toolbar/CodeExample.vue')
        },
        {
          path: 'modal',
          name: 'ComponentGridCustomModal',
          component: () => import('@/views/grid/custom/modal/CodeExample.vue')
        },
        {
          path: 'drawer',
          name: 'ComponentGridCustomDrawer',
          component: () => import('@/views/grid/custom/drawer/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridCustomCheckMethod',
          component: () => import('@/views/grid/custom/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridCustomVisibleMethod',
          component: () => import('@/views/grid/custom/visibleMethod/CodeExample.vue')
        },
        {
          path: 'resizableWidth',
          name: 'ComponentGridCustomResizableWidth',
          component: () => import('@/views/grid/custom/resizableWidth/CodeExample.vue')
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
        {
          path: 'events',
          name: 'ComponentGridCustomEvents',
          component: () => import('@/views/grid/custom/events/CodeExample.vue')
        },
        {
          path: 'immediate',
          name: 'ComponentGridCustomImmediate',
          component: () => import('@/views/grid/custom/immediate/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridCustomRemote',
          component: () => import('@/views/grid/custom/remote/CodeExample.vue')
        },
        {
          path: 'remoteFull',
          name: 'ComponentGridCustomRemoteFull',
          component: () => import('@/views/grid/custom/remoteFull/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridCustomTemplateTop',
              component: () => import('@/views/grid/custom/template/top/CodeExample.vue')
            },
            {
              path: 'header',
              name: 'ComponentGridCustomTemplateHeader',
              component: () => import('@/views/grid/custom/template/header/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridCustomTemplateBottom',
              component: () => import('@/views/grid/custom/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridCustomTemplateDefault',
              component: () => import('@/views/grid/custom/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridCustomTemplateFooter',
              component: () => import('@/views/grid/custom/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'pager',
      component: RouteLayout,
      children: [
        {
          path: 'mockPage',
          name: 'ComponentGridPagerMockPage',
          component: () => import('@/views/grid/pager/mockPage/CodeExample.vue')
        },
        {
          path: 'layouts',
          name: 'ComponentGridPagerLayouts',
          component: () => import('@/views/grid/pager/layouts/CodeExample.vue')
        },
        {
          path: 'start',
          name: 'ComponentGridPagerStart',
          component: () => import('@/views/grid/pager/start/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridPagerTemplate',
          component: () => import('@/views/grid/pager/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'tree',
      component: RouteLayout,
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
        },
        {
          path: 'stripe',
          name: 'ComponentGridTreeStripe',
          component: () => import('@/views/grid/tree/stripe/CodeExample.vue')
        },
        {
          path: 'seqMode',
          name: 'ComponentGridTreeSeqMode',
          component: () => import('@/views/grid/tree/seqMode/CodeExample.vue')
        },
        {
          path: 'line',
          name: 'ComponentGridTreeLine',
          component: () => import('@/views/grid/tree/line/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentGridTreeRadio',
          component: () => import('@/views/grid/tree/radio/CodeExample.vue')
        },
        {
          path: 'checkbox',
          name: 'ComponentGridTreeCheckbox',
          component: () => import('@/views/grid/tree/checkbox/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridTreeGroup',
          component: () => import('@/views/grid/tree/group/CodeExample.vue')
        },
        {
          path: 'groupFields',
          name: 'ComponentGridTreeGroupFields',
          component: () => import('@/views/grid/tree/groupFields/CodeExample.vue')
        }
      ]
    },
    {
      path: 'validate',
      component: RouteLayout,
      children: [
        {
          path: 'rules',
          name: 'ComponentGridValidateRules',
          component: () => import('@/views/grid/validate/rules/CodeExample.vue')
        },
        {
          path: 'string',
          name: 'ComponentGridValidateString',
          component: () => import('@/views/grid/validate/string/CodeExample.vue')
        },
        {
          path: 'number',
          name: 'ComponentGridValidateNumber',
          component: () => import('@/views/grid/validate/number/CodeExample.vue')
        },
        {
          path: 'regexp',
          name: 'ComponentGridValidateRegexp',
          component: () => import('@/views/grid/validate/regexp/CodeExample.vue')
        },
        {
          path: 'array',
          name: 'ComponentGridValidateArray',
          component: () => import('@/views/grid/validate/array/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentGridValidateCustom',
          component: () => import('@/views/grid/validate/custom/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridValidateMode',
          component: () => import('@/views/grid/validate/mode/CodeExample.vue')
        },
        {
          path: 'validateField',
          name: 'ComponentGridValidateValidateField',
          component: () => import('@/views/grid/validate/validateField/CodeExample.vue')
        },
        {
          path: 'theme',
          name: 'ComponentGridValidateTheme',
          component: () => import('@/views/grid/validate/theme/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'valid',
              name: 'ComponentGridValidateTemplateValid',
              component: () => import('@/views/grid/validate/template/valid/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'cellRender',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-switch',
          name: 'ComponentGridCellRenderVxeSwitch',
          component: () => import('@/views/grid/cellRender/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio',
          name: 'ComponentGridCellRenderVxeRadioGroup',
          component: () => import('@/views/grid/cellRender/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox',
          name: 'ComponentGridCellRenderVxeCheckboxGroup',
          component: () => import('@/views/grid/cellRender/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentGridCellRenderVxeButtonGroup',
          component: () => import('@/views/grid/cellRender/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentGridCellRenderVxeImage',
          component: () => import('@/views/grid/cellRender/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentGridCellRenderVxeImageGroup',
          component: () => import('@/views/grid/cellRender/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentGridCellRenderVxeTextEllipsis',
          component: () => import('@/views/grid/cellRender/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentGridCellRenderVxeRate',
          component: () => import('@/views/grid/cellRender/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentGridCellRenderVxeUpload',
          component: () => import('@/views/grid/cellRender/vxe-upload/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cellTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-tag',
          name: 'ComponentGridCellTemplateVxeTag',
          component: () => import('@/views/grid/cellTemplate/vxe-tag/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentGridCellTemplateVxeSwitch',
          component: () => import('@/views/grid/cellTemplate/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentGridCellTemplateVxeButtonGroup',
          component: () => import('@/views/grid/cellTemplate/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-button',
          name: 'ComponentGridCellTemplateVxeButton',
          component: () => import('@/views/grid/cellTemplate/vxe-button/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentGridCellTemplateVxeImage',
          component: () => import('@/views/grid/cellTemplate/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentGridCellTemplateVxeUpload',
          component: () => import('@/views/grid/cellTemplate/vxe-upload/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentGridCellTemplateVxeModal',
          component: () => import('@/views/grid/cellTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentGridCellTemplateVxeDrawer',
          component: () => import('@/views/grid/cellTemplate/vxe-drawer/CodeExample.vue')
        },
        {
          path: 'allEdit',
          name: 'ComponentGridCellTemplateAllEdit',
          component: () => import('@/views/grid/cellTemplate/allEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'keyboard',
      component: RouteLayout,
      children: [
        {
          path: 'selected',
          name: 'ComponentGridKeyboardSelected',
          component: () => import('@/views/grid/keyboard/selected/CodeExample.vue')
        },
        {
          path: 'keyboard',
          name: 'ComponentGridKeyboardKeyboard',
          component: () => import('@/views/grid/keyboard/keyboard/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentGridKeyboardEdit',
          component: () => import('@/views/grid/keyboard/edit/CodeExample.vue')
        },
        {
          path: 'editMethod',
          name: 'ComponentGridKeyboardEditMethod',
          component: () => import('@/views/grid/keyboard/editMethod/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridKeyboardTree',
          component: () => import('@/views/grid/keyboard/tree/CodeExample.vue')
        },
        {
          path: 'treeEdit',
          name: 'ComponentGridKeyboardTreeEdit',
          component: () => import('@/views/grid/keyboard/treeEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        {
          path: 'manual',
          name: 'ComponentGridEditManual',
          component: () => import('@/views/grid/edit/manual/CodeExample.vue')
        },
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
        },
        {
          path: 'cellValid',
          name: 'ComponentGridEditCellValid',
          component: () => import('@/views/grid/edit/cellValid/CodeExample.vue')
        },
        {
          path: 'rowValid',
          name: 'ComponentGridEditRowValid',
          component: () => import('@/views/grid/edit/rowValid/CodeExample.vue')
        },
        {
          path: 'handleTemp',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentGridEditHandleTempInsert',
              component: () => import('@/views/grid/edit/handleTemp/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentGridEditHandleTempRemove',
              component: () => import('@/views/grid/edit/handleTemp/remove/CodeExample.vue')
            },
            {
              path: 'pending',
              name: 'ComponentGridEditHandleTempPending',
              component: () => import('@/views/grid/edit/handleTemp/pending/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentGridEditHandleTempUpdate',
              component: () => import('@/views/grid/edit/handleTemp/update/CodeExample.vue')
            },
            {
              path: 'revert',
              name: 'ComponentGridEditHandleTempRevert',
              component: () => import('@/views/grid/edit/handleTemp/revert/CodeExample.vue')
            }
          ]
        },
        {
          path: 'handleOriginal',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentGridEditHandleOriginalInsert',
              component: () => import('@/views/grid/edit/handleOriginal/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentGridEditHandleOriginalRemove',
              component: () => import('@/views/grid/edit/handleOriginal/remove/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentGridEditHandleOriginalUpdate',
              component: () => import('@/views/grid/edit/handleOriginal/update/CodeExample.vue')
            }
          ]
        },
        {
          path: 'rowImmediately',
          name: 'ComponentGridEditRowImmediately',
          component: () => import('@/views/grid/edit/rowImmediately/CodeExample.vue')
        },
        {
          path: 'footerImmediately',
          name: 'ComponentGridEditFooterImmediately',
          component: () => import('@/views/grid/edit/footerImmediately/CodeExample.vue')
        },
        {
          path: 'modalForm',
          name: 'ComponentGridEditModalForm',
          component: () => import('@/views/grid/edit/modalForm/CodeExample.vue')
        },
        {
          path: 'modalSelect',
          name: 'ComponentGridEditModalSelect',
          component: () => import('@/views/grid/edit/modalSelect/CodeExample.vue')
        },
        {
          path: 'drawerForm',
          name: 'ComponentGridEditDrawerForm',
          component: () => import('@/views/grid/edit/drawerForm/CodeExample.vue')
        },
        {
          path: 'drawerSelect',
          name: 'ComponentGridEditDrawerSelect',
          component: () => import('@/views/grid/edit/drawerSelect/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editRender',
      component: RouteLayout,
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
          path: 'vxe-number-input',
          name: 'ComponentGridEditRenderVxeNumberInput',
          component: () => import('@/views/grid/editRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentGridEditRenderVxeIconPicker',
          component: () => import('@/views/grid/editRender/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridEditRenderVxeDatePicker',
          component: () => import('@/views/grid/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditRenderVxeSelect',
          component: () => import('@/views/grid/editRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentGridEditRenderVxeTreeSelect',
          component: () => import('@/views/grid/editRender/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentGridEditRenderVxeTableSelect',
          component: () => import('@/views/grid/editRender/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'cellDisable',
          name: 'ComponentGridEditRenderCellDisable',
          component: () => import('@/views/grid/editRender/cellDisable/CodeExample.vue')
        },
        {
          path: 'rowDisable',
          name: 'ComponentGridEditRenderRowDisable',
          component: () => import('@/views/grid/editRender/rowDisable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridEditTemplateVxeInput',
          component: () => import('@/views/grid/editTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentGridEditTemplateVxeNumberInput',
          component: () => import('@/views/grid/editTemplate/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentGridEditTemplateVxeIconPicker',
          component: () => import('@/views/grid/editTemplate/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridEditTemplateVxeDatePicker',
          component: () => import('@/views/grid/editTemplate/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditTemplateVxeSelect',
          component: () => import('@/views/grid/editTemplate/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentGridEditTemplateVxeTreeSelect',
          component: () => import('@/views/grid/editTemplate/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentGridEditTemplateVxeTableSelect',
          component: () => import('@/views/grid/editTemplate/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'vxe-pulldown',
          name: 'ComponentGridEditTemplateVxePulldown',
          component: () => import('@/views/grid/editTemplate/vxe-pulldown/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentGridEditTemplateVxeModal',
          component: () => import('@/views/grid/editTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentGridEditTemplateVxeDrawer',
          component: () => import('@/views/grid/editTemplate/vxe-drawer/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
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
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridImportBase',
          component: () => import('@/views/grid/import/base/CodeExample.vue')
        },
        {
          path: 'txt',
          name: 'ComponentGridImportTxt',
          component: () => import('@/views/grid/import/txt/CodeExample.vue')
        },
        {
          path: 'xml',
          name: 'ComponentGridImportXml',
          component: () => import('@/views/grid/import/xml/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentGridImportHtml',
          component: () => import('@/views/grid/import/html/CodeExample.vue')
        },
        {
          path: 'csv',
          name: 'ComponentGridImportCsv',
          component: () => import('@/views/grid/import/csv/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentGridImportAdvanced',
          component: () => import('@/views/grid/import/advanced/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridImportRemote',
          component: () => import('@/views/grid/import/remote/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridImportTemplateTop',
              component: () => import('@/views/grid/import/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridImportTemplateBottom',
              component: () => import('@/views/grid/import/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridImportTemplateDefault',
              component: () => import('@/views/grid/import/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridImportTemplateFooter',
              component: () => import('@/views/grid/import/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'export',
      component: RouteLayout,
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
          path: 'exportMethod',
          name: 'ComponentGridExportExportMethod',
          component: () => import('@/views/grid/export/exportMethod/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentGridExportAdvanced',
          component: () => import('@/views/grid/export/advanced/CodeExample.vue')
        },
        {
          path: 'types',
          name: 'ComponentGridExportTypes',
          component: () => import('@/views/grid/export/types/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridExportRemote',
          component: () => import('@/views/grid/export/remote/CodeExample.vue')
        },
        {
          path: 'modes',
          name: 'ComponentGridExportModes',
          component: () => import('@/views/grid/export/modes/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridExportTemplateTop',
              component: () => import('@/views/grid/export/template/top/CodeExample.vue')
            },
            {
              path: 'parameter',
              name: 'ComponentGridExportTemplateParameter',
              component: () => import('@/views/grid/export/template/parameter/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridExportTemplateBottom',
              component: () => import('@/views/grid/export/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridExportTemplateDefault',
              component: () => import('@/views/grid/export/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridExportTemplateFooter',
              component: () => import('@/views/grid/export/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'print',
      component: RouteLayout,
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
        },
        {
          path: 'page',
          name: 'ComponentGridPrintPage',
          component: () => import('@/views/grid/print/page/CodeExample.vue')
        },
        {
          path: 'multilist',
          name: 'ComponentGridPrintMultilist',
          component: () => import('@/views/grid/print/multilist/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentGridPrintHeader',
          component: () => import('@/views/grid/print/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridPrintFooter',
          component: () => import('@/views/grid/print/footer/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridPrintTemplateTop',
              component: () => import('@/views/grid/print/template/top/CodeExample.vue')
            },
            {
              path: 'parameter',
              name: 'ComponentGridPrintTemplateParameter',
              component: () => import('@/views/grid/print/template/parameter/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridPrintTemplateBottom',
              component: () => import('@/views/grid/print/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridPrintTemplateDefault',
              component: () => import('@/views/grid/print/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridPrintTemplateFooter',
              component: () => import('@/views/grid/print/template/footer/CodeExample.vue')
            }
          ]
        },
        {
          path: 'order',
          name: 'ComponentGridPrintOrder',
          component: () => import('@/views/grid/print/order/CodeExample.vue')
        }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
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
          path: 'loadData',
          name: 'ComponentGridScrollLoadData',
          component: () => import('@/views/grid/scroll/loadData/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridScrollFixed',
          component: () => import('@/views/grid/scroll/fixed/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridScrollMode',
          component: () => import('@/views/grid/scroll/mode/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentGridScrollRowHeight',
          component: () => import('@/views/grid/scroll/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowHeight',
          name: 'ComponentGridScrollAutoRowHeight',
          component: () => import('@/views/grid/scroll/autoRowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowVH',
          name: 'ComponentGridScrollAutoRowVH',
          component: () => import('@/views/grid/scroll/autoRowVH/CodeExample.vue')
        },
        {
          path: 'autoRowFixed',
          name: 'ComponentGridScrollAutoRowFixed',
          component: () => import('@/views/grid/scroll/autoRowFixed/CodeExample.vue')
        },
        {
          path: 'dragRow',
          name: 'ComponentGridScrollDragRow',
          component: () => import('@/views/grid/scroll/dragRow/CodeExample.vue')
        },
        {
          path: 'dragCol',
          name: 'ComponentGridScrollDragCol',
          component: () => import('@/views/grid/scroll/dragCol/CodeExample.vue')
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
        },
        {
          path: 'merge',
          name: 'ComponentGridScrollMerge',
          component: () => import('@/views/grid/scroll/merge/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridScrollTree',
          component: () => import('@/views/grid/scroll/tree/CodeExample.vue')
        },
        {
          path: 'hvTree',
          name: 'ComponentGridScrollHVTree',
          component: () => import('@/views/grid/scroll/hvTree/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentGridScrollEdit',
          component: () => import('@/views/grid/scroll/edit/CodeExample.vue')
        },
        {
          path: 'hvEdit',
          name: 'ComponentGridScrollHVEdit',
          component: () => import('@/views/grid/scroll/hvEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'proxy',
      component: RouteLayout,
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
          path: 'sort',
          name: 'ComponentGridProxySort',
          component: () => import('@/views/grid/proxy/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentGridProxyFilter',
          component: () => import('@/views/grid/proxy/filter/CodeExample.vue')
        },
        {
          path: 'form',
          name: 'ComponentGridProxyForm',
          component: () => import('@/views/grid/proxy/form/CodeExample.vue')
        },
        {
          path: 'seq',
          name: 'ComponentGridProxySeq',
          component: () => import('@/views/grid/proxy/seq/CodeExample.vue')
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
    },
    {
      path: 'search',
      component: RouteLayout,
      children: [
        {
          path: 'list',
          name: 'ComponentGridSearchList',
          component: () => import('@/views/grid/search/list/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridSearchTree',
          component: () => import('@/views/grid/search/tree/CodeExample.vue')
        }
      ]
    },
    {
      path: 'events',
      component: RouteLayout,
      children: [
        {
          path: 'click',
          name: 'ComponentGridEventsClick',
          component: () => import('@/views/grid/events/click/CodeExample.vue')
        },
        {
          path: 'scroll',
          name: 'ComponentGridEventsScroll',
          component: () => import('@/views/grid/events/scroll/CodeExample.vue')
        }
      ]
    },
    {
      path: 'loadMore',
      component: RouteLayout,
      children: [
        {
          path: 'horizontal',
          name: 'ComponentGridLoadMoreHorizontal',
          component: () => import('@/views/grid/loadMore/horizontal/CodeExample.vue')
        },
        {
          path: 'vertical',
          name: 'ComponentGridLoadMoreVertical',
          component: () => import('@/views/grid/loadMore/vertical/CodeExample.vue')
        },
        {
          path: 'vh',
          name: 'ComponentGridLoadMoreVH',
          component: () => import('@/views/grid/loadMore/vh/CodeExample.vue')
        },
        {
          path: 'boundaryX',
          name: 'ComponentGridLoadMoreBoundaryX',
          component: () => import('@/views/grid/loadMore/boundaryX/CodeExample.vue')
        },
        {
          path: 'boundaryY',
          name: 'ComponentGridLoadMoreBoundaryY',
          component: () => import('@/views/grid/loadMore/boundaryY/CodeExample.vue')
        },
        {
          path: 'boundaryXY',
          name: 'ComponentGridLoadMoreBoundaryXY',
          component: () => import('@/views/grid/loadMore/boundaryXY/CodeExample.vue')
        }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        {
          path: 'scrollTo',
          name: 'ComponentGridOtherScrollTo',
          component: () => import('@/views/grid/other/scrollTo/CodeExample.vue')
        },
        {
          path: 'reverse',
          name: 'ComponentGridOtherReverse',
          component: () => import('@/views/grid/other/reverse/CodeExample.vue')
        },
        {
          path: 'fileList',
          name: 'ComponentGridOtherFileList',
          component: () => import('@/views/grid/other/fileList/CodeExample.vue')
        },
        {
          path: 'lineEllipsis',
          name: 'ComponentGridOtherLineEllipsis',
          component: () => import('@/views/grid/other/lineEllipsis/CodeExample.vue')
        },
        {
          path: 'yearMonth',
          name: 'ComponentGridOtherYearMonth',
          component: () => import('@/views/grid/other/yearMonth/CodeExample.vue')
        }
      ]
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
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
    component: PageLayout,
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
        path: 'cdn',
        name: 'StartCDN',
        component: StartCDN
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
        path: 'permission',
        name: 'StartPermission',
        component: StartPermission
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
    path: '/enterprise',
    component: PageLayout,
    children: [
      {
        path: 'preview/:previewCode',
        name: 'EnterprisePreview',
        component: EnterprisePreview
      }
    ]
  },
  {
    path: '/tool',
    component: PageLayout,
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
    component: PageLayout,
    children: [
      {
        path: 'formats',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
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
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
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
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
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
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
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
            component: RouteLayout,
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
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
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
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
                component: RouteLayout,
                children: [
                  {
                    path: 'myItemAmount',
                    name: 'GlobalRendererFormItemMyItemAmount',
                    component: () => import('@/views/global/renderer/form/item/myItemAmount/CodeExample.vue')
                  },
                  {
                    path: 'myItemUpload',
                    name: 'GlobalRendererFormItemMyItemUpload',
                    component: () => import('@/views/global/renderer/form/item/myItemUpload/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
                component: RouteLayout,
                children: [
                  {
                    path: 'myCellLink',
                    name: 'GlobalRendererTableDefaultMyLink',
                    component: () => import('@/views/global/renderer/table/default/myCellLink/CodeExample.vue')
                  },
                  {
                    path: 'myCellImg',
                    name: 'GlobalRendererTableDefaultMyImg',
                    component: () => import('@/views/global/renderer/table/default/myCellImg/CodeExample.vue')
                  },
                  {
                    path: 'myCellAmount',
                    name: 'GlobalRendererTableDefaultMyAmount',
                    component: () => import('@/views/global/renderer/table/default/myCellAmount/CodeExample.vue')
                  },
                  {
                    path: 'myHeaderLink',
                    name: 'GlobalRendererTableDefaultMyHeaderLink',
                    component: () => import('@/views/global/renderer/table/default/myHeaderLink/CodeExample.vue')
                  },
                  {
                    path: 'myFooterAmount',
                    name: 'GlobalRendererTableDefaultMyFooterAmount',
                    component: () => import('@/views/global/renderer/table/default/myFooterAmount/CodeExample.vue')
                  },
                  {
                    path: 'myFullAmount',
                    name: 'GlobalRendererTableDefaultMyFullAmount',
                    component: () => import('@/views/global/renderer/table/default/myFullAmount/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'edit',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEditAmount',
                    name: 'GlobalRendererTableEditMyEditAmount',
                    component: () => import('@/views/global/renderer/table/edit/myEditAmount/CodeExample.vue')
                  },
                  {
                    path: 'myEditPulldown',
                    name: 'GlobalRendererTableEditMyEditPulldown',
                    component: () => import('@/views/global/renderer/table/edit/myEditPulldown/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'expand',
                component: RouteLayout,
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
                component: RouteLayout,
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
                component: RouteLayout,
                children: [
                  {
                    path: 'myFilterInput',
                    name: 'GlobalRendererTableFilterMyFilterInput',
                    component: () => import('@/views/global/renderer/table/filter/myFilterInput/CodeExample.vue')
                  },
                  {
                    path: 'myFilterComplex',
                    name: 'GlobalRendererTableFilterMyFilterComplex',
                    component: () => import('@/views/global/renderer/table/filter/myFilterComplex/CodeExample.vue')
                  },
                  {
                    path: 'myFilterContent',
                    name: 'GlobalRendererTableFilterMyFilterContent',
                    component: () => import('@/views/global/renderer/table/filter/myFilterContent/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'empty',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEmptyImg',
                    name: 'GlobalRendererTableMyEmptyImg',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyImg/CodeExample.vue')
                  },
                  {
                    path: 'myEmptyText',
                    name: 'GlobalRendererTableMyEmptyText',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyText/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'form-design',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormDesignAPI',
                component: () => import('@/views/global/renderer/form-design/api/CodeExample.vue')
              },
              {
                path: 'widget',
                component: RouteLayout,
                children: [
                  {
                    path: 'myInputWidget',
                    name: 'GlobalRendererFormDesignWidgetMyInputWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myInputWidget/CodeExample.vue')
                  },
                  {
                    path: 'myTextareaWidget',
                    name: 'GlobalRendererFormDesignWidgetMyTextareaWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myTextareaWidget/CodeExample.vue')
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
    component: PageLayout,
    children: [
      tableRouteConfig,
      gridRouteConfig
    ]
  },
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: ':name/api',
        name: 'DocsApi',
        component: () => import('@/views/api/DocsApi.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
