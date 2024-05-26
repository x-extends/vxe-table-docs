<template>
  <div>
    <vxe-toolbar ref="toolbarRef" print></vxe-toolbar>

    <vxe-table
      border
      show-footer
      ref="tableRef"
      height="800"
      align="center"
      :loading="loading"
      :print-config="{}"
      :column-config="{resizable: true, width: 90}"
      :merge-cells="mergeCells"
      :merge-footer-items="mergeFooterItems"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-column field="a" title="名称"></vxe-column>
      <vxe-colgroup field="b" title="教育经费投入">
        <vxe-column field="c" title="总计"></vxe-column>
        <vxe-colgroup title="基本投入">
          <vxe-colgroup title="合计">
            <vxe-column field="d" title="合计"></vxe-column>
            <vxe-column field="e" title="比上年增长"></vxe-column>
          </vxe-colgroup>
          <vxe-column field="f" title="人员经费"></vxe-column>
          <vxe-column field="g" title="公用经费"></vxe-column>
          <vxe-colgroup title="其他经费">
            <vxe-column field="w" title="合计"></vxe-column>
            <vxe-colgroup title="其中">
              <vxe-column field="h" title="标准化建设"></vxe-column>
              <vxe-column field="i" title="信息化建设"></vxe-column>
            </vxe-colgroup>
          </vxe-colgroup>
        </vxe-colgroup>
        <vxe-column field="j" title="附加信息"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="其他投入">
        <vxe-colgroup title="投入">
          <vxe-column field="k" title="合计"></vxe-column>
          <vxe-colgroup title="其中">
            <vxe-column field="l" title="人员经费"></vxe-column>
            <vxe-column field="m" title="教育经费"></vxe-column>
            <vxe-column field="n" title="项目经费"></vxe-column>
            <vxe-column field="o" title="基建投入"></vxe-column>
          </vxe-colgroup>
        </vxe-colgroup>
        <vxe-colgroup title="社会捐款">
          <vxe-column field="p" title="合计"></vxe-column>
          <vxe-colgroup title="其中">
            <vxe-column field="q" title="项目经费"></vxe-column>
            <vxe-column field="r" title="基建投入"></vxe-column>
          </vxe-colgroup>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="补充资料">
        <vxe-colgroup title="信息化建设">
          <vxe-column field="s" title="本年投入金额"></vxe-column>
          <vxe-colgroup title="其中">
            <vxe-column field="t" title="合计"></vxe-column>
            <vxe-column field="u" title="建设数"></vxe-column>
          </vxe-colgroup>
          <vxe-column field="v" title="备注"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTablePropTypes, VxeTableInstance, VxeToolbarInstance } from 'vxe-table'

interface RowVO {
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
  m: string
  n: string
  o: string
  p: string
  q: string
  r: string
  s: string
  t: string
  u: string
  v: string
  w: string
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])
const mergeCells = ref<VxeTablePropTypes.MergeCells<RowVO>>([])
const mergeFooterItems = ref<VxeTablePropTypes.MergeFooterItems<RowVO>>([])

const tableRef = ref<VxeTableInstance<RowVO>>()
const toolbarRef = ref<VxeToolbarInstance>()

