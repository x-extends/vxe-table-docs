<template>
  <div>
    <CodeLight path="table/template/checkbox/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          复选框模板，使用插槽 <ApiLink name="column" prop="checkbox"/> 来自定义模板，例如换成自定义的图标并使用自带功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/template/checkbox/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          放弃自带功能，自定义实现
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
