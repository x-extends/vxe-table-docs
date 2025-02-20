<template>
  <div>
    <vxe-radio-group v-model="borderColor">
      <vxe-radio-button label="" content="默认"></vxe-radio-button>
      <vxe-radio-button label="#ff0000" content="红色"></vxe-radio-button>
      <vxe-radio-button label="#0000ff" content="蓝色"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="borderWidth">
      <vxe-radio-button label="1px" content="1px"></vxe-radio-button>
      <vxe-radio-button label="2px" content="2px"></vxe-radio-button>
      <vxe-radio-button label="3px" content="3px"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-table-border-color': borderColor,
        '--vxe-ui-table-border-width': borderWidth
      }">
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const borderColor = ref('')
const borderWidth = ref('1px')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>
