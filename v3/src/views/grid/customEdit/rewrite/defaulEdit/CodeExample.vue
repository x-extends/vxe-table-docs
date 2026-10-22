<template>
  <div>
    <CodeLight path="grid/customEdit/rewrite/defaulEdit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认编辑">
          放弃内置的行编辑功能，通过自定义实现默认直接编辑功能
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>放弃内置的编辑功能后，将不能使用内置的 CRUD 相关的所有方法及数据校验等功能</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
