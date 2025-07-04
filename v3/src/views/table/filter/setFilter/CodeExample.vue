<template>
  <div>
    <CodeLight path="table/filter/setFilter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作筛选">
          手动调用本地筛选
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="table" prop="setFilter"/> 方法默认是不会刷新数据的，需要传 true 才能刷新数据
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/setFilter/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          手动调用远程筛选
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
