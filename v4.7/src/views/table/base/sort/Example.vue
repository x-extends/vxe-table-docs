<template>
  <div>
    <CodeLight path="table/base/sort/Demo1">
      <template #tip>
        <div>
          通过给需要排序功能的列加上 <table-column-api-link prop="sortable"/> 属性可以支持排序，还可以通过设置 <table-column-api-link prop="sort-by"/> 指定字段进行排序<br>
          如果该列的值为字符串类型，但实际是数值，可以设置 <table-column-api-link prop="sort-type"/>=number|string 按指定类型进行排序，默认 auto 自动转换数值<br>
          如果是自定义排序，可以通过 <table-api-link prop="sort-config"/>.<table-api-link prop="sortMethod"/> 实现自定义排序<br>
          如果是服务端排序，只需加上 <table-api-link prop="sort-config"/>.<table-api-link prop="remote"/> 和 <table-api-link prop="sort-change"/> 事件就可以实现<br>
          还可以通过调用 <table-api-link prop="sort"/> 方法实现手动排序
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo2">
      <template #tip>
        <div>配置 <table-column-api-link prop="sort-by"/> 指定字段排序、或者方法返回自定义排序的值</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo3">
      <template #tip>
        <div>配置 <table-api-link prop="sort-config"/>.<table-api-link prop="sortMethod"/> 自定义排序</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo4">
      <template #tip>
        <div>配置 <table-api-link prop="multiple"/> 启用多字段排序</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo5">
      <template #tip>
        <div>点击表头排序，通过 <table-api-link prop="defaultSort"/> 默认排序、<table-api-link prop="orders"/> 自定义轮转顺序、通过配置 <table-api-link prop="trigger"/> 设置触发源</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/sort/Demo6">
      <template #tip>
        <div>配置 <table-api-link prop="sort-config"/>.<table-api-link prop="remote"/> 和 <table-api-link prop="sort-change"/> 事件，实现服务端排序</div>
      </template>
    </CodeLight>
  </div>
</template>
