<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div class="expand-wrapper">
          <vxe-grid v-bind="childGridOptions" :data="row.childList">
            <template #cell_two_checkbox="{ row: childRow }">
              <vxe-checkbox v-model="childRow.isChecked" :indeterminate="childRow.isHalf"  @change="changeTwoSelect(childRow, row)"></vxe-checkbox>
            </template>
          </vxe-grid>
        </div>
      </template>

      <template #head_one_checkbox>
        <vxe-checkbox v-model="isAllChecked" :indeterminate="isAllHalf" @change="selectAllEvent"></vxe-checkbox>
      </template>
      <template #cell_one_checkbox="{ row }">
        <vxe-checkbox v-model="row.isChecked" :indeterminate="row.isHalf" @change="changeOneSelect(row)"></vxe-checkbox>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  isChecked: boolean
  isHalf: boolean
  childList?: RowVO[]
}

export default Vue.extend({
  data () {
    const isAllChecked = false
    const isAllHalf = false

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 600,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'checkbox', width: 60, slots: { default: 'cell_one_checkbox', header: 'head_one_checkbox' } },
        { type: 'expand', width: 60, slots: { content: 'expand_content' } },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        {
          id: 10001,
          name: 'Test1',
          role: 'Develop',
          sex: 'Man',
          age: 28,
          address: 'test abc',
          isChecked: false,
          isHalf: false,
          childList: [
            { id: 10011, name: 'Test112', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', isChecked: false, isHalf: false },
            { id: 10012, name: 'Test134 134134134134134134134134', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', isChecked: false, isHalf: false }
          ]
        },
        {
          id: 10002,
          name: 'Test2',
          role: 'Test',
          sex: 'Women',
          age: 22,
          address: 'Guangzhou',
          isChecked: false,
          isHalf: false,
          childList: [
            { id: 10021, name: 'Test233 233233233233233', role: 'Designer', sex: 'Man', age: 34, address: 'test 234324', isChecked: false, isHalf: false }
          ]
        },
        {
          id: 10003,
          name: 'Test3',
          role: 'PM',
          sex: 'Man',
          age: 32,
          address: 'Shanghai',
          isChecked: false,
          isHalf: false,
          childList: [
            { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty', isChecked: false, isHalf: false },
            { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10035, name: 'Test3214', role: 'Develop', sex: 'Women', age: 49, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou', isChecked: false, isHalf: false }
          ]
        },
        {
          id: 10004,
          name: 'Test4',
          role: 'Designer',
          sex: 'Women',
          age: 24,
          address: 'Shanghai',
          isChecked: false,
          isHalf: false,
          childList: [
            { id: 10041, name: 'Test456456 456456456456456456', role: 'Designer', sex: 'Man', age: 19, address: 'test 3444444', isChecked: false, isHalf: false },
            { id: 10042, name: 'Test457', role: 'Test', sex: 'Women', age: 29, address: 'rtyty sdfsdf', isChecked: false, isHalf: false }
          ]
        },
        {
          id: 10005,
          name: 'Test5',
          role: 'PM',
          sex: 'Man',
          age: 62,
          address: 'Guangzhou',
          isChecked: false,
          isHalf: false,
          childList: [
            { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty', isChecked: false, isHalf: false },
            { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10035, name: 'Test3214', role: 'Develop', sex: 'Women', age: 49, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou', isChecked: false, isHalf: false },
            { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou', isChecked: false, isHalf: false }
          ]
        }
      ]
    }

    const childGridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 200,
      columns: [
        { field: 'checkbox', width: 60, slots: { default: 'cell_two_checkbox' } },
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'address', title: 'Address' }
      ]
    }

    return {
      isAllChecked,
      isAllHalf,
      gridOptions,
      childGridOptions
    }
  },
  methods: {
    selectAllEvent () {
      const { data = [] } = this.gridOptions
      this.isAllHalf = false
      XEUtils.eachTree(data, row => {
        row.isChecked = this.isAllChecked
        row.isHalf = false
      }, { children: 'childList' })
    },
    changeOneSelect (row: RowVO) {
      row.isHalf = false
      XEUtils.eachTree(row.childList, childRow => {
        childRow.isChecked = row.isChecked
      }, { children: 'childList' })
      this.checkOneSelectStatus()
    },
    checkOneSelectStatus () {
      const { data = [] } = this.gridOptions
      this.isAllChecked = XEUtils.every(data, row => row.isChecked)
      this.isAllHalf = !this.isAllChecked && XEUtils.some(data, row => row.isChecked || row.isHalf)
    },
    changeTwoSelect (childRow: RowVO, row: RowVO) {
      const { childList = [] } = row
      row.isChecked = XEUtils.every(childList, chidlRow => chidlRow.isChecked)
      row.isHalf = !row.isChecked && XEUtils.some(childList, chidlRow => chidlRow.isChecked)
      this.checkOneSelectStatus()
    }
  }
})
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 16px;
}
</style>
