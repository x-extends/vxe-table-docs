<template>
  <div>
    <vxe-list class="my-list" height="200" :data="list" :scroll-y="{enabled: true, gt: 0}">
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" height="28">
          <span>{{ item.label }}</span>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { VxeUI } from 'vxe-table'

interface ItemVO {
  id: number
  label: string
}

const loading = ref(false)
const list = ref<ItemVO[]>([])

// 模拟后台
const mockList: ItemVO[] = []
const getList = (size: number): Promise<ItemVO[]> => {
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

const loadData = async (size: number) => {
  loading.value = true
  list.value = await getList(size)
  loading.value = false
  const startTime = Date.now()
  await nextTick()
  await VxeUI.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
}

// 初始化
onMounted(async () => {
  loadData(500)
})
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
