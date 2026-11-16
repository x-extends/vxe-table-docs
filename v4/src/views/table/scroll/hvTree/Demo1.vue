<template>
  <div>
    <div>
      连接线：<vxe-switch v-model="treeConfig.showLine"></vxe-switch>
      <vxe-button @click="expandAllEvent">展开所有</vxe-button>
      <vxe-button @click="clearExpandEvent">收起所有</vxe-button>
    </div>

    <vxe-table
      ref="tableRef"
      border
      show-overflow
      show-header-overflow
      show-footer-overflow
      :height="800"
      :loading="loading"
      :row-config="rowConfig"
      :column-config="columnConfig"
      :tree-config="treeConfig"
      :virtual-x-config="virtualXConfig"
      :virtual-y-config="virtualYConfig"
      :data="tableData"
    >
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node min-width="300"></vxe-column>
      <vxe-column field="id" title="Id" width="100"></vxe-column>
      <vxe-column field="parentId" title="Parent Id" width="100"></vxe-column>
      <vxe-column field="describe" title="Describe" width="400"></vxe-column>
      <vxe-column field="startTime" title="Start Time" width="320"></vxe-column>
      <vxe-column field="endTime" title="End Time" width="320"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="320"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="220"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="240"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="180"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="240"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="400"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="380"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="260"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="300"></vxe-column>
      <vxe-column field="attr10" title="Attr10" width="150"></vxe-column>
      <vxe-column field="attr11" title="Attr11" width="290"></vxe-column>
      <vxe-column field="attr12" title="Attr12" width="300"></vxe-column>
      <vxe-column field="attr13" title="Attr13" width="200"></vxe-column>
      <vxe-column field="attr14" title="Attr14" width="500"></vxe-column>
      <vxe-column field="attr15" title="Attr15" width="360"></vxe-column>
      <vxe-column field="attr16" title="Attr16" width="140"></vxe-column>
      <vxe-column field="attr17" title="Attr17" width="100"></vxe-column>
      <vxe-column field="attr18" title="Attr18" width="450"></vxe-column>
      <vxe-column field="attr19" title="Attr19" width="270"></vxe-column>
      <vxe-column field="attr20" title="Attr20" width="180"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  alias: string
  name: string
  describe: string
  startTime: string
  endTime: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)

const rowConfig = reactive<VxeTablePropTypes.RowConfig>({
  useKey: true
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  resizable: true
})

const treeConfig = reactive<VxeTablePropTypes.TreeConfig>({
  transform: true,
  showLine: true
})

const virtualXConfig = reactive<VxeTablePropTypes.VirtualXConfig>({
  enabled: true,
  gt: 0
})

const virtualYConfig = reactive<VxeTablePropTypes.VirtualYConfig>({
  enabled: true,
  gt: 0
})

const tableData = ref<RowVO[]>([])

const loadList = () => {
  loading.value = true
  fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data: RowVO[]) => {
    tableData.value = data.map((item, i) => {
      return {
        ...item,
        describe: `describe ${i}`,
        startTime: `startTime ${i}`,
        endTime: `endTime ${i}`,
        attr1: `1 ${i}`,
        attr2: `2 ${i}`,
        attr3: `3 ${i}`,
        attr4: `4 ${i}`,
        attr5: `5 ${i}`,
        attr6: `6 ${i}`,
        attr7: `7 ${i}`,
        attr8: `8 ${i}`,
        attr9: `9 ${i}`,
        attr10: `10 ${i}`,
        attr11: `11 ${i}`,
        attr12: `12 ${i}`,
        attr13: `13 ${i}`,
        attr14: `14 ${i}`,
        attr15: `15 ${i}`,
        attr16: `16 ${i}`,
        attr17: `17 ${i}`,
        attr18: `18 ${i}`,
        attr19: `19 ${i}`,
        attr20: `20 ${i}`
      }
    })
    loading.value = false
  })
}

const expandAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const clearExpandEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}

loadList()
</script>
