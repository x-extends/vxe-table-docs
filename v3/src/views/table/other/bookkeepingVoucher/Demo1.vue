<template>
  <div>
    <div ref="topElemRef">
      <h1 style="text-align: center;">记账凭证</h1>
    </div>

    <div>
      <vxe-button status="primary" @click="addEvent">新增</vxe-button>
      <vxe-button status="success" @click="saveEvent">保存</vxe-button>
    </div>

    <vxe-toolbar ref="toolbarRef" print export>
      <template #buttons>
        <vxe-form :data="formData">
          <vxe-form-item title="凭证号" field="certNO" :item-render="{name: 'VxeInput'}"></vxe-form-item>
          <vxe-form-item title="凭证日期" field="certDate" :item-render="{name: 'VxeDatePicker'}"></vxe-form-item>
          <vxe-form-item title="附件数量" field="fileNumber" :item-render="{name: 'VxeNumberInput', props: {type: 'integer'}}"></vxe-form-item>
        </vxe-form>
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
      <vxe-column field="active" title="操作" width="100" fixed="right">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" icon="vxe-icon-add" @click="insertRow(row)"></vxe-button>
          <vxe-button mode="text" status="error" icon="vxe-icon-delete" @click="removeRow(row)"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <div ref="bottomElemRef" style="display: flex;padding: 8px;">
      <div style="width: 25%;">财务主管：小徐</div>
      <div style="width: 25%;">记账：张三</div>
      <div style="width: 25%;">出纳：李四</div>
      <div style="width: 25%;">审核：老六</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

interface FormDataVO {
  certNO: string
  certDate: string
  fileNumber: number
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      certNO: '',
      certDate: '',
      fileNumber: 1
    }

    const footerRow = {
      seq: '合计',
      debtorObj: {},
      creditObj: {}
    }

    const footerData: VxeTablePropTypes.FooterData = [
      footerRow
    ]

    const printConfig: VxeTablePropTypes.PrintConfig = {
      beforePrintMethod: ({ html }) => {
        const topEl = this.$refs.topElemRef as HTMLDivElement
        const topHtml = topEl ? topEl.outerHTML : ''
        const bottomEl = this.$refs.bottomElemRef as HTMLDivElement
        const bottomHtml = bottomEl ? bottomEl.outerHTML : ''
        return `${topHtml}${html}${bottomHtml}`
      }
    }

    const exportConfig: VxeTablePropTypes.ExportConfig = {
    }

    const columnConfig: VxeTablePropTypes.ColumnConfig = {
      resizable: true
    }

    const editConfig: VxeTablePropTypes.EditConfig<RowVO> = {
      mode: 'cell',
      trigger: 'click',
      showStatus: true
    }

    const tableData: RowVO[] = []

    return {
      tableData,
      formData,
      footerRow,
      footerData,
      printConfig,
      exportConfig,
      columnConfig,
      editConfig
    }
  },
  methods: {
    handleSpitAmount (amount: number, isUnit: boolean) {
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
    },
    handleJoinAmount (obj: AmountObjVO) {
      const strArr = [obj.p9 || 0, obj.p8 || 0, obj.p7 || 0, obj.p6 || 0, obj.p5 || 0, obj.p4 || 0, obj.p3 || 0, obj.p2 || 0, obj.p1 || 0, '.', obj.m2 || 0, obj.m1 || 0]
      return XEUtils.toNumber(strArr.join(''))
    },
    handleData (list: any[]) {
      return list.map(item => {
        return {
          ...item,
          debtorObj: this.handleSpitAmount(item.debtorAmount, false),
          creditObj: this.handleSpitAmount(item.creditAmount, false)
        } as RowVO
      })
    },
    loadList (list: any[]) {
      this.tableData = this.handleData(list)
      this.$nextTick(() => {
        this.updateFooter()
      })
    },
    updateFooter () {
      this.$nextTick(() => {
        const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
        if ($table) {
          const { visibleData } = $table.getTableData()
          let countDebtorAmount = 0
          let countCreditAmount = 0
          visibleData.forEach(row => {
            row.debtorAmount = this.handleJoinAmount(row.debtorObj)
            row.creditAmount = this.handleJoinAmount(row.creditObj)
            countDebtorAmount += row.debtorAmount
            countCreditAmount += row.creditAmount
          })
          this.footerRow.debtorObj = this.handleSpitAmount(countDebtorAmount, true)
          this.footerRow.creditObj = this.handleSpitAmount(countCreditAmount, true)
        }
      })
    },
    editClosedEvent () {
      this.updateFooter()
    },
    async addEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {}
        await $table.insertAt(record, -1)
        this.updateFooter()
      }
    },
    saveEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const { visibleData } = $table.getTableData()
        const rest = visibleData.map(item => {
          return {
            id: item.id,
            summary: item.summary,
            subject: item.subject,
            debtorAmount: this.handleJoinAmount(item.debtorObj),
            creditAmount: this.handleJoinAmount(item.creditObj)
          }
        })
        VxeUI.modal.message({
          content: '保存成功',
          status: 'success'
        })
        this.loadList(rest)
        console.log(rest)
      }
    },
    async insertRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {}
        await $table.insertAt(record, row)
        this.updateFooter()
      }
    },
    async removeRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        await $table.remove(row)
        this.updateFooter()
      }
    }
  },
  mounted () {
    const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
    const $toolbar = this.$refs.toolbarRef as VxeToolbarInstance
    if ($table && $toolbar) {
      $table.connect($toolbar)
    }
  },
  created () {
    const list = [
      { id: 10001, summary: '购买办公用品', subject: '办公费', debtorAmount: 120000, creditAmount: 0 },
      { id: 10002, summary: '购买办公用品', subject: '库存现金', debtorAmount: 0, creditAmount: 120000 }
    ]

    this.loadList(list)
  }
})
</script>
