<template>
  <div class="demo-page-wrapper">
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #nameDefault="{ row }">
        <vxe-image :src="row.avatarUrl" width="36" height="36" circle style="margin: 0 16px;"></vxe-image>
        <span>{{ row.name }}</span>
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

const formatSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  if (cellValue) {
    return cellValue === '1' ? '男' : '女'
  }
  return ''
}

const formatCity: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  return cellValue
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
    zoom: true
  },
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId'
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
    mode: 'wheel',
    enabled: true
  },
  columns: [
    { field: 'checkbox', type: 'checkbox', fixed: 'left', width: 70 },
    { field: 'name', title: '名字', fixed: 'left', minWidth: 280, treeNode: true, dragSort: true, slots: { default: 'nameDefault' } },
    {
      title: '基本信息',
      field: 'info',
      children: [
        { field: 'city', title: '所在地', width: 140, formatter: formatCity },
        { field: 'age', title: '年龄', width: 120 },
        { field: 'sex', title: '性别', width: 120, formatter: formatSex },
        { field: 'email', title: '邮箱', width: 220 }
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
const cacheList: RowVO[] = []

const loadMockData = (rSize: number) => {
  gridOptions.loading = true
  setTimeout(() => {
    for (let i = cacheList.length; i < rSize; i++) {
      let parentId: number | null = null
      if (i > 30 && i < 36) {
        parentId = 1000001
      } else if (i > 36 && i <= 40) {
        parentId = 1000002
      } else if (i > 40 && i <= 45) {
        parentId = 1000003
      } else if (i > 45 && i <= 50) {
        parentId = 1000005
      } else if (i > 50 && i <= 60) {
        parentId = 1000007
      } else if (i > 60 && i <= 63) {
        parentId = 1000008
      } else if (i > 63 && i <= 66) {
        parentId = 1000009
      } else if (i > 66 && i <= 77) {
        parentId = 1000010
      } else if (i > 77 && i <= 79) {
        parentId = 1000012
      } else if (i > 79 && i <= 81) {
        parentId = 1000013
      } else if (i > 81 && i <= 86) {
        parentId = 1000014
      } else if (i > 86 && i <= 90) {
        parentId = 1000015
      } else if (i > 90 && i <= 92) {
        parentId = 1000016
      } else if (i > 92 && i <= 95) {
        parentId = 1000017
      } else if (i > 95 && i <= 98) {
        parentId = 1000019
      } else if (i > 98 && i <= 101) {
        parentId = 1000020
      } else if (i > 101 && i <= 105) {
        parentId = 1000022
      }

      // 二级
      if (i > 105 && i < 108) {
        parentId = 1000031
      } else if (i > 108 && i <= 112) {
        parentId = 1000033
      } else if (i > 112 && i <= 114) {
        parentId = 1000034
      } else if (i > 114 && i <= 118) {
        parentId = 1000035
      } else if (i > 118 && i <= 121) {
        parentId = 1000037
      } else if (i > 121 && i <= 123) {
        parentId = 1000038
      } else if (i > 123 && i <= 129) {
        parentId = 1000039
      } else if (i > 129 && i <= 132) {
        parentId = 1000041
      } else if (i > 132 && i <= 138) {
        parentId = 1000043
      } else if (i > 138 && i <= 145) {
        parentId = 1000044
      } else if (i > 145 && i <= 148) {
        parentId = 1000046
      } else if (i > 148 && i <= 151) {
        parentId = 1000048
      } else if (i > 151 && i <= 153) {
        parentId = 1000049
      } else if (i > 153 && i <= 155) {
        parentId = 1000051
      } else if (i > 155 && i <= 158) {
        parentId = 1000052
      } else if (i > 158 && i <= 161) {
        parentId = 1000053
      } else if (i > 161 && i <= 163) {
        parentId = 1000054
      } else if (i > 163 && i <= 166) {
        parentId = 1000056
      } else if (i > 166 && i <= 169) {
        parentId = 1000056
      } else if (i > 169 && i <= 172) {
        parentId = 1000061
      } else if (i > 172 && i <= 176) {
        parentId = 1000062
      } else if (i > 176 && i <= 178) {
        parentId = 1000067
      } else if (i > 178 && i <= 182) {
        parentId = 1000068
      } else if (i > 176 && i <= 178) {
        parentId = 1000069
      } else if (i > 176 && i <= 180) {
        parentId = 1000071
      } else if (i > 180 && i <= 182) {
        parentId = 1000072
      } else if (i > 182 && i <= 186) {
        parentId = 1000075
      } else if (i > 186 && i <= 189) {
        parentId = 1000078
      } else if (i > 189 && i <= 192) {
        parentId = 1000082
      } else if (i > 192 && i <= 194) {
        parentId = 1000083
      } else if (i > 194 && i <= 199) {
        parentId = 1000084
      } else if (i > 199 && i <= 203) {
        parentId = 1000085
      } else if (i > 203 && i <= 208) {
        parentId = 1000087
      } else if (i > 208 && i <= 211) {
        parentId = 1000088
      } else if (i > 211 && i <= 218) {
        parentId = 1000089
      } else if (i > 218 && i <= 220) {
        parentId = 1000091
      } else if (i > 220 && i <= 224) {
        parentId = 1000093
      } else if (i > 224 && i <= 228) {
        parentId = 1000094
      } else if (i > 228 && i <= 240) {
        parentId = 1000096
      } else if (i > 240 && i <= 249) {
        parentId = 1000097
      } else if (i > 249 && i <= 260) {
        parentId = 1000102
      } else if (i > 260 && i <= 266) {
        parentId = 1000103
      } else if (i > 266 && i <= 270) {
        parentId = 1000104
      } else if (i > 270 && i <= 280) {
        parentId = 1000028
      } else if (i > 280 && i <= 290) {
        parentId = 1000029
      } else if (i > 290 && i <= 300) {
        parentId = 1000030
      }

      const item: RowVO = {
        id: 1000000 + i,
        parentId,
        name: neList[i % neList.length],
        nickname: '',
        sex: sxList[i % sxList.length],
        age: aeList[i % aeList.length],
        email: elList[i % elList.length],
        city: cyList[i % cyList.length],
        avatarUrl: arList[i % arList.length],
        levelNum: lnList[i % lnList.length],
        annualStatement: {
          m1: asmMpas.m1[i % asmMpas.m1.length],
          m2: asmMpas.m2[i % asmMpas.m2.length],
          m3: asmMpas.m3[i % asmMpas.m3.length],
          m4: asmMpas.m4[i % asmMpas.m4.length],
          m5: asmMpas.m5[i % asmMpas.m5.length],
          m6: asmMpas.m6[i % asmMpas.m6.length],
          m7: asmMpas.m7[i % asmMpas.m7.length],
          m8: asmMpas.m8[i % asmMpas.m8.length],
          m9: asmMpas.m9[i % asmMpas.m9.length],
          m10: asmMpas.m10[i % asmMpas.m10.length],
          m11: asmMpas.m11[i % asmMpas.m11.length],
          m12: asmMpas.m12[i % asmMpas.m12.length]
        },
        flag: fgList[i % fgList.length]
      }
      cacheList.push(item)
    }
    gridOptions.data = cacheList.slice(0, rSize)
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

nextTick(() => {
  loadMockData(300)
})
</script>
