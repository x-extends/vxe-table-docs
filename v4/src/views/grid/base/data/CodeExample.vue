<template>
  <div>
    <CodeLight path="grid/base/data/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="标准结构">使用对象数组形式</vxe-tip>
        <vxe-tip status="error">
          需要注意字段名不允许出现 "." 关键字，该关键字用于层深层结构的数据
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/data/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="深层结构">可用于带有复杂结构的场景</vxe-tip>
        <vxe-tip status="error">深层级数据类型必须先定义字段，层级越深越影响性能，具体取决于数据量大小</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/data/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="二维数组结构"></vxe-tip>
        <vxe-tip status="error">不建议被使用，局限性很大，必须设置唯一主键，通过设置 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/> 使用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
