<template>
  <div>
    <CodeLight path="table/scroll/loadData/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="函数式加载">当数据量达到上万时，通过数据双向绑定将会影响性能，可以通过调用 <ApiLink name="grid" prop="loadData"/> 或者 <ApiLink name="grid" prop="reloadData"/> 来加载数据</vxe-tip>
        <vxe-tip status="success">
          <ApiLink name="grid" prop="loadData"/> 或者 <ApiLink name="grid" prop="reloadData"/> 都是用来加载数据的，区别就是 <ApiLink name="grid" prop="reloadData"/> 会重置状态，比如筛选、排序、滚动条等。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
