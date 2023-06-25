<template>
  <div>
    <CodeLight path="table/base/filter/Demo1">
      <template #tip>
        <div>
          通过设置 <table-column-api-link prop="filters"/> 属性和 <table-column-api-link prop="filter-method"/> 方法可以开启列筛选功能，通过 <table-column-api-link prop="filter-multiple"/>=false 设置为单选<br>
          如果是服务端筛选，只需加上 <table-api-link prop="filter-config"/>={<table-api-link prop="remote"/>: true} 和 <table-api-link prop="filter-change"/> 事件就可以实现<br>
          如果是动态数据可以通过 <table-api-link prop="setFilter"/> 方法更新<br>
          $panel 对象（<router-link  class="link" :to="{name: 'TableManualFilter'}">查看高级用法</router-link>）:<br>
          <span class="orange">changeOption(event, checked, option) 更新选项的状态</span><br>
          <span class="orange">confirmFilter() 确认筛选</span><br>
          <span class="orange">resetFilter() 清除筛选条件</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/filter/Demo2">
      <template #tip>
        <div>默认的筛选，通过 <table-column-api-link prop="checked"/> 属性设置默认的选中的选项</div>
      </template>
    </CodeLight>
  </div>
</template>
