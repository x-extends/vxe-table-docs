<template>
  <div>
    <p>
      <vxe-button @click="loadData(10)">加载10条</vxe-button>
      <vxe-button @click="loadData(500)">加载500条</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadData(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadData(300000)">加载30w条</vxe-button>
      <vxe-button @click="loadData(500000)">加载50w条</vxe-button>
    </p>

    <vxe-list height="240" class="my-list" :loading="loading" :data="list" :scroll-y="{enabled: true}">
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">{{ item.label }}</div>
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
    this.loadData(200)
  },
  methods: {
    async loadData (size) {
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
.my-list {
  border: 1px solid #e8eaec;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
</style>
