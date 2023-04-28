import Vue from 'vue'
import Router from 'vue-router'

const StartInstall = () => import('../views/start/Install.vue')
const StartUse = () => import('../views/start/Use.vue')
const StartIcons = () => import('../views/start/Icons.vue')
const StartGlobal = () => import('../views/start/Global.vue')
const StartTheme = () => import('../views/start/Theme.vue')
const StartI18n = () => import('../views/start/I18n.vue')

const RendererAPI = () => import('../views/table/renderer/API.vue')
const RendererFilter = () => import('../views/table/renderer/Filter.vue')
const RendererDefault = () => import('../views/table/renderer/Default.vue')
const RendererEdit = () => import('../views/table/renderer/Edit.vue')
const RendererExpand = () => import('../views/table/renderer/Expand.vue')
const RendererToolbar = () => import('../views/table/renderer/Toolbar.vue')
const RendererForm = () => import('../views/table/renderer/Form.vue')
const RendererEmpty = () => import('../views/table/renderer/Empty.vue')

const CommandsAPI = () => import('../views/table/commands/API.vue')
const MenusAPI = () => import('../views/table/menus/API.vue')
const InterceptorAPI = () => import('../views/table/interceptor/API.vue')
const FormatsAPI = () => import('../views/table/formats/API.vue')

const TableBasic = () => import('../views/table/base/basic/Example.vue')
const TableSize = () => import('../views/table/base/size/Example.vue')
const TableAutoBreak = () => import('../views/table/base/AutoBreak.vue')
const TableWidth = () => import('../views/table/base/Width.vue')
const TableOverflow = () => import('../views/table/base/Overflow.vue')
const TableTooltip = () => import('../views/table/base/Tooltip.vue')
const TableStripe = () => import('../views/table/base/Stripe.vue')
const TableBorder = () => import('../views/table/base/Border.vue')
const TableRound = () => import('../views/table/base/Round.vue')
const TableStyle = () => import('../views/table/base/Style.vue')
const TableDynamicStyle = () => import('../views/table/base/DynamicStyle.vue')
const TableScrollStyle = () => import('../views/table/base/ScrollStyle.vue')
const TableHeader = () => import('../views/table/base/Header.vue')
const TableHeaderHighlight = () => import('../views/table/base/HeaderHighlight.vue')
const TableResizable = () => import('../views/table/base/Resizable.vue')
const TableMaxHeight = () => import('../views/table/base/MaxHeight.vue')
const TableHeight = () => import('../views/table/base/Height.vue')
const TableRowHeight = () => import('../views/table/base/RowHeight.vue')
const TableAutoHeight = () => import('../views/table/base/AutoHeight.vue')
const TableFixed = () => import('../views/table/base/Fixed.vue')
const TableFixedFull = () => import('../views/table/base/FixedFull.vue')
const TableGroup = () => import('../views/table/base/Group.vue')
const TableSeq = () => import('../views/table/base/Seq.vue')
const TableCurrent = () => import('../views/table/base/Current.vue')
const TableRadio = () => import('../views/table/base/Radio.vue')
const TableSelection = () => import('../views/table/base/Selection.vue')
const TableSort = () => import('../views/table/base/Sort.vue')
const TableFilter = () => import('../views/table/base/Filter.vue')
const TableEmpty = () => import('../views/table/base/Empty.vue')
const TableLoading = () => import('../views/table/base/Loading.vue')
const TableFormat = () => import('../views/table/base/Format.vue')
const TableData = () => import('../views/table/base/Data.vue')
const TableHTML = () => import('../views/table/base/HTML.vue')
const TableFull = () => import('../views/table/base/Full.vue')

const TableEvent = () => import('../views/table/advanced/Event.vue')
const TableTemplate = () => import('../views/table/advanced/Template.vue')
const TableDynamic = () => import('../views/table/advanced/Dynamic.vue')
const TableCustomCheckbox = () => import('../views/table/advanced/CustomCheckbox.vue')
const TableCustomRadio = () => import('../views/table/advanced/CustomRadio.vue')
const TableSortIcon = () => import('../views/table/advanced/SortIcon.vue')
const TableCustomSort = () => import('../views/table/advanced/CustomSort.vue')
const TableMultiSort = () => import('../views/table/advanced/MultiSort.vue')
const TableManualFilter = () => import('../views/table/advanced/ManualFilter.vue')
const TableFilterIcon = () => import('../views/table/advanced/FilterIcon.vue')
const TableCustomFilter = () => import('../views/table/advanced/CustomFilter.vue')
const TableSpan = () => import('../views/table/advanced/Span.vue')
const TableSpanRow = () => import('../views/table/advanced/SpanRow.vue')
const TableMergeCell = () => import('../views/table/advanced/MergeCell.vue')
const TableFooter = () => import('../views/table/advanced/Footer.vue')
const TableFooterSpan = () => import('../views/table/advanced/FooterSpan.vue')
const TableFooterMaxHeight = () => import('../views/table/advanced/MaxHeight.vue')
const TableImport = () => import('../views/table/advanced/Import.vue')
const TableExport = () => import('../views/table/advanced/Export.vue')
const TablePrint = () => import('../views/table/advanced/Print.vue')
const TableFixedType = () => import('../views/table/advanced/FixedType.vue')
const TableMenu = () => import('../views/table/advanced/Menu.vue')
const TableMenuPrivilege = () => import('../views/table/advanced/MenuPrivilege.vue')
const TableExpand = () => import('../views/table/advanced/Expand.vue')
const TableExpandIcon = () => import('../views/table/advanced/ExpandIcon.vue')
const TableExpandLazy = () => import('../views/table/advanced/ExpandLazy.vue')
const TableExpandAccordion = () => import('../views/table/advanced/ExpandAccordion.vue')
const TableSearch = () => import('../views/table/advanced/Search.vue')
const TableGroupBy = () => import('../views/table/advanced/GroupBy.vue')
const TableDetails = () => import('../views/table/advanced/Details.vue')
const TablePopupEdit = () => import('../views/table/advanced/PopupEdit.vue')
const TableToolbar = () => import('../views/table/advanced/Toolbar.vue')
const TableCustom = () => import('../views/table/advanced/Custom.vue')
const TableCustomStorage = () => import('../views/table/advanced/CustomStorage.vue')
const TableCustomlWidthStorage = () => import('../views/table/advanced/CustomlWidthStorage.vue')
const TableForm = () => import('../views/table/advanced/Form.vue')
const TablePage = () => import('../views/table/advanced/Page.vue')
const TablePageIcon = () => import('../views/table/advanced/PageIcon.vue')
const TableHighlight = () => import('../views/table/advanced/Highlight.vue')
const TableRangeSelect = () => import('../views/table/advanced/RangeSelect.vue')
const TableTabs = () => import('../views/table/advanced/Tabs.vue')
const TableKeepAlives = () => import('../views/table/advanced/KeepAlives.vue')
const TableKeepAliveTable1 = () => import('../views/table/advanced/keepAlives/Table1.vue')
const TableKeepAliveTable2 = () => import('../views/table/advanced/keepAlives/Table2.vue')
const TableKeepAliveTable3 = () => import('../views/table/advanced/keepAlives/Table3.vue')

