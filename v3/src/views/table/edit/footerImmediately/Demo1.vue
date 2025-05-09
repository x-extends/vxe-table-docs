<template>
  <div>
    <vxe-button status="primary" @click="insertEvent">新增</vxe-button>

    <vxe-table
      border
      show-footer
      show-overflow
      keep-source
      ref="tableRef"
      height="400"
      :footer-data="footerData"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vxe-column field="seq" type="seq" width="60"></vxe-column>
      <vxe-colgroup title="统计信息">
        <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}">
          <template #edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="age" title="Age" :edit-render="{name: 'VxeNumberInput'}">
          <template #edit="{ row }">
            <vxe-number-input v-model="row.age" type="integer" :min="1" :max="120" @change="updateFootEvent"></vxe-number-input>
          </template>
        </vxe-column>
        <vxe-column field="num" title="Num" :edit-render="{name: 'VxeNumberInput'}">
          <template #edit="{ row }">
            <vxe-number-input v-model="row.num" @change="updateFootEvent"></vxe-number-input>
          </template>
        </vxe-column>
        <vxe-column field="rate" title="Rate" :edit-render="{name: 'VxeNumberInput'}">
          <template #edit="{ row }">
            <vxe-number-input v-model="row.rate" @change="updateFootEvent"></vxe-number-input>
          </template>
        </vxe-column>
      </vxe-colgroup>
      <vxe-column field="action" title="操作" width="100">
        <template #default="{row }">
          <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  rate: number
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', age: 10, num: 28, rate: 5, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', age: 34, num: 22, rate: 4, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', age: 56, num: 32, rate: 3, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' },
      { id: 10005, name: 'Test5', role: 'PM', age: 56, num: 32, rate: 4, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '平均', name: '-', age: 0, rate: 0, num: 0 },
      { seq: '和值', name: '-', age: 0, rate: 0, num: 0 }
    ]

    return {
      tableData,
      footerData
    }
  },
  methods: {
    meanNum (list: RowVO[], field: string) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return (count / list.length).toFixed(2)
    },
    sumNum (list: RowVO[], field: string) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count.toFixed(2)
    },
    async insertEvent () {
      const record = {
        name: 'New name'
      }
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const { row: newRow } = await $table.insert(record)
        $table.setEditCell(newRow, 'age')
      }
    },
    async removeRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const type = await VxeUI.modal.confirm('您确定要删除该数据?')
        if (type === 'confirm') {
          await $table.remove(row)
          this.updateFootEvent()
        }
      }
    },
    // 在值发生改变时更新表尾合计
    updateFootEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const fullData = $table.getFullData()
        this.updateFootCount(fullData)
      }
    },
    updateFootCount (list: RowVO[]) {
      const [sumNObj, meanObj] = this.footerData
      meanObj.age = this.meanNum(list, 'age')
      meanObj.num = this.meanNum(list, 'num')
      meanObj.rate = this.meanNum(list, 'rate')

      sumNObj.age = this.sumNum(list, 'age')
      sumNObj.num = this.sumNum(list, 'num')
      sumNObj.rate = this.sumNum(list, 'rate')
    }
  },
  created () {
    this.updateFootCount(this.tableData)
  }
})
</script>
