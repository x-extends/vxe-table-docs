<template>
  <div>
    <vxe-notice-bar loop content="温馨提示：当使用服务端保存和恢复时，只要确保数据结构式正确的，就可以实现多种方式数据保存，比如：调用后端接口、使用 localStorage、使用 indexedDB 等任意方式"></vxe-notice-bar>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeTableDefines } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  address: string
}

// 模拟查询接口
const findCustomSetting = (id: string) => {
  return new Promise<VxeTableDefines.CustomStoreData>(resolve => {
    setTimeout(() => {
      try {
        if (sessionStorage.getItem(id)) {
          const storeData: VxeTableDefines.CustomStoreData = JSON.parse(sessionStorage.getItem(id) || '')
          VxeUI.modal.message({
            status: 'success',
            content: '异步还原用户个性化数据成功'
          })
          resolve(storeData)
        } else {
          resolve({})
        }
      } catch (e) {
        resolve({})
      }
    }, 500)
  })
}

// 模拟保存接口
const saveCustomSetting = (id: string, storeData: VxeTableDefines.CustomStoreData) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(storeData)
      sessionStorage.setItem(id, JSON.stringify(storeData))
      VxeUI.modal.message({
        status: 'success',
        content: '保存用户个性化数据成功'
      })
      resolve()
    }, 200)
  })
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      id: 'myCustomUpdate1',
      rowConfig: {
        keyField: 'id'
      },
      toolbarConfig: {
        custom: true
      },
      customConfig: {
        storage: true,
        restoreStore ({ id }) {
          // 模拟后端接口，实现服务端还原
          return findCustomSetting(id)
        },
        updateStore ({ id, storeData }) {
          // 模拟后端接口，实现服务端保存
          return saveCustomSetting(id, storeData)
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300 },
        { field: 'role', title: 'Role', width: 140 },
        { field: 'sex', title: 'Sex', width: 200 },
        { field: 'age', title: 'Age', width: 200 },
        { field: 'attr1', title: 'Attr1', width: 150 },
        { field: 'attr2', title: 'Attr2', width: 200 },
        { field: 'attr3', title: 'Attr3', width: 250 },
        { field: 'attr4', title: 'Attr3', width: 300 },
        { field: 'attr5', title: 'Attr5', width: 160 },
        { field: 'attr6', title: 'Attr6', width: 260 },
        { field: 'address', title: 'Address', width: 180 }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, attr1: '11', attr2: '12', attr3: '13', attr4: '14', attr5: '15', attr6: '16', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, attr1: '21', attr2: '22', attr3: '23', attr4: '24', attr5: '25', attr6: '26', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, attr1: '31', attr2: '32', attr3: '33', attr4: '34', attr5: '35', attr6: '36', address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, attr1: '41', attr2: '42', attr3: '43', attr4: '44', attr5: '45', attr6: '46', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
