<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（第三行插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const insertRecords: RowVO[] = []

    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      showOverflow: true,
      height: 400,
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: { name: 'input' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      insertRecords,
      gridOptions
    }
  },
  methods: {
    addEvent () {
      const newRow: RowVO = {
        id: new Date().getTime(),
        name: `Name_${new Date().getTime()}`,
        role: '',
        sex: '',
        age: 18,
        address: ''
      }
      this.gridOptions.data.unshift(newRow)
      this.insertRecords.push(newRow)
      this.$nextTick(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          $grid.setEditRow(newRow)
        }
      })
    },
    pushEvent () {
      const newRow: RowVO = {
        id: new Date().getTime(),
        name: `Name_${new Date().getTime()}`,
        role: '',
        sex: '',
        age: 18,
        address: ''
      }
      this.gridOptions.data.push(newRow)
      this.insertRecords.push(newRow)
      this.$nextTick(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          $grid.setEditRow(newRow)
        }
      })
    },
    insertEvent () {
      const newRow: RowVO = {
        id: new Date().getTime(),
        name: `Name_${new Date().getTime()}`,
        role: '',
        sex: '',
        age: 18,
        address: ''
      }
      this.gridOptions.data.splice(2, 0, newRow)
      this.insertRecords.push(newRow)
      this.$nextTick(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          $grid.setEditRow(newRow)
        }
      })
    },
    getInsertEvent () {
      VxeUI.modal.alert(`新增：${this.insertRecords.length} 行`)
    }
  }
})
</script>
