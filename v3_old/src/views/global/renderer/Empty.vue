<template>
  <div>
    <p class="tip">
      空内容渲染 <table-api-link prop="empty-render"/>，查看 <a class="link" href="https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer" target="_blank">示例的源码</a><span class="red">（具体请自行实现，该示例仅供参考）</span><br>
      配置参数：<br>
      renderEmpty (h, renderOpts, params: { $table }) 空值时显示的内容<br>
    </p>

    <vxe-table
      border
      resizable
      height="400"
      :empty-render="{name: 'NotData'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="javascript">{{ demoCodes[0] }}</pre-code>
      <pre-code class="xml">{{ demoCodes[1] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[2] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        // 创建一个空内容渲染
        VXETable.renderer.add('NotData', {
          // 空内容模板
          renderEmpty (h, renderOpts) {
            return <span>
              <img src="https://vxeui.com/resource/img/546.gif"/>
              <p>亲，没有更多数据了！</p>
            </span>
          }
        })
        `,
        `
        <vxe-table
          border
          resizable
          height="400"
          :empty-render="{name: 'NotData'}"
          :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          }
        }
        `
      ]
    }
  }
}
</script>
