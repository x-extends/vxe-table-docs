<template>
  <div>
    <CodeLight path="table/edit/status/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="table" prop="keep-source"/> 开启保持原始值状态和 <ApiLink name="table" prop="edit-config"/>=<ApiLink name="table" prop="show-status"/> 和 (<ApiLink name="column" prop="edit-render"/> | <ApiLink name="column" prop="cell-render"/>) 开启编辑状态显示功能<br>
          对于某些需要局部保存的场景，可以在数据保存完成后调用 <ApiLink name="table" prop="reloadRow"/> 方法加载行数据并恢复到初始状态<br>
        </vxe-tip>
        <vxe-tip status="error">
          如果使用自定义模板，开启 showStatus 后需要配合 <ApiLink name="table" prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新状态。
          需要注意 <ApiLink name="table" prop="reloadRow"/>仅用于编辑场景。对于新增的临时数据是无效的，如果是新增的场景直接更新数据即可。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/status/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当表格列字段之外的字段变化时，默认是不会改变单元格或行编辑状态的，需要通过 <ApiLink name="table" prop="edit-dirty-config"/>.<ApiLink name="table" prop="extraFields"/> | <ApiLink name="table" prop="edit-dirty-config"/>.<ApiLink name="table" prop="includeFields"/> | <ApiLink name="table" prop="edit-dirty-config"/>.<ApiLink name="table" prop="excludeFields"/> 来指定或排查字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
