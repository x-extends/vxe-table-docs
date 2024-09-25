<template>
  <div>
    <CodeLight path="table/edit/footerImmediately/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单击编辑">
          <div>通过表尾来实现合计功能，数据发生变化时实时统计，对于某些场景下如果需要频繁计算的可以手动调用 <ApiLink name="table" prop="updateFooter"/> 函数</div>
          <div>如果是内置的渲染器，可以设置 <ApiLink name="column" prop="immediate"/> 属性和相关事件去实时更新</div>
        </vxe-tip>
        <vxe-tip status="error">
          实时更新是非常糟糕的做法，运算量越大卡顿就越久
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
