<template>
  <div>
    <vxe-tip status="primary" title="全局渲染器">
      通过渲染器你可以实现表格中筛选、单元格的复用，轻松就可以实现低代码，甚至零代码配置化工具。可以根据不同业务实现不一样的渲染器，这个功能将非常实用。
    </vxe-tip>
    <vxe-tip status="info">
      <div class="green">渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；</div>
      <div class="green">插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；</div>
      <div class="orange">支持通过 JSX 自定义渲染，返回数组格式的 JSX。实际开发中应该将业务封装成一个组件，不要把复杂的渲染逻辑写在渲染器中，渲染器只负责表格与自定义组件之间的对接关系</div>
    </vxe-tip>
    <vxe-tip status="error" title="难点提示">
      <div>先检查是否配置好 <vxe-link href="https://cn.vuejs.org/guide/extras/render-function.html#jsx-tsx" target="_blank">jsx/tsx</vxe-link> 运行环境，如果没配置将无法使用。渲染器的实现难度极高，不适合初级使用，出错将会全局影响功能、问题排查难度较高</div>
    </vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.renderer.add(code, options)</div>
    </vxe-tip>

    <vxe-table
      :tree-config="{childrenField: 'list', expandAll: true}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" :title="$t('api.title.prop')" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" :title="$t('api.title.desc')" min-width="200"></vxe-column>
      <vxe-column field="type" :title="$t('api.title.type')" min-width="140"></vxe-column>
      <vxe-column field="enum" :title="$t('api.title.enum')" min-width="150"></vxe-column>
      <vxe-column field="defVal" :title="$t('api.title.defVal')" min-width="160"></vxe-column>
    </vxe-table>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const tableData = [
      {
        name: 'add(name, option)',
        desc: '添加',
        version: '',
        type: '',
        enum: '',
        defVal: 'name: string, option: any',
        list: [
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
            name: 'renderTableFilter',
            desc: '自定义筛选渲染内容',
            version: '',
            type: '(h, renderOpts, params: { column, columnIndex, $columnIndex, _columnIndex, $table }) => JSX | VNode',
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

    return {
      tableData
    }
  }
})
</script>
