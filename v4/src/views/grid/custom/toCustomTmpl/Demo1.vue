<template>
  <div>
    <vxe-button status="primary" @click="saveEvent">保存用户个性化数据</vxe-button>
    <vxe-button status="success" @click="restore1Event">恢复用户个性化数据1</vxe-button>
    <vxe-button status="success" @click="restore2Event">恢复用户个性化数据2</vxe-button>
    <vxe-button status="error" @click="resetEvent">重置个性化数据</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeTableDefines } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  id: 'muToCustomTmpl',
  border: true,
  rowConfig: {
    keyField: 'id'
  },
  toolbarConfig: {
    custom: true
  },
  customConfig: {
    storage: true
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300 },
    { field: 'role', title: 'Role', width: 200 },
    { field: 'sex', title: 'Sex', width: 100 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'attr1', title: 'Attr1', width: 200 },
    { field: 'attr2', title: 'Attr2', width: 300 },
    { field: 'attr3', title: 'Attr3', width: 150 },
    { field: 'attr4', title: 'Attr4', width: 200 },
    { field: 'attr5', title: 'Attr5', width: 160 },
    { field: 'attr6', title: 'Attr6', width: 140 },
    { field: 'attr7', title: 'Attr7', width: 180 },
    { field: 'attr8', title: 'Attr8', width: 260 },
    { field: 'address', title: 'Address', minWidth: 200 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const saveEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    // 获取配置
    const storeData = $grid.getCustomStoreData()
    console.log(storeData)
  }
}

const restore1Event = () => {
  const $grid = gridRef.value
  if ($grid) {
    const storeData: VxeTableDefines.CustomStoreData = {
      fixedData: {
        role: 'left'
      }
    }
    // 根据配置重新初始化
    $grid.setCustomStoreData(storeData)
  }
}

const restore2Event = () => {
  const $grid = gridRef.value
  if ($grid) {
    const storeData: VxeTableDefines.CustomStoreData = {
      resizableData: {
        name: 300
      },
      fixedData: {
        name: 'left',
        sex: 'right'
      },
      visibleData: {
        address: false
      }
    }
    // 根据配置重新初始化
    $grid.setCustomStoreData(storeData)
  }
}

const resetEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.resetCustom(true)
  }
}
</script>
