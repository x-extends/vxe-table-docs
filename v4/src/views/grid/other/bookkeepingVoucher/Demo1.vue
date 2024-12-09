<template>
  <div>
    <div ref="topElemRef">
      <h1 style="text-align: center;">记账凭证</h1>
    </div>

    <div>
      <vxe-button status="primary" @click="addEvent">新增</vxe-button>
      <vxe-button status="success" @click="saveEvent">保存</vxe-button>
    </div>

    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents">
      <template #toolbarButtons>
        <vxe-form :data="formData">
          <vxe-form-item title="凭证号" field="certNO" :item-render="{name: 'VxeInput'}"></vxe-form-item>
          <vxe-form-item title="凭证日期" field="certDate" :item-render="{name: 'VxeDatePicker'}"></vxe-form-item>
          <vxe-form-item title="附件数量" field="fileNumber" :item-render="{name: 'VxeNumberInput', props: {type: 'integer'}}"></vxe-form-item>
        </vxe-form>
      </template>

      <template #active="{ row }">
          <vxe-button mode="text" status="primary" icon="vxe-icon-add" @click="insertRow(row)"></vxe-button>
          <vxe-button mode="text" status="error" icon="vxe-icon-delete" @click="removeRow(row)"></vxe-button>
      </template>
    </vxe-grid>

    <div ref="bottomElemRef" style="display: flex;padding: 8px;">
      <div style="width: 25%;">财务主管：小徐</div>
      <div style="width: 25%;">记账：张三</div>
      <div style="width: 25%;">出纳：李四</div>
      <div style="width: 25%;">审核：老六</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance, VxeGridListeners } from 'vxe-table'
import XEUtils from 'xe-utils'

interface AmountObjVO {
  p9: string
  p8: string
  p7: string
  p6: string
  p5: string
  p4: string
  p3: string
  p2: string
  p1: string
  m1: string
  m2: string
}

interface RowVO {
  id: number
  name: string
  summary: string
  subject: string
  debtorAmount: number
  debtorObj: AmountObjVO
  creditAmount: number
  creditObj: AmountObjVO
}

interface FormDataVO {
  certNO: string
  certDate: string
  fileNumber: number
}

const gridRef = ref<VxeGridInstance<RowVO>>()
const topElemRef = ref<HTMLDivElement>()
const bottomElemRef = ref<HTMLDivElement>()

const formData = reactive<FormDataVO>({
  certNO: '',
  certDate: '',
  fileNumber: 1
})

