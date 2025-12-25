<template>
  <div class="demo-page-wrapper">
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #toolbarButtons>
        <span>数据：</span>
        <vxe-select v-model="rowSize" :options="dataOptions" @change="changeRowSizeEvent"></vxe-select>
      </template>

      <template #nameDefault="{ row }">
        <vxe-image :src="row.avatarUrl" width="36" height="36" circle style="margin: 0 16px;"></vxe-image>
        <span>{{ row.name }}</span>
      </template>

      <template #emailDefault="{ row }">
        <vxe-text :content="row.email" click-to-copy></vxe-text>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  nickname: string
  sex: string
  age: number
  email: string
  city: string
  avatarUrl: string
  levelNum: number
  annualStatement: {
    m1: number | null,
    m2: number | null,
    m3: number | null,
    m4: number | null,
    m5: number | null,
    m6: number | null,
    m7: number | null,
    m8: number | null,
    m9: number | null,
    m10: number | null,
    m11: number | null,
    m12: number | null
  }
  flag: boolean
}

const gridRef = ref<VxeGridInstance<RowVO>>()
const rowSize = ref(500)

const dataOptions = ref([
  { label: '加载 3 节点', value: 3 },
  { label: '加载 20 节点', value: 20 },
  { label: '加载 100 节点', value: 100 },
  { label: '加载 500 节点', value: 500 },
  { label: '加载 1000 节点', value: 1000 },
  { label: '加载 5000 节点', value: 5000 },
  { label: '加载 10000 节点', value: 10000 },
  { label: '加载 20000 节点', value: 20000 }
])

const levelNumCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeRate',
  props: {
    readonly: true
  }
})

const flag1CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch',
  props: {
    readonly: true
  }
})

const cityOptions = [
  { label: '广东省深圳市', value: 'sz' },
  { label: '广东省广州市', value: 'gz' },
  { label: '北京市', value: 'bj' },
  { label: '上海市', value: 'sh' },
  { label: '浙江省杭州市', value: 'hz' }
]

const formatSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  if (cellValue) {
    return cellValue === '1' ? '男' : '女'
  }
  return ''
}

const formatCity: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  const item = cityOptions.find(item => item.value === cellValue)
  return item ? item.label : cellValue
}

const formatAmount: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  if (cellValue) {
    return `￥${XEUtils.commafy(cellValue, { digits: 2 })}`
  }
  return ''
}

const countRow = reactive({
  checkbox: '合计',
  name: 0,
  annualStatement: {
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
    m5: 0,
    m6: 0,
    m7: 0,
    m8: 0,
    m9: 0,
    m10: 0,
    m11: 0,
    m12: 0
  }
})

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  loading: false,
  stripe: true,
  showOverflow: true,
  showFooter: true,
  keepSource: true,
  height: '100%',
  columnConfig: {
    drag: true,
    resizable: true
  },
  columnDragConfig: {
    trigger: 'cell',
    showIcon: false,
    isCrossDrag: true,
    isToChildDrag: true,
    isSelfToChildDrag: true,
    showGuidesStatus: true
  },
  resizableConfig: {
    isDblclickAutoWidth: true
  },
  rowConfig: {
    isHover: true,
    drag: true
  },
  rowDragConfig: {
    isCrossDrag: true,
    isToChildDrag: true,
    isSelfToChildDrag: true,
    showGuidesStatus: true
  },
  toolbarConfig: {
    custom: true,
    zoom: true,
    slots: {
      buttons: 'toolbarButtons'
    }
  },
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId',
    seqMode: 'increasing'
  },
  customConfig: {
    immediate: true
  },
  mouseConfig: {
    selected: true
  },
  keyboardConfig: {
    isEdit: true,
    isArrow: true,
    isEnter: true,
    isBack: true,
    isDel: true,
    isEsc: true
  },
  scrollX: {
    gt: 0,
    enabled: true
  },
  scrollY: {
    gt: 0,
    enabled: true
  },
  columns: [
    { field: 'seq', type: 'seq', width: 80, fixed: 'left' },
    { field: 'checkbox', type: 'checkbox', fixed: 'left', width: 70 },
    { field: 'name', title: '名字', fixed: 'left', minWidth: 280, treeNode: true, dragSort: true, slots: { default: 'nameDefault' } },
    {
      title: '基本信息',
      field: 'info',
      children: [
        { field: 'city', title: '所在地', width: 140, formatter: formatCity },
        { field: 'age', title: '年龄', width: 120 },
        { field: 'sex', title: '性别', width: 120, formatter: formatSex },
        { field: 'email', title: '邮箱', width: 220, slots: { default: 'emailDefault' } }
      ]
    },
    { field: 'flag', title: '是否启用', width: 120, cellRender: flag1CellRender },
    { field: 'levelNum', title: '评分', width: 160, cellRender: levelNumCellRender },
    {
      title: '年度账单',
      field: 'annualStatement',
      children: [
        { field: 'annualStatement.m1', title: '一月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m2', title: '二月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m3', title: '三月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m4', title: '四月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m5', title: '五月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m6', title: '六月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m7', title: '七月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m8', title: '八月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m9', title: '九月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m10', title: '十月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m11', title: '十一月', width: 140, formatter: formatAmount },
        { field: 'annualStatement.m12', title: '十二月', width: 140, formatter: formatAmount }
      ]
    }
  ],
  data: [],
  footerData: [
    countRow
  ]
})

