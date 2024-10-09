<template>
  <div>
    <vxe-button status="primary" @click="readFileEvent">选择文件</vxe-button>
    <vxe-grid v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" icon="vxe-icon-delete" @click="removeRow(row)"></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  size: number
  file: File
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        { field: 'size', title: 'Size' },
        { title: '操作', width: 80, slots: { default: 'action' } }
      ],
      data: []
    }

    return {
      gridOptions,
      rowKey: new Date().getTime()
    }
  },
  methods: {
    async readFileEvent () {
      const tableData: RowVO[] = []
      const { files } = await VxeUI.readFile({
        multiple: true
      })
      files.forEach(file => {
        tableData.push({
          id: this.rowKey++,
          name: file.name,
          size: file.size,
          file
        })
      })
      this.gridOptions.data = tableData
    },
    removeRow (row: RowVO) {
      this.gridOptions.data = this.gridOptions.data.filter(item => item.id !== row.id)
    }
  }
})
</script>
