<template>
  <div>
    <CodeLight path="table/rowDrag/tree/lazy/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="懒加载">
          配合懒加载实现任意层级拖拽排序
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>当启用 <ApiLink name="table" prop="row-drag-config" />.<ApiLink name="table" prop="isToChildDrag" /> 允许拖拽到子节点时，懒加载的行默认需要先展开过后才允许拖拽</div>
          <div>如果需要启用允许拖拽到未被懒加载的的节点，可以通过来 <ApiLink name="table" prop="row-drag-config" />.<ApiLink name="table" prop="isAutoLazyLoadToChild" /> 或 <ApiLink name="table" prop="row-drag-config" />.<ApiLink name="table" prop="isAutoExpandToChild" /> 启用</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/rowDrag/tree/lazy/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过  <ApiLink name="table" prop="row-drag-config" />.<ApiLink name="table" prop="isAutoExpandToChild" /> 设置在拖拽到子级时自动展开父级,如果是懒加载行则自动触发加载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