const arList = XEUtils.shuffle(XEUtils.range(1, 21).map(num => `https://vxeui.com/resource/avatarImg/avatar${num}.jpeg`))
const neList = XEUtils.shuffle(['张三', '李四', '王五', '小徐', '老张', '老六', '小明', '老徐', '小张', '小赵', '老高', '老铁', '赵高', '小王', '老王'])
const cyList = XEUtils.shuffle(['sz', 'gz', 'bj', 'sh', 'hz'])
const sxList = XEUtils.shuffle(XEUtils.range(1, 60).map(num => `${num % 2}`))
const aeList = XEUtils.shuffle(XEUtils.range(18, 66))
const elList = XEUtils.range(1, 60).map(num => `${XEUtils.sample('qwertyuiopasdfghjklzxcvbnm'.split(''), XEUtils.random(6, 16)).join('')}@163.com`)
const lnList = XEUtils.shuffle(XEUtils.range(0, 5))
const asmMpas = {
  m1: XEUtils.shuffle(XEUtils.range(1000, 1500)),
  m2: XEUtils.shuffle(XEUtils.range(1100, 1400)),
  m3: XEUtils.shuffle(XEUtils.range(800, 1200)),
  m4: XEUtils.shuffle(XEUtils.range(3000, 3600)),
  m5: XEUtils.shuffle(XEUtils.range(2000, 2100)),
  m6: XEUtils.shuffle(XEUtils.range(1600, 1700)),
  m7: XEUtils.shuffle(XEUtils.range(1200, 1300)),
  m8: XEUtils.shuffle(XEUtils.range(1100, 1200)),
  m9: XEUtils.shuffle(XEUtils.range(1700, 1800)),
  m10: XEUtils.shuffle(XEUtils.range(1300, 1700)),
  m11: XEUtils.shuffle(XEUtils.range(1000, 1300)),
  m12: XEUtils.shuffle(XEUtils.range(800, 1200))
}
const fgList = XEUtils.shuffle(XEUtils.range(1, 60).map(num => (num % 2) === 0))

