<template>
  <div>
    <vxe-toolbar ref="toolbarRef" print export>
      <template #buttons>
        <vxe-button status="primary" @click="addEvent">新增</vxe-button>
        <vxe-button status="success" @click="saveEvent">保存</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      border
      show-overflow
      show-footer
      keep-source
      height="600"
      ref="tableRef"
      :print-config="printConfig"
      :export-config="exportConfig"
      :column-config="columnConfig"
      :edit-config="editConfig"
      :data="tableData"
      :footer-data="footerData"
      @edit-closed="editClosedEvent">
      <vxe-column field="seq" type="seq" width="60"></vxe-column>
      <vxe-column field="summary" title="摘要" min-width="120" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="subject" title="会计科目" min-width="180" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-colgroup field="debtorAmount" title="借方金额">
        <vxe-column field="debtorObj.p9" title="亿" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p8" title="千" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p7" title="百" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p6" title="十" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p5" title="万" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p4" title="千" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p3" title="百" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p2" title="十" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.p1" title="元" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.m1" title="角" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="debtorObj.m2" title="分" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="x1" title="√" width="40"></vxe-column>
      <vxe-colgroup field="creditAmount" title="贷方金额">
        <vxe-column field="creditObj.p9" title="亿" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p8" title="千" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p7" title="百" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p6" title="十" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p5" title="万" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p4" title="千" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p3" title="百" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p2" title="十" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.p1" title="元" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.m1" title="角" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props:  { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
        <vxe-column field="creditObj.m2" title="分" width="60" align="center" :edit-render="{ name: 'VxeNumberInput', autoSelect: true, props: { type: 'integer', max: 9, controls: false, maxLength: 1, align: 'center' } }"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="x2" title="√" width="40"></vxe-column>
    </vxe-table>

    <div ref="bottomElemRef" style="display: flex;padding: 8px;">
      <div style="width: 25%;">财务主管：小徐</div>
      <div style="width: 25%;">记账：张三</div>
      <div style="width: 25%;">出纳：李四</div>
      <div style="width: 25%;">审核：老六</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes, VxeToolbarInstance } from 'vxe-table'
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

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance<RowVO>>()
const topElemRef = ref<HTMLDivElement>()
const bottomElemRef = ref<HTMLDivElement>()

const footerRow = reactive({
  seq: '合计',
  debtorObj: {},
  creditObj: {}
})
const footerData = ref<VxeTablePropTypes.FooterData>([
  footerRow
])

const printConfig = reactive<VxeTablePropTypes.PrintConfig>({
  beforePrintMethod ({ html }) {
    const topEl = topElemRef.value
    const topHtml = topEl ? topEl.outerHTML : ''
    const bottomEl = bottomElemRef.value
    const bottomHtml = bottomEl ? bottomEl.outerHTML : ''
    return `${topHtml}${html}${bottomHtml}`
  }
})

const exportConfig = reactive<VxeTablePropTypes.ExportConfig>({
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  resizable: true
})

const editConfig = reactive<VxeTablePropTypes.EditConfig<RowVO>>({
  mode: 'cell',
  trigger: 'click',
  showStatus: true
})

const list = [
  { id: 10001, summary: '购买办公用品', subject: '办公费', debtorAmount: 120000, creditAmount: 0 },
  { id: 10002, summary: '购买办公用品', subject: '库存现金', debtorAmount: 0, creditAmount: 120000 }
]

const tableData = ref<RowVO[]>([])

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
  tableData.value = handleData(list)
  nextTick(() => {
    updateFooter()
  })
}

const updateFooter = () => {
  nextTick(() => {
    const $table = tableRef.value
    if ($table) {
      const { visibleData } = $table.getTableData()
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

const editClosedEvent = () => {
  updateFooter()
}

const addEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const record = {}
    await $table.insertAt(record, -1)
    updateFooter()
  }
}

const saveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { visibleData } = $table.getTableData()
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

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
