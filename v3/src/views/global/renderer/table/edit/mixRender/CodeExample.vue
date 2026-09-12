<template>
  <div>
    <CodeLight path="global/renderer/table/edit/mixRender/Demo1" :extra-imports="['./DemoEditMixInput.vue', './demo1.table.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="渲染器组合使用">
          标准 <ApiLink name="grid" prop="edit-render" /> 编辑表格渲染器和查看表格 <ApiLink name="grid" prop="cell-render" /> 渲染器可以单独使用，也可以灵活搭配组合使用，各自负责对应的功能；例如一个用于渲染器编辑状态单元格，一个用于渲染查看状态单元格
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
