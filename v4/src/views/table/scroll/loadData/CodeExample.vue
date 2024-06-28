<template>
  <div>
    <CodeLight path="table/scroll/loadData/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="函数式加载">当数据量达到上时，通过数据双向绑定将会影响性能，可以通过调用 <ApiLink name="grid" prop="loadData"/> 或者 <ApiLink name="grid" prop="reloadData"/> 来加载数据</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