const loadMockData = (nodeSize: number) => {
  gridOptions.loading = true
  setTimeout(() => {
    const cacheList: RowVO[] = []
    let idCounter = 1000000

    const rootCount = Math.floor(nodeSize / 2)
    const roots: RowVO[] = []
    for (let i = 0; i < rootCount; i++) {
      const rootNode: RowVO = {
        id: idCounter++,
        parentId: null,
        name: neList[idCounter % neList.length],
        nickname: '',
        sex: sxList[idCounter % sxList.length],
        age: aeList[idCounter % aeList.length],
        email: elList[idCounter % elList.length],
        city: cyList[idCounter % cyList.length],
        avatarUrl: arList[idCounter % arList.length],
        levelNum: lnList[idCounter % lnList.length],
        annualStatement: {
          m1: asmMpas.m1[idCounter % asmMpas.m1.length],
          m2: asmMpas.m2[idCounter % asmMpas.m2.length],
          m3: asmMpas.m3[idCounter % asmMpas.m3.length],
          m4: asmMpas.m4[idCounter % asmMpas.m4.length],
          m5: asmMpas.m5[idCounter % asmMpas.m5.length],
          m6: asmMpas.m6[idCounter % asmMpas.m6.length],
          m7: asmMpas.m7[idCounter % asmMpas.m7.length],
          m8: asmMpas.m8[idCounter % asmMpas.m8.length],
          m9: asmMpas.m9[idCounter % asmMpas.m9.length],
          m10: asmMpas.m10[idCounter % asmMpas.m10.length],
          m11: asmMpas.m11[idCounter % asmMpas.m11.length],
          m12: asmMpas.m12[idCounter % asmMpas.m12.length]
        },
        flag: fgList[idCounter % fgList.length]
      }
      roots.push(rootNode)
      cacheList.push(rootNode)
    }

    let generatedCount = rootCount
    const secondLevelNodes: RowVO[] = []
    const secondLevelCount = Math.min(
      Math.floor(Math.random() * (nodeSize - generatedCount)) + 1,
      nodeSize - generatedCount
    )
    for (let i = 0; i < secondLevelCount; i++) {
      const parent = roots[Math.floor(Math.random() * roots.length)]
      const node: RowVO = {
        id: idCounter++,
        parentId: parent.id,
        name: neList[idCounter % neList.length],
        nickname: '',
        sex: sxList[idCounter % sxList.length],
        age: aeList[idCounter % aeList.length],
        email: elList[idCounter % elList.length],
        city: cyList[idCounter % cyList.length],
        avatarUrl: arList[idCounter % arList.length],
        levelNum: lnList[idCounter % lnList.length],
        annualStatement: {
          m1: asmMpas.m1[idCounter % asmMpas.m1.length],
          m2: asmMpas.m2[idCounter % asmMpas.m2.length],
          m3: asmMpas.m3[idCounter % asmMpas.m3.length],
          m4: asmMpas.m4[idCounter % asmMpas.m4.length],
          m5: asmMpas.m5[idCounter % asmMpas.m5.length],
          m6: asmMpas.m6[idCounter % asmMpas.m6.length],
          m7: asmMpas.m7[idCounter % asmMpas.m7.length],
          m8: asmMpas.m8[idCounter % asmMpas.m8.length],
          m9: asmMpas.m9[idCounter % asmMpas.m9.length],
          m10: asmMpas.m10[idCounter % asmMpas.m10.length],
          m11: asmMpas.m11[idCounter % asmMpas.m11.length],
          m12: asmMpas.m12[idCounter % asmMpas.m12.length]
        },
        flag: fgList[idCounter % fgList.length]
      }
      secondLevelNodes.push(node)
      cacheList.push(node)
      generatedCount++
    }

    if (generatedCount < nodeSize) {
      const thirdLevelCount = nodeSize - generatedCount
      for (let i = 0; i < thirdLevelCount; i++) {
        let parent
        if (secondLevelNodes.length > 0) {
          parent = secondLevelNodes[Math.floor(Math.random() * secondLevelNodes.length)]
        } else {
          parent = roots[Math.floor(Math.random() * roots.length)]
        }
        const node: RowVO = {
          id: idCounter++,
          parentId: parent.id,
          name: neList[idCounter % neList.length],
          nickname: '',
          sex: sxList[idCounter % sxList.length],
          age: aeList[idCounter % aeList.length],
          email: elList[idCounter % elList.length],
          city: cyList[idCounter % cyList.length],
          avatarUrl: arList[idCounter % arList.length],
          levelNum: lnList[idCounter % lnList.length],
          annualStatement: {
            m1: asmMpas.m1[idCounter % asmMpas.m1.length],
            m2: asmMpas.m2[idCounter % asmMpas.m2.length],
            m3: asmMpas.m3[idCounter % asmMpas.m3.length],
            m4: asmMpas.m4[idCounter % asmMpas.m4.length],
            m5: asmMpas.m5[idCounter % asmMpas.m5.length],
            m6: asmMpas.m6[idCounter % asmMpas.m6.length],
            m7: asmMpas.m7[idCounter % asmMpas.m7.length],
            m8: asmMpas.m8[idCounter % asmMpas.m8.length],
            m9: asmMpas.m9[idCounter % asmMpas.m9.length],
            m10: asmMpas.m10[idCounter % asmMpas.m10.length],
            m11: asmMpas.m11[idCounter % asmMpas.m11.length],
            m12: asmMpas.m12[idCounter % asmMpas.m12.length]
          },
          flag: fgList[idCounter % fgList.length]
        }
        cacheList.push(node)
        generatedCount++
      }
    }

    gridOptions.data = cacheList
    nextTick().then(() => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.setAllTreeExpand(true)
      }
    })
    gridOptions.loading = false
    updateFooterCount()
  }, 150)
}

const updateFooterCount = () => {
  let countM1 = 0
  let countM2 = 0
  let countM3 = 0
  let countM4 = 0
  let countM5 = 0
  let countM6 = 0
  let countM7 = 0
  let countM8 = 0
  let countM9 = 0
  let countM10 = 0
  let countM11 = 0
  let countM12 = 0
  let countLN = 0
  gridOptions.data.forEach(row => {
    countM1 += XEUtils.toNumber(row.annualStatement.m1)
    countM2 += XEUtils.toNumber(row.annualStatement.m2)
    countM3 += XEUtils.toNumber(row.annualStatement.m3)
    countM4 += XEUtils.toNumber(row.annualStatement.m4)
    countM5 += XEUtils.toNumber(row.annualStatement.m5)
    countM6 += XEUtils.toNumber(row.annualStatement.m6)
    countM7 += XEUtils.toNumber(row.annualStatement.m7)
    countM8 += XEUtils.toNumber(row.annualStatement.m8)
    countM9 += XEUtils.toNumber(row.annualStatement.m9)
    countM10 += XEUtils.toNumber(row.annualStatement.m10)
    countM11 += XEUtils.toNumber(row.annualStatement.m11)
    countM12 += XEUtils.toNumber(row.annualStatement.m12)
    countLN += XEUtils.toNumber(row.levelNum)
  })
  countRow.name = gridOptions.data.length
  countRow.annualStatement.m1 = countM1
  countRow.annualStatement.m2 = countM2
  countRow.annualStatement.m3 = countM3
  countRow.annualStatement.m4 = countM4
  countRow.annualStatement.m5 = countM5
  countRow.annualStatement.m6 = countM6
  countRow.annualStatement.m7 = countM7
  countRow.annualStatement.m8 = countM8
  countRow.annualStatement.m9 = countM9
  countRow.annualStatement.m10 = countM10
  countRow.annualStatement.m11 = countM11
  countRow.annualStatement.m12 = countM12
}

const changeRowSizeEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    loadMockData(rowSize.value)
  }
}

nextTick(() => {
  loadMockData(rowSize.value)
})
</script>
