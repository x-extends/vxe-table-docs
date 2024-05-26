<template>
  <div>
    <vxe-pager
      v-model:current-page="pageVO1.currentPage"
      v-model:page-size="pageVO1.pageSize"
      :total="pageVO1.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']"
      @page-change="pageChangeEvent1">
    </vxe-pager>

    <vxe-pager
      background
      v-model:current-page="pageVO2.currentPage"
      v-model:page-size="pageVO2.pageSize"
      :total="pageVO2.total"
      :layouts="['Home', 'PrevJump', 'PrevPage', 'JumpNumber', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'Total']"
      @page-change="pageChangeEvent2">
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageVO1 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 100
})

const pageVO2 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 100
})

const pageChangeEvent1 = () => {
  console.log(`分页事件1：第 ${pageVO1.currentPage} 页，每页  ${pageVO1.pageSize} 条`)
}

const pageChangeEvent2 = () => {
  console.log(`分页事件2：第 ${pageVO2.currentPage} 页，每页  ${pageVO2.pageSize} 条`)
}
</script>
