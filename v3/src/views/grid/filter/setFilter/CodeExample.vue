<template>
  <div>
    <CodeLight path="grid/filter/setFilter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作筛选">
          手动操作本地筛选，调用 <ApiLink name="grid" prop="setFilter"/> 或 <ApiLink name="grid" prop="setFilterByEvent"/> 方法
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="grid" prop="setFilter"/> 方法是不会触发任何事件的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/setFilter/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现多列的服务端筛选，通过 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="remote"/> 配合 <ApiLink name="grid" prop="filter-change"/> 和 <ApiLink name="grid" prop="clear-all-filter"/> 事件实现
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
