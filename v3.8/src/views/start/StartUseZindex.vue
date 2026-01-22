<template>
  <div>
    <h2>{{ $t('app.aside.nav.useZindex') }}</h2>
    <p class="tip">
      全局 z-index 默认起始是 999，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡。可以通过以下全局设置，也可以去<router-link class="link" :to="{name: 'StartGlobal'}">全局参数</router-link>设置<br>
      使用 <a class="link" href="https://www.npmjs.com/package/dom-zindex" target="_blank">dom-zindex</a> 来设置，更加方便快捷
    </p>
    <div class="red">由于已经停止维护，如果需要继续使用请锁定版本（xe-utils@3.8.4 vxe-table@3.8.28 vue@2.6.14）！避免依赖自动更新带来影响！</div>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoCodes: [
        `
        import domZindex from 'dom-zindex'

        // 获取页面中最大的 z-index
        domZindex.getMax()

        // 设置当前 z-index 起始值
        domZindex.setCurrent(1000)

        // 获取当前 z-index 值
        domZindex.getCurrent() // 1000

        // 计算下一个并返回计算后的 z-index 值
        domZindex.getNext() // 1001
        `
      ]
    }
  }
}
</script>
