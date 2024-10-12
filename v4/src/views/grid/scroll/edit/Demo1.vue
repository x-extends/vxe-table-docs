<template>
  <div>
    <p>
      <vxe-button @click="loadData(500)">加载500行</vxe-button>
      <vxe-button @click="loadData(1000)">加载1k行</vxe-button>
      <vxe-button @click="loadData(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadData(30000)">加载3w行</vxe-button>
    </p>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: string
  sex: string
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 800,
  loading: false,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  scrollY: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
    { field: 'role', title: 'Role', editRender: { name: 'input' } },
    { field: 'age', title: 'Age', editRender: { name: 'input' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'address', title: 'Address', editRender: { name: 'input' } }
  ]
})

// 模拟行数据
const loadData = (size = 200) => {
  gridOptions.loading = true
  setTimeout(() => {
    const $grid = gridRef.value
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      dataList.push({
        id: i,
        name: `名称${i}`,
        nickname: '',
        role: `角色${i}`,
        age: '18',
        sex: '',
        address: ''
      })
    }
    gridOptions.loading = false
    if ($grid) {
      const startTime = Date.now()
      $grid.loadData(dataList).then(() => {
        VxeUI.modal.message({
          content: `加载时间 ${Date.now() - startTime} 毫秒`,
          status: 'success'
        })
        gridOptions.loading = false
      })
    }
  }, 350)
}

loadData(500)
</script>
