<template>
  <div>
    <p>
      <vxe-button @click="loadList(50)">50条</vxe-button>
      <vxe-button @click="loadList(100)">100条</vxe-button>
      <vxe-button @click="loadList(1000)">1k条</vxe-button>
      <vxe-button @click="loadList(5000)">5k条</vxe-button>
      <vxe-button @click="loadList(10000)">1w条</vxe-button>
      <vxe-button @click="loadList(50000)">5w条</vxe-button>
      <vxe-button @click="loadList(100000)">10w条</vxe-button>
      <vxe-button @click="loadList(200000)">20w条</vxe-button>
      <vxe-button @click="setAllSelectRow(true)">所有选中</vxe-button>
      <vxe-button @click="clearSelectRow()">清除选中</vxe-button>
      <vxe-button @click="getSelectEvent">获取选中</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      show-header-overflow
      ref="tableRef"
      height="600"
      :row-config="{isCurrent: true, isHover: true, useKey: true}"
      :column-config="{resizable: true}"
      :export-config="{}"
      :loading="loading"
      :sort-config="{trigger: 'cell'}"
      :scroll-y="{enabled: true, gt: 0}">
      <vxe-column type="seq" width="100" fixed="left"></vxe-column>
      <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>
      <vxe-column field="attr0" title="Attr0" width="200" sortable></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="200"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="300" sortable></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200" sortable></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="attr10" title="Attr10" width="200"></vxe-column>
      <vxe-column field="attr11" title="Attr11" width="200"></vxe-column>
      <vxe-column field="attr12" title="Attr12" width="200"></vxe-column>
      <vxe-column field="attr13" title="Attr14" width="200"></vxe-column>
      <vxe-column field="attr14" title="Attr14" width="200"></vxe-column>
      <vxe-column field="attr15" title="Attr15" width="200"></vxe-column>
      <vxe-column field="attr16" title="Attr16" width="200" fixed="right"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'

interface RowVO {
  [key: string]: string | number | boolean
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)

const dataList: RowVO[] = []

const mockList = (rowSize: number) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const currSize = dataList.length
      if (currSize < rowSize) {
        for (let i = currSize; i < rowSize; i++) {
          dataList.push({
            checked: false,
            attr0: 'attr0_row_' + i,
            attr1: 'attr1_row_' + i,
            attr2: 'attr2_row_' + i,
            attr3: 'attr3_row_' + i,
            attr4: 'attr4_row_' + i,
            attr5: 'attr5_row_' + i,
            attr6: i,
            attr7: '' + i,
            attr8: 'attr8_row_' + i,
            attr9: 'attr9_row_' + i,
            attr10: 'attr10_row_' + i,
            attr11: 'attr11_row_' + i,
            attr12: 'attr12_row_' + i,
            attr13: 'attr13_row_' + i,
            attr14: 'attr14_row_' + i,
            attr15: 'attr15_row_' + i,
            attr16: 'attr16_row_' + i
          })
        }
      }
      // 模拟数据
      const result = JSON.parse(JSON.stringify(dataList.slice(0, rowSize)))
      resolve(result)
    }, 100)
  })
}

const loadList = (rowSize: number) => {
  loading.value = true
  mockList(rowSize).then(data => {
    const startTime = Date.now()
    const $table = tableRef.value
    // 使用函数式加载
    if ($table) {
      $table.reloadData(data).then(() => {
        VxeUI.modal.message({ content: `渲染 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
        loading.value = false
      })
    } else {
      loading.value = false
    }
  })
}

const getSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    VxeUI.modal.alert(`${selectRecords.length}`)
  }
}

const setAllSelectRow = (checked: boolean) => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllCheckboxRow(checked)
  }
}

const clearSelectRow = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearCheckboxRow()
  }
}

nextTick(() => {
  loadList(600)
})
</script>
