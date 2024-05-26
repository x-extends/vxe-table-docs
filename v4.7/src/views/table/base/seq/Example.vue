<template>
  <div>
    <CodeLight path="table/base/seq/Demo1">
      <template #tip>
        <div>设置 <table-column-api-link prop="type"/>=<table-column-api-link prop="seq"/> 开启序号列</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/seq/Demo2">
      <template #tip>
        <div>使用 <table-api-link prop="seq-config"/>={<table-api-link prop="startIndex"/>} 自定义起始序号</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/seq/Demo3">
      <template #tip>
        <div>使用 <table-api-link prop="seq-config"/>={<table-api-link prop="seqMethod"/>} 自定义方法</div>
      </template>
    </CodeLight>
  </div>
</template>
