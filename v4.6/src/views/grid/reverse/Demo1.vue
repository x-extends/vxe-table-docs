<template>
  <div>
    <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
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

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 400,
  showHeader: false,
  columns: [
    { field: 'col1', width: 100 },
    { field: 'col2' },
    { field: 'col3' },
    { field: 'col4' },
    { field: 'col5' },
    { field: 'col6' },
    { field: 'col7' }
  ],
  data: [
    { col1: 'Name', col2: 'Test1', col3: 'Test2', col4: 'Test3', col5: 'Test4', col6: 'Test5', col7: 'Test6' },
    { col1: 'Role', col2: 'Develop', col3: 'PM', col4: 'Designer', col5: 'Test', col6: 'Designer', col7: 'Develop' },
    { col1: 'Sex', col2: 'Man', col3: 'Women', col4: 'Man', col5: 'Women', col6: 'Man', col7: 'Women' },
    { col1: 'Age', col2: '28', col3: '18', col4: '22', col5: '30', col6: '26', col7: '34' },
    { col1: 'Address', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' }
  ]
})
</script>

<style lang="scss">
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}
</style>
