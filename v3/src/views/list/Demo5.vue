<template>
  <div>
    <vxe-list class="my-table-list" height="200" :data="list" :scroll-y="{enabled: true, gt: 60, sItem: '.my-tr'}">
      <template #default="{ items }">
        <table>
          <tbody>
            <tr class="my-tr" v-for="item in items" :key="item.id">
              <td>{{ item.label }} - 列1</td>
              <td>{{ item.label }} - 列2</td>
              <td>{{ item.label }} - 列3</td>
            </tr>
          </tbody>
        </table>
      </template>
    </vxe-list>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

// 模拟后台
const mockList = []
function getList (size) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            label: `row_${index}`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

export default {
  data () {
    return {
      loading: false,
      list: []
    }
  },
  mounted () {
    this.loadData(5000)
  },
  methods: {
    async loadData  (size) {
      this.loading = true
      this.list = await getList(size)
      this.loading = false
      const startTime = Date.now()
      await this.$nextTick()
      await VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table-list {
  border: 1px solid #e8eaec;
}
.my-table-list table {
  width: 100%;
  text-align: center;
}
.my-table-list .my-tr {
  height: 32px;
}
.my-table-list .my-tr:hover {
  background-color: #f5f7fa;
}
.my-table-list td {
  border-right: 1px solid #e8eaec;
}
</style>
