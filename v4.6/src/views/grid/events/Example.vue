<template>
  <div>
    <CodeLight path="grid/events/Demo1">
      <template #tip>
        <div>
          表格事件绑定，通过设置 <table-api-link prop="cell-click"/>、<table-api-link prop="cell-dblclick"/> ...等常用事件<br>
          <span class="red">（注：部分特殊事件需要开启对应的参数后才能有效）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="grid/events/Demo2">
      <template #tip>
        <div>插槽/渲染事件绑定</div>
      </template>
    </CodeLight>
  </div>
</template>
