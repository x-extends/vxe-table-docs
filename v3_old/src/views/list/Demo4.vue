<template>
  <div>
    <vxe-list class="my-ul-list" height="200" :data="list" :scroll-y="{enabled: true, gt: 0, sItem: 'li'}">
      <template #default="{ items }">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <img src="https://vxeui.com/resource/img/546.gif" height="28">
            <span>{{ item.label }}</span>
          </li>
        </ul>
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
    this.loadData(1000)
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

<style scoped>
.my-ul-list {
  border: 1px solid #e8eaec;
}
.my-ul-list li {
  height: 40px;
}
</style>
