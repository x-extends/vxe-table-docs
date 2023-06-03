<template>
  <div>
    <CodeLight path="table/base/headerHighlight/Demo1">
      <template #tip>
        <div>高亮当前列，当前列是唯一的，通过设置 <table-api-link prop="column-config"/>.<table-api-link prop="isCurrent"/> 参数</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/headerHighlight/Demo2">
      <template #tip>
        <div>列和行选中高亮，通过设置 <table-api-link prop="column-config"/>.isCurrent、<table-api-link prop="row-config"/>.isCurrent 参数</div>
      </template>
    </CodeLight>
  </div>
</template>
