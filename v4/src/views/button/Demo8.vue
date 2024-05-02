<template>
  <div>
    <vxe-button transfer>
      <template #default>默认颜色</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button status="primary" transfer>
      <template #default>主要颜色</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2" status="primary"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button status="success" transfer>
      <template #default>成功颜色</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2" status="success"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button status="info" transfer>
      <template #default>信息颜色</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2" status="my-purple"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button status="warning" transfer placement="top">
      <template #default>固定向上</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2" status="warning"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
    <vxe-button status="danger" transfer placement="bottom">
      <template #default>固定向下</template>
      <template #dropdowns>
        <vxe-button type="text" content="下拉按钮1"></vxe-button>
        <vxe-button type="text" content="下拉按钮2" status="danger"></vxe-button>
        <vxe-button type="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
  </div>
</template>
