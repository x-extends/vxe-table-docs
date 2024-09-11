<template>
  <div>
    <vxe-pager :current-page.sync="pageVO1.currentPage" :page-size.sync="pageVO1.pageSize" :total="pageVO1.total" />
    <vxe-pager :current-page.sync="pageVO2.currentPage" :page-size.sync="pageVO2.pageSize" :total="pageVO2.total" size="medium" />
    <vxe-pager :current-page.sync="pageVO3.currentPage" :page-size.sync="pageVO3.pageSize" :total="pageVO3.total" size="small" />
    <vxe-pager :current-page.sync="pageVO4.currentPage" :page-size.sync="pageVO4.pageSize" :total="pageVO4.total" size="mini"  />
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageVO1: {
        currentPage: 1,
        pageSize: 30,
        total: 8
      },
      pageVO2: {
        currentPage: 1,
        pageSize: 30,
        total: 8
      },
      pageVO3: {
        currentPage: 1,
        pageSize: 30,
        total: 8
      },
      pageVO4: {
        currentPage: 1,
        pageSize: 30,
        total: 8
      }
    }
  }
}
</script>