const GridBasic = () => import('../views/grid/Basic.vue')
const GridEvents = () => import('../views/grid/Events.vue')
const GridGroup = () => import('../views/grid/Group.vue')
const GridReverse = () => import('../views/grid/Reverse.vue')
const GridTemplate = () => import('../views/grid/Template.vue')
const GridFooter = () => import('../views/grid/Footer.vue')
const GridPage = () => import('../views/grid/Page.vue')
const GridFullQuery = () => import('../views/grid/FullQuery.vue')
const GridProxy = () => import('../views/grid/Proxy.vue')
const GridPageProxy = () => import('../views/grid/PageProxy.vue')
const GridConfigProxy = () => import('../views/grid/ConfigProxy.vue')
const GridEdit = () => import('../views/grid/Edit.vue')
const GridCellDisable = () => import('../views/grid/CellDisable.vue')
const GridRowDisable = () => import('../views/grid/RowDisable.vue')
const GridForm = () => import('../views/grid/Form.vue')
const GridFormProxy = () => import('../views/grid/FormProxy.vue')
const GridToolbar = () => import('../views/grid/Toolbar.vue')
const GridCustomToolbar = () => import('../views/grid/CustomToolbar.vue')
const GridToolbarIcon = () => import('../views/grid/ToolbarIcon.vue')
const GridFullscreen = () => import('../views/grid/Fullscreen.vue')
// const GridDynamic = () => import('../views/grid/Dynamic.vue')
const GridMenu = () => import('../views/grid/Menu.vue')
const GridSpan = () => import('../views/grid/Span.vue')
const GridUpload = () => import('../views/grid/Upload.vue')
const GridTree = () => import('../views/grid/Tree.vue')
const GridTreeLazy = () => import('../views/grid/TreeLazy.vue')
const GridTreeLazyEdit = () => import('../views/grid/TreeLazyEdit.vue')
const GridTreeEdit = () => import('../views/grid/TreeEdit.vue')
const GridFullEdit = () => import('../views/grid/FullEdit.vue')
const GridKeepAlives = () => import('../views/grid/KeepAlives.vue')
const GridKeepAliveGrid1 = () => import('../views/grid/keepAlives/Grid1.vue')
const GridKeepAliveGrid2 = () => import('../views/grid/keepAlives/Grid2.vue')
const GridKeepAliveGrid3 = () => import('../views/grid/keepAlives/Grid3.vue')

const TableTreeBasic = () => import('../views/table/tree/Basic.vue')
const TableTreeStripe = () => import('../views/table/tree/Stripe.vue')
const TableTreeNormal = () => import('../views/table/tree/Normal.vue')
const TableTreeIcon = () => import('../views/table/tree/Icon.vue')
const TableTreeAccordion = () => import('../views/table/tree/Accordion.vue')
const TableTreeSelection = () => import('../views/table/tree/Selection.vue')
const TableTreeRadio = () => import('../views/table/tree/Radio.vue')
const TableTreeFixed = () => import('../views/table/tree/Fixed.vue')
const TableTreeMaxHeight = () => import('../views/table/tree/MaxHeight.vue')
const TableTreeFilter = () => import('../views/table/tree/Filter.vue')
const TableTreeSort = () => import('../views/table/tree/Sort.vue')
const TableTreeGroupSummary = () => import('../views/table/tree/GroupSummary.vue')
const TableTreeGroupSummaryCount = () => import('../views/table/tree/GroupSummaryCount.vue')
const TableTreeExpand = () => import('../views/table/tree/Expand.vue')
const TableTreeExpandLazy = () => import('../views/table/tree/ExpandLazy.vue')
const TableTreeCRUD = () => import('../views/table/tree/CRUD.vue')
const TableTreeInsert = () => import('../views/table/tree/Insert.vue')
const TableTreeMenu = () => import('../views/table/tree/Menu.vue')
const TableTreeSpan = () => import('../views/table/tree/Span.vue')
const TableTreeHighlight = () => import('../views/table/tree/Highlight.vue')
const TableTreeKeyboard = () => import('../views/table/tree/Keyboard.vue')
const TableTreeLazy = () => import('../views/table/tree/Lazy.vue')
const TableTreeLazyMenu = () => import('../views/table/tree/LazyMenu.vue')
const TableTreeLazyEdit = () => import('../views/table/tree/LazyEdit.vue')
const TableTreeLine = () => import('../views/table/tree/Line.vue')
const TableTreeEdit = () => import('../views/table/tree/Edit.vue')
const TableTreeEditCellValid = () => import('../views/table/tree/CellValid.vue')
const TableTreeEditRowValid = () => import('../views/table/tree/RowValid.vue')
const TableTreeEditForceCellValid = () => import('../views/table/tree/ForceCellValid.vue')
const TableTreeEditForceRowValid = () => import('../views/table/tree/ForceRowValid.vue')
const TableTreeTemplate = () => import('../views/table/tree/Template.vue')

