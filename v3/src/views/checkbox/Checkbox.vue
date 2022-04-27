<template>
  <div>
    <h2>{{ $t('app.aside.nav.checkbox') }}</h2>
    <!-- <p class="tip">复选框、复选组</p> -->

    <h3>{{ $t('基础用法') }}</h3>
    <p class="tip">indeterminate: 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-checkbox v-model="value1" content="默认尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value2" size="medium" content="中等尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value3" size="small" content="小型尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value4" size="mini" content="超小尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value5" content="默认尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value6" size="medium" content="中等尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value7" size="small" content="小型尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value8" size="mini" content="超小尺寸" indeterminate></vxe-checkbox>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[0] }}</pre-code><pre-code class="javascript">{{ demoCodes[3] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('禁用状态') }}</h3>
    <p class="tip">unchecked/checked-value: 自定义选中和未选择的值</p>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-checkbox v-model="value9" content="复选1"></vxe-checkbox>
          <vxe-checkbox v-model="value10" content="复选2" disabled></vxe-checkbox>
          <vxe-checkbox v-model="value11" content="自定义值" checked-value="1" unchecked-value="0"></vxe-checkbox>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[1] }}</pre-code><pre-code class="javascript">{{ demoCodes[3] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('复选组') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-checkbox-group v-model="value12">
            <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
            <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
            <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
            <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
            <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
          </vxe-checkbox-group>
        </p>
      </div>
      <pre slot="highlight">
        <pre-code class="xml">{{ demoCodes[2] }}</pre-code><pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
      </pre>
    </demo-block>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
        | Spacebar | 按下勾选 |
      </pre-code>
    </pre>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre> -->
  </div>
</template>

<script>
export default {
  data  () {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
      value9: true,
      value10: true,
      value11: '1',
      value12: ['3'],
      demoCodes: [
        `
        <p>
          <vxe-checkbox v-model="value1" content="默认尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value2" size="medium" content="中等尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value3" size="small" content="小型尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value4" size="mini" content="超小尺寸"></vxe-checkbox>
          <vxe-checkbox v-model="value5" content="默认尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value6" size="medium" content="中等尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value7" size="small" content="小型尺寸" indeterminate></vxe-checkbox>
          <vxe-checkbox v-model="value8" size="mini" content="超小尺寸" indeterminate></vxe-checkbox>
        </p>`,
        `
        <p>
          <vxe-checkbox v-model="value9" content="复选1"></vxe-checkbox>
          <vxe-checkbox v-model="value10" content="复选2" disabled></vxe-checkbox>
          <vxe-checkbox v-model="value11" content="自定义值" checked-value="1" unchecked-value="0"></vxe-checkbox>
        </p>`,
        `
        <p>
          <vxe-checkbox-group v-model="value12">
            <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
            <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
            <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
            <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
            <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
          </vxe-checkbox-group>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: null,
              value2: null,
              value3: null,
              value4: null,
              value5: false,
              value6: false,
              value7: false,
              value8: false,
              value9: true,
              value10: true,
              value11: '1',
              value12: ['3']
            }
          }
        }
        `
      ]
    }
  }
}
</script>
