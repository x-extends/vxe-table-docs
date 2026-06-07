<template>
  <div>
    <vxe-button @click="loadList(5000)">加载5k条</vxe-button>
    <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
    <vxe-button @click="loadList(50000)">加载5w条</vxe-button>
    <vxe-button @click="loadList(100000)">加载10w条</vxe-button>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  [key: string]: string | number | boolean | any[]
}

export default Vue.extend({
  data () {
    const imgUrlCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeImage',
      props: {
        width: 36,
        height: 36
      }
    }

    const col3EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 5000 }).map((v, i) => {
        return { value: i + 1, label: '选项3-' + (i + 1) }
      })
    }

    const col4EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 10000 }).map((v, i) => {
        return { value: i + 1, label: '选项4-' + (i + 1) }
      })
    }

    const col5EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 15000 }).map((v, i) => {
        return { value: i + 1, label: '选项5-' + (i + 1) }
      })
    }

    const col6EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 10000 }).map((v, i) => {
        return { value: i + 1, label: '选项6-' + (i + 1) }
      })
    }

    const col7EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 10000 }).map((v, i) => {
        return { value: i + 1, label: '选项7-' + (i + 1) }
      })
    }

    const col8EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 40000 }).map((v, i) => {
        return { value: i + 1, label: '选项7-' + (i + 1) }
      })
    }

    const col9EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 10000 }).map((v, i) => {
        return { value: i + 1, label: '选项7-' + (i + 1) }
      })
    }

    const col93EditRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSelect',
      options: Array.from({ length: 30000 }).map((v, i) => {
        return { value: i + 1, label: '选项7-' + (i + 1) }
      })
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      keepSource: true,
      loading: false,
      height: 1000,
      columnConfig: {
        resizable: true
      },
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        showStatus: true
      },
      virtualXConfig: {
        enabled: true,
        gt: 0
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { field: 'checkbox', type: 'checkbox', width: 60, fixed: 'left' },
        { title: '列0', field: 'col0', width: 100, fixed: 'left' },
        { title: '列1', field: 'imgUrl', width: 80, fixed: 'left', cellRender: imgUrlCellRender },
        {
          title: '分组1',
          children: [
            { title: '列3', field: 'col3', width: 200, editRender: col3EditRender },
            { title: '列4', field: 'col4', width: 140, editRender: col4EditRender },
            { title: '列5', field: 'col5', width: 160, editRender: col5EditRender }
          ]
        },
        {
          title: '分组2',
          children: [
            { title: '列6', field: 'col6', width: 160, editRender: col6EditRender },
            { title: '列7', field: 'col7', width: 120, editRender: col7EditRender },
            { title: '列8', field: 'col8', width: 200, editRender: col8EditRender },
            { title: '列9', field: 'col9', width: 160, editRender: col9EditRender },
            { title: '列10', field: 'col10', width: 160, editRender: { name: 'VxeInput' } }
          ]
        },
        { title: '列91', field: 'col91', width: 300, editRender: { name: 'VxeInput' } },
        { title: '列92', field: 'col92', width: 100, editRender: { name: 'VxeInput' } },
        { title: '列93', field: 'col93', width: 200, editRender: col93EditRender },
        { title: '列94', field: 'col94', width: 100, editRender: { name: 'VxeInput' } },
        { title: '列95', field: 'col95', width: 150, editRender: { name: 'VxeInput' } },
        { title: '列96', field: 'col96', width: 300, editRender: { name: 'VxeInput' } },
        { title: '列97', field: 'col97', width: 200, fixed: 'right', editRender: { name: 'VxeInput' } }
      ],
      data: [],
      footerData: [
        { checkbox: '均值', col0: '45', col1: '56', col3: '67', col5: '78', col7: '94', col97: '37', imgList1: '83' },
        { checkbox: '合计', col0: '222', col1: '333', col3: '444', col5: '888', col7: '555', col97: '444', imgList1: '777' }
      ]
    }

    return {
      gridOptions,
      imgUrlCellRender,
      col3EditRender,
      col4EditRender,
      col5EditRender,
      col6EditRender,
      col7EditRender,
      col8EditRender,
      col93EditRender
    }
  },
  created () {
    this.loadList(200)
  },
  methods: {
  // 模拟行数据
    loadList (rowSize: number) {
      this.gridOptions.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < rowSize; i++) {
          const item: RowVO = {
            id: 10000 + i,
            status: i % 3 === 0 ? '1' : (i % 2 === 0 ? '2' : '0'),
            imgUrl: i % 3 === 0 ? 'https://vxeui.com/resource/img/546.gif' : 'https://vxeui.com/resource/img/673.gif',
            imgList1: i % 4 === 0
              ? [
                  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
                ]
              : [
                  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
                  { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
                ],
            flag1: i % 5 === 0,
            col0: 'Name' + i,
            col3: i % 3 === 0 ? 200 : (i % 2 === 0 ? 500 : 5000),
            col4: i % 3 === 0 ? 500 : (i % 2 === 0 ? 6000 : 10000),
            col5: i % 3 === 0 ? 700 : (i % 2 === 0 ? 8000 : 10000),
            col6: i % 3 === 0 ? 900 : (i % 2 === 0 ? 9900 : 10000),
            col7: i % 3 === 0 ? 1100 : (i % 2 === 0 ? 8020 : 10000),
            col8: i % 3 === 0 ? 2000 : (i % 2 === 0 ? 2000 : 10000),
            col9: i % 3 === 0 ? 3000 : (i % 2 === 0 ? 6660 : 10000),
            col93: i % 3 === 0 ? 5000 : (i % 2 === 0 ? 8880 : 20000),
            col97: '备注' + i
          }
          dataList.push(item)
        }

        const startTime = Date.now()
        this.gridOptions.data = dataList
        this.gridOptions.loading = false
        this.$nextTick(() => {
          VxeUI.modal.message({
            content: `加载时间 ${Date.now() - startTime} 毫秒`,
            status: 'success'
          })
        })
      }, 350)
    }
  }
})
</script>
