<template>
  <div>
    <CodeLight path="table/base/format/Demo1">
      <template #tip>
        <div>
          局部自定义 <table-column-api-link prop="formatter"/> 格式化内容<br>
          <span class="red">（注：<table-column-api-link prop="formatter"/> 只会在指定的 <table-column-api-link prop="field"/> 值发生改变时触发格式化，如果想要多字段关联变化请使用<router-link class="nav-link" :to="{name: 'TableTemplate'}">自定义模板</router-link>）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/format/Demo2" :extraImports="['table/base/format/demo2.format']">
      <template #tip>
        <div>
          全局格式化内容，使用 <router-link class="link" :to="{name: 'FormatsAPI'}">formats</router-link> 添加格式函数，单元格会在渲染的时候自动调用<br>
          <span class="green">（用于实现业务中统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
