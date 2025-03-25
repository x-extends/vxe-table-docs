<template>
  <div>
    <vxe-table
      border
      height="600"
      :expand-config="{padding: true}"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column type="expand" width="80" :content-render="expandContentRender"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
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
  subList: any[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: 'Man', age: 28, subList: [] },
      {
        id: 10002,
        name: 'Test2',
        sex: 'Women',
        age: 22,
        subList: [
          { name: 'Test322', sex: 'Man', age: 52 },
          { name: 'Test344', sex: 'Women', age: 42 },
          { name: 'Test3768', sex: 'Women', age: 42 },
          { name: 'Test3879', sex: 'Women', age: 42 },
          { name: 'Test3678', sex: 'Man', age: 23 },
          { name: 'Test389', sex: 'Man', age: 45 },
          { name: 'Test3909', sex: 'Women', age: 42 }
        ]
      },
      {
        id: 10002,
        name: 'Test2',
        sex: 'Women',
        age: 22,
        subList: [
          { name: 'Test222', sex: 'Man', age: 66 }
        ]
      },
      { id: 10004, name: 'Test4', sex: 'Women', age: 23, subList: [] }
    ]

    const expandContentRender = {
      name: 'MyExpandTable'
    }

    return {
      tableData,
      expandContentRender
    }
  }
})
</script>
