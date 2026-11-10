<template>
  <div>
    <p>
      <vxe-button @click="loadList(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadList(10000)">加载1万行</vxe-button>
      <vxe-button @click="loadList(50000)">加载5万行</vxe-button>
      <vxe-button @click="loadList(100000)">加载10万行</vxe-button>
    </p>
    <p>
      <vxe-button @click="loadMerge(100)">生成100项合并</vxe-button>
      <vxe-button @click="loadMerge(1000)">生成1000项合并</vxe-button>
      <vxe-button @click="loadMerge(5000)">生成5k项合并</vxe-button>
      <vxe-button @click="loadMerge(10000)">生成1w项合并</vxe-button>
    </p>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-table'
import type { VxeGridInstance, VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  a: string
  b: string
  c: string
  d: string
  e: string
  f: string
  g: string
  h: string
  i: string
  j: string
  k: string
  l: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      loading: false,
      showOverflow: true,
      showFooter: true,
      height: 1000,
      mergeCells: [],
      mergeFooterItems: [],
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        custom: true
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'seq', width: 80, fixed: 'left' },
        { type: 'checkbox', width: 80, fixed: 'left' },
        { field: 'a', title: 'A', width: 140 },
        { field: 'b', title: 'B', width: 180 },
        { field: 'c', title: 'C', width: 220 },
        {
          title: '分组6',
          children: [
            {
              title: '分组3',
              children: [
                { field: 'd', title: 'D', width: 280 },
                { field: 'e', title: 'E', width: 300 }
              ]
            },
            { field: 'f', title: 'F', width: 120 },
            { field: 'g', title: 'G', width: 320 }
          ]
        },
        {
          title: '分组2',
          children: [
            { field: 'h', title: 'H', width: 440 },
            { field: 'i', title: 'I', width: 180 },
            { field: 'j', title: 'J', width: 280 }
          ]
        },
        {
          title: '分组8',
          fixed: 'right',
          children: [
            { field: 'k', title: 'K', width: 180, fixed: 'right' },
            { field: 'l', title: 'L', width: 120, fixed: 'right' }
          ]
        }
      ],
      footerData: [
        { seq: '合计', a: '234', b: '45' }
      ]
    }

    return {
      gridOptions
    }
  },
  mounted () {
    this.loadList(200, false)
    this.loadMerge(60)
  },
  methods: {
    loadMerge (mSize: number) {
      const mergeList: VxeTablePropTypes.MergeCells<RowVO> = []
      for (let i = 0; i < mSize; i++) {
        mergeList.push({ row: i * 3, col: 3, rowspan: 2, colspan: 3 })
      }
      this.gridOptions.mergeCells = mergeList
    },
    loadList (rowSize: number = 100, isMsg = true) {
      this.gridOptions.loading = true
      setTimeout(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        const list: RowVO[] = []
        for (let i = 0; i < rowSize; i++) {
          list.push(
            { id: 10001 + i, a: `Test${i}`, b: 'Develop', c: 'Man', d: `${10 + i}`, e: `${(10 + i) % 66}`, f: 'Shengzhen', g: '', h: `h${i}`, i: `i${i}`, j: `j${i}`, k: `k${i}`, l: `l${i}` }
          )
        }
        if ($grid) {
          const startTime = Date.now()
          $grid.reloadData(list).then(() => {
            if (isMsg) {
              VxeUI.modal.message({
                content: `加载时间 ${Date.now() - startTime} 毫秒`,
                status: 'success'
              })
            }
            this.gridOptions.loading = false
          })
        } else {
          this.gridOptions.loading = false
        }
      }, 200)
    }
  }
})
</script>
