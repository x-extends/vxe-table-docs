const apiList = [
  {
    name: 'tableFilterClassName',
    desc: '设置筛选容器 class',
    version: '',
    type: 'string | ((params: { column, columnIndex, $columnIndex, $rowIndex }) => string)',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'showTableFilterFooter',
    desc: '筛选容器是否显示尾部',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFilterAutoHeight',
    desc: '是否自适应表格高度',
    version: '3.18.19',
    type: 'boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'createTableFilterOptions',
    desc: '定义筛选选项数据,用来替换 column.filters 简化配置',
    version: '3.19.0',
    type: '(renderOpts, params: { column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableFilter',
    desc: '自定义默认筛选渲染内容',
    version: '',
    type: '(h, renderOpts, renderParams: { column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableFloatingFilter',
    desc: '自定义浮动筛选渲染内容',
    version: '3.19.0',
    type: '(h, renderOpts, renderParams: { column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFilterMethod',
    desc: '自定义筛选逻辑方法',
    version: '',
    type: '(params: { value, option, cellValue, row, column, $table }) => boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFilterResetMethod',
    desc: '自定义筛选重置逻辑方法',
    version: '',
    type: '(params: { options, column }) => void',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFilterRecoverMethod',
    desc: '自定义筛选还原逻辑方法',
    version: '',
    type: '(params: { options, column }) => void',
    enum: '',
    defVal: '',
    list: []
  },
  // {
  //   name: 'tableFilterDefaultMethod',
  //   desc: '默认筛选处理方法，如果同时存在，会被 tableFilterMethod 覆盖',
  //   version: '',
  //   type: '(params: { value, option, cellValue, row, column, $table  }) => boolean',
  //   enum: '',
  //   defVal: '',
  //   list: []
  // },
  {
    name: 'tableCellAlign',
    desc: '单元格对齐方式',
    version: '3.1.33',
    type: 'left（左对齐）, center（居中对齐）, right（右对齐）',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableHeaderCellAlign',
    desc: '表头单元格对齐方式',
    version: '3.1.33',
    type: 'left（左对齐）, center（居中对齐）, right（右对齐）',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFooterCellAlign',
    desc: '列尾单元格对齐方式',
    version: '3.1.33',
    type: 'left（左对齐）, center（居中对齐）, right（右对齐）',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableCellClassName',
    desc: '单元格设置 class',
    version: '',
    type: 'string | ((params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => string)',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableCellStyle',
    desc: '单元格设置样式',
    version: '',
    type: 'Record<string, any> | ((params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => Record<string, any>)',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableHeader',
    desc: '渲染头部',
    version: '',
    type: '(h, renderOpts, renderParams: { column, columnIndex, $columnIndex, _columnIndex, $rowIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableDefault',
    desc: '渲染单元格',
    version: '',
    type: '(h, renderOpts, renderParams: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableFooter',
    desc: '渲染尾部',
    version: '',
    type: '(h, renderOpts, renderParams: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $rowIndex, items, itemIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableExportMethod',
    desc: '自定义单元格导出逻辑',
    version: '',
    type: '(params: { row, column }) => string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableFooterExportMethod',
    desc: '自定义表尾单元格导出逻辑',
    version: '',
    type: '(params: { items, itemIndex, row, column, _columnIndex }) => string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableAutoFocus',
    desc: '激活编辑状态时，设置自动聚焦的 class',
    version: '',
    type: 'string | ((params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => HTMLElement)',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableAutoSelect',
    desc: '激活编辑状态时，设置是否自动选中 tableAutofocus 指定的元素',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableEdit',
    desc: '渲染编辑状态时，与 renderTableCell 配合使用',
    version: '',
    type: '(h, renderOpts, renderParams: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableCell',
    desc: '渲染非编辑状态时，与 renderTableEdit 配合使用',
    version: '',
    type: '(h, renderOpts, renderParams: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableCellCopyMethod',
    desc: '自定义单元格复制方法',
    version: '3.19.21',
    type: '(params: { isCut, row, column, cellValue }) => string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableCellCutMethod',
    desc: '自定义单元格剪贴方法',
    version: '3.19.21',
    type: '(params: { row, column, cellValue, clipData }) => string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'tableCellPasteMethod',
    desc: '自定义单元格粘贴方法',
    version: '3.19.21',
    type: '(params: { isCut, row, column, cellValue, clipDat }) => string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableExpand',
    desc: '展开行渲染',
    version: '',
    type: '(h, renderOpts, renderParams: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'renderTableEmpty',
    desc: '空数据时渲染',
    version: '',
    type: '(h, renderOpts, renderParams: { $table }) => JSX | VNode',
    enum: '',
    defVal: '',
    list: []
  }
]

export const allConfigList = [
  {
    name: 'add(name, option)',
    desc: '添加',
    version: '',
    type: '',
    enum: '',
    defVal: 'name: string, option: any',
    list: apiList
  },
  {
    name: 'mixin(options)',
    desc: '添加多个，参数跟 add 一致',
    version: '',
    type: '',
    enum: '',
    defVal: 'options: Record<string, option>',
    list: []
  },
  {
    name: 'delete(name)',
    desc: '删除',
    version: '',
    type: '',
    enum: '',
    defVal: 'name',
    list: []
  }
]

export const defaultConfigList = [
  {
    name: 'add(name, option)',
    desc: '添加',
    version: '',
    type: '',
    enum: '',
    defVal: 'name: string, option: any',
    list: apiList.filter(item => ['renderTableDefault'].includes(item.name))
  },
  {
    name: 'mixin(options)',
    desc: '添加多个，参数跟 add 一致',
    version: '',
    type: '',
    enum: '',
    defVal: 'options: Record<string, option>',
    list: []
  },
  {
    name: 'delete(name)',
    desc: '删除',
    version: '',
    type: '',
    enum: '',
    defVal: 'name',
    list: []
  }
]
