<template>
  <div>
    <CodeLight path="grid/edit/status/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="grid" prop="keep-source"/> 开启保持原始值状态和 <ApiLink name="grid" prop="edit-config"/>=<ApiLink name="grid" prop="show-status"/> 和 (<ApiLink name="grid" prop="edit-render"/> | <ApiLink name="grid" prop="cell-render"/>) 开启编辑状态显示功能<br>
          对于某些需要局部保存的场景，可以在数据保存完成后调用 <ApiLink name="grid" prop="reloadRow"/> 方法加载行数据并恢复到初始状态<br>
        </vxe-tip>
        <vxe-tip status="error">
          如果使用自定义模板，开启 showStatus 后需要配合 <ApiLink name="grid" prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新状态。
          需要注意 <ApiLink name="grid" prop="reloadRow"/>仅用于编辑场景。对于新增的临时数据是无效的，如果是新增的场景直接更新数据即可。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/status/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当表格列字段之外的字段变化时，默认是不会改变单元格或行编辑状态的，需要通过 <ApiLink name="grid" prop="edit-dirty-config"/>.<ApiLink name="grid" prop="extraFields"/> | <ApiLink name="grid" prop="edit-dirty-config"/>.<ApiLink name="grid" prop="includeFields"/> | <ApiLink name="grid" prop="edit-dirty-config"/>.<ApiLink name="grid" prop="excludeFields"/> 来指定或排查字段
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
