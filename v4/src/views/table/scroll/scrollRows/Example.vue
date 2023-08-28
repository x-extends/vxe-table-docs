<template>
  <div>
    <CodeLight path="table/scroll/scrollRows/Demo1">
      <template #tip>
        <div>
          大数据不建议使用双向绑定的 <table-api-link name="data"/> 属性，建议使用 <table-api-link prop="loadData"/>/<table-api-link prop="reloadData"/> 函数<br>
          <table-api-link prop="data"/> 和 <table-api-link prop="loadData"/>/<table-api-link prop="reloadData"/> 不应该同时使用，请根据数据量决定使用哪种方式，保证一致性<br>
          <span class="red">（注：启用纵向虚拟滚启动后不支持动态行高；如果需要支持，将虚拟滚动关闭即可）</span><br>
          <span class="green">（性能优化：横向虚拟滚动由列宽决定性能，每一列的列宽越大就越流畅；纵向虚拟滚动由行高决定性能，每一行的高度越高就越流畅）</span><br>
          <span class="red">v4.5+默认关闭虚拟滚动，需手动 <table-api-link prop="enabled"/> 开启或者 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 全局开启</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
