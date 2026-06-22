<template>
  <div>
    <CodeLight path="grid/base/seq/Demo1">
      <template #tip>
        <vxe-tip status="primary">设置 <ApiLink name="grid" prop="type"/>=<ApiLink name="grid" prop="seq"/> 开启序号列</vxe-tip>
        <vxe-tip status="success">
          <div>行数据对象索引说明：</div>
          <div> rowIndex：指向 <ApiLink name="grid" prop="data"/> 中的索引，对应方法 <ApiLink name="grid" prop="getRowIndex"/></div>
          <div>$rowIndex：指向 Element dom 渲染中的实际行索引，对应方法 <ApiLink name="grid" prop="getVMRowIndex"/></div>
          <div>_rowIndex：指向当前表格数据的索引，对应方法 <ApiLink name="grid" prop="getVTRowIndex"/></div>
          <div>列配置对象索引说明：</div>
          <div>columnIndex：指向 <ApiLink name="grid" prop="columns"/> 中的索引，对应方法 <ApiLink name="grid" prop="getColumnIndex"/></div>
          <div>$columnIndex：指向 Element dom 渲染中的实际列索引，对应方法 <ApiLink name="grid" prop="getVMColumnIndex"/></div>
          <div>_columnIndex：指向当前表格列的索引，对应方法 <ApiLink name="grid" prop="getVTColumnIndex"/></div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="seq-config"/>.<ApiLink name="grid" prop="startIndex"/> 自定义起始序号</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo3">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="seq-config"/>.<ApiLink name="grid" prop="seqMethod"/> 自定义方法</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
