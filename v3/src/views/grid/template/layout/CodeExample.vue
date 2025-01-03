<template>
  <div>
    <CodeLight path="grid/template/layout/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义插槽模板">
          使用自定义插槽模板
        </vxe-tip>
        <vxe-tip status="success">
          <div>
            <ApiLink name="grid" prop="form"/>：自定义表单模板<br>
            <ApiLink name="grid" prop="toolbar"/>：自定义工具栏模板<br>
            <ApiLink name="grid" prop="top"/>：自定义顶部模板<br>
            <ApiLink name="grid" prop="bottom"/>：自定义底部模板<br>
            <ApiLink name="grid" prop="left"/>：自定义左边模板<br>
            <ApiLink name="grid" prop="right"/>：自定义右边模板<br>
            <ApiLink name="grid" prop="asideLeft"/>：自定义左侧模板<br>
            <ApiLink name="grid" prop="asideRight"/>：自定义右侧模板<br>
            <ApiLink name="grid" prop="pager"/>：自定义分页模板<br>
          </div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/layout/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义布局，非常灵活任意组合布局，想怎么拼接就怎么拼接
        </vxe-tip>
        <vxe-tip status="error">
          自定义布局由 3 部分组成的二维数组，[[头部], [主体+支持侧边栏], [尾部]]
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/layout/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          去掉左右两侧
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
