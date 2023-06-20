<template>
  <div>
    <vxe-button content="打印自定义模板" @click="printEvent"></vxe-button>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

// 打印样式
const printStyle = `
.page-1 {
  height: 1000px;
}
.page-2 {
  padding: 15px 0;
}
.fill-row {
  display: block;
  font-size: 14px;
  height: 36px;
}
.fill-span {
  display: inline-block;
  font-size: 14px;
  height: 36px;
}
.fill-title {
  display: inline-block;
  vertical-align: middle;
}
.fill-empty,
.fill-part {
  display: inline-block;
  vertical-align: bottom;
  border-bottom: 1px solid #000;
}
.number {
  width: 250px;
  margin-top: 40px;
}
.number .fill-empty {
  width: 160px;
}
.title {
  text-align: center;
  margin: 80px 0;
}
.info-a,
.info-b {
  margin: 0 auto;
  width: 400px;
  text-align: right;
}
.info-a .fill-row,
.info-b .fill-row {
  height: 48px;
}
.info-a .fill-empty,
.info-b .fill-empty {
  width: 200px;
}
.info-b {
  margin-top: 80px;
}
.list-desc {
  padding-left: 15px;
}
`
// 打印模板
const printTmpl = `
<div class="page-1">
  <div class="fill-row number">
    <span class="fill-title">编号：</span>
    <span class="fill-empty"></span>
  </div>
  <h1 class="title">劳动合同书</h1>
  <div class="info-a">
    <div class="fill-row">
      <span class="fill-title">甲方（用人单位名称）名称：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">住址：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">法定代表人（委托代理人）：</span>
      <span class="fill-empty"></span>
    </div>
  </div>
  <div class="info-b">
    <div class="fill-row">
      <span class="fill-title">乙方（劳动者）姓名：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">性别：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">住址：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">居民身份证号：</span>
      <span class="fill-empty"></span>
    </div>
    <div class="fill-row">
      <span class="fill-title">联系电话：</span>
      <span class="fill-empty"></span>
    </div>
  </div>
</div>

<div class="page-2">
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲乙双方根据《中国人民共和国劳动合同法》等法律、法规、规章的规定，在平等、自愿、协商一致的基础上，同意订立本劳动合同，共同遵守本合同所列条款。</p>
  <h2>一：合同类型的期限</h2>
  <div class="list-desc">
    <p>第一条 甲、乙双方选择以下第<span class="fill-part" style="width: 100px"></span>等形式确定本合同期限：</p>
    <div class="list-desc">
      <p>1、固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止。</p>
      <p>2、无固定期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日止</p>
      <p>3、以完成一定的工作（任务）为期限：自<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日起至工作（任务）完成时即行终止。</p>
      <p>双方约定的试用期限<span class="fill-part" style="width: 60px"></span>年<span class="fill-part" style="width: 40px"></span>月<span class="fill-part" style="width: 40px"></span>日只，期限为<span class="fill-part" style="width: 40px"></span>月</p>
    </div>
  </div>
  <h2>二：工作内容和工作地点</h2>
  <div class="list-desc">...省略</div>
  <h2>三：工作时间和休息休假</h2>
  <div class="list-desc">...省略</div>
  <div style="margin-top: 15px;">如果对您有帮助，点击右上角支持我们吧！</div>
</div>
`
export default {
  methods: {
    printEvent () {
      VXETable.print({
        sheetName: '打印自定义模板',
        style: printStyle,
        // 自定义打印HTML
        content: printTmpl
      })
    }
  }
}
</script>
