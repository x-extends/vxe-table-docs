<template>
  <div>
    <p>
      <vxe-button @click="loadData(500)">加载500行</vxe-button>
      <vxe-button @click="loadData(1000)">加载1k行</vxe-button>
      <vxe-button @click="loadData(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadData(30000)">加载3w行</vxe-button>
    </p>
    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="800"
      :scroll-y="{enabled: true, gt: 0}"
      :edit-config="editConfig"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="sexEditRender"></vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{name: 'VxeDatePicker'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'
import { VxeSelectProps } from 'vxe-pc-ui'

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
    const tableData: RowVO[] = []

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    const sexEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    return {
      loading: false,
      tableData,
      editConfig,
      sexEditRender
    }
  },
  methods: {
    // 模拟行数据
    loadData (size = 200) {
      this.loading = true
      setTimeout(() => {
        const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
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
        this.loading = false
        if ($table) {
          const startTime = Date.now()
          $table.loadData(dataList).then(() => {
            VxeUI.modal.message({
              content: `加载时间 ${Date.now() - startTime} 毫秒`,
              status: 'success'
            })
          })
        }
      }, 350)
    }
  },
  created () {
    this.loadData(500)
  }
})
</script>
