<template>
  <div>
    <div>
      <vxe-button @click="scrollToCol('attr1')">定位 Attr1 列</vxe-button>
      <vxe-button @click="scrollToCol('attr6')">定位 Attr6 列</vxe-button>
      <vxe-button @click="scrollToCol('attr11')">定位 Attr11 列</vxe-button>
    </div>
    <div>
      <vxe-button @click="scrollToRow(gridOptions.data[3])">定位第4行</vxe-button>
      <vxe-button @click="scrollToRow(gridOptions.data[49])">定位第50行</vxe-button>
      <vxe-button @click="scrollToRow(gridOptions.data[105])">定位第106行</vxe-button>
    </div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  attr7: string
  attr8: string
  attr9: string
  attr10: string
  attr11: string
  attr12: string
  attr13: string
  attr14: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  showOverflow: true,
  height: 500,
  virtualXConfig: {
    enabled: true,
    gt: 0
  },
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    {
      title: '基本信息',
      fixed: 'left',
      children: [
        { type: 'seq', width: 70, fixed: 'left' },
        { field: 'name', title: 'Name', width: 140, fixed: 'left' }
      ]
    },
    {
      title: '更多信息',
      children: [
        { field: 'role', title: 'Role', width: 300 },
        { field: 'num', title: 'Num', width: 200 },
        {
          title: '详细信息',
          children: [
            { field: 'attr1', title: 'Attr1', width: 400 },
            { field: 'attr2', title: 'Attr2', width: 300 },
            { field: 'attr3', title: 'Attr3', width: 700 },
            { field: 'attr4', title: 'Attr4', width: 600 },
            { field: 'attr5', title: 'Attr5', width: 500 },
            { field: 'attr6', title: 'Attr6', width: 400 },
            { field: 'attr7', title: 'Attr7', width: 200 },
            { field: 'attr8', title: 'Attr8', width: 500 },
            { field: 'attr9', title: 'Attr9', width: 600 },
            { field: 'attr10', title: 'Attr10', width: 500 },
            { field: 'age', title: 'Age', width: 200 }
          ]
        }
      ]
    },
    { field: 'attr11', title: 'Attr11', width: 300 },
    { field: 'attr12', title: 'Attr12', width: 200 },
    {
      title: '分组2',
      children: [

        { field: 'attr13', title: 'Attr13', width: 220 },
        { field: 'attr14', title: 'Attr14', width: 320 }
      ]
    },
    {
      title: '额外信息',
      fixed: 'right',
      children: [
        { field: 'sex', title: 'Sex', fixed: 'right', width: 100 },
        { field: 'address', title: 'Address', fixed: 'right', width: 140 }
      ]
    }
  ],
  data: []
})

const scrollToCol = (field: string) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.scrollToColumn(field)
  }
}

const scrollToRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.scrollToRow(row)
  }
}

// 模拟后端接口
setTimeout(() => {
  const list: RowVO[] = []
  for (let i = 0; i < 200; i++) {
    list.push(
      {
        id: 10000 + i,
        name: 'Test' + i,
        role: i % 5 ? 'Test' : 'Develop',
        sex: i % 4 ? 'Women' : 'Man',
        age: i % 3 ? 46 : 28,
        address: 'test abc',
        attr1: '',
        attr2: '',
        attr3: '',
        attr4: '',
        attr5: '',
        attr6: '',
        attr7: '',
        attr8: '',
        attr9: '',
        attr10: '',
        attr11: '',
        attr12: '',
        attr13: '',
        attr14: ''
      }
    )
  }
  gridOptions.data = list
}, 100)
</script>
