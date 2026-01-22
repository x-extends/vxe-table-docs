<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">全局引入，创建 scss 文件（<a class="link" href="https://github.com/x-extends/vxe-table/blob/v3.8/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <div class="red">由于已经停止维护，如果需要继续使用请锁定版本（xe-utils@3.8.4 vxe-table@3.8.28 vue@2.6.14）！避免依赖自动更新带来影响！</div>
    <pre>
      <pre-code class="scss">
        @use 'vxe-table/styles/variable.scss' as vxe_table_variable with (
          $vxe-ui-font-color: #999999,
          $vxe-ui-font-primary-color: #ff0000
        );
        @use 'vxe-table/styles/all.scss' as vxe_table_all;
      </pre-code>
    </pre>
  </div>
</template>
