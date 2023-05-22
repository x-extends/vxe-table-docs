<template>
  <div>
    <vxe-table
      border
      height="300"
      :column-config="{resizable: true}"
      :scroll-y="{enabled: false}"
      :span-method="mergeRowMethod"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="key" title="Key"></vxe-column>
      <vxe-column field="content" title="Translate"></vxe-column>
      <vxe-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN' }, {label: 'English', value: 'en_US'}]"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  key: string
  content: string
  language: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, key: 'app.label.name', content: '名称', language: 'zh_CN' },
  { id: 10002, key: 'app.label.name', content: 'Name', language: 'en_US' },
  { id: 10003, key: 'app.label.sex', content: '性别', language: 'zh_CN' },
  { id: 10004, key: 'app.label.sex', content: 'Sex', language: 'en_US' },
  { id: 10005, key: 'app.label.age', content: '年龄', language: 'zh_CN' },
  { id: 10006, key: 'app.label.age', content: 'Age', language: 'en_US' },
  { id: 10007, key: 'app.label.role', content: '角色', language: 'zh_CN' },
  { id: 10008, key: 'app.label.role', content: 'Role', language: 'en_US' },
  { id: 10009, key: 'app.label.address', content: '地址', language: 'zh_CN' },
  { id: 10010, key: 'app.label.address', content: 'Address', language: 'en_US' },
  { id: 10011, key: 'app.label.nickname', content: '昵称', language: 'zh_CN' },
  { id: 10012, key: 'app.label.nickname', content: 'Nickname', language: 'en_US' }
])

// 通用行合并函数（将相同多列数据合并为一行）
const mergeRowMethod: VxeTablePropTypes.SpanMethod<RowVO> = ({ row, _rowIndex, column, visibleData }) => {
  const fields = ['key']
  const cellValue = row[column.field]
  if (cellValue && fields.includes(column.field)) {
    const prevRow = visibleData[_rowIndex - 1]
    let nextRow = visibleData[_rowIndex + 1]
    if (prevRow && prevRow[column.field] === cellValue) {
      return { rowspan: 0, colspan: 0 }
    } else {
      let countRowspan = 1
      while (nextRow && nextRow[column.field] === cellValue) {
        nextRow = visibleData[++countRowspan + _rowIndex]
      }
      if (countRowspan > 1) {
        return { rowspan: countRowspan, colspan: 1 }
      }
    }
  }
}
</script>
