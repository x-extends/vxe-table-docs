<template>
  <div>
    <CodeLight path="table/base/radio/Demo1">
      <template #tip>
        <vxe-tip status="primary">单选表格，用户手动选中时会触发事件 <ApiLink name="table" prop="radio-change"/>，还通过 <ApiLink name="table" prop="highlight"/> 设置高亮选中行</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          默认选中，通过指定 <ApiLink name="table" prop="checkRowKey"/> 设置默认选中的行，指定默认值需要有 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/><br>
        </vxe-tip>
        <vxe-tip status="error">默认行为只会在 reload 之后触发一次</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo4">
      <template #tip>
        <vxe-tip status="primary">严格模式，单选的默认行为是不允许取消的，可以通过设置 <ApiLink name="table" prop="radio-config"/>.<ApiLink name="table" prop="strict"/>=false 允许取消</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo5">
      <template #tip>
        <vxe-tip status="primary">两种方式混合使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo6">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="trigger"/> 指定触发方式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
