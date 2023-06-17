<template>
  <div>
    <p>
      <vxe-button type="text">默认尺寸</vxe-button>
      <vxe-button type="text" size="medium">中等尺寸</vxe-button>
      <vxe-button type="text" size="small">小型尺寸</vxe-button>
      <vxe-button type="text" size="mini">超小尺寸</vxe-button>
    </p>
    <p>
      <vxe-button content="默认尺寸"></vxe-button>
      <vxe-button size="medium" content="中等尺寸"></vxe-button>
      <vxe-button size="small" content="小型尺寸"></vxe-button>
      <vxe-button size="mini" content="超小尺寸"></vxe-button>
    </p>
    <p>
      <vxe-button transfer>
        <template #default>默认尺寸</template>
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="medium" transfer>
        <template #default>中等尺寸</template>
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="small" transfer>
        <template #default>小型尺寸</template>
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
      <vxe-button size="mini" transfer>
        <template #default>超小尺寸</template>
        <template #dropdowns>
          <vxe-button type="text" content="下拉按钮1"></vxe-button>
          <vxe-button type="text" content="下拉按钮3"></vxe-button>
        </template>
      </vxe-button>
    </p>
  </div>
</template>