const TableScroll = () => import('../views/table/scroll/Scroll.vue')
const TableScrollMode = () => import('../views/table/scroll/Mode.vue')
const TableScrollRows = () => import('../views/table/scroll/ScrollRows.vue')
const TableScrollFullRows = () => import('../views/table/scroll/ScrollFullRows.vue')
const TableScrollCols = () => import('../views/table/scroll/ScrollCols.vue')
const TableScrollFullCols = () => import('../views/table/scroll/ScrollFullCols.vue')
const TableScrollTree = () => import('../views/table/scroll/Tree.vue')
const TableScrollLazyTree = () => import('../views/table/scroll/LazyTree.vue')
const TableScrollHighlight = () => import('../views/table/scroll/Highlight.vue')
const TableScrollKeyboard = () => import('../views/table/scroll/Keyboard.vue')
const TableScrollMaxHeight = () => import('../views/table/scroll/MaxHeight.vue')
const TableScrollRowHeight = () => import('../views/table/scroll/RowHeight.vue')
const TableScrollGroup = () => import('../views/table/scroll/Group.vue')
const TableScrollMerge = () => import('../views/table/scroll/Merge.vue')
const TableScrollEdit = () => import('../views/table/scroll/Edit.vue')
const TableScrollCellValid = () => import('../views/table/scroll/CellValid.vue')
const TableScrollRowValid = () => import('../views/table/scroll/RowValid.vue')
const TableScrollForceCellValid = () => import('../views/table/scroll/ForceCellValid.vue')
const TableScrollForceRowValid = () => import('../views/table/scroll/ForceRowValid.vue')
const TableScrollPartialLoad = () => import('../views/table/scroll/PartialLoad.vue')
const TableScrollFullPartialLoad = () => import('../views/table/scroll/FullPartialLoad.vue')
const TableScrollFooter = () => import('../views/table/scroll/Footer.vue')
const TableScrollTemplate = () => import('../views/table/scroll/Template.vue')
const TableScrollTabs = () => import('../views/table/scroll/Tabs.vue')
const TableScrollKeepAlives = () => import('../views/table/scroll/KeepAlives.vue')
const TableScrollKeepAliveTable1 = () => import('../views/table/scroll/keepAlives/Table1.vue')
const TableScrollKeepAliveTable2 = () => import('../views/table/scroll/keepAlives/Table2.vue')
const TableScrollKeepAliveTable3 = () => import('../views/table/scroll/keepAlives/Table3.vue')

const TableEditPopupForm = () => import('../views/table/edit/PopupForm.vue')
const TableEditManual = () => import('../views/table/edit/Manual.vue')
const TableEditClick = () => import('../views/table/edit/Click.vue')
const TableEditDBLClick = () => import('../views/table/edit/DBLClick.vue')
const TableEditSelect = () => import('../views/table/edit/Select.vue')
const TableAutoClearManual = () => import('../views/table/edit/AutoClear.vue')
const TableEditCellPlaceholder = () => import('../views/table/edit/CellPlaceholder.vue')
const TableEditInsert = () => import('../views/table/edit/Insert.vue')
const TableEditRemove = () => import('../views/table/edit/Remove.vue')
const TableEditRevert = () => import('../views/table/edit/Revert.vue')
const TableEditStatus = () => import('../views/table/edit/Status.vue')
const TableEditCellDisable = () => import('../views/table/edit/CellDisable.vue')
const TableEditRowDisable = () => import('../views/table/edit/RowDisable.vue')
const TableEditHighlightCell = () => import('../views/table/edit/HighlightCell.vue')
const TableEditKeyboard = () => import('../views/table/edit/Keyboard.vue')
const TableEditKeyboardEdit = () => import('../views/table/edit/KeyboardEdit.vue')
const TableEditCellValid = () => import('../views/table/edit/CellValid.vue')
const TableEditRowValid = () => import('../views/table/edit/RowValid.vue')
const TableEditForceCellValid = () => import('../views/table/edit/ForceCellValid.vue')
const TableEditForceRowValid = () => import('../views/table/edit/ForceRowValid.vue')
const TableEditFooter = () => import('../views/table/edit/Footer.vue')
const TableEditFooterImmediately = () => import('../views/table/edit/FooterImmediately.vue')
const TableEditExpand = () => import('../views/table/edit/Expand.vue')
const TableEditMenu = () => import('../views/table/edit/Menu.vue')
const TableEditSpan = () => import('../views/table/edit/Span.vue')
const TableEditForm = () => import('../views/table/edit/Form.vue')
const TableEditUpload = () => import('../views/table/edit/Upload.vue')
const TableEditRealtimeSave = () => import('../views/table/edit/RealtimeSave.vue')
const TableEditDataCount = () => import('../views/table/edit/DataCount.vue')
const TableEditUniqueSelect = () => import('../views/table/edit/UniqueSelect.vue')
const TableEditCascadingSelect = () => import('../views/table/edit/CascadingSelect.vue')
const TableEditEvents = () => import('../views/table/edit/Events.vue')
const TableEditTemplate = () => import('../views/table/edit/Template.vue')
const TableEditFull = () => import('../views/table/edit/Full.vue')

