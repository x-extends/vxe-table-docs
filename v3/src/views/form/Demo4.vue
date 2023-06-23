<template>
  <div>
    <vxe-form
      :data="formData"
      :items="formItems"
      titleColon
      @submit="submitEvent"
      @reset="resetEvent">
      <template #myregion="{ data }">
        <vxe-input v-model="data.region" placeholder="自定义插槽模板"></vxe-input>
      </template>
    </vxe-form>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      formData: {
        name: '',
        nickname: '',
        sex: '0',
        role: '',
        age: 22,
        val1: [],
        val2: false,
        val3: '',
        flag: false,
        region: ''
      },
      formItems: [
        {
          title: '左侧',
          span: 12,
          children: [
            { field: 'name', title: '名称', span: 8, itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },
            { field: 'sex', title: '性别', span: 8, itemRender: { name: '$select', options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], props: { placeholder: '请选择性别' } } },
            { field: 'role', title: '角色', span: 8, itemRender: { name: '$input', props: { placeholder: '请输入角色' } } },
            { field: 'age', title: '年龄', span: 24, itemRender: { name: '$input', props: { type: 'number', placeholder: '请输入年龄' } } },
            { field: 'val1', title: '复选框-组', span: 12, itemRender: { name: '$checkbox', options: [{ label: '爬山', value: '11' }, { label: '健身', value: '22' }] } },
            { field: 'val2', title: '复选框', span: 12, itemRender: { name: '$checkbox' } },
            { field: 'val3', title: '单选框', span: 12, itemRender: { name: '$radio', options: [{ label: '是', value: 'Y' }, { label: '否', value: 'N' }] } },
            { field: 'flag', title: '开关', span: 24, itemRender: { name: '$switch', props: { openLabel: '是', closeLabel: '否' } } },
            { field: 'region', title: '地区', span: 24, itemRender: {}, slots: { default: 'myregion' } }
          ]
        },
        {
          title: '右侧',
          span: 12,
          children: [
            { field: 'nickname', title: '昵称', span: 24, itemRender: { name: '$input', props: { placeholder: '请输入昵称' } } }
          ]
        },
        {
          align: 'center',
          span: 24,
          itemRender: {
            name: '$buttons',
            children: [
              { props: { type: 'submit', content: '配置式表单', status: 'primary' } },
              { props: { type: 'reset', content: '重置' } }
            ]
          }
        }
      ]
    }
  },
  methods: {
    submitEvent () {
      VXETable.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VXETable.modal.message({ content: '重置事件', status: 'info' })
    }
  }
}
</script>
