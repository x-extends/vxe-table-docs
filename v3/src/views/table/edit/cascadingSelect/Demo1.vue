<template>
  <div>
    <p>
      <vxe-button @click="insertEvent()">新增</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      ref="tableRef"
      max-height="400"
      :column-config="{resizable: true}"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-activated="editActivatedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="attr3" title="Project type" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatProjectType(row) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.attr3" :options="ptypeList" transfer @change="ptypeChangeEvent(row)"></vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.attr4" :options="pnameList" transfer></vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
  attr3: string
  attr4: string
}

interface PTypeVO {
  label: string
  value: string
}

interface CachePnameVO {
  ptype: string
  pnameList: PTypeVO[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '', attr3: '', attr4: '' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20', attr3: '', attr4: '' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '', attr3: '2', attr4: '' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04', attr3: '', attr4: '' }
    ]

    const ptypeList = [
      { label: '项目1', value: '1' },
      { label: '项目2', value: '2' },
      { label: '项目3', value: '3' }
    ]

    const pnameList: PTypeVO[] = []
    const cachePnameList: CachePnameVO[] = []

    const formatProjectType = (row: RowVO) => {
      const item = ptypeList.find(item => item.value === row.attr3)
      return item ? item.label : row.attr3
    }

    return {
      tableData,
      ptypeList,
      pnameList,
      cachePnameList,
      formatProjectType
    }
  },
  methods: {
    insertEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {}
        $table.insert(record)
      }
    },
    // 格式化显示名称
    formatPanmeLabel  ({ cellValue, row }) {
      const ptype = row.attr3
      const cacheItem = this.cachePnameList.find(item => item.ptype === ptype)
      if (cacheItem && cacheItem.pnameList) {
        const pnameItem = cacheItem.pnameList.find((item) => item.value === cellValue)
        if (pnameItem) {
          return pnameItem.label
        }
      }
      return ''
    },
    // 更新级联选项列表
    updatePnameList  (row: RowVO) {
      const ptype = row.attr3
      let pList: PTypeVO[] = []
      if (ptype) {
        const item = this.cachePnameList.find(item => item.ptype === ptype)
        if (item) {
          pList = item.pnameList
        } else {
          // 模拟后台数据
          Array.from(new Array(XEUtils.random(3, 8))).forEach((item, index) => {
            pList.push({
              label: `${ptype}-名称${index}`,
              value: `${ptype}_${index}`
            })
          })
          this.cachePnameList.push({ ptype, pnameList: pList })
        }
      }
      this.pnameList = pList
    },
    ptypeChangeEvent  (row: RowVO) {
      // 类型切换时更新级联的下拉数据
      row.attr4 = ''
      this.updatePnameList(row)
    },
    editActivatedEvent ({ row }) {
      this.updatePnameList(row)
    }
  }
})
</script>
