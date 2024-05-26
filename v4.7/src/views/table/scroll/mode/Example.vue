<template>
  <div>
    <CodeLight path="table/scroll/mode/Demo1">
      <template #tip>
        <div>
          滚动模式：支持 default 模式和 wheel 模式，通过参数 <table-api-link prop="scroll-y"/>.mode=wheel 开启<br>
          default 模式：浏览器默认行为，用于轻量级表格，极致流畅<br>
          wheel 模式：鼠标滚轮触发，用于左右固定列的复杂表格，更加流畅<span class="red">（实验功能）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
