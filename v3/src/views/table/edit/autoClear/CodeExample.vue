<template>
  <div>
    <CodeLight path="table/edit/autoClear/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="table" prop="edit-config"/>.<ApiLink name="table" prop="autoClear"/> 关闭默认的单元格清除激活行为<br>
        </vxe-tip>
        <vxe-tip status="error">
          如果设置为手动模式则不会自动关闭激活状态，需要手动调用 clearEdit 关闭编辑状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
