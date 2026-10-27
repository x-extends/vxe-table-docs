<template>
  <div>
    <CodeLight path="grid/edit/rowImmediately/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单击编辑">
          <div>通过自定义插槽来实现行的合计功能，数据发生变化时实时响应的</div>
        </vxe-tip>
        <vxe-tip status="error">
          实时更新是非常糟糕的做法，运算量越大卡顿就越久，建议通过定义合计字段，通过数据去修改对应的字段才是最稳的
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
