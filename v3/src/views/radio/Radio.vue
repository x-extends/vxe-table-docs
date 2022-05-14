<template>
  <div>
    <h2>{{ $t('app.aside.nav.radio') }}</h2>
    <!-- <p class="tip">单选框、单选组、单选按钮</p> -->

    <h3>{{ $t('基础用法') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-radio name="n1" v-model="value1" label="1" content="默认尺寸"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="2" content="中等尺寸" size="medium"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="3" content="小型尺寸" size="small"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="4" content="超小尺寸" size="mini"></vxe-radio>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[0] }}</pre-code><pre-code class="javascript">{{ demoCodes[5] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('禁用状态') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-radio name="n2" v-model="value2" label="1" content="单选1"></vxe-radio>
          <vxe-radio name="n2" v-model="value2" label="2" content="禁用2" disabled></vxe-radio>
          <vxe-radio name="n2" v-model="value2" label="3" content="单选3"></vxe-radio>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[1] }}</pre-code><pre-code class="javascript">{{ demoCodes[5] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('单选组') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-radio-group v-model="value3">
            <vxe-radio label="1" content="HTML"></vxe-radio>
            <vxe-radio label="2" content="CSS"></vxe-radio>
            <vxe-radio label="3" content="Javascript"></vxe-radio>
            <vxe-radio label="4" content="SASS"></vxe-radio>
            <vxe-radio label="5" content="LESS"></vxe-radio>
          </vxe-radio-group>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[2] }}</pre-code><pre-code class="javascript">{{ demoCodes[5] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('支持取消') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-radio-group v-model="value8" :strict="false">
            <vxe-radio label="1" content="支持取消1"></vxe-radio>
            <vxe-radio label="2" content="支持取消2"></vxe-radio>
            <vxe-radio label="3" content="支持取消3"></vxe-radio>
          </vxe-radio-group>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[3] }}</pre-code><pre-code class="javascript">{{ demoCodes[5] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('单选按钮') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-radio-group v-model="value4">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value5" size="medium">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value6" size="small" :strict="false">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value7" size="mini" :strict="false">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[4] }}</pre-code><pre-code class="javascript">{{ demoCodes[5] }}</pre-code></pre>
    </demo-block>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
        | Arrow Up ↑ | 如果在分组内则移动到上一个选项 |
        | Arrow Left ← | 如果在分组内则移动到上一个选项 |
        | Arrow Down ↓ | 如果在分组内则移动到下一个选项 |
        | Arrow Right → | 如果在分组内则移动到下一个选项 |
        | Spacebar | 按下勾选 |
      </pre-code>
    </pre>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[5] }}</pre-code>
    </pre> -->
  </div>
</template>

<script>
export default {
  data  () {
    return {
      value1: null,
      value2: '2',
      value3: '3',
      value4: null,
      value5: null,
      value6: '1',
      value7: '1',
      value8: '',
      demoCodes: [
        `
        <p>
          <vxe-radio name="n1" v-model="value1" label="1" content="默认尺寸"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="2" content="中等尺寸" size="medium"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="3" content="小型尺寸" size="small"></vxe-radio>
          <vxe-radio name="n1" v-model="value1" label="4" content="超小尺寸" size="mini"></vxe-radio>
        </p>
         `,
        `
        <p>
          <vxe-radio name="n2" v-model="value2" label="1" content="单选1"></vxe-radio>
          <vxe-radio name="n2" v-model="value2" label="2" content="禁用2" disabled></vxe-radio>
          <vxe-radio name="n2" v-model="value2" label="3" content="单选3"></vxe-radio>
        </p>
         `,
        `
        <p>
          <vxe-radio-group v-model="value3">
            <vxe-radio label="1" content="HTML"></vxe-radio>
            <vxe-radio label="2" content="CSS"></vxe-radio>
            <vxe-radio label="3" content="Javascript"></vxe-radio>
            <vxe-radio label="4" content="SASS"></vxe-radio>
            <vxe-radio label="5" content="LESS"></vxe-radio>
          </vxe-radio-group>
        </p>
         `,
        `
        <p>
          <vxe-radio-group v-model="value8" :strict="false">
            <vxe-radio label="1" content="支持取消1"></vxe-radio>
            <vxe-radio label="2" content="支持取消2"></vxe-radio>
            <vxe-radio label="3" content="支持取消3"></vxe-radio>
          </vxe-radio-group>
        </p>
         `,
        `
        <p>
          <vxe-radio-group v-model="value4">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value5" size="medium">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value6" size="small" :strict="false">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
          <vxe-radio-group v-model="value7" size="mini" :strict="false">
            <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
            <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
            <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
          </vxe-radio-group>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: null,
              value2: '2',
              value3: '3',
              value4: null,
              value5: null,
              value6: '1',
              value7: '1',
              value8: ''
            }
          }
        }
        `
      ]
    }
  }
}
</script>
