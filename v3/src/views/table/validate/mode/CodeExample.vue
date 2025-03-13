<template>
  <div>
    <CodeLight path="grid/validate/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单个错误提示模式">
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/validate/mode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="table" prop="valid-config"/>.<ApiLink name="table" prop="mode"/>='full' 设置为同时多个错误提示模式，调用 fullValidate 方法校验，用法是一样的。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
