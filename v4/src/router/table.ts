import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const tableRouteConfig: RouteRecordRaw = {
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
          path: 'visible',
          name: 'ComponentTableBaseVisible',
          component: () => import('@/views/table/base/visible/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentTableBaseWidth',
          component: () => import('@/views/table/base/width/CodeExample.vue')
        },
        {
          path: 'autoWidth',
          name: 'ComponentTableBaseAutoWidth',
          component: () => import('@/views/table/base/autoWidth/CodeExample.vue')
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
          path: 'columnHeight',
          name: 'ComponentTableBaseColumnHeight',
          component: () => import('@/views/table/base/columnHeight/CodeExample.vue')
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
          path: 'showFooter',
          name: 'ComponentTableFooterShowFooter',
          component: () => import('@/views/table/footer/showFooter/CodeExample.vue')
        },
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
        { path: 'base', name: 'ComponentTableSortBase', component: () => import('@/views/table/sort/base/CodeExample.vue') },
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
          path: 'allowBtn',
          name: 'ComponentTableSortAllowBtn',
          component: () => import('@/views/table/sort/allowBtn/CodeExample.vue')
        },
        {
          path: 'defaultSort',
          name: 'ComponentTableSortDefaultSort',
          component: () => import('@/views/table/sort/defaultSort/CodeExample.vue')
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
        },
        {
          path: 'remote',
          name: 'ComponentTableSortRemote',
          component: () => import('@/views/table/sort/remote/CodeExample.vue')
        },
        {
          path: 'setSort',
          name: 'ComponentTableSortSetSort',
          component: () => import('@/views/table/sort/setSort/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentTableFilterBase', component: () => import('@/views/table/filter/base/CodeExample.vue') },
        {
          path: 'remote',
          name: 'ComponentTableFilterRemote',
          component: () => import('@/views/table/filter/remote/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableFilterTree',
          component: () => import('@/views/table/filter/tree/CodeExample.vue')
        },
        {
          path: 'setFilter',
          name: 'ComponentTableFilterSetFilter',
          component: () => import('@/views/table/filter/setFilter/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableFilterManual',
          component: () => import('@/views/table/filter/manual/CodeExample.vue')
        },
        {
          path: 'headerFilter',
          name: 'ComponentTableFilterHeaderFilter',
          component: () => import('@/views/table/filter/headerFilter/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowResizable',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTableRowResizableBase',
          component: () => import('@/views/table/rowResizable/base/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableRowResizableFixed',
          component: () => import('@/views/table/rowResizable/fixed/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableRowResizableTree',
          component: () => import('@/views/table/rowResizable/tree/CodeExample.vue')
        },
        {
          path: 'rowResize',
          name: 'ComponentTableRowResizableRowResize',
          component: () => import('@/views/table/rowResizable/rowResize/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableRowResizableManual',
          component: () => import('@/views/table/rowResizable/manual/CodeExample.vue')
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
          path: 'showGuidesStatus',
          name: 'ComponentTableRowDragShowGuidesStatus',
          component: () => import('@/views/table/rowDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableRowDragTrigger',
          component: () => import('@/views/table/rowDrag/trigger/CodeExample.vue')
        },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentTableRowDragTreeBase',
              component: () => import('@/views/table/rowDrag/tree/base/CodeExample.vue')
            },
            {
              path: 'cossDrag',
              name: 'ComponentTableRowDragTreeCossDrag',
              component: () => import('@/views/table/rowDrag/tree/cossDrag/CodeExample.vue')
            },
            {
              path: 'selfToChildDrag',
              name: 'ComponentTableRowDragTreeSelfToChildDrag',
              component: () => import('@/views/table/rowDrag/tree/selfToChildDrag/CodeExample.vue')
            },
            {
              path: 'toChildDrag',
              name: 'ComponentTableRowDragTreeToChildDrag',
              component: () => import('@/views/table/rowDrag/tree/toChildDrag/CodeExample.vue')
            },
            {
              path: 'showGuidesStatus',
              name: 'ComponentTableRowDragTreeShowGuidesStatus',
              component: () => import('@/views/table/rowDrag/tree/showGuidesStatus/CodeExample.vue')
            },
            {
              path: 'dragMethod',
              name: 'ComponentTableRowDragTreeDragMethod',
              component: () => import('@/views/table/rowDrag/tree/dragMethod/CodeExample.vue')
            },
            {
              path: 'lazy',
              name: 'ComponentTableRowDragTreeLazy',
              component: () => import('@/views/table/rowDrag/tree/lazy/CodeExample.vue')
            }
          ]
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
      path: 'colResizable',
      component: RouteLayout,
      children: [
        {
          path: 'mode',
          name: 'ComponentTableColResizableMode',
          component: () => import('@/views/table/colResizable/mode/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableColResizableGroup',
          component: () => import('@/views/table/colResizable/group/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableColResizableFixed',
          component: () => import('@/views/table/colResizable/fixed/CodeExample.vue')
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
          path: 'showGuidesStatus',
          name: 'ComponentTableColDragShowGuidesStatus',
          component: () => import('@/views/table/colDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableColDragGroup',
          component: () => import('@/views/table/colDrag/group/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableColDragTrigger',
          component: () => import('@/views/table/colDrag/trigger/CodeExample.vue')
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
      path: 'rowGroup',
      component: RouteLayout,
      children: [
        { path: 'basic', name: 'ComponentTableRowGroupBasic', component: () => import('@/views/table/rowGroup/basic/CodeExample.vue') },
        { path: 'groupFields', name: 'ComponentTableRowGroupGroupFields', component: () => import('@/views/table/rowGroup/groupFields/CodeExample.vue') },
        { path: 'total', name: 'ComponentTableRowGroupTotal', component: () => import('@/views/table/rowGroup/total/CodeExample.vue') },
        { path: 'handleSet', name: 'ComponentTableRowGroupHandleSet', component: () => import('@/views/table/rowGroup/handleSet/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            { path: 'default', name: 'ComponentTableRowGroupTemplateDefault', component: () => import('@/views/table/rowGroup/template/default/CodeExample.vue') }
          ]
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
          path: 'refresh',
          name: 'ComponentTableToolbarRefresh',
          component: () => import('@/views/table/toolbar/refresh/CodeExample.vue')
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
              path: 'buttonPrefix',
              name: 'ComponentTableToolbarTemplateButtonPrefix',
              component: () => import('@/views/table/toolbar/template/buttonPrefix/CodeExample.vue')
            },
            {
              path: 'buttonSuffix',
              name: 'ComponentTableToolbarTemplateButtonSuffix',
              component: () => import('@/views/table/toolbar/template/buttonSuffix/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentTableToolbarTemplateTools',
              component: () => import('@/views/table/toolbar/template/tools/CodeExample.vue')
            },
            {
              path: 'toolPrefix',
              name: 'ComponentTableToolbarTemplateToolPrefix',
              component: () => import('@/views/table/toolbar/template/toolPrefix/CodeExample.vue')
            },
            {
              path: 'toolSuffix',
              name: 'ComponentTableToolbarTemplateToolSuffix',
              component: () => import('@/views/table/toolbar/template/toolSuffix/CodeExample.vue')
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
          path: 'defHide',
          name: 'ComponentTableCustomDefHide',
          component: () => import('@/views/table/custom/defHide/CodeExample.vue')
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
          path: 'enterAppend',
          name: 'ComponentTableKeyboardEnterAppend',
          component: () => import('@/views/table/keyboard/enterAppend/CodeExample.vue')
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
          path: 'showNegativeStatus',
          name: 'ComponentTableEditShowNegativeStatus',
          component: () => import('@/views/table/edit/showNegativeStatus/CodeExample.vue')
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
              path: 'edit',
              name: 'ComponentTableValidateTemplateEdit',
              component: () => import('@/views/table/validate/template/edit/CodeExample.vue')
            },
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
          path: 'format-number-input',
          name: 'ComponentTableCellRenderFormatNumberInput',
          component: () => import('@/views/table/cellRender/format-number-input/CodeExample.vue')
        },
        {
          path: 'format-option',
          name: 'ComponentTableCellRenderFormatOption',
          component: () => import('@/views/table/cellRender/format-option/CodeExample.vue')
        },
        {
          path: 'format-tree',
          name: 'ComponentTableCellRenderFormatTree',
          component: () => import('@/views/table/cellRender/format-tree/CodeExample.vue')
        },
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
          path: 'vxe-checkbox',
          name: 'ComponentTableCellRenderVxeCheckbox',
          component: () => import('@/views/table/cellRender/vxe-checkbox/CodeExample.vue')
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
          path: 'vxe-checkbox',
          name: 'ComponentTableCellTemplateVxeCheckbox',
          component: () => import('@/views/table/cellTemplate/vxe-checkbox/CodeExample.vue')
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
        { path: 'vxe-input', name: 'ComponentTableCellTemplateVxeInput', component: () => import('@/views/table/cellTemplate/vxe-input/CodeExample.vue') },
        { path: 'vxe-textarea', name: 'ComponentTableCellTemplateVxeTextarea', component: () => import('@/views/table/cellTemplate/vxe-textarea/CodeExample.vue') },
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
          component: () => import('@/views/table/editRender/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-color-picker',
          name: 'ComponentTableEditRenderVxeColorPicker',
          component: () => import('@/views/table/editRender/vxe-color-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentTableEditRenderVxeDatePicker',
          component: () => import('@/views/table/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-range-picker',
          name: 'ComponentTableEditRenderVxeDateRangePicker',
          component: () => import('@/views/table/editRender/vxe-date-range-picker/CodeExample.vue')
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
        },
        {
          path: 'events',
          name: 'ComponentTableEditRenderEvents',
          component: () => import('@/views/table/editRender/events/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-button',
          name: 'ComponentTableEditTemplateVxeButton',
          component: () => import('@/views/table/editTemplate/vxe-button/CodeExample.vue')
        },
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
          path: 'vxe-date-rangepicker',
          name: 'ComponentTableEditTemplateVxeDateRangePicker',
          component: () => import('@/views/table/editTemplate/vxe-date-range-picker/CodeExample.vue')
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
        },
        {
          path: 'columns',
          name: 'ComponentTableExportColumns',
          component: () => import('@/views/table/export/columns/CodeExample.vue')
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
        { path: 'tabs', name: 'ComponentTableOtherTabs', component: () => import('@/views/table/other/tabs/CodeExample.vue') },
        { path: 'lineEllipsis', name: 'ComponentTableOtherLineEllipsis', component: () => import('@/views/table/other/lineEllipsis/CodeExample.vue') },
        { path: 'bookkeepingVoucher', name: 'ComponentTableOtherBookkeepingVoucher', component: () => import('@/views/table/other/bookkeepingVoucher/CodeExample.vue') },
        { path: 'leftRight', name: 'ComponentTableOtherLeftRight', component: () => import('@/views/table/other/leftRight/CodeExample.vue') }
      ]
    }
  ]
}
