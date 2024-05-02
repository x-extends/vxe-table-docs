<template>
  <div>
    <p>
      <vxe-button-group>
        <vxe-button content="按钮1"></vxe-button>
        <vxe-button content="按钮2"></vxe-button>
        <vxe-button content="按钮3"></vxe-button>
      </vxe-button-group>
      <vxe-button-group status="primary">
        <vxe-button content="按钮1"></vxe-button>
        <vxe-button content="按钮2"></vxe-button>
        <vxe-button content="按钮3"></vxe-button>
      </vxe-button-group>
      <vxe-button-group round>
        <vxe-button content="按钮1" status="warning"></vxe-button>
        <vxe-button content="按钮2" status="success"></vxe-button>
        <vxe-button content="按钮3" status="danger"></vxe-button>
      </vxe-button-group>
    </p>

    <p>
      <vxe-button-group mode="text">
        <vxe-button content="文本按钮1"></vxe-button>
        <vxe-button content="文本按钮2"></vxe-button>
        <vxe-button content="文本按钮3"></vxe-button>
      </vxe-button-group>
      <vxe-button-group mode="text" status="primary">
        <vxe-button content="文本按钮1"></vxe-button>
        <vxe-button content="文本按钮2"></vxe-button>
        <vxe-button content="文本按钮3"></vxe-button>
      </vxe-button-group>
      <vxe-button-group mode="text">
        <vxe-button content="文本按钮1" status="warning"></vxe-button>
        <vxe-button content="文本按钮2" status="success"></vxe-button>
        <vxe-button content="文本按钮3" status="danger"></vxe-button>
      </vxe-button-group>
    </p>

    <p>
      <vxe-button-group mode="text" :options="btnList"></vxe-button-group>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const btnList = ref([
  { content: '按钮1', status: 'warning', name: 1 },
  { content: '按钮1', status: 'success', name: 2 },
  { content: '按钮1', status: 'danger', name: 3 }
])
</script>
