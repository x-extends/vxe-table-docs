<template>
  <div>
    <vxe-table
      border
      show-footer
      :footer-method="footerMethod"
      :data="tableData"
      :menu-config="menuConfig"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" width="300" sortable :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" width="300" sortable :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.role" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="sex" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.sex" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" width="180" sortable :filters="ageOptions" :filter-method="filterAgeMethod" :filter-render="{}" :edit-render="{}">
        <template #filter="{ $panel, column }">
          <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">
        </template>
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="rate" title="Rate" width="180" sortable></vxe-column>
      <vxe-column field="date13" title="Date" width="250"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  rate: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, rate: 1, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, rate: 1, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, rate: 1, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, rate: 1, address: 'test abc' }
])

const ageOptions = ref([
  { data: [] }
])

const menuConfig = reactive<VxeTablePropTypes.MenuConfig<RowVO>>({
  header: {
    options: [
      [
        { code: 'HIDDEN_COLUMN', name: '隐藏' },
        { code: 'RESET_COLUMN', name: '取消隐藏' },
        { code: 'FIXED_LEFT_COLUMN', name: '固定到左侧' },
        { code: 'FIXED_RIGHT_COLUMN', name: '固定到右侧' },
        { code: 'CLEAR_FIXED_COLUMN', name: '取消固定' },
        { code: 'RESET_ALL', name: '重置个性化数据', prefixIcon: 'fa fa-undo' }
      ],
      [
        { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print' },
        { code: 'EXPORT_ALL', name: '导出.html', prefixIcon: 'fa fa-download', params: { type: 'html' } }
      ]
    ]
  },
  body: {
    options: [
      [
        { code: 'INSERT_AT_ACTIVED_ROW', name: '插入' },
        { code: 'DELETE_ROW', name: 'app.body.label.delete' },
        { code: 'CLEAR_CELL', name: '清除内容' }
      ],
      [
        {
          name: 'app.body.label.filter',
          prefixIcon: 'fa fa-filter',
          children: [
            { code: 'CLEAR_FILTER', name: '清除筛选' },
            { code: 'CLEAR_ALL_FILTER', name: '重置所有筛选' },
            { code: 'FILTER_CELL', name: '按所选单元格的值筛选' }
          ]
        },
        {
          name: 'app.body.label.sort',
          children: [
            { code: 'SORT_ASC', name: '升序', prefixIcon: 'fa fa-sort-alpha-desc' },
            { code: 'SORT_DESC', name: '倒序', prefixIcon: 'fa fa-sort-alpha-desc' },
            { code: 'CLEAR_SORT', name: '清除排序' }
          ]
        }
      ],
      [
        { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print', params: { columns: [{ field: 'name' }, { field: 'age' }, { field: 'rate' }] } },
        { code: 'EXPORT_ALL', name: '导出.csv', prefixIcon: 'fa fa-download', params: { columns: [{ field: 'name' }, { field: 'age' }, { field: 'rate' }], type: 'csv' } }
      ]
    ]
  },
  footer: {
    options: [
      [
        { code: 'EXPORT_ALL', name: '导出.xml', prefixIcon: 'fa fa-download', params: { columns: [{ field: 'name' }, { field: 'role' }, { field: 'sex' }], type: 'xml' } },
        { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print', params: { columns: [{ field: 'name' }, { field: 'role' }, { field: 'sex' }] } }
      ]
    ]
  }
})

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '和值'
      }
      if (['age', 'rate'].includes(column.property)) {
        return sumNum(data, column.property)
      }
      return null
    })
  ]
}

const filterAgeMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ option, row }) => {
  return row.age === Number(option.data)
}
</script>
