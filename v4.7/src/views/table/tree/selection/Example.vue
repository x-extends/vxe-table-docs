<template>
  <div>
    <CodeLight path="table/tree/selection/Demo1">
      <template #tip>
        <div>多选树表格</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/selection/Demo2">
      <template #tip>
        <div>默认选中，通过指定 <table-api-link prop="checkRowKeys"/> 设置默认选中的行</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/selection/Demo3">
      <template #tip>
        <div>通过 <table-api-link prop="checkStrictly"/> 设置父子节点不互相关联，默认不显示头部复选框，可以通过 checkbox-config={<table-api-link prop="showHeader"/>} 设置</div>
      </template>
    </CodeLight>
  </div>
</template>
