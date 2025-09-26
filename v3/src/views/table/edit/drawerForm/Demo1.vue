<template>
  <div>
    <p>
      <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
      <vxe-notice-bar loop content="温馨提示：当表单很多且不适用直接在表格中编辑时，可以实现弹出抽屉编辑"></vxe-notice-bar>
    </p>

    <vxe-table
      border
      show-overflow
      height="400"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column title="操作" width="100">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" icon="vxe-icon-edit" @click="editRow(row)">编辑</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <vxe-drawer
      destroy-on-close
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showEditPopup"
      :title="selectRow ? '编辑' : '新增'"
      width="60vw"
      :loading="loading"
      :confirm-closable="false"
      @confirm="confirmEvent">
      <vxe-form ref="formRef" v-bind="formOptions"></vxe-form>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps, VxeFormItemPropTypes, VxeSelectProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number | null
  name: string
  nickname: string
  role: string
  sex: string
  age: number | null
  address: string
}

const defaultData: RowVO = {
  id: null,
  name: '',
  nickname: '',
  role: '',
  sex: '',
  age: null,
  address: ''
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: '', role: 'Develop', sex: '', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', nickname: 'Test 2', role: 'Test', sex: '', age: null, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', nickname: '', role: 'PM', sex: 'Man', age: null, address: 'Shanghai' },
      { id: 10004, name: 'Test4', nickname: 'Test 4', role: 'Designer', sex: '', age: 24, address: 'Shanghai' }
    ]

    const sexItemRender: VxeFormItemPropTypes.ItemRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const formOptions: VxeFormProps<RowVO> = {
      titleWidth: 'auto',
      titleAlign: 'right',
      titleColon: true,
      data: XEUtils.clone(defaultData, true),
      rules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        age: [
          { required: true, message: '请输入年龄' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeNumberInput' } },
        { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 2, maxRows: 4 } } } }
      ]
    }

    return {
      tableData,
      sexItemRender,
      formOptions,
      showEditPopup: false,
      loading: false,
      selectRow: undefined as RowVO | undefined
    }
  },
  methods: {
    addEvent () {
      this.selectRow = undefined
      this.formOptions.data = XEUtils.clone(defaultData, true)
      this.showEditPopup = true
    },
    editRow  (row: RowVO) {
      this.selectRow = row
      this.formOptions.data = Object.assign(XEUtils.clone(defaultData, true), row)
      this.showEditPopup = true
    },
    async confirmEvent  () {
      const $form = this.$refs.formRef as VxeFormInstance<RowVO>
      if ($form) {
        const errMap = await $form.validate()
        if (!errMap) {
          this.showEditPopup = false
          VxeUI.modal.message({ content: '保存成功', status: 'success' })
        }
      }
    }
  }
})
</script>
