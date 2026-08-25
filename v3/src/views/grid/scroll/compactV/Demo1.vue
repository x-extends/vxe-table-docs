<template>
  <div>
    <vxe-radio-group v-model="cellConfig.height">
      <vxe-radio-button :checked-value="22" content="22px"></vxe-radio-button>
      <vxe-radio-button :checked-value="26" content="26px"></vxe-radio-button>
      <vxe-radio-button :checked-value="30" content="30px"></vxe-radio-button>
      <vxe-radio-button :checked-value="34" content="34px"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid class="my-compact-table" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const cellConfig: VxeTablePropTypes.CellConfig = {
      padding: {
        top: false,
        bottom: false
      },
      height: 30
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 1000,
      size: 'mini',
      cellConfig,
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
        { field: 'attr6', title: 'Attr6', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'attr7', title: 'Attr7', width: 300, editRender: { name: 'VxeInput' } },
        { field: 'attr8', title: 'Attr8', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'attr9', title: 'Attr9', width: 250, editRender: { name: 'VxeInput' } },
        { field: 'attr10', title: 'Attr10', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'attr11', title: 'Attr11', width: 350, editRender: { name: 'VxeInput' } },
        { field: 'attr12', title: 'Attr12', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'attr13', title: 'Attr13', width: 250, editRender: { name: 'VxeInput' } },
        { field: 'attr14', title: 'Attr14', width: 150, editRender: { name: 'VxeInput' } },
        { field: 'address', title: 'Address', width: 200, editRender: { name: 'VxeInput' } }
      ],
      data: []
    }

    return {
      gridOptions,
      cellConfig
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
          attr5: 'attr4' + i,
          attr6: 'attr6' + i,
          attr7: 'attr7' + i,
          attr8: 'attr8' + i,
          attr9: 'attr9' + i,
          attr10: 'attr10' + i,
          attr11: 'attr11' + i,
          attr12: 'attr12' + i,
          attr13: 'attr13' + i,
          attr14: 'attr14' + i
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

<style lang="scss" scoped>
// .my-compact-table {
//   // 当低于 22px 时，需要同时修改默认行高 css 变量
//   --vxe-ui-table-row-line-height: 18px;
// }
</style>
