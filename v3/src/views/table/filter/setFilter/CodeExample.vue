<template>
  <div>
    <CodeLight path="table/filter/setFilter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作筛选">
          手动操作本地筛选，调用 <ApiLink name="table" prop="setFilter"/> 或 <ApiLink name="table" prop="setFilterByEvent"/> 方法
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="table" prop="setFilter"/> 方法是不会触发任何事件的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/setFilter/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现多列的服务端筛选，通过 <ApiLink name="table" prop="filter-config"/>.<ApiLink name="table" prop="remote"/> 配合 <ApiLink name="table" prop="filter-change"/> 和 <ApiLink name="table" prop="clear-all-filter"/> 事件实现
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
