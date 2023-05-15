<template>
  <div>
    <CodeLight path="table/base/data/Demo1">
      <template #tip>
        <div>支持多种数据格式：默认标准结构、深层结构、二维数组</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/data/Demo2">
      <template #tip>
        <div>深层结构，可用于带有复杂结构的场景<span class="red">（缺点深层级数据类型必须先定义，深层结构将影响性能，具体取决于数据量大小）</span></div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/data/Demo3">
      <template #tip>
        <div>二维数组结构，适用场景较少<span class="red">（缺点局限性比较大，需要手动指定 <table-api-link prop="row-config"/>.<table-api-link prop="keyField"/> 唯一主键）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
