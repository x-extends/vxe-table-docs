<template>
  <div>
    <vxe-button @click="importEvent">高级导入</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

// 模拟接口上传附件导入
const importFileApi = (file: File) => {
  // 模拟后端接口
  console.log(file)
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      VxeUI.modal.message({
        content: '导入2条成功',
        status: 'success'
      })
      resolve([
        { id: Date.now(), name: `Name_Test${Date.now()}`, role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: Date.now(), name: `Name_Test${Date.now()}`, role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
      ])
    }, 1000)
  })
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      height: 500,
      importConfig: {
        remote: true,
        async importMethod ({ file }) {
          const rest = await importFileApi(file)
          // 自定义处理数据
          gridOptions.data = rest
        }
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
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
  },
  methods: {
    importEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openImport()
      }
    }
  }
})
</script>
