<template>
  <div>
    <CodeLight path="table/advanced/dynamic/Demo1">
      <template #tip>
        <div>使用 v-for 去循环静态列是非常糟糕的，仅用于改变属性，需确保 key 唯一性<span class="green">（动态场景需使用 <router-link :to="{name: 'GridBasic'}">vxe-grid</router-link> 进行渲染）</span></div>
        <div>列信息发生变动，正常都会自动渲染，对于特殊场景，可以通过调用 <table-api-link prop="refreshColumn"/> 方法刷新列信息</div>
      </template>
    </CodeLight>
  </div>
</template>
