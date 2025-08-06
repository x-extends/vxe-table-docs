<template>
  <div>
    <p>
      <vxe-button @click="loadList(500)">加载500行</vxe-button>
      <vxe-button @click="loadList(1000)">加载1k行</vxe-button>
      <vxe-button @click="loadList(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadList(30000)">加载3w行</vxe-button>
      <vxe-button @click="loadList(50000)">加载5w行</vxe-button>
    </p>
    <p>
      <vxe-button status="primary" @click="addEvent">新增</vxe-button>
    </p>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: string
  sex: string
  date: string
}

export default Vue.extend({
  data () {
    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 600,
      loading: false,
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
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
        { field: 'role', title: 'Role', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: editConfig },
        { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
        { field: 'date', title: 'Date', editRender: { name: 'VxeDatePicker' } }
      ],
      data: []
    }

    return {
      gridOptions,
      editConfig
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      this.gridOptions.loading = true
      setTimeout(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        const dataList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          dataList.push({
            id: i,
            name: `名称${i}`,
            nickname: '',
            role: `角色${i}`,
            age: '18',
            sex: '',
            date: ''
          })
        }
        this.gridOptions.loading = false
        if ($grid) {
          const startTime = Date.now()
          $grid.reloadData(dataList).then(() => {
            VxeUI.modal.message({
              content: `加载时间 ${Date.now() - startTime} 毫秒`,
              status: 'success'
            })
            this.gridOptions.loading = false
          })
        }
      }, 350)
    },
    async addEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const record = {}
        const { row: newRow } = await $grid.insert(record)
        $grid.setEditCell(newRow, 'name')
      }
    },
    async removeRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.remove(row)
        VxeUI.modal.message({
          content: '数据已删除',
          status: 'success'
        })
      }
    }
  },
  created () {
    this.loadList(500)
  }
})
</script>