const ModuleIcon = () => import('../views/icon/Icon.vue')
const ModuleButton = () => import('../views/button/Button.vue')
const ModuleRadio = () => import('../views/radio/Radio.vue')
const ModuleCheckbox = () => import('../views/checkbox/Checkbox.vue')
const ModuleInput = () => import('../views/input/Input.vue')
const ModuleTextarea = () => import('../views/textarea/Textarea.vue')
const ModuleSelect = () => import('../views/select/Select.vue')
const ModulePager = () => import('../views/pager/Pager.vue')
const ModuleModal = () => import('../views/modal/Modal.vue')
const ModuleTooltip = () => import('../views/tooltip/Tooltip.vue')
const ModuleToolbar = () => import('../views/toolbar/Toolbar.vue')
const ModuleForm = () => import('../views/form/Form.vue')
const ModuleSwitch = () => import('../views/switch/Switch.vue')
const ModuleList = () => import('../views/list/List.vue')
const ModulePulldown = () => import('../views/pulldown/Pulldown.vue')
const ModuleFile = () => import('../views/file/File.vue')
const ModulePrint = () => import('../views/print/Print.vue')

const VXEAPI = () => import('../views/api/API.vue')
const Donation = () => import('../views/api/Donation.vue')
const Preview = () => import('../views/api/Preview.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
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
      path: '/table/start/install',
      name: 'StartInstall',
      component: StartInstall
    },
    {
      path: '/table/start/use',
      name: 'StartUse',
      component: StartUse
    },
    {
      path: '/table/start/global',
      name: 'StartGlobal',
      component: StartGlobal
    },
    {
      path: '/table/start/icons',
      name: 'StartIcons',
      component: StartIcons
    },
    {
      path: '/table/start/theme',
      name: 'StartTheme',
      component: StartTheme
    },
    {
      path: '/table/start/i18n',
      name: 'StartI18n',
      component: StartI18n
    },
    {
      path: '/table/renderer/api',
      name: 'RendererAPI',
      component: RendererAPI
    },
    {
      path: '/table/renderer/filter',
      name: 'RendererFilter',
      component: RendererFilter
    },
    {
      path: '/table/renderer/default',
      name: 'RendererDefault',
      component: RendererDefault
    },
    {
      path: '/table/renderer/edit',
      name: 'RendererEdit',
      component: RendererEdit
    },
    {
      path: '/table/renderer/expand',
      name: 'RendererExpand',
      component: RendererExpand
    },
    {
      path: '/table/renderer/toolbar',
      name: 'RendererToolbar',
      component: RendererToolbar
    },
    {
      path: '/table/renderer/form',
      name: 'RendererForm',
      component: RendererForm
    },
    {
      path: '/table/renderer/empty',
      name: 'RendererEmpty',
      component: RendererEmpty
    },
    {
      path: '/table/formats/api',
      name: 'FormatsAPI',
      component: FormatsAPI
    },
    {
      path: '/table/commands/api',
      name: 'CommandsAPI',
      component: CommandsAPI
    },
    {
      path: '/table/menus/api',
      name: 'MenusAPI',
      component: MenusAPI
    },
    {
      path: '/table/interceptor/api',
      name: 'InterceptorAPI',
      component: InterceptorAPI
    },
    {
      path: '/table/base/basic',
      name: 'TableBasic',
      component: TableBasic
    },
    {
      path: '/table/base/size',
      name: 'TableSize',
      component: TableSize
    },
    {
      path: '/table/base/autoBreak',
      name: 'TableAutoBreak',
      component: TableAutoBreak
    },
    {
      path: '/table/base/width',
      name: 'TableWidth',
      component: TableWidth
    },
    {
      path: '/table/base/overflow',
      name: 'TableOverflow',
      component: TableOverflow
    },
    {
      path: '/table/base/tooltip',
      name: 'TableTooltip',
      component: TableTooltip
    },
    {
      path: '/table/base/stripe',
      name: 'TableStripe',
      component: TableStripe
    },
    {
      path: '/table/base/border',
      name: 'TableBorder',
      component: TableBorder
    },
    {
      path: '/table/base/round',
      name: 'TableRound',
      component: TableRound
    },
    {
      path: '/table/base/dynamicStyle',
      name: 'TableDynamicStyle',
      component: TableDynamicStyle
    },
    {
      path: '/table/base/style',
      name: 'TableStyle',
      component: TableStyle
    },
    {
      path: '/table/base/scrollStyle',
      name: 'TableScrollStyle',
      component: TableScrollStyle
    },
    {
      path: '/table/base/header',
      name: 'TableHeader',
      component: TableHeader
    },
    {
      path: '/table/base/highlight',
      name: 'TableHeaderHighlight',
      component: TableHeaderHighlight
    },
    {
      path: '/table/base/resizable',
      name: 'TableResizable',
      component: TableResizable
    },
    {
      path: '/table/base/maxHeight',
      name: 'TableMaxHeight',
      component: TableMaxHeight
    },
    {
      path: '/table/base/height',
      name: 'TableHeight',
      component: TableHeight
    },
    {
      path: '/table/base/rowHeight',
      name: 'TableRowHeight',
      component: TableRowHeight
    },
    {
      path: '/table/base/autoHeight',
      name: 'TableAutoHeight',
      component: TableAutoHeight
    },
    {
      path: '/table/base/fixed',
      name: 'TableFixed',
      component: TableFixed
    },
    {
      path: '/table/base/fixedFull',
      name: 'TableFixedFull',
      component: TableFixedFull
    },
    {
      path: '/table/base/group',
      name: 'TableGroup',
      component: TableGroup
    },
    {
      path: '/table/base/seq',
      name: 'TableSeq',
      component: TableSeq
    },
    {
      path: '/table/base/current',
      name: 'TableCurrent',
      component: TableCurrent
    },
    {
      path: '/table/base/radio',
      name: 'TableRadio',
      component: TableRadio
    },
    {
      path: '/table/base/selection',
      name: 'TableSelection',
      component: TableSelection
    },
    {
      path: '/table/base/sort',
      name: 'TableSort',
      component: TableSort
    },
    {
      path: '/table/base/filter',
      name: 'TableFilter',
      component: TableFilter
    },
    {
      path: '/table/base/empty',
      name: 'TableEmpty',
      component: TableEmpty
    },
    {
      path: '/table/base/loading',
      name: 'TableLoading',
      component: TableLoading
    },
    {
      path: '/table/base/format',
      name: 'TableFormat',
      component: TableFormat
    },
    {
      path: '/table/base/data',
      name: 'TableData',
      component: TableData
    },
    {
      path: '/table/base/html',
      name: 'TableHTML',
      component: TableHTML
    },
    {
      path: '/table/base/full',
      name: 'TableFull',
      component: TableFull
    },
    {
      path: '/table/advanced/event',
      name: 'TableEvent',
      component: TableEvent
    },
    {
      path: '/table/advanced/template',
      name: 'TableTemplate',
      component: TableTemplate
    },
    {
      path: '/table/advanced/dynamic',
      name: 'TableDynamic',
      component: TableDynamic
    },
    {
      path: '/table/advanced/customCheckbox',
      name: 'TableCustomCheckbox',
      component: TableCustomCheckbox
    },
    {
      path: '/table/advanced/customRadio',
      name: 'TableCustomRadio',
      component: TableCustomRadio
    },
    {
      path: '/table/advanced/sortIcon',
      name: 'TableSortIcon',
      component: TableSortIcon
    },
    {
      path: '/table/advanced/customSort',
      name: 'TableCustomSort',
      component: TableCustomSort
    },
    {
      path: '/table/advanced/multiSort',
      name: 'TableMultiSort',
      component: TableMultiSort
    },
    {
      path: '/table/advanced/manualFilter',
      name: 'TableManualFilter',
      component: TableManualFilter
    },
    {
      path: '/table/advanced/filterIcon',
      name: 'TableFilterIcon',
      component: TableFilterIcon
    },
    {
      path: '/table/advanced/customFilter',
      name: 'TableCustomFilter',
      component: TableCustomFilter
    },
    {
      path: '/table/advanced/span',
      name: 'TableSpan',
      component: TableSpan
    },
    {
      path: '/table/advanced/spanRow',
      name: 'TableSpanRow',
      component: TableSpanRow
    },
    {
      path: '/table/advanced/mergeCell',
      name: 'TableMergeCell',
      component: TableMergeCell
    },
    {
      path: '/table/advanced/footer',
      name: 'TableFooter',
      component: TableFooter
    },
    {
      path: '/table/advanced/footerSpan',
      name: 'TableFooterSpan',
      component: TableFooterSpan
    },
    {
      path: '/table/advanced/footerMaxHeight',
      name: 'TableFooterMaxHeight',
      component: TableFooterMaxHeight
    },
    {
      path: '/table/advanced/const',
      name: 'TableImport',
      component: TableImport
    },
    {
      path: '/table/advanced/export',
      name: 'TableExport',
      component: TableExport
    },
    {
      path: '/table/advanced/print',
      name: 'TablePrint',
      component: TablePrint
    },
    {
      path: '/table/advanced/fixedType',
      name: 'TableFixedType',
      component: TableFixedType
    },
    {
      path: '/table/advanced/menu',
      name: 'TableMenu',
      component: TableMenu
    },
    {
      path: '/table/advanced/menuPrivilege',
      name: 'TableMenuPrivilege',
      component: TableMenuPrivilege
    },
    {
      path: '/table/advanced/expand',
      name: 'TableExpand',
      component: TableExpand
    },
    {
      path: '/table/advanced/expandIcon',
      name: 'TableExpandIcon',
      component: TableExpandIcon
    },
    {
      path: '/table/advanced/expandLazy',
      name: 'TableExpandLazy',
      component: TableExpandLazy
    },
    {
      path: '/table/advanced/expandAccordion',
      name: 'TableExpandAccordion',
      component: TableExpandAccordion
    },
    {
      path: '/table/advanced/search',
      name: 'TableSearch',
      component: TableSearch
    },
    {
      path: '/table/advanced/groupBy',
      name: 'TableGroupBy',
      component: TableGroupBy
    },
    {
      path: '/table/advanced/details',
      name: 'TableDetails',
      component: TableDetails
    },
    {
      path: '/table/advanced/popupEdit',
      name: 'TablePopupEdit',
      component: TablePopupEdit
    },
    {
      path: '/table/advanced/toolbar',
      name: 'TableToolbar',
      component: TableToolbar
    },
    {
      path: '/table/advanced/custom',
      name: 'TableCustom',
      component: TableCustom
    },
    {
      path: '/table/advanced/customStorage',
      name: 'TableCustomStorage',
      component: TableCustomStorage
    },
    {
      path: '/table/advanced/customlWidthStorage',
      name: 'TableCustomlWidthStorage',
      component: TableCustomlWidthStorage
    },
    {
      path: '/table/advanced/form',
      name: 'TableForm',
      component: TableForm
    },
    {
      path: '/table/advanced/page',
      name: 'TablePage',
      component: TablePage
    },
    {
      path: '/table/advanced/pageIcon',
      name: 'TablePageIcon',
      component: TablePageIcon
    },
    {
      path: '/table/advanced/highlight',
      name: 'TableHighlight',
      component: TableHighlight
    },
    {
      path: '/table/advanced/rangeSelect',
      name: 'TableRangeSelect',
      component: TableRangeSelect
    },
    {
      path: '/table/advanced/tabs',
      name: 'TableTabs',
      component: TableTabs
    },
    {
      path: '/table/advanced/keepAlives',
      component: TableKeepAlives,
      children: [
        {
          path: 'table1',
          name: 'TableKeepAliveTable1',
          component: TableKeepAliveTable1
        },
        {
          path: 'table2',
          name: 'TableKeepAliveTable2',
          component: TableKeepAliveTable2
        },
        {
          path: 'table3',
          name: 'TableKeepAliveTable3',
          component: TableKeepAliveTable3
        }
      ]
    },
    {
      path: '/table/tree/basic',
      name: 'TableTreeBasic',
      component: TableTreeBasic
    },
    {
      path: '/table/tree/stripe',
      name: 'TableTreeStripe',
      component: TableTreeStripe
    },
    {
      path: '/table/tree/normal',
      name: 'TableTreeNormal',
      component: TableTreeNormal
    },
    {
      path: '/table/tree/treeIcon',
      name: 'TableTreeIcon',
      component: TableTreeIcon
    },
    {
      path: '/table/tree/accordion',
      name: 'TableTreeAccordion',
      component: TableTreeAccordion
    },
    {
      path: '/table/tree/selection',
      name: 'TableTreeSelection',
      component: TableTreeSelection
    },
    {
      path: '/table/tree/radio',
      name: 'TableTreeRadio',
      component: TableTreeRadio
    },
    {
      path: '/table/tree/fixed',
      name: 'TableTreeFixed',
      component: TableTreeFixed
    },
    {
      path: '/table/tree/maxHeight',
      name: 'TableTreeMaxHeight',
      component: TableTreeMaxHeight
    },
    {
      path: '/table/tree/filter',
      name: 'TableTreeFilter',
      component: TableTreeFilter
    },
    {
      path: '/table/tree/sort',
      name: 'TableTreeSort',
      component: TableTreeSort
    },
    {
      path: '/table/tree/groupSummary',
      name: 'TableTreeGroupSummary',
      component: TableTreeGroupSummary
    },
    {
      path: '/table/tree/groupSummaryCount',
      name: 'TableTreeGroupSummaryCount',
      component: TableTreeGroupSummaryCount
    },
    {
      path: '/table/tree/expand',
      name: 'TableTreeExpand',
      component: TableTreeExpand
    },
    {
      path: '/table/tree/expandLazy',
      name: 'TableTreeExpandLazy',
      component: TableTreeExpandLazy
    },
    {
      path: '/table/tree/crud',
      name: 'TableTreeCRUD',
      component: TableTreeCRUD
    },
    {
      path: '/table/tree/insert',
      name: 'TableTreeInsert',
      component: TableTreeInsert
    },
    {
      path: '/table/tree/menu',
      name: 'TableTreeMenu',
      component: TableTreeMenu
    },
    {
      path: '/table/tree/span',
      name: 'TableTreeSpan',
      component: TableTreeSpan
    },
    {
      path: '/table/tree/highlight',
      name: 'TableTreeHighlight',
      component: TableTreeHighlight
    },
    {
      path: '/table/tree/keyboard',
      name: 'TableTreeKeyboard',
      component: TableTreeKeyboard
    },
    {
      path: '/table/tree/lazy',
      name: 'TableTreeLazy',
      component: TableTreeLazy
    },
    {
      path: '/table/tree/lazyMenu',
      name: 'TableTreeLazyMenu',
      component: TableTreeLazyMenu
    },
    {
      path: '/table/tree/lazyEdit',
      name: 'TableTreeLazyEdit',
      component: TableTreeLazyEdit
    },
    {
      path: '/table/tree/line',
      name: 'TableTreeLine',
      component: TableTreeLine
    },
    {
      path: '/table/tree/edit',
      name: 'TableTreeEdit',
      component: TableTreeEdit
    },
    {
      path: '/table/tree/editCellValid',
      name: 'TableTreeEditCellValid',
      component: TableTreeEditCellValid
    },
    {
      path: '/table/tree/editRowValid',
      name: 'TableTreeEditRowValid',
      component: TableTreeEditRowValid
    },
    {
      path: '/table/tree/editForceCellValid',
      name: 'TableTreeEditForceCellValid',
      component: TableTreeEditForceCellValid
    },
    {
      path: '/table/tree/editForceRowValid',
      name: 'TableTreeEditForceRowValid',
      component: TableTreeEditForceRowValid
    },
    {
      path: '/table/tree/template',
      name: 'TableTreeTemplate',
      component: TableTreeTemplate
    },
    {
      path: '/table/grid/basic',
      name: 'GridBasic',
      component: GridBasic
    },
    {
      path: '/table/grid/events',
      name: 'GridEvents',
      component: GridEvents
    },
    {
      path: '/table/grid/group',
      name: 'GridGroup',
      component: GridGroup
    },
    {
      path: '/table/grid/reverse',
      name: 'GridReverse',
      component: GridReverse
    },
    {
      path: '/table/grid/template',
      name: 'GridTemplate',
      component: GridTemplate
    },
    {
      path: '/table/grid/footer',
      name: 'GridFooter',
      component: GridFooter
    },
    {
      path: '/table/grid/page',
      name: 'GridPage',
      component: GridPage
    },
    {
      path: '/table/grid/proxy',
      name: 'GridProxy',
      component: GridProxy
    },
    {
      path: '/table/grid/pageProxy',
      name: 'GridPageProxy',
      component: GridPageProxy
    },
    {
      path: '/table/grid/configProxy',
      name: 'GridConfigProxy',
      component: GridConfigProxy
    },
    {
      path: '/table/grid/edit',
      name: 'GridEdit',
      component: GridEdit
    },
    {
      path: '/table/grid/cellDisable',
      name: 'GridCellDisable',
      component: GridCellDisable
    },
    {
      path: '/table/grid/rowDisable',
      name: 'GridRowDisable',
      component: GridRowDisable
    },
    {
      path: '/table/grid/form',
      name: 'GridForm',
      component: GridForm
    },
    {
      path: '/table/grid/formProxy',
      name: 'GridFormProxy',
      component: GridFormProxy
    },
    {
      path: '/table/grid/toolbar',
      name: 'GridToolbar',
      component: GridToolbar
    },
    {
      path: '/table/grid/customToolbar',
      name: 'GridCustomToolbar',
      component: GridCustomToolbar
    },
    {
      path: '/table/grid/toolbarIcon',
      name: 'GridToolbarIcon',
      component: GridToolbarIcon
    },
    {
      path: '/table/grid/fullscreen',
      name: 'GridFullscreen',
      component: GridFullscreen
    },
    // {
    //   path: '/table/grid/dynamic',
    //   name: 'GridDynamic',
    //   component: GridDynamic
    // },
    {
      path: '/table/grid/menu',
      name: 'GridMenu',
      component: GridMenu
    },
    {
      path: '/table/grid/span',
      name: 'GridSpan',
      component: GridSpan
    },
    {
      path: '/table/grid/upload',
      name: 'GridUpload',
      component: GridUpload
    },
    {
      path: '/table/grid/tree',
      name: 'GridTree',
      component: GridTree
    },
    {
      path: '/table/grid/treeLazy',
      name: 'GridTreeLazy',
      component: GridTreeLazy
    },
    {
      path: '/table/grid/treeLazyEdit',
      name: 'GridTreeLazyEdit',
      component: GridTreeLazyEdit
    },
    {
      path: '/table/grid/treeEdit',
      name: 'GridTreeEdit',
      component: GridTreeEdit
    },
    {
      path: '/table/grid/fullEdit',
      name: 'GridFullEdit',
      component: GridFullEdit
    },
    {
      path: '/table/grid/fullQuery',
      name: 'GridFullQuery',
      component: GridFullQuery
    },
    {
      path: '/table/grid/keepAlives',
      component: GridKeepAlives,
      children: [
        {
          path: 'table1',
          name: 'GridKeepAliveGrid1',
          component: GridKeepAliveGrid1
        },
        {
          path: 'table2',
          name: 'GridKeepAliveGrid2',
          component: GridKeepAliveGrid2
        },
        {
          path: 'table3',
          name: 'GridKeepAliveGrid3',
          component: GridKeepAliveGrid3
        }
      ]
    },
    {
      path: '/table/scroll/scroll',
      name: 'TableScroll',
      component: TableScroll
    },
    {
      path: '/table/scroll/mode',
      name: 'TableScrollMode',
      component: TableScrollMode
    },
    {
      path: '/table/scroll/rows',
      name: 'TableScrollRows',
      component: TableScrollRows
    },
    {
      path: '/table/scroll/fullRows',
      name: 'TableScrollFullRows',
      component: TableScrollFullRows
    },
    {
      path: '/table/scroll/cols',
      name: 'TableScrollCols',
      component: TableScrollCols
    },
    {
      path: '/table/scroll/fullCols',
      name: 'TableScrollFullCols',
      component: TableScrollFullCols
    },
    {
      path: '/table/scroll/tree',
      name: 'TableScrollTree',
      component: TableScrollTree
    },
    {
      path: '/table/scroll/lazyTree',
      name: 'TableScrollLazyTree',
      component: TableScrollLazyTree
    },
    {
      path: '/table/scroll/highlight',
      name: 'TableScrollHighlight',
      component: TableScrollHighlight
    },
    {
      path: '/table/scroll/maxHeight',
      name: 'TableScrollMaxHeight',
      component: TableScrollMaxHeight
    },
    {
      path: '/table/scroll/rowHeight',
      name: 'TableScrollRowHeight',
      component: TableScrollRowHeight
    },
    {
      path: '/table/scroll/group',
      name: 'TableScrollGroup',
      component: TableScrollGroup
    },
    {
      path: '/table/scroll/merge',
      name: 'TableScrollMerge',
      component: TableScrollMerge
    },
    {
      path: '/table/scroll/keyboard',
      name: 'TableScrollKeyboard',
      component: TableScrollKeyboard
    },
    {
      path: '/table/scroll/edit',
      name: 'TableScrollEdit',
      component: TableScrollEdit
    },
    {
      path: '/table/scroll/cellValid',
      name: 'TableScrollCellValid',
      component: TableScrollCellValid
    },
    {
      path: '/table/scroll/rowValid',
      name: 'TableScrollRowValid',
      component: TableScrollRowValid
    },
    {
      path: '/table/scroll/forceCellValid',
      name: 'TableScrollForceCellValid',
      component: TableScrollForceCellValid
    },
    {
      path: '/table/scroll/forceRowValid',
      name: 'TableScrollForceRowValid',
      component: TableScrollForceRowValid
    },
    {
      path: '/table/scroll/partialLoad',
      name: 'TableScrollPartialLoad',
      component: TableScrollPartialLoad
    },
    {
      path: '/table/scroll/fullPartialLoad',
      name: 'TableScrollFullPartialLoad',
      component: TableScrollFullPartialLoad
    },
    {
      path: '/table/scroll/footer',
      name: 'TableScrollFooter',
      component: TableScrollFooter
    },
    {
      path: '/table/scroll/template',
      name: 'TableScrollTemplate',
      component: TableScrollTemplate
    },
    {
      path: '/table/scroll/tabs',
      name: 'TableScrollTabs',
      component: TableScrollTabs
    },
    {
      path: '/table/scroll/keepAlives',
      component: TableScrollKeepAlives,
      children: [
        {
          path: 'table1',
          name: 'TableScrollKeepAliveTable1',
          component: TableScrollKeepAliveTable1
        },
        {
          path: 'table2',
          name: 'TableScrollKeepAliveTable2',
          component: TableScrollKeepAliveTable2
        },
        {
          path: 'table3',
          name: 'TableScrollKeepAliveTable3',
          component: TableScrollKeepAliveTable3
        }
      ]
    },
    {
      path: '/table/edit/popupForm',
      name: 'TableEditPopupForm',
      component: TableEditPopupForm
    },
    {
      path: '/table/edit/manual',
      name: 'TableEditManual',
      component: TableEditManual
    },
    {
      path: '/table/edit/click',
      name: 'TableEditClick',
      component: TableEditClick
    },
    {
      path: '/table/edit/dblclick',
      name: 'TableEditDBLClick',
      component: TableEditDBLClick
    },
    {
      path: '/table/edit/select',
      name: 'TableEditSelect',
      component: TableEditSelect
    },
    {
      path: '/table/edit/autoClear',
      name: 'TableAutoClearManual',
      component: TableAutoClearManual
    },
    {
      path: '/table/edit/cellPlaceholder',
      name: 'TableEditCellPlaceholder',
      component: TableEditCellPlaceholder
    },
    {
      path: '/table/edit/insert',
      name: 'TableEditInsert',
      component: TableEditInsert
    },
    {
      path: '/table/edit/remove',
      name: 'TableEditRemove',
      component: TableEditRemove
    },
    {
      path: '/table/edit/revert',
      name: 'TableEditRevert',
      component: TableEditRevert
    },
    {
      path: '/table/edit/status',
      name: 'TableEditStatus',
      component: TableEditStatus
    },
    {
      path: '/table/edit/cellDisable',
      name: 'TableEditCellDisable',
      component: TableEditCellDisable
    },
    {
      path: '/table/edit/rowDisable',
      name: 'TableEditRowDisable',
      component: TableEditRowDisable
    },
    {
      path: '/table/edit/highlightCell',
      name: 'TableEditHighlightCell',
      component: TableEditHighlightCell
    },
    {
      path: '/table/edit/keyboard',
      name: 'TableEditKeyboard',
      component: TableEditKeyboard
    },
    {
      path: '/table/edit/keyboardEdit',
      name: 'TableEditKeyboardEdit',
      component: TableEditKeyboardEdit
    },
    {
      path: '/table/edit/cellValid',
      name: 'TableEditCellValid',
      component: TableEditCellValid
    },
    {
      path: '/table/edit/rowValid',
      name: 'TableEditRowValid',
      component: TableEditRowValid
    },
    {
      path: '/table/edit/forceCellValid',
      name: 'TableEditForceCellValid',
      component: TableEditForceCellValid
    },
    {
      path: '/table/edit/forceRowValid',
      name: 'TableEditForceRowValid',
      component: TableEditForceRowValid
    },
    {
      path: '/table/edit/footer',
      name: 'TableEditFooter',
      component: TableEditFooter
    },
    {
      path: '/table/edit/footerImmediately',
      name: 'TableEditFooterImmediately',
      component: TableEditFooterImmediately
    },
    {
      path: '/table/edit/expand',
      name: 'TableEditExpand',
      component: TableEditExpand
    },
    {
      path: '/table/edit/menu',
      name: 'TableEditMenu',
      component: TableEditMenu
    },
    {
      path: '/table/edit/span',
      name: 'TableEditSpan',
      component: TableEditSpan
    },
    {
      path: '/table/edit/form',
      name: 'TableEditForm',
      component: TableEditForm
    },
    {
      path: '/table/edit/upload',
      name: 'TableEditUpload',
      component: TableEditUpload
    },
    {
      path: '/table/edit/realtimeSave',
      name: 'TableEditRealtimeSave',
      component: TableEditRealtimeSave
    },
    {
      path: '/table/edit/dataCount',
      name: 'TableEditDataCount',
      component: TableEditDataCount
    },
    {
      path: '/table/edit/uniqueSelect',
      name: 'TableEditUniqueSelect',
      component: TableEditUniqueSelect
    },
    {
      path: '/table/edit/cascadingSelect',
      name: 'TableEditCascadingSelect',
      component: TableEditCascadingSelect
    },
    {
      path: '/table/edit/events',
      name: 'TableEditEvents',
      component: TableEditEvents
    },
    {
      path: '/table/edit/template',
      name: 'TableEditTemplate',
      component: TableEditTemplate
    },
    {
      path: '/table/edit/full',
      name: 'TableEditFull',
      component: TableEditFull
    },
    {
      path: '/table/module/icon',
      name: 'ModuleIcon',
      component: ModuleIcon
    },
    {
      path: '/table/module/button',
      name: 'ModuleButton',
      component: ModuleButton
    },
    {
      path: '/table/module/radio',
      name: 'ModuleRadio',
      component: ModuleRadio
    },
    {
      path: '/table/module/checkbox',
      name: 'ModuleCheckbox',
      component: ModuleCheckbox
    },
    {
      path: '/table/module/input',
      name: 'ModuleInput',
      component: ModuleInput
    },
    {
      path: '/table/module/textarea',
      name: 'ModuleTextarea',
      component: ModuleTextarea
    },
    {
      path: '/table/module/select',
      name: 'ModuleSelect',
      component: ModuleSelect
    },
    {
      path: '/table/module/pager',
      name: 'ModulePager',
      component: ModulePager
    },
    {
      path: '/table/module/modal',
      name: 'ModuleModal',
      component: ModuleModal
    },
    {
      path: '/table/module/tooltip',
      name: 'ModuleTooltip',
      component: ModuleTooltip
    },
    {
      path: '/table/module/toolbar',
      name: 'ModuleToolbar',
      component: ModuleToolbar
    },
    {
      path: '/table/module/form',
      name: 'ModuleForm',
      component: ModuleForm
    },
    {
      path: '/table/module/switch',
      name: 'ModuleSwitch',
      component: ModuleSwitch
    },
    {
      path: '/table/module/list',
      name: 'ModuleList',
      component: ModuleList
    },
    {
      path: '/table/module/pulldown',
      name: 'ModulePulldown',
      component: ModulePulldown
    },
    {
      path: '/table/module/file',
      name: 'ModuleFile',
      component: ModuleFile
    },
    {
      path: '/table/module/print',
      name: 'ModulePrint',
      component: ModulePrint
    },
    {
      path: '/donation/api',
      name: 'Donation',
      component: Donation
    },
    {
      path: '/:name/api',
      name: 'VXEAPI',
      component: VXEAPI
    },
    {
      path: '/api/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
