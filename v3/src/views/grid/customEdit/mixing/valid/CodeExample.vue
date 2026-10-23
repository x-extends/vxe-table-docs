<template>
  <div>
    <CodeLight path="grid/customEdit/mixing/valid/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="数据校验">
          设置为多行校验模式，通过设置 <ApiLink name="grid" prop="valid-config" />.<ApiLink name="grid" prop="mode" />='full' 设置为同时多个错误提示模式，调用 fullValidate 方法校验，用法是一样的。
        </vxe-tip>
        <vxe-tip status="error">
          使用自定义渲染需要配合 <ApiLink name="grid" prop="updateStatus" /> 方法使用，在对应单元格的值发生改变时调用更新校验状态。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/customEdit/mixing/valid/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          禁用指定行编辑
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
