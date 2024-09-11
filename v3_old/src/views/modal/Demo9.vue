<template>
  <div>
    <vxe-button content="记忆功能的窗口" @click="val1 = true"></vxe-button>
    <vxe-modal v-model="val1" title="记忆功能的窗口" width="600" height="400" show-zoom resize remember>
      <template #default>
        <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="60">
          <vxe-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'vxe-icon-question-circle-fill'}"></vxe-form-item>
          <vxe-form-item title="名称" field="name" span="12">
            <template #default>
              <vxe-input v-model="formData.name" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="昵称" field="nickname" span="12">
            <template #default>
              <vxe-input v-model="formData.nickname" placeholder="请输入昵称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="性别" field="sex" span="12">
            <vxe-select v-model="formData.sex" transfer>
              <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
            </vxe-select>
          </vxe-form-item>
          <vxe-form-item title="年龄" field="age" span="12">
            <template #default>
              <vxe-input v-model="formData.age" type="number" placeholder="请输入年龄"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'vxe-icon-question-circle-fill'}"></vxe-form-item>
          <vxe-form-item title="地址" field="address" span="24">
            <template #default>
              <vxe-textarea v-model="formData.address"></vxe-textarea>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" span="24">
            <template #default>
              <vxe-button type="submit" status="primary">提交</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false,
      formData: {
        name: '',
        nickname: '',
        sex: '',
        age: 26,
        address: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      sexList: [
        { label: '', value: '' },
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }
  }
}
</script>
