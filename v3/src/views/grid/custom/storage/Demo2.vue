<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
      id: 'myCustomStorage2',
      toolbarConfig: {
        custom: true
      },
      customConfig: {
        storage: true,
        immediate: true
      },
      columnConfig: {
        drag: true,
        resizable: true
      },
      columnDragConfig: {
        isPeerDrag: true,
        isCrossDrag: true,
        isToChildDrag: true
      },
      columns: [
        { field: 'seq', type: 'seq', width: 90 },
        { field: 'name', title: 'Name' },
        {
          title: '分组1',
          field: 'group1',
          children: [
            { field: 'nickname', title: 'Nickname' },
            { field: 'role', title: 'role' }
          ]
        },
        {
          title: '分组3',
          field: 'group3',
          children: [
            { field: 'sex', title: 'Sex' },
            { field: 'attr1', title: 'Attr1' },
            {
              title: '分组4',
              field: 'group4',
              children: [
                { field: 'age', title: 'Age' },
                { field: 'attr4', title: 'Attr4' },
                { field: 'attr8', title: 'Attr8' }
              ]
            }
          ]
        },
        { field: 'address', title: 'address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
