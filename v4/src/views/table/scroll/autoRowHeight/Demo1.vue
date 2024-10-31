<template>
  <div>
    <vxe-button @click="loadData(5000)">加载5k条</vxe-button>
    <vxe-button @click="loadData(10000)">加载1w条</vxe-button>
    <vxe-button @click="loadData(30000)">加载3w条</vxe-button>
    <vxe-table
      border
      height="800"
      :loading="loading"
      :column-config="{resizable: true}"
      :scroll-y="{enabled: true, gt: 0, mode: 'wheel'}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="col0" title="列0" width="100"></vxe-column>
      <vxe-column field="imgUrl" title="列1" width="80" :cell-render="imgUrlCellRender"></vxe-column>
      <vxe-column field="col2" title="列2" width="90"></vxe-column>
      <vxe-column field="col3" title="列3" width="200"></vxe-column>
      <vxe-column field="col4" title="列4" width="140"></vxe-column>
      <vxe-column field="col5" title="列5"></vxe-column>
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

const imgUrlCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeImage',
  props: {
    width: 36,
    height: 36
  }
})

// 模拟行数据
const loadData = (rowSize: number) => {
  loading.value = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < rowSize; i++) {
      const item: RowVO = {
        id: 10000 + i,
        imgUrl: i % 3 === 0 ? 'https://vxeui.com/resource/img/546.gif' : 'https://vxeui.com/resource/img/673.gif'
      }
      for (let j = 0; j < 10; j++) {
        if (i % 8 === 0) {
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

loadData(200)
</script>
