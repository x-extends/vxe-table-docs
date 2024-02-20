<template>
  <div>
    <vxe-pager
      v-model:current-page="pageVO1.currentPage"
      v-model:page-size="pageVO1.pageSize"
      :total="pageVO1.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>

    <vxe-pager
      background
      v-model:current-page="pageVO2.currentPage"
      v-model:page-size="pageVO2.pageSize"
      :total="pageVO2.total"
      :layouts="['Home', 'PrevJump', 'PrevPage', 'JumpNumber', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageVO1 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 8
})

const pageVO2 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 8
})
</script>
