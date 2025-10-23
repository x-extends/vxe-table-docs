<template>
  <div>
    <CodeLight path="table/scroll/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="冻结列+复杂渲染">
          冻结列是影响卡顿的最大因素，建议避免同时开启左右两边冻结列
        </vxe-tip>
        <vxe-tip status="error">
          <div>如果列较多的情况下 table 的性能很差的，应该使用最高性能的 grid</div>
          <div>渲染的流畅度取决于渲染量，当渲染量太多复杂时就会卡，具体由单元格渲染。计算逻辑等因素影响</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
