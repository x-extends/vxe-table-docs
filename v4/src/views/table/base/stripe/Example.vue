<template>
  <div>
    <CodeLight path="table/base/stripe/Demo1">
      <template #tip>
        <p class="tip">
          斑马线条纹，通过设置 <table-api-link prop="stripe"/> 参数<br>
          <span class="red">（注：斑马线条纹不支持树结构）</span>
        </p>
      </template>
    </CodeLight>

    <CodeLight path="table/base/stripe/Demo2">
      <template #tip>
        <p class="tip">使用 <table-api-link prop="row-config"/>.<table-api-link prop="isHover"/> 属性启用 hover 行高亮</p>
      </template>
    </CodeLight>
  </div>
</template>
