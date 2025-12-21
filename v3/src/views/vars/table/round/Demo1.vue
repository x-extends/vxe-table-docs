<template>
  <div>
    <vxe-radio-group v-model="borderColor">
      <vxe-radio-button checked-value="4px" content="默认"></vxe-radio-button>
      <vxe-radio-button checked-value="#ff0000" content="红色"></vxe-radio-button>
      <vxe-radio-button checked-value="#0000ff" content="蓝色"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="borderRadius">
      <vxe-radio-button checked-value="4px" content="4px"></vxe-radio-button>
      <vxe-radio-button checked-value="8px" content="8px"></vxe-radio-button>
      <vxe-radio-button checked-value="16px" content="16px"></vxe-radio-button>
      <vxe-radio-button checked-value="32px" content="32px"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-table-border-color': borderColor,
        '--vxe-ui-table-border-radius': borderRadius
      }">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      round: true,
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
    }

    const borderColor = ''
    const borderRadius = '8px'

    return {
      gridOptions,
      borderColor,
      borderRadius
    }
  }
})
</script>
