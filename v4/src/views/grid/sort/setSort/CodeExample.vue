<template>
  <div>
    <CodeLight path="grid/sort/setSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作排序">
          手动操作本地排序
        </vxe-tip>
        <vxe-tip status="error">
          需要注意调用 <ApiLink name="grid" prop="setSort"/> 方法是不会触发任何事件的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/sort/setSort/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现单列的服务端排序，通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="remote"/> 配合 <ApiLink name="grid" prop="sort-change"/> 事件实现
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/sort/setSort/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          实现多列的服务端排序，通过 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="multiple"/> 和 <ApiLink name="grid" prop="sort-config"/>.<ApiLink name="grid" prop="remote"/> 配合 <ApiLink name="grid" prop="sort-change"/> 和 <ApiLink name="grid" prop="clear-all-sort"/> 事件实现
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
