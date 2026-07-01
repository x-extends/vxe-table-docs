<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents">
      <template #customDefault>
        <div class="my-table-multi-template">
          <div class="my-table-multi-template-header">
            <vxe-select v-model="selectTmplCode" :options="templateList" :option-props="{label: 'name', value: 'code'}" @change="changeTemplateEvent"></vxe-select>
          </div>
          <div class="my-table-multi-template-body">
            <table class="my-table-multi-template-table">
              <thead>
                <tr>
                  <th>标题</th>
                  <th>是否显示</th>
                  <th>冻结列</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(column, i) in tableColumnFullList" :key="i">
                  <td>{{ column.title }}</td>
                  <td>
                    <vxe-checkbox v-model="column.visible"></vxe-checkbox>
                  </td>
                  <td>
                    <vxe-radio-group v-model="column.fixed">
                      <vxe-radio-button checked-value="left" content="左"></vxe-radio-button>
                      <vxe-radio-button checked-value="" content="无"></vxe-radio-button>
                      <vxe-radio-button checked-value="right" content="右"></vxe-radio-button>
                    </vxe-radio-group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>

      <template #customFooter>
        <vxe-button status="primary" @click="saveCustomEvent">确认</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeTableDefines, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  attr1: string
  attr2: string
  address: string
}

interface CustomTemplateVO {
  name: string
  code: string
  customData: VxeTableDefines.CustomStoreData
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const selectTmplCode = ref('1')
const templateList = ref<CustomTemplateVO[]>([
  {
    name: '模板1',
    code: '1',
    customData: {
      visibleData: {
        role: false,
        age: false
      }
    }
  },
  {
    name: '模板2',
    code: '2',
    customData: {
      visibleData: {
        sex: false,
        age: false,
        attr1: false,
        attr2: false
      }
    }
  },
  {
    name: '模板3',
    code: '3',
    customData: {
      visibleData: {
        attr1: false,
        attr2: false
      }
    }
  }
])

const tableColumnFullList = ref<VxeTableDefines.ColumnInfo[]>([])

const selectTempalte = computed(() => {
  return templateList.value.find(item => item.code === selectTmplCode.value)
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  id: 'myTableMultiTmpl',
  rowConfig: {
    keyField: 'id'
  },
  customConfig: {
    mode: 'modal',
    storage: true,
    modalOptions: {
      title: '列配置',
      width: 600,
      height: 600,
      resize: true
    },
    slots: {
      default: 'customDefault',
      footer: 'customFooter'
    }
  },
  toolbarConfig: {
    custom: true
  },
  columns: [
    { field: 'seq', type: 'seq', title: 'Seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300 },
    { field: 'role', title: 'Role', width: 200 },
    { field: 'sex', title: 'Sex', width: 100 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'attr1', title: 'Attr1', width: 200 },
    { field: 'attr2', title: 'Attr2', width: 300 },
    { field: 'address', title: 'Address', minWidth: 200 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, attr1: '11', attr2: '111', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, attr1: '22', attr2: '2222', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, attr1: '33', attr2: '3333', address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, attr1: '44', attr2: '444', address: 'Shanghai' }
  ]
})

const changeTemplateEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const selectTmplItem = selectTempalte.value
    if (selectTmplItem) {
      await $grid.setCustomStoreData(selectTmplItem.customData)
    }
  }
}

const saveCustomEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.saveCustom(true) // 必须传 true 根据当前数据状态来保存个性化数据
    $grid.closeCustom()
  }
}

const gridEvents: VxeGridListeners = {
  customOpen () {
    const $grid = gridRef.value
    if ($grid) {
      const { fullColumn } = $grid.getTableColumn()
      tableColumnFullList.value = fullColumn
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table-multi-template {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
}
.my-table-multi-template-header {
  flex-shrink: 0;
}
.my-table-multi-template-body {
  flex-grow: 1;
  overflow: auto;
}
.my-table-multi-template-table {
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 8px;
    border: 1px solid #dbdee2;
  }
}
</style>
