<template>
  <div>
    <CodeLight path="table/base/border/Demo1">
      <template #tip>
        <div>通过设置 <table-api-link prop="border"/>=false|default 显示默认边框</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/border/Demo2">
      <template #tip>
        <div>通过设置 <table-api-link prop="border"/>=true|full 显示完整边框</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/border/Demo3">
      <template #tip>
        <div>通过设置 <table-api-link prop="border"/>=outer 显示外边框</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/border/Demo4">
      <template #tip>
        <div>通过设置 <table-api-link prop="border"/>=inner 显示内边框</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/border/Demo5">
      <template #tip>
        <div>通过设置 <table-api-link prop="border"/>=none 隐藏边框</div>
      </template>
    </CodeLight>
  </div>
</template>
