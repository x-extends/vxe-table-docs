<template>
  <div>
    <CodeLight path="table/filter/header/Demo1">
      <template #tip>
        <vxe-tip status="primary">自定义实现列头筛选功能，在条件设置完成后通过用 <ApiLink name="table" prop="updateData"/> 方法手动刷新筛选条件</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/header/Demo2">
      <template #tip>
        <vxe-tip status="primary">更多自定义类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/filter/header/Demo3">
      <template #tip>
        <vxe-tip status="primary">按回车键后筛选</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
