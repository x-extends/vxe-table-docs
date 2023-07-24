<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="500"
      :column-config="{resizable: true}"
      :scroll-x="{enabled: true, gt: 0}"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" title="序号" width="100"></vxe-column>
      <vxe-column field="name1" title="Name" width="200" sortable></vxe-column>
      <vxe-column field="name2" title="Name" width="100" sortable></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-column field="name" title="Name" width="100" sortable></vxe-column>
        <vxe-column field="age" title="Age" width="200"></vxe-column>
        <vxe-column field="sex" title="Sex" width="100"></vxe-column>
        <vxe-column field="sex2" title="Sex" width="200"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="updateTime1" title="UpdateTime" width="200"></vxe-column>
      <vxe-colgroup title="详细信息">
        <vxe-colgroup title="分组">
          <vxe-column field="rate" title="Rate" width="150"></vxe-column>
          <vxe-column field="region" title="Region" width="200"></vxe-column>
          <vxe-column field="region1" title="Region" width="200"></vxe-column>
          <vxe-column field="region2" title="Region" width="150"></vxe-column>
          <vxe-column field="region3" title="Region" width="200"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="其他">
          <vxe-column field="time" title="Time" width="200" sortable></vxe-column>
          <vxe-column field="address" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address1" title="Address" width="300" show-overflow></vxe-column>
          <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address3" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address4" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address5" title="Address" width="300" show-overflow></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="详细信息2">
        <vxe-colgroup title="分组">
          <vxe-column field="rate2" title="Rate" width="150"></vxe-column>
          <vxe-column field="region22" title="Region" width="200"></vxe-column>
          <vxe-column field="region21" title="Region" width="200"></vxe-column>
          <vxe-column field="region22" title="Region" width="150"></vxe-column>
          <vxe-column field="region23" title="Region" width="200"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="其他2">
          <vxe-column field="time22" title="Time" width="200" sortable></vxe-column>
          <vxe-column field="address2" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address21" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address22" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address23" title="Address" width="100" show-overflow></vxe-column>
          <vxe-column field="address24" title="Address" width="150" show-overflow></vxe-column>
          <vxe-column field="address25" title="Address" width="100" show-overflow></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-column field="updateTime" title="UpdateTime" width="100"></vxe-column>
      <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  num: number
  age: number
  num2: number
  rate: number
  sex: string
  address: string
  address23: string
  address25: string
}

const tableData = ref<RowVO[]>([])

const mockList = (size: number) => {
  return new Promise<RowVO[]>(resolve => {
    const list: RowVO[] = []
    for (let index = 0; index < size; index++) {
      list.push({
        id: index,
        name: `名称${index}`,
        sex: '0',
        num: 123,
        age: 18,
        num2: 234,
        rate: 3,
        address: 'shenzhen',
        address23: `address23 ${index}`,
        address25: `address25 ${index}`
      })
    }
    resolve(list)
  })
}

const loading = ref(false)

loading.value = true
mockList(1000).then(data => {
  loading.value = false
  tableData.value = data
})
</script>
