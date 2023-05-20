<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      show-footer
      ref="xTable"
      height="500"
      :column-config="{resizable: true}"
      :export-config="{}"
      :merge-cells="mergeCells"
      :sort-config="{trigger: 'cell'}"
      :merge-footer-items="mergeFooterItems"
      :footer-method="footerMethod"
      :loading="loading">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable width="200"></vxe-column>
      <vxe-column field="id" title="ID" width="200"></vxe-column>
      <vxe-column field="sex" title="Sex" width="200"></vxe-column>
      <vxe-column field="rate" title="Rate" width="200"></vxe-column>
      <vxe-column field="region" title="Region" width="200"></vxe-column>
      <vxe-column field="time" title="Time" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
      <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>
      <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="200"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="200"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>
      <vxe-column field="attr11" title="attr11" width="200"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="attr10" title="attr10" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num: number
  address: string
  age: number
  rate: number
  num2: number
  sex: string
}

const xTable = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const mergeCells = ref<VxeTablePropTypes.MergeCells>([
  { row: 4, col: 2, rowspan: 2, colspan: 5 },
  { row: 30, col: 3, rowspan: 10, colspan: 1 },
  { row: 80, col: 4, rowspan: 30, colspan: 3 }
])
const mergeFooterItems = ref<VxeTablePropTypes.MergeFooterItems>([
  { row: 0, col: 1, rowspan: 1, colspan: 2 },
  { row: 0, col: 6, rowspan: 1, colspan: 2 },
  { row: 0, col: 14, rowspan: 2, colspan: 5 },
  { row: 1, col: 4, rowspan: 1, colspan: 8 }
])

const mockList = (size: number) => {
  const list: RowVO[] = []
  for (let index = 0; index < size; index++) {
    list.push({
      id: index,
      name: `名称${index}`,
      sex: '0',
      num: 123,
      age: 18,
      num2: 234,
      rate: 3,
      address: 'shenzhen'
    })
  }
  return list
}

const loadList = (size: number) => {
  loading.value = true
  setTimeout(() => {
    const data = mockList(size)
    // 使用函数式加载，阻断 vue 对大数据的监听
    const $table = xTable.value
    const startTime = Date.now()
    if ($table) {
      $table.reloadData(data).then(() => {
        VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
        loading.value = false
      })
    } else {
      loading.value = false
    }
  }, 300)
}

const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns }) => {
  return [
    columns.map((column, index) => index),
    columns.map((column, index) => 1000 + index)
  ]
}

loadList(600)
</script>
