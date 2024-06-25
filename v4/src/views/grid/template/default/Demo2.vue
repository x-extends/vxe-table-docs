<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeUI, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    {
      field: 'name',
      title: 'Name',
      slots: {
        default ({ row }) {
          return <vxe-button mode="text" onClick={ () => openDetail(row) }>点击{ row.name }</vxe-button>
        }
      }
    },
    {
      field: 'sex',
      title: 'Sex',
      slots: {
        default ({ row }) {
          return <span>{ formatSex(row) }</span>
        }
      }
    },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    {
      field: 'address',
      title: 'Address',
      slots: {
        default ({ row }) {
          return <>
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;" />
            <span>{ row.address }</span>
            <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;" />
          </>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const formatSex = (row: RowVO) => {
  return row.sex === '1' ? '男' : '女'
}

const openDetail = (row: RowVO) => {
  VxeUI.modal.message({
    status: 'success',
    content: `点击了${row.name}`
  })
}
</script>
