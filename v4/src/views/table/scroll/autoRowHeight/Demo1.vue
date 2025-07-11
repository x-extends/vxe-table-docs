<template>
  <div>
    <vxe-select v-model="rowSize" :options="dataOptions" @change="loadData()"></vxe-select>
    <vxe-table
      border
      height="800"
      :show-overflow="false"
      :loading="loading"
      :column-config="{resizable: true}"
      :virtual-y-config="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="col0" title="列0" width="100"></vxe-column>
      <vxe-column field="imgUrl" title="列1" width="80" :cell-render="imgUrlCellRender"></vxe-column>
      <vxe-column field="col2" title="列2" width="90"></vxe-column>
      <vxe-column field="col3" title="列3" width="200"></vxe-column>
      <vxe-column field="col4" title="列4" min-width="140"></vxe-column>
      <vxe-column field="col5" title="列5" min-width="140"></vxe-column>
      <vxe-column field="col6" title="列6" min-width="140"></vxe-column>
      <vxe-column field="col7" title="列7" min-width="120"></vxe-column>
      <vxe-column field="col8" title="列8" min-width="120"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeUI, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  [key: string]: string | number | boolean | any[]
}

const tableData = ref<RowVO[]>([])
const loading = ref(false)

const rowSize = ref(100)
const dataOptions = ref([
  { label: '加载 3 行', value: 3 },
  { label: '加载 20 行', value: 20 },
  { label: '加载 100 行', value: 100 },
  { label: '加载 500 行', value: 500 },
  { label: '加载 1000 行', value: 1000 },
  { label: '加载 5000 行', value: 5000 },
  { label: '加载 10000 行', value: 10000 },
  { label: '加载 30000 行', value: 30000 }
])

const imgUrlCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeImage',
  props: {
    width: 36,
    height: 36
  }
})

// 模拟行数据
const loadData = () => {
  loading.value = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < rowSize.value; i++) {
      const item: RowVO = {
        id: 10000 + i,
        imgUrl: i % 3 === 0 ? 'https://vxeui.com/resource/img/546.gif' : 'https://vxeui.com/resource/img/673.gif'
      }
      for (let j = 0; j < 10; j++) {
        if (i % 9 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容9内容9 内容9内容9内容9 内容9内容9内容9内容9 内容9内容9内容9内容9 内容9内容9内容9 内容9内容9`
        } else if (i % 8 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容8内容8内容8内容8`
        } else if (i % 7 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容7内容7`
        } else if (i % 6 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容6内容6内容6内容6内容6内容6内容6内容6`
        } else if (i % 5 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容5内容5内容5内容5内容5`
        } else if (i % 4 === 0) {
          item[`col${j}`] = `值_${i}_${j} 内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4`
        } else {
          item[`col${j}`] = `值_${i}_${j}`
        }
      }
      dataList.push(item)
    }

    const startTime = Date.now()
    tableData.value = dataList
    loading.value = false
    nextTick(() => {
      VxeUI.modal.message({
        content: `加载时间 ${Date.now() - startTime} 毫秒`,
        status: 'success'
      })
    })
  }, 100)
}

loadData()
</script>
