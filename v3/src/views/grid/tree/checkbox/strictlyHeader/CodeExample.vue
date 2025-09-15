<template>
  <div>
    <CodeLight path="grid/tree/checkbox/strictlyHeader/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="父子不关联与全选">
          通过 showHeader 启用列头全选
        </vxe-tip>
        <vxe-tip status="error">
          需要注意取消父子关联后，全选状态只作用于第一级，子孙级是不会被更新状态的
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
