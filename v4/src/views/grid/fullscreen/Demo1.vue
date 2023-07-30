<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button @click="maximizeEvent">表格最大化</vxe-button>
        <vxe-button @click="revertEvent">表格还原</vxe-button>
        <vxe-button @click="zoomEvent">切换表格最大化/还原</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const xGrid = ref<VxeGridInstance<RowVO>>()

const findList = (): Promise<{
  page: {
    total: number
  },
  result: RowVO[]
}> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const list = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
      ]
      const rest = {
        page: {
          total: 200
        },
        result: list
      }
      resolve(rest)
    }, 500)
  })
}

const meanNum = (list: any[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count / list.length
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showFooter: true,
  height: 530,
  columnConfig: {
    resizable: true
  },
  pagerConfig: {
    enabled: true,
    pageSize: 20,
    perfect: true
  },
  toolbarConfig: {
    perfect: true,
    refresh: true,
    zoom: true,
    custom: true,
    slots: {
      // 自定义插槽模板
      buttons: 'toolbar_buttons'
    }
  },
  proxyConfig: {
    props: {
      result: 'result', // 配置响应结果列表字段
      total: 'page.total' // 配置响应结果总页数字段
    },
    ajax: {
      query: () => findList()
    }
  },
  columns: [
    { type: 'seq', width: 60 },
    { type: 'checkbox', width: 100 },
    { field: 'name', title: 'Name' },
    { field: 'age', title: 'Age' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address' }
  ],
  footerMethod ({ columns, data }) {
    const sums: any[] = []
    columns.forEach((column, columnIndex) => {
      if (columnIndex === 0) {
        sums.push('平均')
      } else {
        if (column.field === 'age') {
          sums.push(meanNum(data, 'age'))
        } else {
          sums.push('-')
        }
      }
    })
    // 返回一个二维数组的表尾合计
    return [sums]
  }
})

const maximizeEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.maximize()
  }
}

const revertEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.revert()
  }
}

const zoomEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.zoom()
  }
}
</script>
