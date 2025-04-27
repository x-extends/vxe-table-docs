<template>
  <div>
    <p>
      <vxe-button @click="setSelectRow(1)">设置第二行选中</vxe-button>
      <vxe-button @click="clearRadioRowEvent">取消选中</vxe-button>
      <vxe-button @click="getRadioEvent">获取选中</vxe-button>
    </p>

    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      @cell-click="cellClickEvent"
      @radio-change="radioChangeEvent">
      <template #radioHeader>
        <vxe-button mode="text" @click="clearRadioRowEvent" :disabled="!selectRow">取消</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> & {
      data: RowVO[]
    } = {
      border: true,
      height: 300,
      radioConfig: {
        highlight: true
      },
      columns: [
        { type: 'radio', width: 60, slots: { header: 'radioHeader' } },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ]
    }

    return {
      gridOptions,
      selectRow: null as RowVO | null
    }
  },
  methods: {
    cellClickEvent () {
      console.log('单元格点击事件')
    },
    radioChangeEvent ({ row }) {
      this.selectRow = row
      console.log('单选事件')
    },
    setSelectRow (index: number) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setRadioRow(this.gridOptions.data[index])
      }
    },
    clearRadioRowEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        this.selectRow = null
        $grid.clearRadioRow()
      }
    },
    getRadioEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const currRow = $grid.getRadioRecord()
        VxeUI.modal.alert(JSON.stringify(currRow))
      }
    }
  }
})
</script>
