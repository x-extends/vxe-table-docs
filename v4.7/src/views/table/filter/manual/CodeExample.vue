<template>
  <div>
    <CodeLight path="table/filter/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          筛选高级用法、动态更改筛选条件、自定义更加复杂的模板事件，通过调用 <ApiLink name="table" prop="setFilter"/> 和 <ApiLink name="table" prop="updateData"/> 方法来处理复杂场景的筛选逻辑<span class="red">（具体请自行实现，该示例仅供参考）</span><br>
          当自定义筛选时，在值发生改变时需要调用 $panel.changeOption(event, checked, option) 更新状态<br>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
