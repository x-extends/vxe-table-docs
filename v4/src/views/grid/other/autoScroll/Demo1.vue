<template>
  <div>
    <vxe-button status="primary" @click="startRollEvent">开始</vxe-button>
    <vxe-button status="error" @click="stopRollEvent">停止</vxe-button>
    <br>
    <vxe-radio-group v-model="scrollbarConfig.y.visible">
      <vxe-radio-button checked-value="auto" content="显示滚动条"></vxe-radio-button>
      <vxe-radio-button checked-value="hidden" content="不显示滚动条"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="speedNum">
      <vxe-radio-button :label="1" content="慢"></vxe-radio-button>
      <vxe-radio-button :label="3" content="中"></vxe-radio-button>
      <vxe-radio-button :label="6" content="快"></vxe-radio-button>
      <vxe-radio-button :label="12" content="极速"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onUnmounted } from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeTablePropTypes, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const speedNum = ref(3)

const scrollbarConfig = reactive<Omit<VxeTablePropTypes.ScrollbarConfig, 'y'> & Required<Pick<VxeTablePropTypes.ScrollbarConfig, 'y'>>>({
  y: {
    visible: 'hidden'
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  loading: false,
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  scrollbarConfig,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: []
})

const gridEvents: VxeGridListeners = {
  dataChange () {
    // 数据加载后启动
    startRollEvent()
  }
}

const loadList = () => {
  gridOptions.loading = true
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
    gridOptions.loading = false
    gridOptions.data = list
  }, 250)
}

let autoTime: any = null

const handleScrollTo = () => {
  autoTime = setTimeout(() => {
    const $grid = gridRef.value
    if ($grid) {
      const { scrollTop, isBottom } = $grid.getScrollData()
      $grid.scrollTo({
        top: scrollTop + speedNum.value
      })
      // 如果触底则结束滚动
      if (!isBottom) {
        handleScrollTo()
      }
    }
  }, 100)
}

const startRollEvent = () => {
  stopRollEvent()
  handleScrollTo()
}

const stopRollEvent = () => {
  // 销毁滚动
  if (autoTime) {
    clearTimeout(autoTime)
  }
}

onUnmounted(() => {
  stopRollEvent()
})

loadList()
</script>
