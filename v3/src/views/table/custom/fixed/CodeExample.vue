<template>
  <div>
    <CodeLight path="table/custom/fixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="允许调整列冻结">
          通过 <ApiLink name="table" prop="custom-config"/>.<ApiLink name="table" prop="allowFixed"/> 启用，默认最低允许冻结 4 列，可以通过设置 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="maxFixedSize"/>=0 来取消最大冻结列数量限制
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/fixed/Demo2">
      <template #tip>
        <vxe-tip status="primary">弹窗模式 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
