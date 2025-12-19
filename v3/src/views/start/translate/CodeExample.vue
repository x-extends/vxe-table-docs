<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="支持对组件中特定的字段进行翻译">
          通过调用 VxeUI.setConfig({ translate }) 方法自定义翻译逻辑，当使用其他国际化插件时，例如 vue-i18n，可以使用自定义国际化
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <div>./i18n</div>
          <pre-code class="javascript">
            import VueI18n from 'vue-i18n'

            Vue.use(VueI18n)

            const i18n = createI18n({
              locale: 'zh_CN',
              messages: {
                zh_CN: {
                  // ...
                },
                en_US: {
                  // ...
                }
              }
            })

            export default i18n
          </pre-code>
          <div>main</div>
          <pre-code class="javascript">
            // ...
            import i18n from './i18n'
            import { VxeUI } from 'vxe-table'

            VxeUI.setConfig({
              // 对组件内置的提示语进行国际化翻译
              translate (key, args) {
                // 此处会对所有支持的内容进行翻译，可以判断一下再翻译
                if (key && key.indexOf('.') > -1) {
                  return i18n.t(key, args)
                }
                return key
              }
            })

            // 切换指定语言
            i18n.locale = 'en_US'
          </pre-code>
          <div>组件中使用</div>
          <pre-code language="html">
            &lt;template&gt;
              &lt;div&gt;
                &lt;vxe-grid v-bind=&quot;gridOptions&quot;&gt;&lt;/vxe-grid&gt;
              &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
            export default {
                data() {
                    const gridOptions = {
                        columns: [
                            { type: &#x27;seq&#x27;, width: 70 },
                            { field: &#x27;name&#x27;, title: &#x27;app.body.name&#x27; },
                            { field: &#x27;sex&#x27;, title: &#x27;app.body.sex&#x27; },
                            { field: &#x27;age&#x27;, title: &#x27;app.body.age&#x27; }
                        ],
                        data: [
                            { id: 10001, name: &#x27;Test1&#x27;, role: &#x27;Develop&#x27;, sex: &#x27;Man&#x27;, age: 28, address: &#x27;test abc&#x27; },
                            { id: 10002, name: &#x27;Test2&#x27;, role: &#x27;Test&#x27;, sex: &#x27;Women&#x27;, age: 22, address: &#x27;Guangzhou&#x27; },
                            { id: 10003, name: &#x27;Test3&#x27;, role: &#x27;PM&#x27;, sex: &#x27;Man&#x27;, age: 32, address: &#x27;Shanghai&#x27; },
                            { id: 10004, name: &#x27;Test4&#x27;, role: &#x27;Designer&#x27;, sex: &#x27;Women&#x27;, age: 24, address: &#x27;Shanghai&#x27; }
                        ]
                    };
                    return {
                        gridOptions
                    };
                }
            };
            &lt;/script&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
