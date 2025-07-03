<template>
  <div>
    <CodeLight path="grid/filter/setFilter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动调用筛选">
          手动操作本地筛选，调用 <ApiLink name="grid" prop="setFilter"/> 或 <ApiLink name="grid" prop="setFilterByEvent"/> 方法
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="grid" prop="setFilter"/> 方法默认是不会刷新数据的，需要传 true 才能刷新数据并触发事件
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/setFilter/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          手动调用远程筛选
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
