<template>
  <div>
    <CodeLight path="grid/proxy/filter/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="集成服务端筛选">
          服务端筛选使用数据代理，通过设置参数 <ApiLink name="grid" prop="filter-config"/>.<ApiLink name="grid" prop="remote"/> 和 <ApiLink name="grid" prop="proxy-config"/>.<ApiLink name="grid" prop="filter"/> 就可以实现自动调用 query 查询
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