const handleMerge = () => {
  // 根据行数据计算合并规则
  mergeCells.value = [
    { row: 0, col: 0, rowspan: 2, colspan: 1 },
    { row: 0, col: 1, rowspan: 2, colspan: 1 },
    { row: 0, col: 2, rowspan: 2, colspan: 1 },
    { row: 0, col: 3, rowspan: 2, colspan: 1 },
    { row: 0, col: 4, rowspan: 2, colspan: 1 },
    { row: 0, col: 5, rowspan: 2, colspan: 1 },
    { row: 0, col: 6, rowspan: 2, colspan: 1 },
    { row: 0, col: 7, rowspan: 2, colspan: 1 },
    { row: 0, col: 8, rowspan: 2, colspan: 1 },
    { row: 0, col: 9, rowspan: 2, colspan: 1 },
    { row: 0, col: 15, rowspan: 10, colspan: 1 },
    { row: 0, col: 16, rowspan: 10, colspan: 1 },
    { row: 0, col: 18, rowspan: 2, colspan: 1 },
    { row: 0, col: 19, rowspan: 2, colspan: 1 },
    { row: 0, col: 20, rowspan: 2, colspan: 1 },
    { row: 0, col: 21, rowspan: 2, colspan: 1 },
    { row: 1, col: 11, rowspan: 1, colspan: 4 },

    { row: 2, col: 0, rowspan: 4, colspan: 2 },
    { row: 2, col: 2, rowspan: 4, colspan: 1 },
    { row: 2, col: 3, rowspan: 4, colspan: 1 },
    { row: 2, col: 6, rowspan: 4, colspan: 1 },
    { row: 2, col: 7, rowspan: 4, colspan: 1 },
    { row: 2, col: 8, rowspan: 4, colspan: 1 },
    { row: 2, col: 9, rowspan: 4, colspan: 1 },
    { row: 2, col: 17, rowspan: 4, colspan: 1 },
    { row: 2, col: 18, rowspan: 3, colspan: 1 },
    { row: 2, col: 19, rowspan: 3, colspan: 1 },
    { row: 2, col: 20, rowspan: 3, colspan: 2 },
    { row: 3, col: 4, rowspan: 2, colspan: 2 },
    { row: 4, col: 11, rowspan: 2, colspan: 4 },
    { row: 5, col: 18, rowspan: 1, colspan: 4 },

    { row: 6, col: 0, rowspan: 3, colspan: 1 },
    { row: 6, col: 1, rowspan: 3, colspan: 1 },
    { row: 6, col: 4, rowspan: 3, colspan: 1 },
    { row: 6, col: 5, rowspan: 3, colspan: 1 },
    { row: 6, col: 6, rowspan: 3, colspan: 1 },
    { row: 6, col: 7, rowspan: 3, colspan: 1 },
    { row: 6, col: 8, rowspan: 3, colspan: 1 },
    { row: 6, col: 9, rowspan: 3, colspan: 1 },
    { row: 6, col: 18, rowspan: 3, colspan: 1 },
    { row: 6, col: 19, rowspan: 3, colspan: 1 },
    { row: 6, col: 20, rowspan: 3, colspan: 1 },
    { row: 6, col: 21, rowspan: 3, colspan: 1 },
    { row: 6, col: 2, rowspan: 1, colspan: 2 },
    { row: 8, col: 2, rowspan: 1, colspan: 2 },
    { row: 9, col: 0, rowspan: 1, colspan: 15 },

    { row: 11, col: 5, rowspan: 4, colspan: 12 }
  ]
  // 根据行数据计算表尾合并规则
  mergeFooterItems.value = [
    { row: 0, col: 1, rowspan: 1, colspan: 2 },
    { row: 0, col: 6, rowspan: 1, colspan: 2 },
    { row: 0, col: 14, rowspan: 2, colspan: 5 },
    { row: 1, col: 4, rowspan: 1, colspan: 8 }
  ]
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns }) => {
  return [
    columns.map((column, index) => index),
    columns.map((column, index) => 1000 + index)
  ]
}

loading.value = true
setTimeout(() => {
  const list: RowVO[] = []
  for (let index = 0; index < 15; index++) {
    list.push({
      a: 'a' + index,
      b: 'b' + index,
      c: 'c' + index,
      d: 'd' + index,
      e: 'e' + index,
      f: 'f' + index,
      g: 'g' + index,
      h: 'h' + index,
      i: 'i' + index,
      j: 'j' + index,
      k: 'k' + index,
      l: 'l' + index,
      m: 'm' + index,
      n: 'n' + index,
      o: 'o' + index,
      p: 'p' + index,
      q: 'q' + index,
      r: 'r' + index,
      s: 's' + index,
      t: 't' + index,
      u: 'u' + index,
      v: 'v' + index,
      w: 'w' + index
    })
  }
  loading.value = false
  tableData.value = list
  handleMerge()
}, 100)

nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
