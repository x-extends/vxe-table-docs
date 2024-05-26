<template>
  <div>
    <vxe-list class="my-table-list" height="200" :data="list" :scroll-y="{enabled: true, gt: 0, sItem: '.my-tr'}">
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
  loadData(5000)
})
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
