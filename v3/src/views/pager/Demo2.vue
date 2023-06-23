<template>
  <div>
    <vxe-pager
      :current-page.sync="pageVO1.currentPage"
      :page-size.sync="pageVO1.pageSize"
      :total="pageVO1.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>

    <vxe-pager
      background
      :current-page.sync="pageVO2.currentPage"
      :page-size.sync="pageVO2.pageSize"
      :total="pageVO2.total"
      :layouts="['PrevJump', 'PrevPage', 'JumpNumber', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
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
      }
    }
  }
}
</script>