const footerRow = reactive({
  seq: '合计',
  debtorObj: {},
  creditObj: {}
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showFooter: true,
  keepSource: true,
  height: 600,
  printConfig: {
    beforePrintMethod ({ html }) {
      const topEl = topElemRef.value
      const topHtml = topEl ? topEl.outerHTML : ''
      const bottomEl = bottomElemRef.value
      const bottomHtml = bottomEl ? bottomEl.outerHTML : ''
      return `${topHtml}${html}${bottomHtml}`
    }
  },
  exportConfig: {},
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    export: true,
    print: true,
    slots: {
      buttons: 'toolbarButtons'
    }
  },
  editConfig: {
    mode: 'cell',
    trigger: 'click',
    showStatus: true
  },
  data: [],
  footerData: [
    footerRow
  ],
  columns: [
    { field: 'seq', type: 'seq', width: 60 },
    { field: 'summary', title: '摘要', minWidth: 120, editRender: { name: 'VxeInput' } },
    { field: 'subject', title: '会计科目', minWidth: 180, editRender: { name: 'VxeInput' } },
    {
      field: 'debtorAmount',
      title: '借方金额',
      children: [
        { field: 'debtorObj.p9', title: '亿', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p8', title: '千', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p7', title: '百', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p6', title: '十', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p5', title: '万', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p4', title: '千', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p3', title: '百', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p2', title: '十', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.p1', title: '元', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.m1', title: '角', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'debtorObj.m2', title: '分', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } }
      ]
    },
    { field: 'x1', title: '√', width: 40 },
    {
      field: 'creditAmount',
      title: '贷方金额',
      children: [
        { field: 'creditObj.p9', title: '亿', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p8', title: '千', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p7', title: '百', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p6', title: '十', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p5', title: '万', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p4', title: '千', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p3', title: '百', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p2', title: '十', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.p1', title: '元', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.m1', title: '角', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } },
        { field: 'creditObj.m2', title: '分', width: 60, align: 'center', editRender: { name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } } }
      ]
    },
    { field: 'x2', title: '√', width: 40 },
    { field: 'active', title: '操作', width: 80, fixed: 'right', slots: { default: 'active' } }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  editClosed () {
    updateFooter()
  }
}

const list = [
  { id: 10001, summary: '购买办公用品', subject: '办公费', debtorAmount: 120000, creditAmount: 0 },
  { id: 10002, summary: '购买办公用品', subject: '库存现金', debtorAmount: 0, creditAmount: 120000 }
]

const handleSpitAmount = (amount: number, isUnit: boolean) => {
  const str = XEUtils.toValueString(XEUtils.toNumber(amount) || '')
  const [pStr, mStr] = `${isUnit ? '￥' : ''}${str}`.split('.')
  const restObj: AmountObjVO = {
    p9: '',
    p8: '',
    p7: '',
    p6: '',
    p5: '',
    p4: '',
    p3: '',
    p2: '',
    p1: '',
    m1: '',
    m2: ''
  }
  if (pStr) {
    pStr.split('').reverse().forEach((val, i) => {
      restObj[`p${i + 1}`] = `${val || 0}`
    })
  }
  if (mStr) {
    mStr.split('').forEach((val, i) => {
      restObj[`m${i + 1}`] = `${val || 0}`
    })
  }
  return restObj
}

const handleJoinAmount = (obj: AmountObjVO) => {
  const strArr = [obj.p9 || 0, obj.p8 || 0, obj.p7 || 0, obj.p6 || 0, obj.p5 || 0, obj.p4 || 0, obj.p3 || 0, obj.p2 || 0, obj.p1 || 0, '.', obj.m2 || 0, obj.m1 || 0]
  return XEUtils.toNumber(strArr.join(''))
}

const handleData = (list: any[]) => {
  return list.map(item => {
    return {
      ...item,
      debtorObj: handleSpitAmount(item.debtorAmount, false),
      creditObj: handleSpitAmount(item.creditAmount, false)
    } as RowVO
  })
}

const loadList = (list: any[]) => {
  gridOptions.data = handleData(list)
  nextTick(() => {
    updateFooter()
  })
}

const updateFooter = () => {
  nextTick(() => {
    const $grid = gridRef.value
    if ($grid) {
      const { visibleData } = $grid.getTableData()
      let countDebtorAmount = 0
      let countCreditAmount = 0
      visibleData.forEach(row => {
        row.debtorAmount = handleJoinAmount(row.debtorObj)
        row.creditAmount = handleJoinAmount(row.creditObj)
        countDebtorAmount += row.debtorAmount
        countCreditAmount += row.creditAmount
      })
      footerRow.debtorObj = handleSpitAmount(countDebtorAmount, true)
      footerRow.creditObj = handleSpitAmount(countCreditAmount, true)
    }
  })
}

const addEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {}
    await $grid.insertAt(record, -1)
    updateFooter()
  }
}

const insertRow = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {}
    await $grid.insertAt(record, row)
    updateFooter()
  }
}

const removeRow = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    await $grid.remove(row)
    updateFooter()
  }
}

const saveEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { visibleData } = $grid.getTableData()
    const rest = visibleData.map(item => {
      return {
        id: item.id,
        summary: item.summary,
        subject: item.subject,
        debtorAmount: handleJoinAmount(item.debtorObj),
        creditAmount: handleJoinAmount(item.creditObj)
      }
    })
    VxeUI.modal.message({
      content: '保存成功',
      status: 'success'
    })
    loadList(rest)
    console.log(rest)
  }
}

loadList(list)
</script>
