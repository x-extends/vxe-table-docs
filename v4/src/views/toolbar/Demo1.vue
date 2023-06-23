<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button content="默认尺寸"></vxe-button>
        <vxe-button content="下拉按钮">
          <template #dropdowns>
            <vxe-button type="text" content="按钮1"></vxe-button>
            <vxe-button type="text" content="按钮2"></vxe-button>
            <vxe-button type="text" content="按钮3"></vxe-button>
          </template>
        </vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-toolbar size="medium">
      <template #buttons>
        <vxe-button content="中等尺寸">中等尺寸</vxe-button>
        <vxe-button content="下拉按钮">
          <template #dropdowns>
            <vxe-button type="text" content="按钮1"></vxe-button>
            <vxe-button type="text" content="按钮2"></vxe-button>
            <vxe-button type="text" content="按钮3"></vxe-button>
          </template>
        </vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-toolbar size="small">
      <template #buttons>
        <vxe-button content="小型尺寸">小型尺寸</vxe-button>
        <vxe-button content="下拉按钮">
          <template #dropdowns>
            <vxe-button type="text" content="按钮1"></vxe-button>
            <vxe-button type="text" content="按钮2"></vxe-button>
            <vxe-button type="text" content="按钮3"></vxe-button>
          </template>
        </vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-toolbar size="mini">
      <template #buttons>
        <vxe-button content="超小尺寸"></vxe-button>
        <vxe-button content="下拉按钮">
          <template #dropdowns>
            <vxe-button type="text" content="按钮1"></vxe-button>
            <vxe-button type="text" content="按钮2"></vxe-button>
            <vxe-button type="text" content="按钮3"></vxe-button>
          </template>
        </vxe-button>
      </template>
    </vxe-toolbar>
  </div>
</template>
