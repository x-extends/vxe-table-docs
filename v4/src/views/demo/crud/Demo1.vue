<template>
  <div class="demo-page-wrapper">
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #toolbarButtons>
        <vxe-select v-model="selectRowSize" :options="dataOptions" @change="changeRowSizeEvent"></vxe-select>
        <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
        <vxe-button status="error" icon="vxe-icon-no-drop" @click="pendingSelect(true)">标记删除</vxe-button>
        <vxe-button status="error" icon="vxe-icon-no-drop" @click="pendingSelect(false)">取消标记</vxe-button>
        <vxe-button status="success" icon="vxe-icon-save" @click="saveEvent">保存</vxe-button>
      </template>

      <template #active="{ row }">
        <vxe-button mode="text" status="error" icon="vxe-icon-delete" @click="removeRow(row)"></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeUI, VxeSelectProps, VxeUploadProps } from 'vxe-pc-ui'
import axios from 'axios'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
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

const selectRowSize = ref(100)
const dataOptions = ref([
  { label: '加载 3 行', value: 3 },
  { label: '加载 20 行', value: 20 },
  { label: '加载 100 行', value: 100 },
  { label: '加载 500 行', value: 500 },
  { label: '加载 1000 行', value: 1000 },
  { label: '加载 5000 行', value: 5000 },
  { label: '加载 10000 行', value: 10000 },
  { label: '加载 50000 行', value: 50000 },
  { label: '加载 100000 行', value: 100000 }
])

const avatarUrlCellRender = reactive<VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    singleMode: true,
    urlMode: true,
    showButtonText: false,
    pasteToUpload: true,
    imageConfig: {
      circle: true,
      width: 40,
      height: 40
    },
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        return {
          ...res.data
        }
      })
    }
  }
})

const levelNumCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeRate'
})

const flag1CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch'
})

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: '0' },
    { label: '男', value: '1' }
  ]
})

const cityEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '深圳市', value: 'sz' },
    { label: '广州市', value: 'gz' },
    { label: '北京市', value: 'bj' },
    { label: '上海市', value: 'sh' },
    { label: '杭州市', value: 'hz' }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  stripe: true,
  showOverflow: true,
  keepSource: true,
  height: '100%',
  columnConfig: {
    resizable: true
  },
  rowConfig: {
    isHover: true
  },
  toolbarConfig: {
    custom: true,
    slots: {
      buttons: 'toolbarButtons'
    }
  },
  checkboxConfig: {
    range: true
  },
  editConfig: {
    mode: 'cell',
    trigger: 'dblclick',
    showStatus: true
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
  editRules: {
    name: [
      { required: true, content: '请输入名字' }
    ]
  },
  columns: [
    { field: 'seq', type: 'seq', fixed: 'left', width: 60 },
    { field: 'checkbox', type: 'checkbox', fixed: 'left', width: 60 },
    { field: 'avatarUrl', title: '头像', width: 80, cellRender: avatarUrlCellRender },
    { field: 'name', title: '名字', minWidth: 200, dragSort: true, editRender: { name: 'VxeInput' } },
    {
      title: '基本信息',
      field: 'info',
      children: [
        { field: 'city', title: '所在地', width: 140, editRender: cityEditRender },
        { field: 'age', title: '年龄', width: 120, editRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
        { field: 'sex', title: '性别', width: 120, editRender: sexEditRender },
        { field: 'email', title: '邮箱', width: 220, editRender: { name: 'VxeInput' } }
      ]
    },
    { field: 'flag', title: '是否启用', width: 120, cellRender: flag1CellRender },
    { field: 'levelNum', title: '评分', width: 160, cellRender: levelNumCellRender },
    {
      title: '年度账单',
      field: 'annualStatement',
      children: [
        { field: 'annualStatement.m1', title: '一月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m2', title: '二月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m3', title: '三月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m4', title: '四月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m5', title: '五月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m6', title: '六月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m7', title: '七月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m8', title: '八月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m9', title: '久月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m10', title: '十月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m11', title: '十一月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } },
        { field: 'annualStatement.m12', title: '十二月', width: 140, editRender: { name: 'VxeNumberInput', props: { type: 'amount' } } }
      ]
    },
    { field: 'active', title: '操作', fixed: 'right', width: 80, slots: { default: 'active' } }
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
      const item: RowVO = {
        id: 1000000 + i,
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
    const $grid = gridRef.value
    if ($grid) {
      $grid.reloadData(cacheList.slice(0, rSize))
    }
    gridOptions.loading = false
  }, 150)
}

const changeRowSizeEvent = () => {
  loadMockData(selectRowSize.value)
}

const addEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: XEUtils.sample(neList)
    }
    const { row: newRow } = await $grid.insertAt(record, null)
    $grid.setEditRow(newRow)
  }
}

const pendingSelect = async (checked: boolean) => {
  const $grid = gridRef.value
  if ($grid) {
    const selectRecords = $grid.getCheckboxRecords()
    if (selectRecords.length) {
      $grid.setPendingRow(selectRecords, checked)
      $grid.clearCheckboxRow()
    } else {
      VxeUI.modal.message({
        content: '未选中数据',
        status: 'info'
      })
    }
  }
}

const removeRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.remove(row)
  }
}

const saveEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validate(true)
    if (errMap) {
      return
    }
    const { insertRecords, updateRecords, removeRecords } = $grid.getRecordset()
    const pendingRecords = $grid.getPendingRecords()
    VxeUI.modal.alert({
      title: 'CRUD 管理器',
      content: `新增：${insertRecords.length} 行，已删除：${removeRecords.length} 行，待删除：${pendingRecords.length} 行，修改：${updateRecords.length} 行`
    })
  }
}

nextTick(() => {
  loadMockData(selectRowSize.value)
})
</script>
