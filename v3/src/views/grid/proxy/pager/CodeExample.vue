<template>
  <div>
    <CodeLight path="grid/proxy/pager/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="配置分页查询接口">
          分页查询跟列表查询的配置是一模一样的，区别就是多加一个分页配置项 <ApiLink name="grid" prop="page-config"/>，以及接口响应结果带分页信息
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/proxy/pager/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          手动操作分页
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
