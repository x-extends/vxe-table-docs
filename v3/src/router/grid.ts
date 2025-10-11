import { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const gridRouteConfig: RouteConfig = {
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
          path: 'visible',
          name: 'ComponentGridBaseVisible',
          component: () => import('@/views/grid/base/visible/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentGridBaseWidth',
          component: () => import('@/views/grid/base/width/CodeExample.vue')
        },
        {
          path: 'autoWidth',
          name: 'ComponentGridBaseAutoWidth',
          component: () => import('@/views/grid/base/autoWidth/CodeExample.vue')
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
          path: 'resizableWidth',
          name: 'ComponentGridBaseHeaderResizableWidth',
          component: () => import('@/views/grid/base/resizable/CodeExample.vue')
        },
        {
          path: 'resizableHeight',
          name: 'ComponentGridBaseHeaderResizableHeight',
          component: () => import('@/views/grid/base/resizableHeight/CodeExample.vue')
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
          path: 'columnHeight',
          name: 'ComponentGridBaseColumnHeight',
          component: () => import('@/views/grid/base/columnHeight/CodeExample.vue')
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
          path: 'titlePrefix',
          name: 'ComponentGridBaseTitlePrefix',
          component: () => import('@/views/grid/base/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentGridBaseTitleSuffix',
          component: () => import('@/views/grid/base/titleSuffix/CodeExample.vue')
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
      path: 'cell',
      component: RouteLayout,
      children: [
        { path: 'width', name: 'ComponentGridCellWidth', component: () => import('@/views/grid/cell/width/CodeExample.vue') },
        { path: 'padding', name: 'ComponentGridCellPadding', component: () => import('@/views/grid/cell/padding/CodeExample.vue') },
        { path: 'verticalAlign', name: 'ComponentGridCellVerticalAlign', component: () => import('@/views/grid/cell/verticalAlign/CodeExample.vue') },
        { path: 'height', name: 'ComponentGridCellHeight', component: () => import('@/views/grid/cell/height/CodeExample.vue') }
      ]
    },
    {
      path: 'sort',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentGridSortBase', component: () => import('@/views/grid/sort/base/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentGridSortMultiple',
          component: () => import('@/views/grid/sort/multiple/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridSortTree',
          component: () => import('@/views/grid/sort/tree/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridSortRemote',
          component: () => import('@/views/grid/sort/remote/CodeExample.vue')
        },
        {
          path: 'setSort',
          name: 'ComponentGridSortSetSort',
          component: () => import('@/views/grid/sort/setSort/CodeExample.vue')
        },
        {
          path: 'iconVisibleMethod',
          name: 'ComponentGridSortIconVisibleMethod',
          component: () => import('@/views/grid/sort/iconVisibleMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentGridFilterBase', component: () => import('@/views/grid/filter/base/CodeExample.vue') },
        { path: 'icon', name: 'ComponentGridFilterIcon', component: () => import('@/views/grid/filter/icon/CodeExample.vue') },
        {
          path: 'remote',
          name: 'ComponentGridFilterRemote',
          component: () => import('@/views/grid/filter/remote/CodeExample.vue')
        },
        {
          path: 'pager',
          name: 'ComponentGridFilterPager',
          component: () => import('@/views/grid/filter/pager/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridFilterTree',
          component: () => import('@/views/grid/filter/tree/CodeExample.vue')
        },
        {
          path: 'setFilter',
          name: 'ComponentGridFilterSetFilter',
          component: () => import('@/views/grid/filter/setFilter/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridFilterManual',
          component: () => import('@/views/grid/filter/manual/CodeExample.vue')
        },
        {
          path: 'iconVisibleMethod',
          name: 'ComponentGridFilterIconVisibleMethod',
          component: () => import('@/views/grid/filter/iconVisibleMethod/CodeExample.vue')
        },
        {
          path: 'floating',
          component: RouteLayout,
          children: [
            { path: 'vxe-input', name: 'ComponentGridFilterFloatingVxeInput', component: () => import('@/views/grid/filter/floating/vxe-input/CodeExample.vue') },
            { path: 'vxe-number-input', name: 'ComponentGridFilterFloatingVxeNumberInput', component: () => import('@/views/grid/filter/floating/vxe-number-input/CodeExample.vue') },
            { path: 'vxe-date-picker', name: 'ComponentGridFilterFloatingVxeDatePicker', component: () => import('@/views/grid/filter/floating/vxe-date-picker/CodeExample.vue') },
            { path: 'vxe-select', name: 'ComponentGridFilterFloatingVxeSelect', component: () => import('@/views/grid/filter/floating/vxe-select/CodeExample.vue') },
            { path: 'full', name: 'ComponentGridFilterFloatingFull', component: () => import('@/views/grid/filter/floating/full/CodeExample.vue') },
            { path: 'template', name: 'ComponentGridFilterFloatingTemplate', component: () => import('@/views/grid/filter/floating/template/CodeExample.vue') }
          ]
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
      path: 'currentColumn',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridCurrentColumnBase',
          component: () => import('@/views/grid/currentColumn/base/CodeExample.vue')
        },
        {
          path: 'beforeSelectMethod',
          name: 'ComponentGridCurrentColumnBeforeSelectMethod',
          component: () => import('@/views/grid/currentColumn/beforeSelectMethod/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridCurrentColumnTrigger',
          component: () => import('@/views/grid/currentColumn/trigger/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colResizable',
      component: RouteLayout,
      children: [
        {
          path: 'mode',
          name: 'ComponentGridColResizableMode',
          component: () => import('@/views/grid/colResizable/mode/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridColResizableGroup',
          component: () => import('@/views/grid/colResizable/group/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridColResizableFixed',
          component: () => import('@/views/grid/colResizable/fixed/CodeExample.vue')
        },
        {
          path: 'dblclickAutoWidth',
          name: 'ComponentGridColResizableDblclickAutoWidth',
          component: () => import('@/views/grid/colResizable/dblclickAutoWidth/CodeExample.vue')
        },
        {
          path: 'allColumnDrag',
          name: 'ComponentGridColResizableAllColumnDrag',
          component: () => import('@/views/grid/colResizable/allColumnDrag/CodeExample.vue')
        },
        {
          path: 'minWidth',
          name: 'ComponentGridColResizableMinWidth',
          component: () => import('@/views/grid/colResizable/minWidth/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridColResizableManual',
          component: () => import('@/views/grid/colResizable/manual/CodeExample.vue')
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
          path: 'custom',
          name: 'ComponentGridColDragCustom',
          component: () => import('@/views/grid/colDrag/custom/CodeExample.vue')
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
          path: 'showGuidesStatus',
          name: 'ComponentGridColDragShowGuidesStatus',
          component: () => import('@/views/grid/colDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridColDragGroup',
          component: () => import('@/views/grid/colDrag/group/CodeExample.vue')
        },
        {
          path: 'peerDrag',
          name: 'ComponentGridColDragPeerDrag',
          component: () => import('@/views/grid/colDrag/peerDrag/CodeExample.vue')
        },
        {
          path: 'crossDrag',
          name: 'ComponentGridColDragCrossDrag',
          component: () => import('@/views/grid/colDrag/crossDrag/CodeExample.vue')
        },
        {
          path: 'selfToChildDrag',
          name: 'ComponentGridColDragSelfToChildDrag',
          component: () => import('@/views/grid/colDrag/selfToChildDrag/CodeExample.vue')
        },
        {
          path: 'toChildDrag',
          name: 'ComponentGridColDragToChildDrag',
          component: () => import('@/views/grid/colDrag/toChildDrag/CodeExample.vue')
        },
        {
          path: 'groupCustom',
          name: 'ComponentGridColDragGroupCustom',
          component: () => import('@/views/grid/colDrag/groupCustom/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridColDragTrigger',
          component: () => import('@/views/grid/colDrag/trigger/CodeExample.vue')
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
          path: 'manual',
          name: 'ComponentGridColDragManual',
          component: () => import('@/views/grid/colDrag/manual/CodeExample.vue')
        },
        {
          path: 'rowCol',
          name: 'ComponentGridColDragRowCol',
          component: () => import('@/views/grid/colDrag/rowCol/CodeExample.vue')
        }
      ]
    },
    {
      path: 'currentRow',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridCurrentRowBase',
          component: () => import('@/views/grid/currentRow/base/CodeExample.vue')
        },
        {
          path: 'beforeSelectMethod',
          name: 'ComponentGridCurrentRowBeforeSelectMethod',
          component: () => import('@/views/grid/currentRow/beforeSelectMethod/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridCurrentRowTrigger',
          component: () => import('@/views/grid/currentRow/trigger/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowResizable',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridRowResizableBase',
          component: () => import('@/views/grid/rowResizable/base/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridRowResizableFixed',
          component: () => import('@/views/grid/rowResizable/fixed/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridRowResizableTree',
          component: () => import('@/views/grid/rowResizable/tree/CodeExample.vue')
        },
        {
          path: 'rowResize',
          name: 'ComponentGridRowResizableRowResize',
          component: () => import('@/views/grid/rowResizable/rowResize/CodeExample.vue')
        },
        {
          path: 'dblclickAutoHeight',
          name: 'ComponentGridRowResizableDblclickAutoHeight',
          component: () => import('@/views/grid/rowResizable/dblclickAutoHeight/CodeExample.vue')
        },
        {
          path: 'allRowDrag',
          name: 'ComponentGridRowResizableAllRowDrag',
          component: () => import('@/views/grid/rowResizable/allRowDrag/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridRowResizableManual',
          component: () => import('@/views/grid/rowResizable/manual/CodeExample.vue')
        },
        {
          path: 'recalcManual',
          name: 'ComponentGridRowResizableRecalcManual',
          component: () => import('@/views/grid/rowResizable/recalcManual/CodeExample.vue')
        },
        {
          path: 'textarea',
          name: 'ComponentGridRowResizableTextarea',
          component: () => import('@/views/grid/rowResizable/textarea/CodeExample.vue')
        },
        {
          path: 'rowDragAutoHeight',
          name: 'ComponentGridRowResizableRowDragAutoHeight',
          component: () => import('@/views/grid/rowResizable/rowDragAutoHeight/CodeExample.vue')
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
          path: 'showGuidesStatus',
          name: 'ComponentGridRowDragShowGuidesStatus',
          component: () => import('@/views/grid/rowDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridRowDragTrigger',
          component: () => import('@/views/grid/rowDrag/trigger/CodeExample.vue')
        },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentGridRowDragTreeBase',
              component: () => import('@/views/grid/rowDrag/tree/base/CodeExample.vue')
            },
            {
              path: 'peerDrag',
              name: 'ComponentGridRowDragTreePeerDrag',
              component: () => import('@/views/grid/rowDrag/tree/peerDrag/CodeExample.vue')
            },
            {
              path: 'cossDrag',
              name: 'ComponentGridRowDragTreeCossDrag',
              component: () => import('@/views/grid/rowDrag/tree/cossDrag/CodeExample.vue')
            },
            {
              path: 'selfToChildDrag',
              name: 'ComponentGridRowDragTreeSelfToChildDrag',
              component: () => import('@/views/grid/rowDrag/tree/selfToChildDrag/CodeExample.vue')
            },
            {
              path: 'toChildDrag',
              name: 'ComponentGridRowDragTreeToChildDrag',
              component: () => import('@/views/grid/rowDrag/tree/toChildDrag/CodeExample.vue')
            },
            {
              path: 'showGuidesStatus',
              name: 'ComponentGridRowDragTreeShowGuidesStatus',
              component: () => import('@/views/grid/rowDrag/tree/showGuidesStatus/CodeExample.vue')
            },
            {
              path: 'dragMethod',
              name: 'ComponentGridRowDragTreeDragMethod',
              component: () => import('@/views/grid/rowDrag/tree/dragMethod/CodeExample.vue')
            },
            {
              path: 'lazy',
              name: 'ComponentGridRowDragTreeLazy',
              component: () => import('@/views/grid/rowDrag/tree/lazy/CodeExample.vue')
            },
            {
              path: 'manual',
              name: 'ComponentGridRowDragTreeManual',
              component: () => import('@/views/grid/rowDrag/tree/manual/CodeExample.vue')
            },
            {
              path: 'cossTable',
              name: 'ComponentGridRowDragTreeCossTable',
              component: () => import('@/views/grid/rowDrag/tree/cossTable/CodeExample.vue')
            }
          ]
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
        },
        {
          path: 'manual',
          name: 'ComponentGridRowDragManual',
          component: () => import('@/views/grid/rowDrag/manual/CodeExample.vue')
        },
        {
          path: 'cossTable',
          name: 'ComponentGridRowDragCossTable',
          component: () => import('@/views/grid/rowDrag/cossTable/CodeExample.vue')
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
          path: 'showFooter',
          name: 'ComponentGridFooterShowFooter',
          component: () => import('@/views/grid/footer/showFooter/CodeExample.vue')
        },
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
          path: 'trigger',
          name: 'ComponentGridRadioTrigger',
          component: () => import('@/views/grid/radio/trigger/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridRadioVisibleMethod',
          component: () => import('@/views/grid/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'headerBtn',
          name: 'ComponentGridRadioHeaderBtn',
          component: () => import('@/views/grid/radio/headerBtn/CodeExample.vue')
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
          path: 'trigger',
          name: 'ComponentGridCheckboxTrigger',
          component: () => import('@/views/grid/checkbox/trigger/CodeExample.vue')
        },
        {
          path: 'showRecords',
          name: 'ComponentGridCheckboxShowRecords',
          component: () => import('@/views/grid/checkbox/showRecords/CodeExample.vue')
        },
        {
          path: 'reserve',
          name: 'ComponentGridCheckboxReserve',
          component: () => import('@/views/grid/checkbox/reserve/CodeExample.vue')
        },
        {
          path: 'showReserveStatus',
          name: 'ComponentGridCheckboxShowReserveStatus',
          component: () => import('@/views/grid/checkbox/showReserveStatus/CodeExample.vue')
        },
        {
          path: 'batch',
          name: 'ComponentGridCheckboxBatch',
          component: () => import('@/views/grid/checkbox/batch/CodeExample.vue')
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
          path: 'spanMethod',
          name: 'ComponentGridMergeSpanMethod',
          component: () => import('@/views/grid/merge/spanMethod/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridMergeFooter',
          component: () => import('@/views/grid/merge/footer/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentGridMergeHeader',
          component: () => import('@/views/grid/merge/header/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentGridMergeHorizontal',
          component: () => import('@/views/grid/merge/horizontal/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowGroup',
      component: RouteLayout,
      children: [
        { path: 'basic', name: 'ComponentGridRowGroupBasic', component: () => import('@/views/grid/rowGroup/basic/CodeExample.vue') },
        { path: 'groupFields', name: 'ComponentGridRowGroupGroupFields', component: () => import('@/views/grid/rowGroup/groupFields/CodeExample.vue') },
        {
          path: 'radio',
          component: RouteLayout,
          children: [
            { path: 'base', name: 'ComponentGridRowGroupRadioBse', component: () => import('@/views/grid/rowGroup/radio/base/CodeExample.vue') },
            { path: 'checked', name: 'ComponentGridRowGroupRadioChecked', component: () => import('@/views/grid/rowGroup/radio/checked/CodeExample.vue') }
          ]
        },
        {
          path: 'checkbox',
          component: RouteLayout,
          children: [
            { path: 'base', name: 'ComponentGridRowGroupCheckboxBase', component: () => import('@/views/grid/rowGroup/checkbox/base/CodeExample.vue') },
            { path: 'checkStrictly', name: 'ComponentGridRowGroupCheckboxCheckStrictly', component: () => import('@/views/grid/rowGroup/checkbox/checkStrictly/CodeExample.vue') },
            { path: 'strictlyHeader', name: 'ComponentGridRowGroupCheckboxStrictlyHeader', component: () => import('@/views/grid/rowGroup/checkbox/strictlyHeader/CodeExample.vue') },
            { path: 'checked', name: 'ComponentGridRowGroupCheckboxChecked', component: () => import('@/views/grid/rowGroup/checkbox/checked/CodeExample.vue') }
          ]
        },
        { path: 'accordion', name: 'ComponentGridRowGroupAccordion', component: () => import('@/views/grid/rowGroup/accordion/CodeExample.vue') },
        { path: 'fixed', name: 'ComponentGridRowGroupFixed', component: () => import('@/views/grid/rowGroup/fixed/CodeExample.vue') },
        { path: 'sort', name: 'ComponentGridRowGroupSort', component: () => import('@/views/grid/rowGroup/sort/CodeExample.vue') },
        { path: 'expand', name: 'ComponentGridRowGroupExpand', component: () => import('@/views/grid/rowGroup/expand/CodeExample.vue') },
        { path: 'total', name: 'ComponentGridRowGroupTotal', component: () => import('@/views/grid/rowGroup/total/CodeExample.vue') },
        { path: 'count', name: 'ComponentGridRowGroupCount', component: () => import('@/views/grid/rowGroup/count/CodeExample.vue') },
        { path: 'contentMethod', name: 'ComponentGridRowGroupContentMethod', component: () => import('@/views/grid/rowGroup/contentMethod/CodeExample.vue') },
        { path: 'spanMethod', name: 'ComponentGridRowGroupSpanMethod', component: () => import('@/views/grid/rowGroup/spanMethod/CodeExample.vue') },
        { path: 'expandGroupFields', name: 'ComponentGridRowGroupExpandGroupFields', component: () => import('@/views/grid/rowGroup/expandGroupFields/CodeExample.vue') },
        { path: 'mode', name: 'ComponentGridRowGroupGroupMode', component: () => import('@/views/grid/rowGroup/mode/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentGridRowGroupTrigger', component: () => import('@/views/grid/rowGroup/trigger/CodeExample.vue') },
        { path: 'handleSet', name: 'ComponentGridRowGroupHandleSet', component: () => import('@/views/grid/rowGroup/handleSet/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            { path: 'default', name: 'ComponentGridRowGroupTemplateDefault', component: () => import('@/views/grid/rowGroup/template/default/CodeExample.vue') }
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
          path: 'mode',
          name: 'ComponentGridExpandMode',
          component: () => import('@/views/grid/expand/mode/CodeExample.vue')
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
          path: 'full',
          name: 'ComponentGridToolbarFull',
          component: () => import('@/views/grid/toolbar/full/CodeExample.vue')
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
              path: 'buttonPrefix',
              name: 'ComponentGridToolbarTemplateButtonPrefix',
              component: () => import('@/views/grid/toolbar/template/buttonPrefix/CodeExample.vue')
            },
            {
              path: 'buttonSuffix',
              name: 'ComponentGridToolbarTemplateButtonSuffix',
              component: () => import('@/views/grid/toolbar/template/buttonSuffix/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentGridToolbarTemplateTools',
              component: () => import('@/views/grid/toolbar/template/tools/CodeExample.vue')
            },
            {
              path: 'toolPrefix',
              name: 'ComponentGridToolbarTemplateToolPrefix',
              component: () => import('@/views/grid/toolbar/template/toolPrefix/CodeExample.vue')
            },
            {
              path: 'toolSuffix',
              name: 'ComponentGridToolbarTemplateToolSuffix',
              component: () => import('@/views/grid/toolbar/template/toolSuffix/CodeExample.vue')
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
          path: 'defHide',
          name: 'ComponentGridCustomDefHide',
          component: () => import('@/views/grid/custom/defHide/CodeExample.vue')
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
        {
          path: 'visible',
          name: 'ComponentGridCustomVisible',
          component: () => import('@/views/grid/custom/visible/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridCustomFixed',
          component: () => import('@/views/grid/custom/fixed/CodeExample.vue')
        },
        {
          path: 'resizable',
          name: 'ComponentGridCustomResizable',
          component: () => import('@/views/grid/custom/resizable/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentGridCustomSort',
          component: () => import('@/views/grid/custom/sort/CodeExample.vue')
        },
        // {
        //   path: 'template',
        //   name: 'ComponentGridCustomTemplate',
        //   component: () => import('@/views/grid/custom/template/CodeExample.vue')
        // },
        {
          path: 'customBtn',
          name: 'ComponentGridCustomCustomBtn',
          component: () => import('@/views/grid/custom/customBtn/CodeExample.vue')
        },
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
          component: RouteLayout,
          children: [
            {
              path: 'pager',
              name: 'ComponentGridPagerTemplatePager',
              component: () => import('@/views/grid/pager/template/pager/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentGridPagerTemplateLeft',
              component: () => import('@/views/grid/pager/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentGridPagerTemplateRight',
              component: () => import('@/views/grid/pager/template/right/CodeExample.vue')
            },
            {
              path: 'func',
              name: 'ComponentGridPagerTemplateFunc',
              component: () => import('@/views/grid/pager/template/func/CodeExample.vue')
            }
          ]
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
          path: 'expandRowKeys',
          name: 'ComponentGridTreeExpandRowKeys',
          component: () => import('@/views/grid/tree/expandRowKeys/CodeExample.vue')
        },
        {
          path: 'checkbox',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentGridTreeCheckboxBase',
              component: () => import('@/views/grid/tree/checkbox/base/CodeExample.vue')
            },
            {
              path: 'labelField',
              name: 'ComponentGridTreeCheckboxLabelField',
              component: () => import('@/views/grid/tree/checkbox/labelField/CodeExample.vue')
            },
            {
              path: 'checkStrictly',
              name: 'ComponentGridTreeCheckboxCheckStrictly',
              component: () => import('@/views/grid/tree/checkbox/checkStrictly/CodeExample.vue')
            },
            {
              path: 'strictlyHeader',
              name: 'ComponentGridTreeCheckboxStrictlyHeader',
              component: () => import('@/views/grid/tree/checkbox/strictlyHeader/CodeExample.vue')
            }
          ]
        },
        {
          path: 'fixed',
          name: 'ComponentGridTreeFixed',
          component: () => import('@/views/grid/tree/fixed/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentGridTreeSort',
          component: () => import('@/views/grid/tree/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentGridTreeFilter',
          component: () => import('@/views/grid/tree/filter/CodeExample.vue')
        },
        {
          path: 'expandRow',
          name: 'ComponentGridTreeExpandRow',
          component: () => import('@/views/grid/tree/expandRow/CodeExample.vue')
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
        },
        {
          path: 'spanMethod',
          name: 'ComponentGridTreeSpanMethod',
          component: () => import('@/views/grid/tree/spanMethod/CodeExample.vue')
        },
        {
          path: 'lazy',
          name: 'ComponentGridTreeLazy',
          component: () => import('@/views/grid/tree/lazy/CodeExample.vue')
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
              path: 'edit',
              name: 'ComponentGridValidateTemplateEdit',
              component: () => import('@/views/grid/validate/template/edit/CodeExample.vue')
            },
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
          path: 'format-number-input',
          name: 'ComponentGridCellRenderFormatNumberInput',
          component: () => import('@/views/grid/cellRender/format-number-input/CodeExample.vue')
        },
        {
          path: 'format-option',
          name: 'ComponentGridCellRenderFormatOption',
          component: () => import('@/views/grid/cellRender/format-option/CodeExample.vue')
        },
        {
          path: 'format-tree',
          name: 'ComponentGridCellRenderFormatTree',
          component: () => import('@/views/grid/cellRender/format-tree/CodeExample.vue')
        },
        {
          path: 'vxe-text',
          name: 'ComponentGridCellRenderVxeText',
          component: () => import('@/views/grid/cellRender/vxe-text/CodeExample.vue')
        },
        {
          path: 'vxe-link',
          name: 'ComponentGridCellRenderVxeLink',
          component: () => import('@/views/grid/cellRender/vxe-link/CodeExample.vue')
        },
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
          name: 'ComponentGridCellRenderVxeCheckbox',
          component: () => import('@/views/grid/cellRender/vxe-checkbox/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
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
          path: 'vxe-text',
          name: 'ComponentGridCellTemplateVxeText',
          component: () => import('@/views/grid/cellTemplate/vxe-text/CodeExample.vue')
        },
        {
          path: 'vxe-link',
          name: 'ComponentGridCellTemplateVxeLink',
          component: () => import('@/views/grid/cellTemplate/vxe-link/CodeExample.vue')
        },
        {
          path: 'vxe-tag',
          name: 'ComponentGridCellTemplateVxeTag',
          component: () => import('@/views/grid/cellTemplate/vxe-tag/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox',
          name: 'ComponentGridCellTemplateVxeCheckbox',
          component: () => import('@/views/grid/cellTemplate/vxe-checkbox/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
          name: 'ComponentGridCellTemplateVxeCheckboxGroup',
          component: () => import('@/views/grid/cellTemplate/vxe-checkbox-group/CodeExample.vue')
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
        { path: 'vxe-input', name: 'ComponentGridCellTemplateVxeInput', component: () => import('@/views/grid/cellTemplate/vxe-input/CodeExample.vue') },
        { path: 'vxe-textarea', name: 'ComponentGridCellTemplateVxeTextarea', component: () => import('@/views/grid/cellTemplate/vxe-textarea/CodeExample.vue') },
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
          path: 'currRow',
          name: 'ComponentGridKeyboardCurrRow',
          component: () => import('@/views/grid/keyboard/currRow/CodeExample.vue')
        },
        {
          path: 'currColumn',
          name: 'ComponentGridKeyboardCurrColumn',
          component: () => import('@/views/grid/keyboard/currColumn/CodeExample.vue')
        },
        {
          path: 'currRowCol',
          name: 'ComponentGridKeyboardCurrRowCol',
          component: () => import('@/views/grid/keyboard/currRowCol/CodeExample.vue')
        },
        {
          path: 'enterAppend',
          name: 'ComponentGridKeyboardEnterAppend',
          component: () => import('@/views/grid/keyboard/enterAppend/CodeExample.vue')
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
          path: 'mode',
          name: 'ComponentGridEditMode',
          component: () => import('@/views/grid/edit/mode/CodeExample.vue')
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
          path: 'showNegativeStatus',
          name: 'ComponentGridEditShowNegativeStatus',
          component: () => import('@/views/grid/edit/showNegativeStatus/CodeExample.vue')
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
        },
        {
          path: 'rowSave',
          name: 'ComponentGridEditRowSave',
          component: () => import('@/views/grid/edit/rowSave/CodeExample.vue')
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
          path: 'vxe-color-picker',
          name: 'ComponentGridEditRenderVxeColorPicker',
          component: () => import('@/views/grid/editRender/vxe-color-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridEditRenderVxeDatePicker',
          component: () => import('@/views/grid/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-range-picker',
          name: 'ComponentGridEditRenderVxeDateRangePicker',
          component: () => import('@/views/grid/editRender/vxe-date-range-picker/CodeExample.vue')
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
          path: 'events',
          name: 'ComponentGridEditRenderEvents',
          component: () => import('@/views/grid/editRender/events/CodeExample.vue')
        },
        { path: 'beforeEdit', name: 'ComponentGridEditRenderBeforeEdit', component: () => import('@/views/grid/editRender/beforeEdit/CodeExample.vue') },
        { path: 'disableEdit', name: 'ComponentGridEditRenderDisableEdit', component: () => import('@/views/grid/editRender/disableEdit/CodeExample.vue') },
        {
          path: 'readonly',
          name: 'ComponentGridEditRenderReadonly',
          component: () => import('@/views/grid/editRender/readonly/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'input',
          name: 'ComponentGridEditTemplateInput',
          component: () => import('@/views/grid/editTemplate/input/CodeExample.vue')
        },
        {
          path: 'select',
          name: 'ComponentGridEditTemplateSelect',
          component: () => import('@/views/grid/editTemplate/select/CodeExample.vue')
        },
        {
          path: 'vxe-button',
          name: 'ComponentGridEditTemplateVxeButton',
          component: () => import('@/views/grid/editTemplate/vxe-button/CodeExample.vue')
        },
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
          path: 'vxe-date-range-picker',
          name: 'ComponentGridEditTemplateVxeDateRangePicker',
          component: () => import('@/views/grid/editTemplate/vxe-date-range-picker/CodeExample.vue')
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
        },
        { path: 'beforeEdit', name: 'ComponentGridEditTemplateBeforeEdit', component: () => import('@/views/grid/editTemplate/beforeEdit/CodeExample.vue') },
        { path: 'disableEdit', name: 'ComponentGridEditTemplateDisableEdit', component: () => import('@/views/grid/editTemplate/disableEdit/CodeExample.vue') }
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
          path: 'form',
          name: 'ComponentGridTemplateForm',
          component: () => import('@/views/grid/template/form/CodeExample.vue')
        },
        {
          path: 'pager',
          name: 'ComponentGridTemplatePager',
          component: () => import('@/views/grid/template/pager/CodeExample.vue')
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
          path: 'tooltip',
          name: 'ComponentGridTemplateTooltip',
          component: () => import('@/views/grid/template/tooltip/CodeExample.vue')
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
          path: 'includeFields',
          name: 'ComponentGridExportIncludeFields',
          component: () => import('@/views/grid/export/includeFields/CodeExample.vue')
        },
        {
          path: 'excludeFields',
          name: 'ComponentGridExportExcludeFields',
          component: () => import('@/views/grid/export/excludeFields/CodeExample.vue')
        },
        {
          path: 'columns',
          name: 'ComponentGridExportColumns',
          component: () => import('@/views/grid/export/columns/CodeExample.vue')
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
          path: 'columns',
          name: 'ComponentGridPrintColumns',
          component: () => import('@/views/grid/print/columns/CodeExample.vue')
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
          path: 'margin',
          name: 'ComponentGridPrintMargin',
          component: () => import('@/views/grid/print/margin/CodeExample.vue')
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
          path: 'colBreak',
          name: 'ComponentGridScrollColBreak',
          component: () => import('@/views/grid/scroll/colBreak/CodeExample.vue')
        },
        {
          path: 'hv',
          name: 'ComponentGridScrollHV',
          component: () => import('@/views/grid/scroll/hv/CodeExample.vue')
        },
        {
          path: 'hFull',
          name: 'ComponentGridScrollHFull',
          component: () => import('@/views/grid/scroll/hFull/CodeExample.vue')
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
          path: 'mergeFixed',
          name: 'ComponentGridScrollMergeFixed',
          component: () => import('@/views/grid/scroll/mergeFixed/CodeExample.vue')
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
          path: 'dragTree',
          name: 'ComponentGridScrollDragTree',
          component: () => import('@/views/grid/scroll/dragTree/CodeExample.vue')
        },
        {
          path: 'expand',
          name: 'ComponentGridScrollExpand',
          component: () => import('@/views/grid/scroll/expand/CodeExample.vue')
        },
        {
          path: 'expandFixed',
          name: 'ComponentGridScrollExpandFixed',
          component: () => import('@/views/grid/scroll/expandFixed/CodeExample.vue')
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
        },
        {
          path: 'bigData',
          name: 'ComponentGridScrollBigData',
          component: () => import('@/views/grid/scroll/bigData/CodeExample.vue')
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
          path: 'manualPager',
          name: 'ComponentGridProxyManualPager',
          component: () => import('@/views/grid/proxy/manualPager/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentGridProxySort',
          component: () => import('@/views/grid/proxy/sort/CodeExample.vue')
        },
        {
          path: 'manualSort',
          name: 'ComponentGridProxyManualSort',
          component: () => import('@/views/grid/proxy/manualSort/CodeExample.vue')
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
      path: 'scrollbar',
      component: RouteLayout,
      children: [
        {
          path: 'barStyle',
          name: 'ComponentGridScrollbarBarStyle',
          component: () => import('@/views/grid/scrollbar/barStyle/CodeExample.vue')
        },
        {
          path: 'barPos',
          name: 'ComponentGridScrollbarBarPos',
          component: () => import('@/views/grid/scrollbar/barPos/CodeExample.vue')
        },
        {
          path: 'barVisible',
          name: 'ComponentGridScrollbarBarVisible',
          component: () => import('@/views/grid/scrollbar/barVisible/CodeExample.vue')
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
          path: 'visibleColumn',
          name: 'ComponentGridOtherVisibleColumn',
          component: () => import('@/views/grid/other/visibleColumn/CodeExample.vue')
        },
        {
          path: 'tabs',
          name: 'ComponentGridOtherTabs',
          component: () => import('@/views/grid/other/tabs/CodeExample.vue')
        },
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
          path: 'minAutoRowHeight',
          name: 'ComponentGridOtherMinAutoRowHeight',
          component: () => import('@/views/grid/other/minAutoRowHeight/CodeExample.vue')
        },
        {
          path: 'yearMonth',
          name: 'ComponentGridOtherYearMonth',
          component: () => import('@/views/grid/other/yearMonth/CodeExample.vue')
        },
        {
          path: 'pageCheckbox',
          name: 'ComponentGridOtherPageCheckbox',
          component: () => import('@/views/grid/other/pageCheckbox/CodeExample.vue')
        },
        {
          path: 'bookkeepingVoucher',
          name: 'ComponentGridOtherBookkeepingVoucher',
          component: () => import('@/views/grid/other/bookkeepingVoucher/CodeExample.vue')
        },
        {
          path: 'allRowColDrag',
          name: 'ComponentGridOtherAllRowColDrag',
          component: () => import('@/views/grid/other/allRowColDrag/CodeExample.vue')
        },
        {
          path: 'pasteToUpload',
          name: 'ComponentGridOtherPasteToUpload',
          component: () => import('@/views/grid/other/pasteToUpload/CodeExample.vue')
        },
        {
          path: 'leftRight',
          name: 'ComponentGridOtherLeftRight',
          component: () => import('@/views/grid/other/leftRight/CodeExample.vue')
        },
        {
          path: 'tableTransfer',
          name: 'ComponentGridOtherTableTransfer',
          component: () => import('@/views/grid/other/tableTransfer/CodeExample.vue')
        },
        {
          path: 'treeSubCols',
          name: 'ComponentGridOtherTreeSubCols',
          component: () => import('@/views/grid/other/treeSubCols/CodeExample.vue')
        }
      ]
    }
  ]
}
