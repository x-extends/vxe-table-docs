<template>
  <div>
    <vxe-button status="primary" @click="startRollEvent">开始</vxe-button>
    <vxe-button status="error" @click="stopRollEvent">停止</vxe-button>
    <br>
    <vxe-radio-group v-model="speedNum">
      <vxe-radio-button :label="1" content="慢"></vxe-radio-button>
      <vxe-radio-button :label="3" content="中"></vxe-radio-button>
      <vxe-radio-button :label="6" content="快"></vxe-radio-button>
      <vxe-radio-button :label="12" content="极速"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      @data-change="dataChangeEvent">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
      loading: false,
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      scrollbarConfig: {
        y: {
          visible: 'hidden'
        }
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: []
    }

    const speedNum = 3

    const autoTime: any = null

    return {
      gridOptions,
      speedNum,
      autoTime
    }
  },
  created () {
    this.loadList()
  },
  beforeDestroy () {
    this.stopRollEvent()
  },
  methods: {
    dataChangeEvent () {
      // 数据加载后启动
      this.startRollEvent()
    },
    loadList () {
      this.gridOptions.loading = true
      setTimeout(() => {
        const list: RowVO[] = []
        for (let i = 0; i < 5000; i++) {
          list.push({
            id: 100000 + i,
            name: 'Test' + i,
            nickname: 'T' + i,
            role: 'Develop',
            sex: 'Man',
            age: 28,
            address: 'Shenzhen' + i
          })
        }
        this.gridOptions.loading = false
        this.gridOptions.data = list
      }, 250)
    },
    handleScrollTo () {
      this.autoTime = setTimeout(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          const { scrollTop } = $grid.getScrollData()
          $grid.scrollTo({
            top: scrollTop + this.speedNum
          }).then(() => {
            const { isBottom } = $grid.getScrollData()
            // 如果触底则结束滚动
            if (!isBottom) {
              this.handleScrollTo()
            }
          })
        }
      }, 100)
    },
    startRollEvent () {
      this.stopRollEvent()
      this.handleScrollTo()
    },
    stopRollEvent () {
      // 销毁滚动
      if (this.autoTime) {
        clearTimeout(this.autoTime)
      }
    }
  }
})
</script>
