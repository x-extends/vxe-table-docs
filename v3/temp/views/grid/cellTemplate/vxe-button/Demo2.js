import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop' },
                { id: 10002, name: 'Test2', role: 'Test' },
                { id: 10003, name: 'Test3', role: 'PM' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        viewEvent() {
            VxeUI.modal.message({
                content: '点击了查看',
                status: 'success'
            });
        },
        delEvent() {
            VxeUI.modal.confirm({
                title: '操作提示',
                content: '请您确认是否删除？'
            });
        }
    },
    created() {
        this.gridOptions.columns = [
            { type: 'seq', width: 70 },
            { field: 'name', title: 'Name', minWidth: 200 },
            {
                title: '按钮',
                width: 200,
                slots: {
                    default: () => {
                        return <span>
              <vxe-button mode="text" onClick={this.viewEvent}>查看</vxe-button>
              <vxe-button mode="text" status="error" onClick={this.delEvent}>删除</vxe-button>
            </span>;
                    }
                }
            }
        ];
    }
});
