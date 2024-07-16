<template>
  <div>
    <CodeLight path="grid/base/dynamicStyle/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、可以通过设置 <ApiLink name="table" prop="cell-style"/>、<ApiLink name="table" prop="header-cell-style"/>、<ApiLink name="table" prop="row-style"/> ...等参数<br>
        </vxe-tip>
        <vxe-tip status="error">
          当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
