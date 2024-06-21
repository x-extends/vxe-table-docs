<template>
  <div>
    <CodeLight path="table/advanced/manualFilter/Demo1">
      <template #tip>
        <div>
          筛选高级用法、动态更改筛选条件、自定义更加复杂的模板事件，通过调用 <table-api-link prop="setFilter"/> 和 <table-api-link prop="updateData"/> 方法来处理复杂场景的筛选逻辑<span class="red">（具体请自行实现，该示例仅供参考）</span><br>
          当自定义筛选时，在值发生改变时需要调用 $panel.changeOption(event, checked, option) 更新状态<br>
          高级用法：<router-link class="link" :to="{name: 'RendererFilter'}">查看渲染器的使用</router-link><br>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
