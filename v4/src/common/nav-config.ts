export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  isEnterprise?: boolean
  isPlugin?: boolean
  isTemplate?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  linkStatus?: 'warning' | 'success' | 'error'
  keywords?: string[]
  children?: NavVO[]
}

const otherUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/other${process.env.VUE_APP_VXE_VERSION}`

const tableNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.tableTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.tableTableTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' } },
            { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' } },
            { title: '边距', routerLink: { name: 'ComponentTableBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' } },
            { title: '列宽', routerLink: { name: 'ComponentTableBaseWidth' } },
            { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' } },
            { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' } },
            { title: '滚动条样式', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' } },
            { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' } },
            { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' } },
            { title: '高亮列', routerLink: { name: 'ComponentTableBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentTableBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' } },
            { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' } },
            { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' } },
            { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' } },
            { title: '设置行度', routerLink: { name: 'ComponentTableBaseRowHeight' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' } },
            { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' } },
            { title: '表尾数据', routerLink: { name: 'ComponentTableBaseFooter' } },
            { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' } },
            { title: '排序', routerLink: { name: 'ComponentTableBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' } },
            { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' } },
            { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' } },
            { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' } },
            { title: '标题前缀图标', routerLink: { name: 'ComponentTableBaseTitlePrefix' } },
            { title: '标题后缀图标', routerLink: { name: 'ComponentTableBaseTitleSuffix' } },
            { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' } },
            { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentTableMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentTableMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } },
            { title: '表尾合并', routerLink: { name: 'ComponentTableMergeFooter' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentTableMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentTableFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentTableRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableRadioVisibleMethod' } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentTableCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentTableCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableCheckboxVisibleMethod' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentTableCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableSortTrigger' } },
            { title: '自定义轮询', routerLink: { name: 'ComponentTableSortOrders' } },
            { title: '设置默认排序', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } },
            { title: '设置值的类型', routerLink: { name: 'ComponentTableSortSortType' } },
            { title: '自定义排序方法', routerLink: { name: 'ComponentTableSortSortMethod' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentTableRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableRowDragIcon' } },
            { title: '树结构', routerLink: { name: 'ComponentTableRowDragTree' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableRowDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableRowDragDragMethod' } }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentTableColDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableColDragIcon' } },
            { title: '分组表头', routerLink: { name: 'ComponentTableColDragGroup' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableColDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableColDragDragMethod' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '修改筛选选项', routerLink: { name: 'ComponentTableFilterOptions' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } },
            { title: '实现列头筛选', routerLink: { name: 'ComponentTableFilterHeader' } },
            { title: '手动操作筛选', routerLink: { name: 'ComponentTableFilterManual' } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentTableExpandPadding' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableExpandIcon' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentTableExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentTableExpandFixed' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableExpandTrigger' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableExpandLazy' } },
            { title: '展开按钮的显示隐藏', routerLink: { name: 'ComponentTableExpandVisibleMethod' } },
            { title: '展开与关闭的控制', routerLink: { name: 'ComponentTableExpandToggleMethod' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentTableExpandChildTable' } }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
            { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
            { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
            { title: '自定义前缀', routerLink: { name: 'ComponentTableMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentTableMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '集成表单', routerLink: { name: 'ComponentTableFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentTableFormCollapse' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentTableToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentTableToolbarTools' } },
            { title: '自定义列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } },
            { title: '导入功能', routerLink: { name: 'ComponentTableToolbarImport' } },
            { title: '导出功能', routerLink: { name: 'ComponentTableToolbarExport' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentTableToolbarTemplateButtons' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentTableToolbarTemplateTools' } }
              ]
            }
          ]
        },
        {
          title: '自定义列',
          children: [
            { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentTableCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentTableCustomDrawer' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentTableCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentTableCustomVisibleMethod' } },
            { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
            { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
            { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
            { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
            { title: '冻结列最大数量限制', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            { title: '自定义触发按钮', routerLink: { name: 'ComponentTableCustomCustomBtn' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentTableCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            { title: '实现显示/隐藏列', routerLink: { name: 'ComponentTableCustomManual' } },
            { title: '实现折叠列', routerLink: { name: 'ComponentTableCustomCollapseColumn' } }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentTablePagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentTablePagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentTablePagerStart' } }
          ]
        },
        {
          title: '树形',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableTreeBasic' } },
            { title: '平级结构', routerLink: { name: 'ComponentTableTreeLeveling' } },
            { title: '层级结构', routerLink: { name: 'ComponentTableTreeHierarchy' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
            { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
            { title: '最大高度', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            { title: '手风琴效果', routerLink: { name: 'ComponentTableTreeAccordion' } },
            { title: '高亮行', routerLink: { name: 'ComponentTableTreeCurrentRow' } },
            { title: '高亮列', routerLink: { name: 'ComponentTableTreeCurrentColumn' } },
            { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
            { title: '树形筛选', routerLink: { name: 'ComponentTableTreeFilter' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableTreeFixed' } },
            { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
            { title: '懒加载 - 可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
            { title: '同时使用展开行 - 懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } },
            { title: '实现数据分组', routerLink: { name: 'ComponentTableTreeGroup' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellRenderVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellRenderVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentTableCellTemplateVxeTag' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellTemplateVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellTemplateVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellTemplateVxeCheckboxGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentTableCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellTemplateVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellTemplateVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellTemplateVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellTemplateVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellTemplateVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableCellTemplateVxeDrawer' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentTableCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
            { title: '编辑与聚焦', routerLink: { name: 'ComponentTableEditAutoFocus' } },
            { title: '关闭自动清除编辑状态', routerLink: { name: 'ComponentTableEditAutoClear' } },
            { title: '编辑状态', routerLink: { name: 'ComponentTableEditStatus' } },
            { title: '空值占位符', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            // { title: '修改数据', routerLink: { name: 'ComponentTableEditUpdate' } },
            // { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
            // { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
            // { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
            // { title: '还原数据', routerLink: { name: 'ComponentTableEditRevert' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentTableEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentTableEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleOriginalUpdate' } }
              ]
            },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentTableEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentTableEditRowDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
            { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } },
            { title: '树结构', routerLink: { name: 'ComponentTableEditTree' } },
            { title: '使用合并行与列', routerLink: { name: 'ComponentTableEditSpan' } },
            { title: '使用右键菜单', routerLink: { name: 'ComponentTableEditMenu' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableEditRowHeight' } },
            { title: '实现附件列表', routerLink: { name: 'ComponentTableEditFileList' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentTableEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentTableEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentTableEditDrawerSelect' } },
            { title: '实现唯一下拉选项', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            { title: '实现多行文本编辑', routerLink: { name: 'ComponentTableEditMultiLineText' } },
            { title: '实现联动禁用', routerLink: { name: 'ComponentTableEditLinkageDisabled' } },
            { title: '实现多列下拉联动', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentTableEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            { title: '实现单元格实时保存', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaClip' } } },
            { title: '渲染图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentTableEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditRenderVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditRenderVxeTableSelect' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            { title: 'VxeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentTableEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableEditTemplateVxeDrawer' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentTableValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentTableValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentTableValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentTableValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentTableValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentTableValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentTableValidateMode' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentTableValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentTableValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义单元格模板', routerLink: { name: 'ComponentTableTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentTableTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentTableTemplateFooter' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentTableTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentTableTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentTableTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentTableTemplateEdit' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentTableKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentTableKeyboardKeyboard' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            { title: '重写默认编辑行为', routerLink: { name: 'ComponentTableKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentTableKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentTableExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentTableExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentTableExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentTableExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentTableExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/table/export` },
            { title: '格式化单元格内容', routerLink: { name: 'ComponentTableExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/import` },
            { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
            { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentTablePrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentTablePrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentTablePrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentTableScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentTableScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentTableScrollFixed' } },
            { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentTableScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentTableScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentTableScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentTableScrollAutoRowFixed' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
            { title: '按键导航', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            { title: '单元格合并', routerLink: { name: 'ComponentTableScrollMerge' } },
            { title: '树形 + 横向', routerLink: { name: 'ComponentTableScrollTree' } },
            { title: '可编辑 + 横向', routerLink: { name: 'ComponentTableScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentTableScrollHVEdit' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentTableSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentTableSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaFNR' } } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentTableEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentTableEventsScroll' } }
          ]
        },
        {
          title: '可视化图表',
          children: [
            { title: '单元格图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '其他',
          children: [
            { title: '多行文本溢出省略', routerLink: { name: 'ComponentTableOtherLineEllipsis' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGridTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
            { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
            { title: '边距', routerLink: { name: 'ComponentGridBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
            { title: '列宽', routerLink: { name: 'ComponentGridBaseWidth' } },
            { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
            { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
            { title: '滚动条样式', routerLink: { name: 'ComponentGridBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
            { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
            { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
            { title: '高亮列', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizable' } },
            { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
            { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
            { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
            { title: '设置行度', routerLink: { name: 'ComponentGridBaseRowHeight' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
            { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
            { title: '表尾', routerLink: { name: 'ComponentGridBaseFooter' } },
            { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
            { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
            { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
            { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
            { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
            { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
            { title: '列配置', routerLink: { name: 'ComponentGridBaseColumns' } },
            { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentGridMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentGridMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } },
            { title: '表尾合并', routerLink: { name: 'ComponentGridMergeFooter' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentGridMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '标准结构', routerLink: { name: 'ComponentGridFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentGridFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentGridFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentGridFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentGridRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridRadioVisibleMethod' } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentGridCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentGridCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '多字段排序', routerLink: { name: 'ComponentGridSortMultiple' } },
            { title: '服务端排序', routerLink: { name: 'ComponentGridSortRemote' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridRowDragIcon' } },
            { title: '树结构', routerLink: { name: 'ComponentGridRowDragTree' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridRowDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridRowDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridRowDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridRowDragTemplateTip' } }
              ]
            }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridColDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridColDragIcon' } },
            { title: '分组表头', routerLink: { name: 'ComponentGridColDragGroup' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridColDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridColDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridColDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridColDragTemplateTip' } }
              ]
            },
            { title: '同时行与列拖拽', routerLink: { name: 'ComponentGridColDragRowCol' } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentGridExpandChildTable' } },
            { title: '实现弹窗选择到子表格', routerLink: { name: 'ComponentGridExpandSelectModalTable' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '修改筛选选项', routerLink: { name: 'ComponentGridFilterOptions' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentGridFilterRemote' } },
            { title: '实现列头中自定义筛选', routerLink: { name: 'ComponentGridFilterHeaderFilter' } }
          ]
        },
        {
          title: '筛选 - 渲染 - 配置式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '筛选 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '自定义前缀', routerLink: { name: 'ComponentGridMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentGridMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/grid/full` }

          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
            { title: '表单的默认值', routerLink: { name: 'ComponentGridFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } },
            { title: '自定义项插槽模板', routerLink: { name: 'ComponentGridFormItemTemplate' } },
            { title: '自定义表单插槽模板', routerLink: { name: 'ComponentGridFormTemplate' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentGridToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentGridToolbarTools' } },
            { title: '自定义列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
            { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
            { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
            { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
            { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentGridToolbarTemplateButtons' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentGridToolbarTemplateTools' } }
              ]
            }
          ]
        },
        {
          title: '自定义列',
          children: [
            { title: '使用工具栏', routerLink: { name: 'ComponentGridCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentGridCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentGridCustomDrawer' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentGridCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentGridCustomVisibleMethod' } },
            { title: '列宽限制', routerLink: { name: 'ComponentGridCustomResizableWidth' } },
            // { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
            // { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
            // { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
            // { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
            // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentGridCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridCustomTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridCustomTemplateBottom' } },
                { title: '自定义头部模板', routerLink: { name: 'ComponentGridCustomTemplateHeader' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridCustomTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridCustomTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentGridPagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentGridPagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentGridPagerStart' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentGridPagerTemplate' } }
          ]
        },
        {
          title: '功能布局',
          children: [
            { title: '调整分页位置', routerLink: { name: 'ComponentGridLayoutPager' } },
            { title: '调整工具栏位置', routerLink: { name: 'ComponentGridLayoutToolbar' } }
          ]
        },
        {
          title: '树形',
          children: [
            { title: '平级结构', routerLink: { name: 'ComponentGridTreeLeveling' } },
            { title: '层级结构', routerLink: { name: 'ComponentGridTreeHierarchy' } },
            { title: '显示连接线', routerLink: { name: 'ComponentGridTreeLine' } },
            { title: '单选框', routerLink: { name: 'ComponentGridTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentGridTreeCheckbox' } },
            { title: '实现数据分组', routerLink: { name: 'ComponentGridTreeGroup' } },
            { title: '实现多字段分组', routerLink: { name: 'ComponentGridTreeGroupFields' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis', routerLink: { name: 'ComponentGridCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate', routerLink: { name: 'ComponentGridCellRenderVxeRate' } },
            { title: 'VxeUpload', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentGridCellTemplateVxeTag' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridCellTemplateVxeDrawer' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentGridCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentGridEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
            { title: '行编辑', routerLink: { name: 'ComponentGridEditRowValid' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentGridEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentGridEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleOriginalUpdate' } }
              ]
            },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentGridEditCellValid' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentGridEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentGridEditFooterImmediately' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentGridEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentGridEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentGridEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentGridEditDrawerSelect' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaClip' } } },
            { title: '渲染图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentGridEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentGridEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditRenderVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditRenderVxeTableSelect' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditRenderCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRenderRowDisable' } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentGridEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentGridEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridEditTemplateVxeDrawer' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentGridValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentGridValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentGridValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentGridValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentGridValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentGridValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentGridValidateMode' } },
            { title: '校验指定单元格', routerLink: { name: 'ComponentGridValidateValidateField' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentGridValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentGridValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义布局模板', routerLink: { name: 'ComponentGridTemplateLayout' } },
            { title: '自定义单元格模板', routerLink: { name: 'ComponentGridTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentGridTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentGridTemplateFooter' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentGridTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentGridTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentGridTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentGridTemplateEdit' } },
            { title: '自定义单元格校验模板', routerLink: { name: 'ComponentGridTemplateValid' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentGridKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentGridKeyboardKeyboard' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentGridKeyboardEdit' } },
            { title: '重写默认编辑行为', routerLink: { name: 'ComponentGridKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentGridKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentGridExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentGridExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentGridExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentGridExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentGridExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/grid/export` },
            { title: '自定义数据', routerLink: { name: 'ComponentGridExportData' } },
            { title: '格式化导出内容', routerLink: { name: 'ComponentGridExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } },
            { title: '自定义导出类型', routerLink: { name: 'ComponentGridExportTypes' } },
            { title: '服务端导出', routerLink: { name: 'ComponentGridExportRemote' } },
            { title: '自定义导出模式', routerLink: { name: 'ComponentGridExportModes' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridExportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridExportTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridExportTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridExportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridExportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentGridImportBase' } },
            { title: '导入 TXT 格式', routerLink: { name: 'ComponentGridImportTxt' } },
            { title: '导入 XML 格式', routerLink: { name: 'ComponentGridImportXml' } },
            { title: '导入 HTML 格式', routerLink: { name: 'ComponentGridImportHtml' } },
            { title: '导入 CSV 格式', routerLink: { name: 'ComponentGridImportCsv' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/import` },
            { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } },
            { title: '服务端导入', routerLink: { name: 'ComponentGridImportRemote' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridImportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridImportTemplateBottom' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridImportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridImportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
            { title: '自定义顶部和底部', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
            { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } },
            { title: '自定义页眉/标题', routerLink: { name: 'ComponentGridPrintHeader' } },
            { title: '自定义页尾/页码', routerLink: { name: 'ComponentGridPrintFooter' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridPrintTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridPrintTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridPrintTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridPrintTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridPrintTemplateDefault' } }
              ]
            },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentGridPrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentGridPrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentGridPrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentGridScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentGridScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentGridScrollFixed' } },
            { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentGridScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentGridScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentGridScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentGridScrollAutoRowFixed' } },
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridScrollDragRow' } },
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridScrollDragCol' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } },
            { title: '使用表尾', routerLink: { name: 'ComponentGridScrollFooter' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridScrollMerge' } },
            { title: '树形 + 纵向', routerLink: { name: 'ComponentGridScrollTree' } },
            { title: '树形 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVTree' } },
            { title: '可编辑 + 纵向', routerLink: { name: 'ComponentGridScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVEdit' } }
          ]
        },
        {
          title: '数据代理',
          children: [
            { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
            { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
            { title: '工具栏 - 查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
            { title: '手动调用 - 查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
            { title: '集成排序查询', routerLink: { name: 'ComponentGridProxySort' } },
            { title: '集成筛选查询', routerLink: { name: 'ComponentGridProxyFilter' } },
            { title: '集成表单查询', routerLink: { name: 'ComponentGridProxyForm' } },
            { title: '集成分页序号', routerLink: { name: 'ComponentGridProxySeq' } },
            { title: '工具栏 - 全量数据导出', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
            { title: '工具栏 - 服务端导出', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
            { title: '工具栏 - 删除已选', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
            { title: '手动调用 - 删除已选', routerLink: { name: 'ComponentGridProxyManualDelete' } },
            { title: '工具栏 - 批量标记删除', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
            { title: '手动调用 - 标记删除状态', routerLink: { name: 'ComponentGridProxyManualMark' } },
            { title: '工具栏 - 增删改查', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
            { title: '手动调用 - 增删改查', routerLink: { name: 'ComponentGridProxyManualSave' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentGridSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentGridSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaFNR' } } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentGridEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentGridEventsScroll' } }
          ]
        },
        {
          title: '无限加载',
          children: [
            { title: '实现加载行', routerLink: { name: 'ComponentGridLoadMoreVertical' } },
            { title: '实现加载列', routerLink: { name: 'ComponentGridLoadMoreHorizontal' } },
            { title: '实现同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreVH' } },
            { title: '指定阈值加载行', routerLink: { name: 'ComponentGridLoadMoreBoundaryY' } },
            { title: '指定阈值加载列', routerLink: { name: 'ComponentGridLoadMoreBoundaryX' } },
            { title: '指定阈值同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreBoundaryXY' } }
          ]
        },
        {
          title: '可视化图表',
          children: [
            { title: '单元格图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '其他',
          children: [
            { title: '定位行、定位列', routerLink: { name: 'ComponentGridOtherScrollTo' } },
            { title: '反转列与行', routerLink: { name: 'ComponentGridOtherReverse' } },
            { title: '文件列表', routerLink: { name: 'ComponentGridOtherFileList' } },
            { title: '多行文本溢出省略', routerLink: { name: 'ComponentGridOtherLineEllipsis' } },
            { title: '动态生成月份表头', routerLink: { name: 'ComponentGridOtherYearMonth' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalFormats',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
        { title: '单元格', routerLink: { name: 'GlobalFormatsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalMenus',
      children: [
        { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
        { title: '右键菜单', routerLink: { name: 'GlobalMenusTableBase' } },
        { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalCommands',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
        { title: '工具栏', routerLink: { name: 'GlobalCommandsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalValidators',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
        { title: '单元格校验', routerLink: { name: 'GlobalValidatorsTableBase' } },
        { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/table/base` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          title: '单元格',
          children: [
            { title: '实现单元格超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' } },
            { title: '实现单元格图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' } },
            { title: '实现单元格金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyAmount' } },
            { title: '实现表头超链接', routerLink: { name: 'GlobalRendererTableDefaultMyHeaderLink' } },
            { title: '实现表尾金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFooterAmount' } },
            { title: '实现完整金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFullAmount' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' } },
            { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' } },
            { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' } },
            { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' } },
            { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' } },
            { title: '实现一个显示列表的筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' } },
            { title: '更多扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/filter/el-input` },
            { title: '更多筛选插件', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/' }
          ]
        },
        {
          title: '空数据提示',
          children: [
            { title: '实现一个空数据显示文字', routerLink: { name: 'GlobalRendererTableMyEmptyImg' } },
            { title: '实现一个空数据显示图片', routerLink: { name: 'GlobalRendererTableMyEmptyText' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalInterceptor',
      children: [
        { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
        { title: '可编辑 - 兼容性处理', routerLink: { name: 'GlobalInterceptorTableBase' } }
      ]
    }
  ]
}

export const navConfigList: NavVO[] = [
  { title: '切换 v4.x 旧版文档', linkUrl: '/v4_old', linkTarget: '_self' },
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
      { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartCDN' } },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  // {
  //   i18nKey: 'app.aside.menu.tools',
  //   children: [
  //     // { title: '函数库' },
  //     { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } }
  //   ]
  // },
  ...tableNavConfig.children,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
