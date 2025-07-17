<template>
  <div>
    <CodeLight path="global/interceptor/table/base/Demo1" :extraImports="['./demo1.table.interceptor.ts']">
      <template #tip>
        <vxe-tip status="primary" title="组件兼容性处理">
          <div>当使用 <ApiLink name="column" prop="edit-render"/> 时，比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突。</div>
          <div>当然还有最简单的用法，只需给弹出面板加上 class=vxe-table--ignore-clear 即可</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
