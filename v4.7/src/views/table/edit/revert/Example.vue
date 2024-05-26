<template>
  <div>
    <CodeLight path="table/edit/revert/Demo1">
      <template #tip>
        <div>设置 <table-api-link prop="keep-source"/> 开启保持原始值状态，通过调用 <table-api-link prop="revertData"/> 还原数据</div>
        <div><span class="red">（注：开启 keep-source 将会影响性能，具体取决于数据量）</span></div>
      </template>
    </CodeLight>
  </div>
</template>
