<template>
  <div>
    <CodeLight path="table/base/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过给需要排序功能的列加上 <ApiLink name="column" prop="sortable"/> 属性可以支持排序，还可以通过设置 <ApiLink name="column" prop="sort-by"/> 指定字段进行排序<br>
          如果该列的值为字符串类型，但实际是数值，可以设置 <ApiLink name="column" prop="sort-type"/>=number|string 按指定类型进行排序，默认 auto 自动转换数值<br>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo2">
      <template #tip>
        <vxe-tip status="primary">配置 <ApiLink name="column" prop="sort-by"/> 指定字段排序、或者方法返回自定义排序的值</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
