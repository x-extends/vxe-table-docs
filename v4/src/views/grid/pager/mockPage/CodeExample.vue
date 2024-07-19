<template>
  <div>
    <CodeLight path="grid/pager/mockPage/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="集成分页">
          通过设置 <ApiLink name="grid" prop="pager-config"/> 开启表格分页
        </vxe-tip>
        <vxe-tip status="error">
          如果是按需加载，分页功能需要导入 Pager 组件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
