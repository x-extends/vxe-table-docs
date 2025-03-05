<template>
  <div>
    <CodeLight path="grid/checkbox/reserve/Demo1" previewPath="/resource/docsImg/table_checkbox_reserve.gif">
      <template #tip>
        <vxe-tip status="primary" title="分页保留选中状态">
          当使用数据分页与复选框多页选中时，可以通过 <ApiLink name="grid" prop="checkbox-config"/>.<ApiLink name="grid" prop="reserve"/> 启用，将不会自动清除勾选数据，如果清除，可以调用 <ApiLink name="grid" prop="clearCheckboxReserve"/> 方法手动清除已保留的选中数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
