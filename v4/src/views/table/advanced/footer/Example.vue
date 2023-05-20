<template>
  <div>
    <CodeLight path="table/advanced/footer/Demo1">
      <template #tip>
        <div>
          通过表尾来实现合计功能，设置 <table-api-link prop="show-footer"/> show-footer 和 <table-api-link prop="footer-method"/> 设置表尾数据，结果返回一个二维数组<br>
          需要注意的是表尾的调用并非实时的，而是在 data 初始化时才会触发执行；如果要达到实时调用请手动调用 <table-api-link prop="updateFooter"/> 方法<br>
          <span class="red">（注：<table-api-link prop="footer-method"/> 表尾的数据都是自行生成的，该示例仅供参考）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/footer/Demo2">
      <template #tip>
        <div>表尾数据配合 <table-api-link prop="footer-cell-class-name"/> 自定义不同列颜色</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/footer/Demo3">
      <template #tip>
        <div>表尾数据和固定列</div>
      </template>
    </CodeLight>
  </div>
</template>
