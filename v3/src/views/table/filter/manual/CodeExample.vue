<template>
  <div>
    <CodeLight path="table/filter/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          筛选高级用法、动态更改筛选条件、自定义更加复杂的模板事件，通过调用 <ApiLink name="table" prop="setFilter"/> 和 <ApiLink name="table" prop="updateData"/> 方法来处理复杂场景的筛选逻辑<br>
          当自定义筛选时，在值发生改变时可以调用 <ApiLink name="table" prop="updateFilterOptionStatus"/>(option, checked) 更新选项状态<br>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/manual/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现回车确认筛选
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/manual/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          手动操作筛选面板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
