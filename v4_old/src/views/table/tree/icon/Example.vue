<template>
  <div>
    <CodeLight path="table/tree/icon/Demo1">
      <template #tip>
        <div>自定义展开节点图标，通过设置 <table-api-link prop="tree-config"/>={<table-api-link prop="iconOpen"/>, <table-api-link prop="iconClose"/>} 局部替换默认的图标</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/icon/Demo2">
      <template #tip>
        <div>更多自定义</div>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/icon/Demo3">
      <template #tip>
        <div>还可以通过 <table-api-link prop="tree-config"/>={<table-api-link prop="toggleMethod"/>} 方法实现展开与关闭的细节处理，返回值用来决定是否允许继续执行</div>
      </template>
    </CodeLight>
  </div>
</template>
