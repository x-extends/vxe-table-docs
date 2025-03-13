<template>
  <div>
    <CodeLight path="grid/base/style/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          行的样色、单元格样式，表头的样式、表尾的样式、全部都可以完全自定义，通过设置 <ApiLink name="grid" prop="cell-class-name"/>、<ApiLink name="grid" prop="header-cell-class-name"/>、<ApiLink name="grid" prop="row-class-name"/> ...等参数<br>
          <span class="red">（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</span>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/style/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="cell-click"/> 事件点击改变颜色</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
