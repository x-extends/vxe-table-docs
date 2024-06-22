<template>
  <div>
    <vxe-pager v-model:current-page="pageVO1.currentPage" v-model:page-size="pageVO1.pageSize" :total="pageVO1.total" />
    <vxe-pager v-model:current-page="pageVO2.currentPage" v-model:page-size="pageVO2.pageSize" :total="pageVO2.total" size="medium" />
    <vxe-pager v-model:current-page="pageVO3.currentPage" v-model:page-size="pageVO3.pageSize" :total="pageVO3.total" size="small" />
    <vxe-pager v-model:current-page="pageVO4.currentPage" v-model:page-size="pageVO4.pageSize" :total="pageVO4.total" size="mini"  />
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

const pageVO3 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 8
})

const pageVO4 = reactive({
  currentPage: 1,
  pageSize: 30,
  total: 8
})
</script>
