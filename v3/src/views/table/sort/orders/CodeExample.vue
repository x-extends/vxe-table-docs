<template>
  <div>
    <CodeLight path="table/sort/orders/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义触发排序的轮询顺序">通过配置 <ApiLink name="table" prop="sort-config"/>.<ApiLink name="table" prop="orders"/>=['asc', 'desc', null] 自定义轮询顺序</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/sort/orders/Demo2">
      <template #tip>
        <vxe-tip status="primary">设置只能升序和倒序</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
