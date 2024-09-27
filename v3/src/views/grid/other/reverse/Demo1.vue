<template>
  <div>
    <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
  col7: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 400,
      showHeader: false,
      columns: [
        { field: 'col1', width: 100 },
        { field: 'col2', minWidth: 160 },
        { field: 'col3', minWidth: 160 },
        { field: 'col4', minWidth: 160 },
        { field: 'col5', minWidth: 160 },
        { field: 'col6', minWidth: 160 },
        { field: 'col7', minWidth: 160 }
      ],
      data: [
        { col1: 'Name', col2: 'Test1', col3: 'Test2', col4: 'Test3', col5: 'Test4', col6: 'Test5', col7: 'Test6' },
        { col1: 'Role', col2: 'Develop', col3: 'PM', col4: 'Designer', col5: 'Test', col6: 'Designer', col7: 'Develop' },
        { col1: 'Sex', col2: 'Man', col3: 'Women', col4: 'Man', col5: 'Women', col6: 'Man', col7: 'Women' },
        { col1: 'Age', col2: '28', col3: '18', col4: '22', col5: '30', col6: '26', col7: '34' },
        { col1: 'Rate', col2: '1', col3: '4', col4: '5', col5: '2', col6: '0', col7: '4' },
        { col1: 'Date', col2: '2024-11-01', col3: '2024-01-19', col4: '2022-09-01', col5: '2024-01-01', col6: '2024-10-09', col7: '2024-12-20' },
        { col1: 'Address', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai Guangzhou Shanghai Guangzhou', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
        { col1: 'UpdateTime', col2: '2024-08-01', col3: '2023-06-18', col4: '2022-11-11', col5: '2024-11-15', col6: '2024-11-05', col7: '2024-11-28' },
        { col1: 'CreateTime', col2: '2026-11-03', col3: '2024-05-01', col4: '2024-11-22', col5: '2023-05-09', col6: '2024-11-25', col7: '2025-11-07' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>

<style lang="scss">
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}
</style>
