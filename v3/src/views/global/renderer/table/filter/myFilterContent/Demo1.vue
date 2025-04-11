<template>
  <div>
    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column field="name" title="Name" :filters="nameOptions" :filter-render="nameFilterRender"></vxe-column>
      <vxe-column field="sex" title="Sex" :filters="sexOptions" :filter-render="sexFilterRender"></vxe-column>
      <vxe-column field="age" title="Age" :filters="ageOptions" :filter-render="ageFilterRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}
export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
      { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
      { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
      { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
    ]

    const nameOptions = [
      { data: { vals: [], sVal: '' } }
    ]
    const nameFilterRender = {
      name: 'MyTableFilterContent'
    }

    const sexOptions = [
      { data: { vals: [], sVal: '' } }
    ]
    const sexFilterRender = {
      name: 'MyTableFilterContent'
    }

    const ageOptions = [
      { data: { vals: [], sVal: '' } }
    ]
    const ageFilterRender = {
      name: 'MyTableFilterContent'
    }

    return {
      tableData,
      nameOptions,
      nameFilterRender,
      sexOptions,
      sexFilterRender,
      ageOptions,
      ageFilterRender
    }
  }
})
</script>
