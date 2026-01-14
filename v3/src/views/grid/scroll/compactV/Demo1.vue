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
  nickname: string
  role: string
  sex: string
  age: number
  time: number
  num: number
  address: string
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 800,
      size: 'mini',
      cellConfig: {
        // padding: false,
        height: 30
      },
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 100, editRender: { name: 'VxeInput' } },
        { field: 'nickname', title: 'Nickname', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'sex', title: 'Sex', width: 100, editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', width: 100, editRender: { name: 'VxeInput' } },
        { field: 'num', title: 'Num', width: 100, editRender: { name: 'VxeInput' } },
        { field: 'time', title: 'Time', width: 100, editRender: { name: 'VxeInput' } },
        { field: 'attr1', title: 'Attr1', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'attr2', title: 'Attr2', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'attr3', title: 'Attr3', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'attr4', title: 'Attr4', width: 100, editRender: { name: 'VxeInput' } },
        { field: 'attr5', title: 'Attr5', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'address', title: 'Address', width: 200, editRender: { name: 'VxeInput' } }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      const dataList: RowVO[] = []
      for (let i = 0; i < size; i++) {
        dataList.push({
          id: 10000 + i,
          name: 'Test' + i,
          nickname: 'nickname' + i,
          role: 'Developer',
          sex: '女',
          age: 18,
          num: 100000 + i,
          time: 10000000 + i,
          address: 'address' + i,
          attr1: 'attr1' + i,
          attr2: 'attr2' + i,
          attr3: 'attr3' + i,
          attr4: 'attr4' + i,
          attr5: 'attr4' + i
        })
      }
      this.gridOptions.data = dataList
    }
  },
  created () {
    this.loadList(500)
  }
})
</script>
