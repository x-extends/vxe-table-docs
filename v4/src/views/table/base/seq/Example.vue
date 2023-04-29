<template>
  <div>
    <CodeLight path="table/base/seq/Demo1">
      <template #tip>
        <p class="tip">设置 <table-column-api-link prop="type"/>=<table-column-api-link prop="seq"/> 开启序号列</p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/seq/Demo2">
      <template #tip>
        <p class="tip">使用 <table-api-link prop="seq-config"/>={<table-api-link prop="startIndex"/>} 自定义起始序号</p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/seq/Demo3">
      <template #tip>
        <p class="tip">使用 <table-api-link prop="seq-config"/>={<table-api-link prop="seqMethod"/>} 自定义方法</p>
      </template>
    </CodeLight>
  </div>
</template>
