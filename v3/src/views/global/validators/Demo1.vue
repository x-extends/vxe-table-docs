<template>
  <div>
    <vxe-form v-bind="formOptions" @submit="submitEvent">
      <template #active>
        <vxe-button type="submit" status="primary">提交</vxe-button>
        <vxe-button type="reset">重置</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      formOptions: {
        titleColon: true,
        titleAlign: 'right',
        titleWidth: 100,
        data: {
          name: '',
          mobile: '',
          email: ''
        },
        items: [
          { title: '用户名', field: 'name', itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },
          { title: '手机号', field: 'mobile', itemRender: { name: '$input' } },
          { title: '邮箱', field: 'email', itemRender: { name: '$input' } },
          { slots: { default: 'active' } }
        ],
        rules: {
          mobile: [
            { required: true, validator: 'mobile' }
          ],
          email: [
            { required: true, validator: 'email' }
          ]
        }
      }
    }
  },
  methods: {
    submitEvent () {
      VXETable.modal.message({ content: '保存成功', status: 'success' })
    }
  }
}
</script>
