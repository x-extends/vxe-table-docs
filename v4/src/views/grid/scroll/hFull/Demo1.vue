<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  [key: string]: string | number
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 600,
  columnConfig: {
    resizable: true
  },
  virtualXConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'radio', width: 60 },
    { title: '列标题0', field: 'col0', width: 160, sortable: true },
    { title: '列标题1', field: 'col1', width: 100, sortable: true },
    {
      title: '列标题2',
      field: 'col2',
      width: 160,
      sortable: true,
      filters: [
        { label: '值_2_2', value: '值_2_2' },
        { label: '值_3_2', value: '值_3_2' },
        { label: '值_4_2', value: '值_4_2' },
        { label: '值_5_2', value: '值_5_2' },
        { label: '值_6_2', value: '值_6_2' },
        { label: '值_7_2', value: '值_7_2' },
        { label: '值_8_2', value: '值_8_2' },
        { label: '值_9_2', value: '值_9_2' }
      ],
      titlePrefix: {
        icon: 'vxe-icon-user-fill',
        iconStatus: 'primary',
        useHTML: true,
        content: '点击链接：<a href="https://vxeui.com" target="_blank" style="color:#95c7fb;">vxe-ui 官网</a>'
      }
    },
    { title: '列标题3', field: 'col3', width: 200 },
    { title: '列标题4', field: 'col4', width: 140 },
    { title: '列标题5', field: 'col5', width: 300 },
    { title: '列标题6', field: 'col6', width: 160 },
    { title: '列标题7', field: 'col7', width: 120 },
    { title: '列标题8', field: 'col8', width: 400 },
    { title: '列标题9', field: 'col9', width: 160 },
    { title: '列标题10', field: 'col10', width: 160 },
    { title: '列标题11', field: 'col11', width: 180 },
    { title: '列标题12', field: 'col12', width: 160 },
    { title: '列标题13', field: 'col13', width: 80 },
    { title: '列标题14', field: 'col14', width: 120 },
    { title: '列标题15', field: 'col15', width: 360 },
    { title: '列标题16', field: 'col16', width: 150, sortable: true },
    { title: '列标题17', field: 'col17', width: 380, sortable: true },
    { title: '列标题18', field: 'col18', width: 100, sortable: true },
    { title: '列标题19', field: 'col19', width: 290, sortable: true },
    {
      title: '列标题20',
      field: 'col20',
      width: 120,
      sortable: true,
      filters: [
        { label: '值_4_21', value: '值_4_21' },
        { label: '值_5_21', value: '值_5_21' },
        { label: '值_6_21', value: '值_6_21' },
        { label: '值_7_21', value: '值_7_21' },
        { label: '值_8_21', value: '值_8_21' },
        { label: '值_9_21', value: '值_9_21' },
        { label: '值_10_21', value: '值_10_21' },
        { label: '值_11_21', value: '值_11_21' },
        { label: '值_12_21', value: '值_12_21' },
        { label: '值_13_21', value: '值_13_21' },
        { label: '值_14_21', value: '值_14_21' },
        { label: '值_15_21', value: '值_15_21' },
        { label: '值_16_21', value: '值_16_21' }
      ]
    },
    { title: '列标题21', field: 'col21', width: 100, sortable: true },
    { title: '列标题22', field: 'col22', width: 120, sortable: true },
    { title: '列标题23', field: 'col23', width: 270, sortable: true },
    { title: '列标题24', field: 'col24', width: 330, sortable: true },
    { title: '列标题25', field: 'col25', width: 460, sortable: true },
    { title: '列标题26', field: 'col26', width: 280 },
    { title: '列标题27', field: 'col27', width: 220 },
    { title: '列标题28', field: 'col28', width: 120 },
    { title: '列标题29', field: 'col29', width: 180 },
    { title: '列标题30', field: 'col30', width: 500 },
    { title: '列标题31', field: 'col31', width: 600 },
    { title: '列标题32', field: 'col32', width: 100 },
    { title: '列标题33', field: 'col33', width: 490 },
    { title: '列标题34', field: 'col34', width: 100 },
    { title: '列标题35', field: 'col35', width: 150 },
    { title: '列标题36', field: 'col36', width: 800 },
    { title: '列标题37', field: 'col37', width: 400 },
    { title: '列标题38', field: 'col38', width: 800 },
    { title: '列标题39', field: 'col39', width: 360 },
    { title: '列标题40', field: 'col40', width: 420 },
    { title: '列标题41', field: 'col41', width: 100 },
    { title: '列标题42', field: 'col42', width: 120 },
    { title: '列标题43', field: 'col43', width: 280 },
    { title: '列标题44', field: 'col44', width: 170 },
    { title: '列标题45', field: 'col45', width: 370 },
    { title: '列标题46', field: 'col46', width: 420 },
    { title: '列标题47', field: 'col47', width: 170 },
    { title: '列标题48', field: 'col48', width: 400 },
    { title: '列标题49', field: 'col49', width: 220 },
    { title: '列标题50', field: 'col50', width: 170 },
    { title: '列标题51', field: 'col51', width: 160 },
    { title: '列标题52', field: 'col52', width: 500 },
    { title: '列标题53', field: 'col53', width: 280 },
    { title: '列标题54', field: 'col54', width: 170 },
    { title: '列标题55', field: 'col55', width: 370 },
    { title: '列标题56', field: 'col56', width: 120 },
    { title: '列标题57', field: 'col57', width: 170 },
    { title: '列标题58', field: 'col58', width: 400 },
    { title: '列标题59', field: 'col59', width: 220 },
    { title: '列标题60', field: 'col60', width: 650 },
    { title: '列标题61', field: 'col61', width: 600 },
    { title: '列标题62', field: 'col62', width: 100, sortable: true },
    { title: '列标题63', field: 'col63', width: 490, sortable: true },
    { title: '列标题64', field: 'col64', width: 100, sortable: true },
    { title: '列标题65', field: 'col65', width: 150, sortable: true },
    {
      title: '列标题66',
      field: 'col66',
      width: 800,
      sortable: true,
      filters: [
        { label: '值_5_66', value: '值_5_66' },
        { label: '值_6_66', value: '值_6_66' },
        { label: '值_7_66', value: '值_7_66' }
      ]
    },
    { title: '列标题67', field: 'col67', width: 400, sortable: true },
    { title: '列标题68', field: 'col68', width: 800, sortable: true },
    { title: '列标题69', field: 'col69', width: 360, sortable: true },
    { title: '列标题70', field: 'col70', width: 650, sortable: true },
    { title: '列标题71', field: 'col71', width: 600, sortable: true },
    { title: '列标题72', field: 'col72', width: 100 },
    { title: '列标题73', field: 'col73', width: 490 },
    { title: '列标题74', field: 'col74', width: 100 },
    { title: '列标题75', field: 'col75', width: 150 },
    { title: '列标题76', field: 'col76', width: 800 },
    { title: '列标题77', field: 'col77', width: 400 },
    { title: '列标题78', field: 'col78', width: 800 },
    { title: '列标题79', field: 'col79', width: 360 },
    { title: '列标题80', field: 'col80', width: 650 },
    { title: '列标题81', field: 'col81', width: 600 },
    { title: '列标题82', field: 'col82', width: 100 },
    { title: '列标题83', field: 'col83', width: 490 },
    { title: '列标题84', field: 'col84', width: 100 },
    { title: '列标题85', field: 'col85', width: 150 },
    { title: '列标题86', field: 'col86', width: 800 },
    { title: '列标题87', field: 'col87', width: 400 },
    { title: '列标题88', field: 'col88', width: 800 },
    { title: '列标题89', field: 'col89', width: 360 },
    { title: '列标题90', field: 'col90', width: 650 },
    { title: '列标题91', field: 'col91', width: 600 },
    { title: '列标题92', field: 'col92', width: 100 },
    { title: '列标题93', field: 'col93', width: 490 },
    { title: '列标题94', field: 'col94', width: 100 },
    { title: '列标题95', field: 'col95', width: 150 },
    { title: '列标题96', field: 'col96', width: 800 },
    { title: '列标题97', field: 'col97', width: 400, sortable: true },
    { title: '列标题98', field: 'col98', width: 800, sortable: true },
    { title: '列标题99', field: 'col99', width: 360, sortable: true },
    {
      title: '列标题100',
      field: 'col100',
      width: 360,
      sortable: true,
      filters: [
        { label: '值_5_100', value: '值_5_100' },
        { label: '值_6_100', value: '值_6_100' },
        { label: '值_7_100', value: '值_7_100' },
        { label: '值_8_100', value: '值_8_100' },
        { label: '值_9_100', value: '值_9_100' },
        { label: '值_10_100', value: '值_10_100' },
        { label: '值_11_100', value: '值_11_100' },
        { label: '值_12_100', value: '值_12_100' },
        { label: '值_13_100', value: '值_13_100' }
      ],
      titleSuffix: {
        icon: 'vxe-icon-user-fill',
        iconStatus: 'primary',
        useHTML: true,
        content: '点击链接：<a href="https://vxeui.com" target="_blank" style="color:#95c7fb;">vxe-ui 官网</a>'
      }
    }
  ],
  data: []
})

// 模拟行与列数据
const loadDataAndColumns = (rowSize: number) => {
  const colList: VxeGridPropTypes.Columns = []
  for (let i = 0; i < 120; i++) {
    colList.push({
      field: `col${i}`,
      title: `标题${i}`,
      width: 160
    })
  }
  const dataList: RowVO[] = []
  for (let i = 0; i < rowSize; i++) {
    const item: RowVO = {
      id: 10000 + i
    }
    for (let j = 0; j < colList.length; j++) {
      item[`col${j}`] = `值_${i}_${j}`
    }
    dataList.push(item)
  }
  gridOptions.data = dataList
}

loadDataAndColumns(20)
</script>
