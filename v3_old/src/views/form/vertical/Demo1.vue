<template>
  <div>
    <vxe-form
      vertical
      ref="formRef"
      :data="formData"
      :rules="formRules"
      :loading="loading"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24">
        <template #default="params">
          <vxe-input v-model="params.data.name" placeholder="请输入" clearable @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}" title-overflow>
        <template #default="params">
          <vxe-select v-model="params.data.sex" placeholder="请选择性别" clearable @change="changeEvent(params)">
            <vxe-option value="1" label="女"></vxe-option>
            <vxe-option value="2" label="男"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="submit" status="primary" content="提交"></vxe-button>
          <vxe-button type="reset" content="重置"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      loading: false,
      formData: {
        name: 'test1',
        nickname: 'Testing',
        sex: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      }
    }
  },
  methods: {
    changeEvent (params) {
      const $form = this.$refs.formRef
      if ($form) {
        $form.updateStatus(params)
      }
    },
    submitEvent () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        VXETable.modal.message({ content: '保存成功', status: 'success' })
      }, 1000)
    },
    resetEvent () {
      VXETable.modal.message({ content: '重置事件', status: 'info' })
    }
  }
}
</script>
