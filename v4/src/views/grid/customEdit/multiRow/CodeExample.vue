<template>
  <div>
    <CodeLight path="grid/customEdit/multiRow/Demo1" preview-path="/resource/docsImg/table_edit_custom_multi_row.gif">
      <template #tip>
        <vxe-tip status="primary" title="点击编辑">
          放弃内置的行编辑功能，通过自定义实现多行编辑功能
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>放弃内置的编辑功能后，将不能使用内置的 CRUD 相关的所有方法及数据校验等功能</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/customEdit/multiRow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过条件控制是否允许编辑
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>放弃内置的编辑功能后，将不能使用内置的 CRUD 相关的所有方法及数据校验等功能</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
