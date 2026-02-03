<template>
  <div>
    <vxe-button status="primary" @click="insertEvent">新增</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeUI, VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  rate: number
  num: number
  address: string
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return (count / list.length).toFixed(2)
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count.toFixed(2)
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showFooter: true,
      height: 400,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', age: 10, num: 28, rate: 5, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', age: 34, num: 22, rate: 4, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', age: 56, num: 32, rate: 3, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'PM', age: 56, num: 32, rate: 4, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' }
      ],
      footerData: []
    }

    const meanObj = {
      seq: '平均',
      name: '-',
      age: '',
      rate: '',
      num: ''
    }

    const sumNObj = {
      seq: '和值',
      name: '-',
      age: '',
      rate: '',
      num: ''
    }

    return {
      gridOptions,
      meanObj,
      sumNObj
    }
  },
  created () {
    const ageEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeNumberInput',
      props: {
        type: 'integer',
        min: 1,
        max: 120
      },
      events: {
        change: this.updateFootEvent
      }
    }

    const numEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeNumberInput',
      events: {
        change: this.updateFootEvent
      }
    }

    const rateEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeNumberInput',
      events: {
        change: this.updateFootEvent
      }
    }

    this.gridOptions.columns = [
      { field: 'seq', type: 'seq', width: 60 },
      {
        title: '统计信息',
        children: [
          { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
          { field: 'age', title: 'Age', editRender: ageEditRender },
          { field: 'num', title: 'Num', editRender: numEditRender },
          { field: 'rate', title: 'Rate', editRender: rateEditRender }
        ]
      },
      { title: '操作', width: 100, slots: { default: 'action' } }
    ]
    this.gridOptions.footerData = [
      this.meanObj,
      this.sumNObj
    ]

    this.updateFootCount(this.gridOptions.data)
  },
  methods: {
    async insertEvent () {
      const record = {
        name: 'New name'
      }
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const { row: newRow } = await $grid.insert(record)
        $grid.setEditCell(newRow, 'age')
      }
    },
    async removeRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const type = await VxeUI.modal.confirm('您确定要删除该数据?')
        if (type === 'confirm') {
          await $grid.remove(row)
          this.updateFootEvent()
        }
      }
    },
    updateFootCount (list: RowVO[] = []) {
      this.meanObj.age = meanNum(list, 'age')
      this.meanObj.num = meanNum(list, 'num')
      this.meanObj.rate = meanNum(list, 'rate')

      this.sumNObj.age = sumNum(list, 'age')
      this.sumNObj.num = sumNum(list, 'num')
      this.sumNObj.rate = sumNum(list, 'rate')
    },
    // 在值发生改变时更新表尾合计
    updateFootEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const fullData = $grid.getFullData()
        this.updateFootCount(fullData)
      }
    }
  }
})
</script>
