<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #checked1_header>
        <vxe-checkbox v-model="isAllChecked1" :indeterminate="isIndeterminate1" @change="changeAll1Event"></vxe-checkbox>
      </template>
      <template #checked1_default="{ row }">
        <vxe-checkbox v-model="row.checked1" @change="updateChecked1State"></vxe-checkbox>
      </template>

      <template #checked2_header>
        <vxe-checkbox v-model="isAllChecked2" :indeterminate="isIndeterminate2" @change="changeAll2Event"></vxe-checkbox>
      </template>
      <template #checked2_default="{ row }">
        <vxe-checkbox v-model="row.checked2" @change="updateChecked2State"></vxe-checkbox>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  checked1: boolean
  checked2: boolean
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 500,
      rowConfig: {
        keyField: 'id',
        isHover: true
      },
      columns: [
        { field: 'checked1', title: '', width: 60, slots: { header: 'checked1_header', default: 'checked1_default' } },
        { field: 'name', title: 'Name' },
        { field: 'checked2', title: '', width: 60, slots: { header: 'checked2_header', default: 'checked2_default' } },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', checked1: false, checked2: false },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', checked1: false, checked2: false },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', checked1: false, checked2: false },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', checked1: false, checked2: false },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', age: 38, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 24, address: 'test abc', checked1: false, checked2: false },
        { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 35, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 31, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10011, name: 'Test11', role: 'PM', sex: 'Women', age: 45, address: 'Shanghai', checked1: false, checked2: false },
        { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 39, address: 'Guangzhou', checked1: false, checked2: false },
        { id: 10013, name: 'Test13', role: 'Develop', sex: 'Women', age: 38, address: 'Shanghai', checked1: false, checked2: false }
      ]
    }

    // 全选状态（true: 全选, false: 全不选）
    const isAllChecked1 = false
    const isAllChecked2 = false

    // 半选状态（true: 部分选中, false: 非部分选中）
    const isIndeterminate1 = false
    const isIndeterminate2 = false

    return {
      gridOptions,
      isAllChecked1,
      isAllChecked2,
      isIndeterminate1,
      isIndeterminate2
    }
  },
  created () {
    // 初始化时计算一次各列的全选/半选状态
    this.updateChecked1State()
    this.updateChecked2State()
  },
  methods: {
    // 更新第一列的全选和半选状态
    updateChecked1State () {
      const data = this.gridOptions.data || []
      const total = data.length
      if (total === 0) {
        this.isAllChecked1 = false
        this.isIndeterminate1 = false
        return
      }
      const checkedCount = data.filter(row => row.checked1).length
      this.isAllChecked1 = checkedCount === total
      this.isIndeterminate1 = checkedCount > 0 && checkedCount < total
    },
    // 更新第二列的全选和半选状态
    updateChecked2State () {
      const data = this.gridOptions.data || []
      const total = data.length
      if (total === 0) {
        this.isAllChecked2 = false
        this.isIndeterminate2 = false
        return
      }
      const checkedCount = data.filter(row => row.checked2).length
      this.isAllChecked2 = checkedCount === total
      this.isIndeterminate2 = checkedCount > 0 && checkedCount < total
    },
    // 第一列全选/取消全选
    changeAll1Event () {
      const data = this.gridOptions.data || []
      const newValue = this.isAllChecked1
      data.forEach(row => {
        row.checked1 = newValue
      })
      // 批量更新后同步状态
      this.updateChecked1State()
    },
    // 第二列全选/取消全选
    changeAll2Event () {
      const data = this.gridOptions.data || []
      const newValue = this.isAllChecked2
      data.forEach(row => {
        row.checked2 = newValue
      })
      this.updateChecked2State()
    }
  }
})
</script>
