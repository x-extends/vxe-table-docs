<template>
  <div>
    <CodeLight path="grid/sort/setSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作排序">
          手动操作本地排序
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="table" prop="setSort"/> 方法默认是不会刷新数据的，需要传 true 才能刷新数据并触发事件
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/sort/setSort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          手动操作远程排序
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
