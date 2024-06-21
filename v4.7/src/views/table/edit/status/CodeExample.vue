<template>
  <div>
    <CodeLight path="table/edit/status/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="table" prop="keep-source"/> 开启保持原始值状态和 <ApiLink name="table" prop="edit-config"/>={showStatus, showUpdateStatus, showInsertStatus} 开启编辑状态显示功能，还可以通过 icon 自定义编辑状态的图标<br>
          对于某些需要局部保存的场景，可以在数据保存完成后调用 <ApiLink name="table" prop="reloadRow"/> 方法加载行数据并恢复到初始状态<br>
        </vxe-tip>
        <vxe-tip status="error">
          开启 showStatus 后如果使用自定义渲染需要配合 <ApiLink name="table" prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
